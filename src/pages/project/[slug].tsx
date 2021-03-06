import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { HiOutlineClock, HiOutlineExternalLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";

import { graphSDK } from "services/graphql-request";
import { ProjectQuery } from "generated/sdk";
import SEO from "components/shared/SEO";
import ProjectCarousel from "components/pages/project/ProjectCarousel";
import Header from "components/shared/Header";
import Footer from "components/shared/Footer";
import style from "styles/pages/Project.module.scss";
import { getThumbnailFilename } from "utils/getThumbnailFilename";
import ShowTechnologiesThumnails from "components/shared/ShowTechnologiesThumnails";

export default function Project({ project }: ProjectQuery) {
	const projectGallery = useMemo(
		() => [
			{
				src: project.cover.url,
				id: project.cover.id,
			},
			...project.gallery.map((image) => ({
				src: image.url,
				id: image.id,
			})),
		],
		[project]
	);

	return (
		<>
			<SEO
				title={project.name}
				image={project.cover.thumbnailToSEO}
				description={`${project.description.slice(0, 150)}...`}
			/>
			<Header />
			<div className={style.container}>
				<h1>{project.name}</h1>
				<ProjectCarousel gallery={projectGallery} />

				<div className={style.content}>
					<h2>DESCRIÇÃO</h2>
					<ReactMarkdown className={style.markdownContent}>
						{project.description}
					</ReactMarkdown>

					<div className={style.additionalSectionGridContainer}>
						<section className={style.tecnologiesUsed}>
							<h3>PRINCIPAIS TECNOLOGIAS UTILIZADAS</h3>
							<ShowTechnologiesThumnails
								size="md"
								technologies={project.technologies}
							/>
						</section>
						{(!!project.githubUrl || !!project.websiteUrl) && (
							<section className={style.viewMore}>
								<h3>VEJA MAIS</h3>
								<div>
									{!!project.githubUrl && (
										<a
											href={project.githubUrl}
											className={style.githubLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											REPOSITORIO NO GITHUB
											<AiFillGithub />
										</a>
									)}
									{!!project.websiteUrl && (
										<a
											href={project.websiteUrl}
											className={style.websiteLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											VEJA O PROJETO
											<HiOutlineExternalLink />
										</a>
									)}
									{project.hasDemo && !project.websiteUrl && (
										<button className={style.demoButton} disabled>
											EM BREVE DEMO
											<HiOutlineClock />
										</button>
									)}
								</div>
							</section>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { projects } = await graphSDK.SlugsOfProjects();

	return {
		paths: projects.map((project) => ({
			params: {
				slug: project.slug,
			},
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { project } = await graphSDK.Project({ slug: String(params.slug) });
	return {
		props: {
			project,
		},
		revalidate: 60 * 60 * 24, // 24 hours
	};
};
