import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import Connect from './pages/Connect'
export default function App() {
	return (
		<>
			<Header />
			<Home />
			<div className='content'>
				<About />
				<Skills />
				<Portfolio />
				<Connect />
			</div>
		</>
	)
}
