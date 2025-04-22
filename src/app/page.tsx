'use client';

import { useState, useCallback } from 'react';
import { resizeImage } from '@/utils/imageResizer';
import Link from 'next/link';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [targetSize, setTargetSize] = useState<number>(100);
  const [sizeUnit, setSizeUnit] = useState<'kb' | 'mb'>('kb');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string>('');
  const [resultSize, setResultSize] = useState<number>(0);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type.startsWith('image/')) {
      setFile(droppedFile);
      setPreview(URL.createObjectURL(droppedFile));
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleResize = async () => {
    if (!file) return;
    setIsProcessing(true);
    try {
      const resizedBlob = await resizeImage(file, { targetSize, sizeUnit });
      const resultUrl = URL.createObjectURL(resizedBlob);
      setResult(resultUrl);
      setResultSize(resizedBlob.size);
    } catch (error) {
      console.error('Error Occurred While Resizing Image.', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900">
      <nav className="flex justify-between items-center mb-12">
        <Link href="/" className="text-2xl font-bold text-white hover:text-teal-400 transition">
          kb to mb Image Resizer
        </Link>
        <div className="space-x-6">
          <Link href="/technology" className="text-white hover:text-teal-400 transition">Technology</Link>
          <Link href="/privacy" className="text-white hover:text-teal-400 transition">Privacy</Link>
          <Link href="/about" className="text-white hover:text-teal-400 transition">About</Link>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-6">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-400 leading-relaxed">
            kb to mb Image Resizer
          </h1>
          <p className="text-gray-300 text-lg">
            Upload Image, Resize to Target Size, Maintain Optimal Quality.
          </p>
        </header>

        <div
          className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="cursor-pointer block p-4 hover:bg-white/5 rounded-lg transition"
          >
            {preview ? (
              <>
                <img
                  src={preview}
                  alt="预览"
                  className="max-h-64 mx-auto rounded-lg shadow-lg"
                />
                <p className="text-gray-400 text-sm mt-2">
                  Original Size {file && formatFileSize(file.size)}
                </p>
              </>
            ) : (
              <div className="text-gray-400">
                <p>Drag and drop the image here or click to upload</p>
                <p className="text-sm mt-2">Supports common formats</p>
              </div>
            )}
          </label>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <input
            type="number"
            value={targetSize}
            onChange={(e) => setTargetSize(Number(e.target.value))}
            className="bg-white/10 border border-gray-600 rounded px-4 py-2 w-32 text-white"
            min="1"
          />
          <select
            value={sizeUnit}
            onChange={(e) => setSizeUnit(e.target.value as 'kb' | 'mb')}
            className="bg-white/10 border border-gray-600 rounded px-4 py-2 text-white"
          >
            <option value="kb">KB</option>
            <option value="mb">MB</option>
          </select>
          <button
            onClick={handleResize}
            disabled={!file || isProcessing}
            className="bg-gradient-to-r from-teal-500 to-purple-500 px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {isProcessing ? 'Processing...' : 'Resize'}
          </button>
        </div>

        {result && (
          <div className="border border-gray-700 rounded-lg p-4 bg-black/20">
            <h2 className="text-xl font-semibold text-white mb-4">Processing Result</h2>
            <img src={result} alt="Result" className="max-h-64 mx-auto rounded-lg" />
            <p className="text-gray-400 text-sm mt-2">
              Resulting Size: {formatFileSize(resultSize)}
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href={result}
                download="resized-image.jpg"
                className="text-teal-400 hover:text-teal-300 underline"
              >
                Download Image
              </a>
            </div>
          </div>
        )}

        <section className="mt-16 space-y-12 text-gray-300">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors">
            <h2 className="text-3xl font-bold text-white mb-8">Compressor</h2>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Advanced Compression Algorithm</h3>
                <p className="text-gray-300 leading-relaxed">Our image compressor utilizes a sophisticated binary search algorithm to find the optimal compression quality, ensuring the smallest possible file size while maintaining visual fidelity.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Smart Size Control</h3>
                <p className="text-gray-300 leading-relaxed">Precisely control your output file size in KB or MB. The compressor automatically adjusts quality settings to match your target size as closely as possible.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Format Support</h3>
                <p className="text-gray-300 leading-relaxed">Compatible with all major image formats including JPEG, PNG, and WebP. The compressor automatically optimizes the compression strategy based on the input format.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors">
            <h2 className="text-3xl font-bold text-white mb-8">How to Use</h2>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Upload Your Image</h3>
                <p className="text-gray-300 leading-relaxed">Simply drag and drop your image into the upload area, or click to select a file from your device. The preview will appear immediately.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Set Target Size</h3>
                <p className="text-gray-300 leading-relaxed">Enter your desired file size and choose the unit (KB or MB). The compressor will work to achieve this target size while maintaining the best possible quality.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Download Result</h3>
                <p className="text-gray-300 leading-relaxed">Once compression is complete, preview the result and click the download button to save your compressed image. The final size will be displayed for your reference.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">What is the maximum file size allowed?</h3>
                <p className="text-gray-300 leading-relaxed">There is no strict limit on input file size, but we recommend files under 20MB for optimal performance. Larger files may take longer to process.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Will compression affect image quality?</h3>
                <p className="text-gray-300 leading-relaxed">Our algorithm strives to maintain the best possible quality while meeting your target size. The impact on visual quality depends on how aggressive the compression needs to be to reach your target size.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Is my data secure?</h3>
                <p className="text-gray-300 leading-relaxed">All processing happens directly in your browser. Your images are never uploaded to any server, ensuring complete privacy and security of your data.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
