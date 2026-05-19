import React from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer
        className="py-12 px-4"
        style={{ borderTop: '1px solid var(--border-emphasis)', background: 'var(--background-secondary)' }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold mb-4 blue-gradient-text">Frozair</h3>
              <p className="text-center md:text-left mb-6" style={{ color: 'var(--text-muted)' }}>
                Android developer and Twitch streamer specializing in Kotlin Multiplatform development.
              </p>
              <SocialLinks />
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-center md:text-left">
                <li>
                  <Link
                      href="/"
                      className="transition-colors hover:text-blue"
                      style={{ color: 'var(--text-muted)' }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                      href="/apps"
                      className="transition-colors hover:text-blue"
                      style={{ color: 'var(--text-muted)' }}
                  >
                    Apps
                  </Link>
                </li>
                <li>
                  <Link
                      href="/about"
                      className="transition-colors hover:text-blue"
                      style={{ color: 'var(--text-muted)' }}
                  >
                    About Me
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-center md:text-left">
                <li>
                  <Link
                      href="/apps/blockrush/privacy"
                      className="transition-colors hover:text-blue"
                      style={{ color: 'var(--text-muted)' }}
                  >
                    Block Rush Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                      href="/apps/blockrush/support"
                      className="transition-colors hover:text-blue"
                      style={{ color: 'var(--text-muted)' }}
                  >
                    Block Rush Support
                  </Link>
                </li>
                <li>
                  <Link
                      href="/apps/beby/privacy"
                      className="transition-colors hover:text-blue"
                      style={{ color: 'var(--text-muted)' }}
                  >
                    Beby Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                      href="/apps/terms-and-conditions"
                      className="transition-colors hover:text-blue"
                      style={{ color: 'var(--text-muted)' }}
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="mt-10 pt-6 text-center text-sm"
            style={{ borderTop: '1px solid var(--border-emphasis)', color: 'var(--text-muted)' }}
          >
            <p>Copyright © {currentYear}. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
