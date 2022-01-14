import React from 'react';
import PageHeading from '../PageHeading/PageHeading';
import Contactpage from '../Contact/Contact'
import Header from '../Header/Header'



function About() {

	return (
		<>
			<Header />
			<div className='font-semibold'>
			<div className='flex justify-center'>

			<PageHeading pagname="ABOUT US"/>
			</div>
			<div className = "flex justify-center align-items-center mt-4 p-4">
				<ul>
					<p className = "tracking-wide"> 
					Techno IT Hub is a startup and mentoring hub which offers guidance and encouragement, Create Opportunities, Offer technical as well as non-technical solutions, Support aspiring minds.
					</p>
				</ul>
			 </div>
				<div className = "contact-page"> 
				<Contactpage />
				</div>
			</div>
			<div className = "relative bottom-0 w-full"> 
		
			</div>

			</>
	);
}

export default About;
