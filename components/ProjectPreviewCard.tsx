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
		<div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-150 hover:-translate-y-2">
			<Link href={href} className="h-48 bg-gradient-to-r from-blue-light to-blue-dark flex items-center justify-center relative">
				<Image src={imgSrc} alt="Example App" fill className="object-cover" />
			</Link>
			<div className="p-6">
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-gray-600 mb-4">
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
