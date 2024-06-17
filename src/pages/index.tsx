import Tags from "@/components/Tags";
import EmailIcon from "@/icons/EmailIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import PhoneIcon from "@/icons/PhoneIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../assets/yo.jpg";
import reactlogo from "../assets/react.png";
import aws from "../assets/aws.png";
import azure from "../assets/azure.png";
import cloudflare from "../assets/cloudflare.png";
import cloudinary from "../assets/cloudinary.png";
import css from "../assets/css.webp";
import discord from "../assets/discord.png";
import express from "../assets/express.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import keras from "../assets/keras.png";
import mysql from "../assets/mysql.svg";
import nextjs from "../assets/next-js.svg";
import node from "../assets/node.png";
import numpy from "../assets/numpy.png";
import office from "../assets/office.png";
import openai from "../assets/openai.png";
import pandas from "../assets/pandas.png";
import postgre from "../assets/postgres.png";
import python from "../assets/python.png";
import slack from "../assets/slack.png";
import tailwind from "../assets/tailwind.png";
import tensorflow from "../assets/tensorflow.png";
import ts from "../assets/ts.png";
import twilio from "../assets/twilio.svg";
import vscode from "../assets/vscode.png";
import typeorm from "../assets/typeorm.png";
import jest from "../assets/jest.png";
import prisma from "../assets/prisma.png";
import supabase from "../assets/supabase.png";
import vite from "../assets/vite.png";
import redux from "../assets/redux.png";
import zustand from "../assets/zustand.png";
import reactquery from "../assets/reactquery.png";
import antd from "../assets/antd.svg";
import materialui from "../assets/materialui.png";
import zapcard from "../assets/zapcard.png";
import c3 from "../assets/c3.png";
import planodi from "../assets/planodi.jpg";
import dots from "../assets/dots.jpeg";
import bosch from "../assets/bosch.jpeg";
import bmw from "../assets/bmw.jpeg";
import atrato from "../assets/atrato.jpeg";
import tec from "../assets/tecmty.svg";
import esslingen from "../assets/esslingen.jpeg";
import Section from "@/components/Section";
import { useState } from "react";
import DownloadIcon from "@/icons/DownloadIcon";
import GithubIcon from "@/icons/GithubIcon";
import LinkIcon from "@/icons/LinkIcon";

