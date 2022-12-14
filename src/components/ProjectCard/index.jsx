import { Col } from 'react-bootstrap'
import './styles.css'
export default function ProjectCard({ title, description, imgUrl, deployedUrl }) {
	return (
		<Col size={12} sm={6} md={4} onClick={() => window.open(deployedUrl, '_blank')}>
			<div className='proj-imgbx'>
				<img src={imgUrl} alt='title' />
				<div className='proj-txtx'>
					<h4>{title}</h4>
					<span>{description}</span>
				</div>
			</div>
		</Col>
	)
}
