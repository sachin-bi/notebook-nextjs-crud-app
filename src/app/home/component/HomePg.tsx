import React from 'react';
import { Cloud, BookMarked, Search } from 'lucide-react';
import Footer from '@/components/Footer';

export default function HomePg() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      <div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center text-center">
        {/* --- Existing Hero Section --- */}
        <h1 className="text-5xl font-extrabold leading-tight mb-4 text-gray-900">
          Your Ideas, Beautifully Organized.
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          A simple, clean space to jot down thoughts, keep track of tasks, and
          never forget a brilliant idea.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75">
          Start Your First Note
        </button>

        {/* --- Existing Feature Highlights Section --- */}
        <section className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="text-indigo-500 text-4xl mb-4">📝</span>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Effortless Note-Taking
            </h3>
            <p className="text-gray-600 text-center">
              Quickly capture thoughts with a seamless writing experience.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="text-indigo-500 text-4xl mb-4">🏷️</span>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Organize with Ease
            </h3>
            <p className="text-gray-600 text-center">
              Categorize, tag, and find your notes instantly.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="text-indigo-500 text-4xl mb-4">✏️</span>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Simple Editing
            </h3>
            <p className="text-gray-600 text-center">
              Update and refine your notes anytime, anywhere.
            </p>
          </div>
        </section>

        {/* ================================================================== */}
        {/* ✨ NEW: Additional Features Section ✨                            */}
        {/* ================================================================== */}
        <section className="mt-24 w-full max-w-4xl text-left">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need to Be Productive
          </h2>
          <div className="space-y-10">
            {/* Feature 1 */}
            <div className="flex items-start gap-6">
              <div className="shrink-0 bg-indigo-100 text-indigo-600 p-3 rounded-full">
                <Cloud size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Cloud Sync
                </h3>
                <p className="text-gray-600 mt-1">
                  Keep your notes synced across all devices. Start on your phone,
                  finish on your desktop.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start gap-6">
              <div className="shrink-0 bg-indigo-100 text-indigo-600 p-3 rounded-full">
                <BookMarked size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Markdown Support
                </h3>
                <p className="text-gray-600 mt-1">
                  Format your notes with headings, lists, bold text, and more
                  using simple Markdown syntax.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start gap-6">
              <div className="shrink-0 bg-indigo-100 text-indigo-600 p-3 rounded-full">
                <Search size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Powerful Search
                </h3>
                <p className="text-gray-600 mt-1">
                  Find exactly what you're looking for in seconds with our fast
                  and intuitive search.
                </p>
              </div>
            </div>
          </div>
        </section>


        <Footer />
      </div>
    </div>
  );
}