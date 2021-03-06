import { memo } from "react";

import styles from "./styles.module.scss";

function CoursesAndCertifications() {
	return (
		<section className={styles.container}>
			<h3>Cursos e Certificações</h3>
			<ul>
				<li>
					<strong>Ignite - Trilha React</strong>
					<span>Rocketseat</span>
					<span>Conclusão: 2022 (Em andamento)</span>
				</li>
				<li>
					<strong>Bootcamp GoStack</strong>
					<span>Rocketseat</span>
					<span>Conclusão: 2021</span>
				</li>
				<li>
					<strong>JavaScript - Curso COMPLETO</strong>
					<span>HCode (Udemy)</span>
					<span>Conclusão: 2020</span>
				</li>
			</ul>
		</section>
	);
}

export default memo(CoursesAndCertifications);
