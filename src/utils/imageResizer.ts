interface ResizeOptions {
  targetSize: number;
  sizeUnit: 'kb' | 'mb';
}

export async function resizeImage(file: File, options: ResizeOptions): Promise<Blob> {
  const { targetSize, sizeUnit } = options;
  const targetBytes = sizeUnit === 'mb' ? targetSize * 1024 * 1024 : targetSize * 1024;
  
  // 创建图片对象
  const createImage = (url: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  };

  // 将图片绘制到canvas并转换为blob
  const drawImageToCanvas = (img: HTMLImageElement, quality: number = 0.7): Promise<Blob> => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('无法获取canvas上下文');

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) throw new Error('转换失败');
          resolve(blob);
        },
        'image/jpeg',
        quality
      );
    });
  };

  // 二分查找最佳质量
  const findOptimalQuality = async (img: HTMLImageElement): Promise<Blob> => {
    let left = 0.1;
    let right = 1.0;
    let bestBlob: Blob | null = null;
    let bestDiff = Infinity;

    while (right - left > 0.01) {
      const mid = (left + right) / 2;
      const blob = await drawImageToCanvas(img, mid);
      const diff = Math.abs(blob.size - targetBytes);

      if (diff < bestDiff) {
        bestDiff = diff;
        bestBlob = blob;
      }

      if (blob.size > targetBytes) {
        right = mid;
      } else {
        left = mid;
      }
    }

    return bestBlob || await drawImageToCanvas(img, left);
  };

  const url = URL.createObjectURL(file);
  try {
    const img = await createImage(url);
    return await findOptimalQuality(img);
  } finally {
    URL.revokeObjectURL(url);
  }
}