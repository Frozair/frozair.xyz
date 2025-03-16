import React from "react";
import Link from "next/link";

export default function TermsPage() {
	return (
		<main className="flex-1">
			<section className="pt-32 pb-24 px-1 md:px-4 relative">
				<div className="container px-2 md:px-8 mx-auto">
					<div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 md:p-10 animate-fade-in opacity-0">
						<h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
							Terms and Conditions
						</h1>

						<div className="prose">
							<p>Last updated: 03/16/2025</p>

							<h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
							<p>By downloading, installing, or using our mobile applications ("Apps"), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you do not have permission to access our Apps.</p>

							<h2 className="text-2xl font-semibold mt-8 mb-4">2. License to Use</h2>
							<p>We grant you a limited, non-exclusive, non-transferable license to download and use our Apps for your personal, non-commercial purposes.</p>

							<h2>3. Restrictions</h2>
							<p>You agree not to:</p>

							<ul>
								<li>Modify, reverse engineer, or decompile our Apps.</li>
								<li>Use our Apps for any illegal purpose.</li>
								<li>Attempt to gain unauthorized access to our systems.</li>
								<li>Use our Apps in any way that could damage or impair service.</li>
							</ul>

							<h2>4. Intellectual Property</h2>
							<p>All intellectual property rights in our Apps and their content belong to us or our licensors. You may not use, reproduce, or distribute any part of our Apps without our permission.</p>

							<h2>5. Privacy</h2>
							<p>Your privacy is important to us. Please review our <Link href="/apps/beby/privacy">Privacy Policy</Link> to understand how we collect, use, and protect your data.</p>

							<h2>6. Disclaimer of Warranties</h2>
							<p>Our Apps are provided "as is" without any warranties, express or implied. We do not guarantee that our Apps will be uninterrupted, secure, or error-free.</p>

							<h2>7. Limitation of Liability</h2>
							<p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Apps.</p>

							<h2>8. Changes to Terms</h2>
							<p>We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the top of these terms.</p>

							<h2>9. Contact Information</h2>
							<p>For any questions about these Terms and Conditions, please contact us at <a href="mailto:legal@frozair.xyz">legal@frozair.xyz</a>.</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
