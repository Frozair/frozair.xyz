import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import React from "react";

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <section className="pt-32 pb-24 px-1 md:px-4 relative">
        <div className="container px-2 md:px-8 mx-auto">
          <AnimateOnScroll animationClass='animate-fade-in'>
            <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 md:p-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
                Privacy Policy
              </h1>

              <div className="prose">
                <p>Last updated: 03/16/2025</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
                <p>Welcome to Beby, the baby gender predictor app (henceforth referred to as the "App"). This privacy policy explains how we collect, use, and protect your information when you use our App and website.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
                <p>The App is designed to predict a child's gender based on traditional methods using the Chinese lunar calendar and the Mayan calendar. In order to perform this calculation, we collect the following information:</p>

                <ul>
                  <li>Mother's age</li>
                  <li>Month and year of conception</li>
                </ul>

                <p>This data is used solely to provide the prediction and is not stored or shared with any third parties.</p>

                <h2>How We Use Your Information</h2>
                <p>The information you provide is used exclusively for calculating and displaying the gender prediction. We do not retain or use this information for any other purpose.</p>

                <h2>Cookies and Tracking Technologies</h2>
                <p>Our website may use cookies and similar tracking technologies to enhance your user experience and analyze website traffic. These cookies do not contain personal information and are used solely for analytical purposes.</p>

                <h2>Third-Party Services</h2>
                <p>We do not share your information with third-party services for marketing or other purposes. Any third-party services used on our website are employed only to help us better understand usage patterns.</p>

                <h2>Data Security</h2>
                <p>We take appropriate security measures to protect your data. Since the information provided is not stored after the prediction is made, your privacy remains safeguarded.</p>

                <h2>Children's Privacy</h2>
                <p>The App is not intended for use by children under the age of 13, and we do not knowingly collect personal information from children under 13.</p>

                <h2>Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page along with an updated effective date.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:support@frozair.xyz">support@frozair.xyz</a>.</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
