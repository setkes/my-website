"use client";

import { useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('alessandro.monti1995@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy email');
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between p-4 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black transition-all duration-500">


      <main className="flex flex-col items-center justify-center flex-grow text-center w-full">
        <div className="h-50 w-50 mb-10">
          {/* Sole immagine */}
          <Image
            src="/sun.png"
            alt="Sun"
            width={200}
            height={200}
            className=" transition-colors sun-rotate"
          />
        </div>

        <h1 className="text-4xl font-bold">Alessandro Monti</h1>

        <p className="mt-2 text-lg text-gray-700">
          Fullstack Developer | Passionate about technology and innovation
        </p>

        <div className="mt-6 text-gray-600 max-w-2xl space-y-4">
          <p>
            Welcome to my website! I am a fullstack developer with a passion
            for creating innovative web applications. I specialize in both
            frontend and backend development, ensuring a seamless user
            experience.
          </p>
          <p>
            Explore my projects and get to know more about my work. Feel free
            to reach out if you have any questions or collaboration ideas!
          </p>
          {/* Navigation */}
          <nav className="w-full flex justify-center mt-8">
            <Link
              href="/projects"
              className="text-gray-600 hover:text-black transition-colors"
            >
              My Projects →
            </Link>
          </nav>
        </div>

      </main>

      <footer className="text-sm text-gray-500 mt-16 text-center">
        <p>&copy; {new Date().getFullYear()} Alessandro Monti. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <button
            onClick={() => setShowModal(true)}
            className="text-gray-600 hover:text-black transition-colors cursor-pointer"
          >
            Contacts
          </button>
          <a
            href="/pdf/CV-Alessandro-Monti.pdf"
            download="CV-Alessandro-Monti.pdf"
            className="text-gray-600 hover:text-black transition-colors cursor-pointer"
          >
            Curriculum Vitae
          </a>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4 text-center">Get in touch</h3>
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-3">Feel free to reach out via email:</p>
              <button
                onClick={copyEmail}
                className="text-gray-900 font-mono text-sm bg-gray-50 px-4 py-2 rounded border hover:bg-gray-100 transition-colors mx-auto cursor-pointer"
              >
                alessandro.monti1995@gmail.com
              </button>
              {copied && (
                <div className="text-green-600 text-xs mt-2">
                  ✓ Copied
                </div>
              )}
              
              <div className="mt-6 pt-4 ">
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/setkes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/monti-alessandro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 hover:text-black transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
