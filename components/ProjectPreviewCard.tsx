import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
	href: string;
	imgSrc: string | StaticImageData;
	title: string;
	description: string;
}

const ProjectPreviewCard: React.FC<Props> = ({
	href,
	imgSrc,
	title,
	description
}) => {
	return (
		<div
			className="rounded-2xl overflow-hidden transition-transform duration-150 hover:scale-105"
			style={{
				background: 'var(--surface)',
				border: '1px solid var(--border-emphasis)',
				boxShadow: '0 22px 56px rgba(20, 18, 14, 0.08)'
			}}
		>
			<Link href={href} className="h-48 block relative">
				<Image src={imgSrc} alt="Example App" fill className="object-cover" />
			</Link>
			<div className="p-6">
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="mb-4" style={{ color: 'var(--text-muted)' }}>
					{description}
				</p>
				<Link href={href} className="text-blue font-medium hover:text-blue-dark">
					Learn more →
				</Link>
			</div>
		</div>
	);
}

export default ProjectPreviewCard;
