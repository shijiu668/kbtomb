'use client';

import Link from 'next/link';

export default function About() {
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
          About Our Service
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-400">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            We aim to provide a simple yet powerful solution for image size optimization. Our mission is to help users efficiently manage their image files while maintaining the highest possible quality, making digital content optimization accessible to everyone.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Precise size control with KB/MB targeting</li>
            <li>Advanced compression algorithms</li>
            <li>Browser-based processing for privacy</li>
            <li>Support for multiple image formats</li>
            <li>User-friendly interface</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-400">Why Choose Us</h2>
          <p className="text-gray-300 leading-relaxed">
            Our service stands out through its combination of precision, efficiency, and user privacy. We've developed sophisticated algorithms that ensure optimal compression while maintaining image quality, all while processing your files locally in your browser.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">Commitment to Quality</h3>
          <p className="text-gray-300 leading-relaxed">
            We continuously work to improve our service, incorporating user feedback and implementing the latest technological advancements in image processing. Our commitment to quality ensures that you always get the best possible results for your image optimization needs.
          </p>
        </section>

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