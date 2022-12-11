import { useEffect } from 'react'
import { useState } from 'react'
import './style.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/svg/logo.svg'
import linkedIn from '../../assets/svg/linkedin.svg'
import navIcon2 from '../../assets/svg/gitHub.svg'
import navIcon3 from '../../assets/svg/medium.svg'
export default function Header() {
	const [activeLink, setActiveLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)
	useEffect(() => {
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])
	//Function to handle scrolling
	function onScroll() {
		if (window.scrollY > 50) setScrolled(true)
		else setScrolled(false)
	}
	function onLinkChanged(value) {
		setActiveLink(value)
	}
	return (
		<Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
			<Container>
				<Navbar.Brand href='#home'>
					<img src={logo} alt='logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav'>
					<span className='navbar-toggler-icon'></span>
				</Navbar.Toggle>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link
							href='/'
							className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
							onClick={() => onLinkChanged('home')}>
							Home
						</Nav.Link>
						<Nav.Link
							href='/skills'
							className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
							onClick={() => onLinkChanged('skills')}>
							Skills
						</Nav.Link>
						<Nav.Link
							href='/projects'
							className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
							onClick={() => onLinkChanged('projects')}>
							Projects
						</Nav.Link>
					</Nav>
					<span className='navbar-text'>
						<div className='social-icon'>
							<a href='/' className=''>
								<img src={linkedIn} alt='l' />
							</a>
							<a href='/' className=''>
								<img src={navIcon2} alt='g' />
							</a>
							<a href='/' className=''>
								<img src={navIcon3} alt='m' />
							</a>
						</div>
						<button>
							<span>Let's Connect</span>
						</button>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
