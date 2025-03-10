import React from 'react';
import { Instagram, Twitch, Youtube, Twitter } from 'lucide-react';

interface SocialLinksProps {
	className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
	return (
		<div className={`flex items-center space-x-4 ${className}`}>
			<a
				href="https://twitch.tv/"
				target="_blank"
				rel="noopener noreferrer"
				className="social-icon animate-fade-in opacity-0"
				style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
				aria-label="Twitch"
			>
				<Twitch size={20} />
			</a>
			<a
				href="https://twitter.com/"
				target="_blank"
				rel="noopener noreferrer"
				className="social-icon animate-fade-in opacity-0"
				style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
				aria-label="X (Twitter)"
			>
				<Twitter size={20} />
			</a>
			<a
				href="https://instagram.com/"
				target="_blank"
				rel="noopener noreferrer"
				className="social-icon animate-fade-in opacity-0"
				style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}
				aria-label="Instagram"
			>
				<Instagram size={20} />
			</a>
			<a
				href="https://youtube.com/"
				target="_blank"
				rel="noopener noreferrer"
				className="social-icon animate-fade-in opacity-0"
				style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
				aria-label="YouTube"
			>
				<Youtube size={20} />
			</a>
		</div>
	);
};

export default SocialLinks;
