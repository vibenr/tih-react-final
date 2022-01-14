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
			<div className = "grid grid-cols-2 mt-4 p-4 gap-12 ">
				<div> 
					<p className = "break-normal tracking-wide"> 
					Techno IT Hub is a startup and mentoring hub which offers guidance and encouragement, Create Opportunities, Offer technical as well as non-technical solutions, Support aspiring minds.
					</p>
				</div>
				<div> 
					<p className = "break-normal tracking-wide"> 
					With an aim to to blur line between students and industries, Techno IT Hub offers mentorship,start-up support,internships, hackathon guidance, workspace for live projects and far more benefits. it encourages coding and management skills. apart from providing quality education at affordable prices, Techno It hub enlightens future prospects. 	
					</p>
				</div>
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
