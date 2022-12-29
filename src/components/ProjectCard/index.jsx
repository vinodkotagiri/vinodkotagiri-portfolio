import { Col } from 'react-bootstrap'
import './styles.css'
export default function ProjectCard({ title, description, imgUrl, deployedUrl, clientSource, serverSource }) {
	return (
		<Col size={12} sm={6} md={4}>
			<div className='proj-imgbx'>
				<img src={imgUrl} alt='title' />
				<div className='proj-txtx'>
					<a href={`${deployedUrl}`} target='_blank' rel='noreferrer' className='text-white'>
						<h4>{title}</h4>
						<span>{description}</span>
					</a>

					<div className='mt-3'>
						<button className='mt-3 mx-3 btn btn-fe'>
							<a href={`${clientSource}`} target='_blank' rel='noreferrer' className='text-white'>
								Frontend Source
							</a>
						</button>
						<button className='mt-3 mx-3 btn btn-be'>
							<a href={`${serverSource}`} target='_blank' rel='noreferrer' className='text-white'>
								Backend Source
							</a>
						</button>
					</div>
				</div>
			</div>
		</Col>
	)
}
