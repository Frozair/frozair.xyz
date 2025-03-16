import React from 'react';
import { Instagram, Twitch, Youtube, Twitter } from 'lucide-react';
import SocialMediaButton from "@/components/SocialMediaButton";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

interface SocialLinksProps {
	className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
	return (
		<AnimateOnScroll animationClass="animate-fade-in">
			<div className={`flex flex-wrap justify-center items-center gap-4 ${className}`}>
				<SocialMediaButton
					href="https://twitch.tv/"
					aria-label="Twitch"
				>
					<Twitch size={20} />
				</SocialMediaButton>
				<SocialMediaButton
					href="https://twitter.com"
					aria-label="X (Twitter)"
				>
					<Twitter size={20} />
				</SocialMediaButton>
				<SocialMediaButton
					href="https://instagram.com/"
					aria-label="Instagram"
				>
					<Instagram size={20} />
				</SocialMediaButton>
				<SocialMediaButton
					href="https://youtube.com/"
					aria-label="Youtube"
				>
					<Youtube size={20} />
				</SocialMediaButton>
			</div>
		</AnimateOnScroll>
	);
};

export default SocialLinks;
