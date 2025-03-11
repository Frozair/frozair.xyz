import React from 'react';
import { Instagram, Twitch, Youtube, Twitter } from 'lucide-react';
import SocialMediaButton from "@/components/SocialMediaButton";

interface SocialLinksProps {
	className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
	return (
		<div className={`flex items-center space-x-4 ${className}`}>
			<span
				className="animate-fade-in opacity-0"
				style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
			>
				<SocialMediaButton
					href="https://twitch.tv/"
					aria-label="Twitch"
				>
					<Twitch size={20} />
				</SocialMediaButton>
			</span>
			<span
				className="animate-fade-in opacity-0"
				style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
			>
				<SocialMediaButton
					href="https://twitter.com"
					aria-label="X (Twitter)"
				>
					<Twitter size={20} />
				</SocialMediaButton>
			</span>
			<span
				className="animate-fade-in opacity-0"
				style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}
			>
				<SocialMediaButton
					href="https://instagram.com/"
					aria-label="Instagram"
				>
					<Instagram size={20} />
				</SocialMediaButton>
			</span>
			<span
				className="animate-fade-in opacity-0"
				style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
			>
				<SocialMediaButton
					href="https://youtube.com/"
					aria-label="Youtube"
				>
					<Youtube size={20} />
				</SocialMediaButton>
			</span>
		</div>
	);
};

export default SocialLinks;
