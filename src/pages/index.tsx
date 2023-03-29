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
import redux from "../assets/redux.png";
import zustand from "../assets/zustand.png";
import reactquery from "../assets/reactquery.png";
import antd from "../assets/antd.svg";
import materialui from "../assets/materialui.png";
import dots from "../assets/dots.jpeg";
import bosch from "../assets/bosch.jpeg";
import bmw from "../assets/bmw.jpeg";
import atrato from "../assets/atrato.jpeg";
import esslingen from "../assets/esslingen.jpeg";
import Section from "@/components/Section";

export default function Home() {
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
					<Image
						src={profilePic}
						alt='Profile picture'
						width={150}
						height={150}
						className='rounded-full border-4 border-whte absolute -bottom-20 left-6'
					/>
				</div>
				<div className='mt-24 px-8 mb-10'>
					<p className='text-3xl'>Esteban Pérez Martínez</p>
					<p className='text-xl'>Software engineer</p>
					<p className='flex mt-3'>
						{/* <EmailIcon className='mr-3' size={20} /> */}
						Email: estebanperma@gmail.com
					</p>
					<p className='flex'>
						{/* <PhoneIcon className='mr-3' size={20} /> */}
						Phone: +52 3319764162
					</p>
					<div className='flex gap-4 mt-4'>
						<TwitterIcon className='pb-1' size={30} />
						<LinkedinIcon size={30} />
					</div>
					<p className='mt-6 text-xl border-b-2 border-slate-100'>Skills</p>
					<p className='text-lg font-semibold mt-4'>Tech stack</p>
					<div className='flex mt-2 gap-3 flex-wrap'>
						<Tags name='React' image={reactlogo} />
						<Tags name='Next js' image={nextjs} />
						<Tags name='Node js' image={node} />
						<Tags name='Typescript' image={ts} />
						<Tags name='Tailwind' image={tailwind} />
						<Tags name='Jest' image={jest} />
						<Tags name='React Query' image={reactquery} />
						<Tags name='Zustand' image={zustand} />
						<Tags name='Redux' image={redux} />
						<Tags name='Prisma ORM' image={prisma} />
						<Tags name='TypeORM' image={typeorm} />
						<Tags name='PostreSQL' image={postgre} />
						<Tags name='MySQL' image={mysql} />
						<Tags name='Javascript' image={js} />
						<Tags name='HTML' image={html} />
						<Tags name='CSS' image={css} />
						<Tags name='Material UI' image={materialui} />
						<Tags name='Ant Design' image={antd} />
						<Tags name='Express' image={express} />
						<Tags name='Keras' image={keras} />
						<Tags name='Pandas' image={pandas} />
						<Tags name='Numpy' image={numpy} />
						<Tags name='Tensorflow' image={tensorflow} />
						<Tags name='Python' image={python} />
					</div>
					<p className='text-lg font-semibold mt-4'>Developer tools</p>
					<div className='flex mt-2 gap-3 flex-wrap'>
						<Tags name='AWS' image={aws} />
						<Tags name='Azure' image={azure} />
						<Tags name='Git' image={git} />
						<Tags name='Supabase' image={supabase} />
						<Tags name='VSCode' image={vscode} />
						<Tags name='Cloudflare' image={cloudflare} />
						<Tags name='Office' image={office} />
					</div>
					<p className='text-lg font-semibold mt-4'>SDK integrations</p>
					<div className='flex mt-2 gap-3 flex-wrap'>
						<Tags name='Open AI' image={openai} />
						<Tags name='Twilio' image={twilio} />
						<Tags name='Discord' image={discord} />
						<Tags name='Slack' image={slack} />
						<Tags name='Cloudinary' image={cloudinary} />
					</div>
					<p className='mt-16 mb-8 text-xl border-b-2 border-slate-100'>
						Work Experience
					</p>
					<div className='flex flex-col gap-6'>
						<Section
							position='Full-stack Software Engineer'
							institution='Dots (YCS21)'
							period='Aug 2022 - Apr 2023'
							place='New York, US (Remote)'
							image={dots}
						/>
						<Section
							position='(Internship) Thesis Climatic condition monitoring in electric systems with AI'
							institution='Bosch Engineering GmbH'
							period='Mar 2022 - Jul 2022 · 5 mos'
							place='Reutlingen, Baden-Württemberg, Germany'
							image={bosch}
						/>
						<Section
							position='(Internship) Development and type testing'
							institution='BMW Group'
							period='Sep 2021 - Feb 2022 · 6 mos'
							place='Munich, Bavaria, Germany'
							image={bmw}
						/>
						<Section
							position='Founding Software Engineer'
							institution='Atrato (YCW21)'
							period='Jan 2020 - Feb 2021 · 1 yr 2 mos'
							place='Guadalajara, Jalisco, Mexico'
							image={atrato}
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
							image={esslingen}
						/>
					</div>
				</div>
			</main>
		</>
	);
}