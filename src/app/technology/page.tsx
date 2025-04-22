'use client';

import Link from 'next/link';

export default function Technology() {
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

      <article className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white space-y-8">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-400">
          Image Compression Technology
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-400">Advanced Binary Search Algorithm</h2>
          <p className="text-gray-300 leading-relaxed">
            Our image compression technology utilizes a sophisticated binary search algorithm to find the optimal balance between file size and image quality. This approach allows us to precisely target specific file sizes while maintaining the highest possible visual fidelity.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">Quality-First Approach</h3>
          <p className="text-gray-300 leading-relaxed">
            Unlike traditional compression methods that use fixed quality settings, our algorithm dynamically adjusts compression parameters based on the target file size. This ensures that each image receives a customized compression strategy that preserves its unique visual characteristics.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-400">Format-Specific Optimization</h2>
          <p className="text-gray-300 leading-relaxed">
            We employ format-specific optimization techniques for different image types:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>JPEG: Advanced DCT coefficient optimization</li>
            <li>PNG: Intelligent color palette reduction</li>
            <li>WebP: Modern compression with superior quality-to-size ratio</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">Client-Side Processing</h3>
          <p className="text-gray-300 leading-relaxed">
            All image processing occurs directly in your browser, ensuring maximum privacy and security. This approach also enables instant feedback and eliminates the need for server-side processing, resulting in faster compression times and immediate results.
          </p>
        </section>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-6">Privacy & Security</h2>
          <div className="space-y-6 text-gray-300">
            <p className="leading-relaxed">
              All processing happens locally in your browser. Your images never leave your device, ensuring complete privacy and security.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link 
            href="/" 
            className="bg-gradient-to-r from-teal-500 to-purple-500 px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition"
          >
            Try the Image Resizer
          </Link>
        </div>
      </article>
    </main>
  );
}