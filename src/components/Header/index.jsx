import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../assets/svg/logo.svg'
import linkedin from '../../assets/svg/linkedin.svg'
import github from '../../assets/svg/gitHub.svg'
import medium from '../../assets/svg/medium.svg'
import { HashLink } from 'react-router-hashlink'
import { BrowserRouter as Router } from 'react-router-dom'
import './style.css'
export default function Header() {
	const [activeLink, setActiveLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', onScroll)

		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const onUpdateActiveLink = (value) => {
		setActiveLink(value)
	}

	return (
		<Router>
			<Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
				<Container>
					<Navbar.Brand href='/'>
						<img src={logo} alt='Logo' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav'>
						<span className='navbar-toggler-icon'></span>
					</Navbar.Toggle>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link
								href='#home'
								className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
								onClick={() => onUpdateActiveLink('home')}>
								Home
							</Nav.Link>
							<Nav.Link
								href='#skills'
								className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
								onClick={() => onUpdateActiveLink('skills')}>
								Skills
							</Nav.Link>
							<Nav.Link
								href='#projects'
								className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
								onClick={() => onUpdateActiveLink('projects')}>
								Projects
							</Nav.Link>
						</Nav>
						<span className='navbar-text'>
							<div className='social-icon'>
								<a href='#'>
									<img src={linkedin} alt='' />
								</a>
								<a href='#'>
									<img src={github} alt='' />
								</a>
								<a href='#'>
									<img src={medium} alt='' />
								</a>
							</div>
							<HashLink to='#connect'>
								<button className='vvd'>
									<span>Let’s Connect</span>
								</button>
							</HashLink>
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	)
}
