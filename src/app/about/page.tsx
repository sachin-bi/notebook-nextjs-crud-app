import React from 'react';
import { Target, Zap, User, Github, Linkedin, X } from 'lucide-react';
import Footer from '@/components/Footer';


export default function page() {
  return (
    // This container matches the styling of your HomePg's content
    <div className='bg-gray-50'>

      <div className="container mx-auto max-w-4xl px-6 py-16 bg-gray-50 font-sans text-gray-800 antialiased">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
          About NoteBook
        </h1>

        {/* ================================================================== */}
        {/* --- Section 1: Our Mission ---                                     */}
        {/* ================================================================== */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe that great ideas deserve a simple, beautiful, and
            distraction-free home. NoteBook was built to be just that—a quiet
            space for your thoughts, tasks, and creative sparks, accessible
            whenever inspiration strikes.
          </p>

          {/* Sub-features for this section */}
          <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="shrink-0 bg-indigo-100 text-indigo-600 p-3 rounded-full">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Simplicity First
                </h3>
                <p className="text-gray-600 mt-1">
                  No clutter, no complicated features. Just a pure note-taking
                  experience designed to keep you in the flow.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="shrink-0 bg-indigo-100 text-indigo-600 p-3 rounded-full">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Built for Focus
                </h3>
                <p className="text-gray-600 mt-1">
                  Our clean, minimal interface helps you focus on what
                  matters most: your ideas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* --- Section 2: About the Creator ---                             */}
        {/* ================================================================== */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            About the Creator
          </h2>

          {/* Creator Card */}
          <div className="grid md:grid-cols-3 gap-8 items-center bg-white p-8 rounded-lg shadow-lg">
            {/* Image Placeholder */}
            <div className="md:col-span-1 flex justify-center">
              <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center">
                {/* This is a placeholder icon */}
                <User size={80} className="text-gray-400" />
              </div>
            </div>

            {/* Text Content */}
            <div className="md:col-span-2 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Hi, I'm Sachin!
              </h3>
              <p className="text-gray-600 mb-4">
                I'm a developer passionate about building clean, efficient, and
                user-friendly applications. NoteBook started as a personal project
                to create the note-taking app I always wanted—simple, fast,
                and beautiful.
              </p>
              <p className="text-gray-600 mb-6">
                Thanks for checking it out. Connect with me below!
              </p>

              {/* Social Links (Re-used from your Footer code) */}
              <div className="flex justify-center md:justify-start gap-6 mt-4">
                <a
                  href="https://github.com/sachin-bi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <Github size={28} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sachinandanp5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-700 transition-colors"
                >
                  <Linkedin size={28} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://x.com/sachinandanp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-700 transition-colors"
                >
                  <X size={28} />
                  <span className="sr-only">X</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      <Footer/>
      </div>
    </div>
  );
}