export default function Home() {
	const [showCopiedEmail, setShowCopiedEmail] = useState(false);
	const [showCopiedNumber, setShowCopiedNumber] = useState(false);

	function calculateEmploymentDuration(
		startDate: string,
		endDate = new Date()
	) {
		// Convertir las fechas en objetos Date si no lo son
		const start = new Date(startDate);
		const end = new Date(endDate);

		// Calcular la diferencia en años y meses
		let years = end.getFullYear() - start.getFullYear();
		let months = end.getMonth() - start.getMonth();

		// Ajustar los años y meses si los meses son negativos
		if (months < 0) {
			years--;
			months += 12;
		}

		// Construir el resultado en el formato requerido
		let result = [];
		if (years > 0) {
			result.push(`${years} yr${years > 1 ? "s" : ""}`);
		}
		if (months > 0) {
			result.push(`${months} mo${months > 1 ? "s" : ""}`);
		}

		return result.length > 0 ? result.join(" ") : "0 mos";
	}

	return (
		<>
			<Head>
				<title>Esteban Pérez</title>
				<meta name='description' content='CV Esteban Pérez' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='wrapper text-slate-800'>
				<div className='bg-cover relative'>
					<p className='bg-gradient-to-r from-[#39B946] to-[#4ED7A9] text-slate-800 opacity-90 font-bold inline mx-2 px-5 py-1 absolute bottom-4 left-36 rounded-e-full'>
						OPEN TO WORK
					</p>
					<Image
						src={profilePic}
						alt='Profile picture'
						width={150}
						height={150}
						className='rounded-full border-4 border-white absolute -bottom-20 left-6'
					/>
				</div>
				<div className='flex gap-4 ml-8 mt-24 flex-wrap md:ml-52 md:mt-6 items-center justify-start'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://twitter.com/estebanpm__'
					>
						<TwitterIcon className='pb-1' size={31} />
					</a>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.linkedin.com/in/esteban-perez-martinez/'
					>
						<LinkedinIcon size={31} />
					</a>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/EstebanPerez99'
					>
						<GithubIcon size={30} />
					</a>
					<a
						href='https://www.estebanpm.com/cv.pdf'
						download
						className='bg-slate-800 text-white px-3 rounded-md flex items-center justify-center py-1'
					>
						<DownloadIcon className='mr-2' />
						Download CV
					</a>
				</div>
				<div className='mt-6 md:mt-12 px-8 mb-10'>
					<p className='text-3xl'>Esteban Pérez Martínez</p>
					<p className='text-xl'>Software engineer</p>
					<p className='text-lg text-slate-500'>Guadalajara, Mexico</p>
					<p
						className='flex mt-3 cursor-pointer'
						onClick={() => {
							setShowCopiedEmail(true);
							navigator.clipboard.writeText("estebanperma@gmail.com");
							setTimeout(() => {
								setShowCopiedEmail(false);
							}, 2000);
						}}
					>
						<EmailIcon className='mr-3' size={20} />
						estebanperma@gmail.com{" "}
						{showCopiedEmail && (
							<span className='fade-in-out bg-slate-100 text-slate-800 text-sm px-2 rounded-full ml-4 mt-1'>
								Copied to clipboard!
							</span>
						)}
					</p>
					<p
						className='flex mt-3 cursor-pointer'
						onClick={() => {
							setShowCopiedNumber(true);
							navigator.clipboard.writeText("+523319764162");
							setTimeout(() => {
								setShowCopiedNumber(false);
							}, 2000);
						}}
					>
						<PhoneIcon className='mr-3' size={20} />
						+52 3319764162{" "}
						{showCopiedNumber && (
							<span className='fade-in-out bg-slate-100 text-slate-800 text-sm px-2 rounded-full ml-4 mt-1'>
								Copied to clipboard!
							</span>
						)}
					</p>
					<p className='mt-6 text-xl border-b-2 border-slate-100'>
						Online Projects
					</p>
					<div className='flex mt-2 gap-5 flex-wrap'>
						<a
							href='https://www.planodi.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div className='flex shadow border border-gray-50 px-2 py-2 rounded-xl gap-4 justify-center items-start cursor-pointer h-32 w-full md:w-96 overflow-hidden'>
								<div className='flex flex-col'>
									<div className='relative h-20 w-20 overflow-hidden rounded-md'>
										<Image
											alt='logo'
											src={planodi}
											fill
											style={{
												objectFit: "cover",
											}}
										/>
									</div>
									<div className='text-xs mt-2 flex items-center justify-center m-0'>
										Status: Live{" "}
										<div className='w-2 h-2 bg-green-300 rounded-full ml-1' />
									</div>
								</div>
								<div className='flex flex-col'>
									<p className='mb-2 font-semibold flex'>
										Planodi.com <LinkIcon size={14} className='mt-1 ml-3' />
									</p>
									<p className='text-sm'>
										The &quot;Tripadvisor&quot; for event planning. Discover top
										suppliers and venues for your events.
									</p>
								</div>
							</div>
						</a>
						<a
							href='https://zapcard.xyz/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div className='flex shadow border border-gray-50 px-2 py-2 rounded-xl gap-4 justify-center items-start cursor-pointer h-32 w-full md:w-96 overflow-hidden'>
								<div className='flex flex-col'>
									<div className='relative h-20 w-20 overflow-hidden rounded-md'>
										<Image
											alt='logo'
											src={zapcard}
											fill
											style={{
												objectFit: "cover",
											}}
										/>
									</div>
									<div className='text-xs mt-2 flex items-center justify-center m-0'>
										Status: Live{" "}
										<div className='w-2 h-2 bg-green-300 rounded-full ml-1' />
									</div>
								</div>
								<div className='flex flex-col'>
									<p className='mb-2 font-semibold flex'>
										Zapcard.xyz <LinkIcon size={14} className='mt-1 ml-3' />
									</p>
									<p className='text-sm'>
										Online party game in the style of hot potato. Guess the word
										before the bomb explodes!
									</p>
								</div>
							</div>
						</a>
					</div>
					<p className='mt-6 text-xl border-b-2 border-slate-100'>Skills</p>
					<p className='text-lg font-semibold mt-4'>Tech Stack</p>
					<p className='text-slate-400 mt-4'>Advanced</p>
					<div className='flex mt-2 gap-3 flex-wrap'>
						<Tags name='React' image={reactlogo} />
						<Tags name='Next js' image={nextjs} />
						<Tags name='Vite' image={vite} />
						<Tags name='Node js' image={node} />
						<Tags name='Typescript' image={ts} />
						<Tags name='Tailwind' image={tailwind} />
						<Tags name='Jest' image={jest} />
						<Tags name='React Query' image={reactquery} />
						<Tags name='Zustand' image={zustand} />
						<Tags name='Prisma ORM' image={prisma} />
						<Tags name='PostreSQL' image={postgre} />
						<Tags name='MySQL' image={mysql} />
						<Tags name='Javascript' image={js} />
						<Tags name='HTML' image={html} />
						<Tags name='CSS' image={css} />
						<Tags name='Material UI' image={materialui} />
						<Tags name='Ant Design' image={antd} />
						<Tags name='Express' image={express} />
					</div>
					<p className='text-slate-400 mt-4'>Intermediate</p>
					<div className='flex mt-2 gap-3 flex-wrap'>
						<Tags name='Redux' image={redux} />
						<Tags name='TypeORM' image={typeorm} />
						<Tags name='Keras' image={keras} />
						<Tags name='Pandas' image={pandas} />
						<Tags name='Numpy' image={numpy} />
						<Tags name='Tensorflow' image={tensorflow} />
						<Tags name='Python' image={python} />
					</div>
					<p className='text-lg font-semibold mt-10'>Developer tools</p>
					<div className='flex mt-2 gap-3 flex-wrap'>
						<Tags name='AWS' image={aws} />
						<Tags name='Azure' image={azure} />
						<Tags name='Git' image={git} />
						<Tags name='Supabase' image={supabase} />
						<Tags name='VSCode' image={vscode} />
						<Tags name='Cloudflare' image={cloudflare} />
						<Tags name='Office' image={office} />
					</div>
					<p className='text-lg font-semibold mt-10'>API&apos;s integrations</p>
					<div className='flex mt-2 gap-3 flex-wrap'>
						<Tags name='Open AI' image={openai} />
						<Tags name='Twilio' image={twilio} />
						<Tags name='Discord' image={discord} />
						<Tags name='Slack' image={slack} />
						<Tags name='Cloudinary' image={cloudinary} />
					</div>
					<p className='text-lg font-semibold mt-10 mb-4'>Languages</p>
					<table>
						<tbody>
							<tr>
								<td>Spanish</td>
								<td className='pl-6'>Native Speaker</td>
							</tr>
							<tr>
								<td>English</td>
								<td className='pl-6'>C1</td>
							</tr>
							<tr>
								<td>German</td>
								<td className='pl-6'>B1</td>
							</tr>
						</tbody>
					</table>
					<p className='mt-12 mb-8 text-xl border-b-2 border-slate-100'>
						Work Experience
					</p>
					<div className='flex flex-col gap-6'>
						<Section
							position='Software Engineer, Demo and Innovations Engineering'
							institution='C3 AI'
							period={`Jul 2023 - Present · ${calculateEmploymentDuration(
								"2023-07-01"
							)}`}
							place='Guadalajara, Jalisco, Mexico (On-site)'
							image={c3}
							skills='Communication, Teamwork'
						/>
						<Section
							position='Full-stack Software Engineer'
							institution='Dots (YCS21)'
							period='Aug 2022 - Jun 2023 · 10 mos'
							place='New York, US (Remote)'
							image={dots}
							skills='Web 3, Product Development, Ownership'
						/>
						<Section
							position='Founding Software Engineer'
							institution='Atrato (YCW21)'
							period='Jan 2020 - Feb 2021 · 1 yr 2 mos'
							place='Guadalajara, Jalisco, Mexico (Remote)'
							image={atrato}
							skills='Product Development, Ownership, Frontend Development, Backend Development'
						/>
					</div>
					<p className='mt-12 mb-8 text-xl border-b-2 border-slate-100'>
						Internships and Thesis
					</p>
					<div className='flex flex-col gap-6'>
						<Section
							position='Thesis Climatic condition monitoring in electric systems with AI'
							institution='Bosch Engineering GmbH'
							period='Mar 2022 - Jul 2022 · 5 mos'
							place='Reutlingen, Baden-Württemberg, Germany (On-site)'
							image={bosch}
							skills='AI, Research and Development'
						/>
						<Section
							position='(Internship) Development and type testing'
							institution='BMW Group'
							period='Sep 2021 - Feb 2022 · 6 mos'
							place='Munich, Bavaria, Germany (On-site)'
							image={bmw}
							skills='Product Management, Product Lifecycle'
						/>
					</div>
					<p className='mt-16 mb-8 text-xl border-b-2 border-slate-100'>
						Education
					</p>
					<div className='flex flex-col gap-6'>
						<Section
							position='Hochschule Esslingen - University of Applied Sciences'
							institution='Double Degree Program, Mechatronics, Robotics, and Automation Engineering'
							period='2021 - 2022'
							place='Germany'
							image={esslingen}
						/>
						<Section
							position='Tecnológico de Monterrey'
							institution='Mechatronics Engineering'
							period='2017 - 2022'
							place='Mexico'
							image={tec}
						/>
					</div>
				</div>
			</main>
		</>
	);
}
