'use client';

import Link from 'next/link';

export default function Privacy() {
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
          Privacy Policy
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-400">Data Processing</h2>
          <p className="text-gray-300 leading-relaxed">
            Our image compression service processes all data directly in your browser. Your images never leave your device or get uploaded to any external servers. This client-side processing approach ensures maximum privacy and security for your sensitive data.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">Analytics Data Collection</h3>
          <p className="text-gray-300 leading-relaxed">
            We use Google Analytics to collect anonymous usage data that helps us improve our service. This includes information about how you interact with our website, but never includes your personal information or image data. You can opt out of analytics tracking through your browser settings.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-400">Data Security</h2>
          <p className="text-gray-300 leading-relaxed">
            We implement several security measures to protect your data:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Client-side processing ensures your images never leave your device</li>
            <li>No data storage - all processed images are temporary</li>
            <li>Secure HTTPS connection for all web traffic</li>
            <li>Regular security audits and updates</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">Your Rights</h3>
          <p className="text-gray-300 leading-relaxed">
            As we don&apos;t collect or store any personal data or images, you maintain complete control over your information. The service is designed to be privacy-first, ensuring your right to data privacy is protected at all times.
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