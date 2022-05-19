import { memo } from 'react'

import Label from 'components/shared/Label'
import styles from './styles.module.scss'

function Educations() {
	return (
		<section className={styles.container}>
			<h4>Formação Educacional</h4>
			<ul>
				<li>
					<strong>
						Tecnólogo em Redes de Computadores
						<Label text="Ensino Superior" />
					</strong>
					<span>Universidade Federal de Santa Maria</span>
				</li>
				<li>
					<strong>
						Técnico em Informática
						<Label text="Ensino Técnico" />
					</strong>
					<span>Escola Estadual de Ensino Médio Professora Maria Rocha</span>
				</li>
			</ul>
		</section>
	)
}

export default memo(Educations)