import React, { useEffect, useRef } from 'react';

interface Props {
	channel?: string;
	video?: string;
	collection?: string;
}

const TwitchEmbed: React.FC<Props> = ({ channel, video, collection }) => {
	const embedTarget = useRef<HTMLDivElement>(null);
	const playerInstance = useRef<any>(null); // To store the Twitch.Embed instance

	useEffect(() => {
		const TWITCH_EMBED_SCRIPT_ID = 'twitch-embed-script';

		// Check if script already exists
		const existingScript = document.getElementById(TWITCH_EMBED_SCRIPT_ID) as HTMLScriptElement | null;

		const createEmbed = () => {
			if (embedTarget.current) {
				// Clear previous embed content if any
				embedTarget.current.innerHTML = '';

				// @ts-ignore
				playerInstance.current = new window.Twitch.Embed(embedTarget.current, {
					width: '100%',
					height: '480',
					channel,
					video,
					collection,
					layout: 'video',
					parent: [window.location.hostname],
					theme: 'dark',
				});
			}
		};

		if (existingScript) {
			//@ts-ignore
			if (window.Twitch && window.Twitch.Embed) {
				createEmbed();
			} else {
				existingScript.addEventListener('load', createEmbed);
			}
		} else {
			const script = document.createElement('script');
			script.id = TWITCH_EMBED_SCRIPT_ID;
			script.src = 'https://embed.twitch.tv/embed/v1.js';
			script.async = true;
			script.onload = createEmbed;
			document.body.appendChild(script);
		}

		// Cleanup function to destroy the player
		return () => {
			if (embedTarget.current) {
				embedTarget.current.innerHTML = '';
			}
			playerInstance.current = null;
		};
	}, [channel, video, collection]);

	return <div ref={embedTarget}></div>;
};

export default TwitchEmbed;
