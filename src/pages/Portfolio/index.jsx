import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Projects } from './projects'
import ProjectCard from '../../components/ProjectCard'
import './styles.css'
export default function Portfolio() {
	const [idx, setIdx] = useState(3)
	function loadMore() {
		setIdx((prev) => prev + 3)
	}
	console.log(Projects.length)
	return (
		<section id='portfolio' className='portfolio'>
			<Container>
				<div className='portfolio-bx'>
					<h2>Portfolio</h2>
					<Row>
						{Projects.slice(0, idx).map((project, index) => (
							<ProjectCard title={project.title} description={project.description} imgUrl={project.imgUrl} />
						))}
					</Row>
					<Row className='button-wrapper'>
						{Projects.length + 2 !== idx && (
							<Button style={{ width: 'fit-content' }} variant='info' onClick={loadMore}>
								Load More
							</Button>
						)}
					</Row>
				</div>
			</Container>
		</section>
	)
}
