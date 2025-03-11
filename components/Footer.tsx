import React from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="py-12 px-4 border-t border-gray-100 dark:border-gray-700">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4 blue-gradient-text">Frozair</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Android developer and Twitch streamer specializing in Kotlin Multiplatform development.
              </p>
              <SocialLinks />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                      href="/"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue dark:hover:text-blue-light transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                      href="/projects"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue dark:hover:text-blue-light transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                      href="/about"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue dark:hover:text-blue-light transition-colors"
                  >
                    About Me
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                      href="/privacy"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue dark:hover:text-blue-light transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                      href="/terms"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue dark:hover:text-blue-light transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-600 dark:text-gray-300">
            <p>Copyright © {currentYear}. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
