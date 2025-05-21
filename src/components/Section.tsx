import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Sparkles, ExternalLink, MapPin, Calendar } from "lucide-react";

function Section({
	position,
	institution,
	period,
	place,
	image,
	skills = [],
	description,
	link,
}: {
	position: string;
	institution: string;
	period: string;
	place: string;
	image: StaticImageData;
	skills?: string[];
	description?: string;
	link?: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="relative p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
		>
			{/* Background decorative element */}
			<motion.div
				className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-tr from-blue-100/30 to-purple-100/30 z-0"
				initial={{ scale: 0.8, opacity: 0.3 }}
				whileInView={{ scale: 1, opacity: 0.6 }}
				transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
			/>

			<div className="relative z-10 flex justify-start items-start gap-5">
				{/* Animated logo */}
				<motion.div
					whileHover={{ scale: 1.1, rotate: 5 }}
					className="relative overflow-hidden rounded-lg bg-white p-1.5 shadow-sm"
				>
					<Image
						alt={`${institution} logo`}
						src={image}
						width={50}
						height={50}
						className="object-contain"
					/>
					<motion.div
						className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 to-purple-400/10"
						initial={{ opacity: 0 }}
						whileHover={{ opacity: 1 }}
					/>
				</motion.div>

				{/* Content with nice animations */}
				<div className="flex-1">
					<div className="flex items-center gap-2">
						<motion.p
							className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							{position}
						</motion.p>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 5 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						className="flex items-center gap-2"
					>
						<p className="text-gray-800 font-medium">{institution}</p>
						{link && (
							<>
								<span className="text-gray-300">•</span>
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-blue-500"
								>
									<motion.div
										whileHover={{ scale: 1.1, rotate: 5 }}
									>
										<ExternalLink size={14} />
									</motion.div>
								</a>
							</>
						)}
					</motion.div>

					<div className="mt-2 space-y-1">
						<motion.div
							initial={{ opacity: 0, y: 5 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.3 }}
							className="flex items-center gap-2 text-gray-500"
						>
							<Calendar size={14} className="text-blue-400" />
							<p>{period}</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 5 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.4 }}
							className="flex items-center gap-2 text-gray-500"
						>
							<MapPin size={14} className="text-purple-400" />
							<p>{place}</p>
						</motion.div>
					</div>

					{/* Skills with animations */}
					{skills && (
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="mt-3 pt-3 border-t border-gray-100"
						>
							<div className="flex flex-wrap gap-2">
								{(Array.isArray(skills) ? skills : []).map((skill: string, index: number) => (
									<motion.span
										key={index}
										initial={{ scale: 0.8, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{ duration: 0.3, delay: 0.1 * index }}
										className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-100"
									>
										{skill}
									</motion.span>
								))}
							</div>
						</motion.div>
					)}

					{/* Description with animations */}
					{description && (
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="text-gray-500 italic mt-3"
						>
							{description}
						</motion.p>
					)}
				</div>
			</div>

			{/* Hover effect overlay */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				initial={{ opacity: 0 }}
				whileHover={{ opacity: 1 }}
			/>
		</motion.div>
	);
}

export default Section;
