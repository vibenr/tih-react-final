import React from 'react';
import PageHeading from '../PageHeading/PageHeading';



function About() {

	return (
		<>
			<div className='font-semibold'>
			<div className='flex justify-center'>

			<PageHeading pagname="ABOUT US"/>
			</div>
				<div className='mt-16'>
					<div className=' grid  lg:grid-cols-2 md:text-lg grid-cols-1 mx-auto'>
						<div className='  pr-4'>
							<p className='break-normal '>
								Techno IT Hub is a startup and mentoring hub which offers guidance and encouragement
							</p>
							<ul className='break-words flex flex-col  items-center justify-center list-inside list-disc'>
								<li className='mt-2'>Create Opportunities</li>
								<li className='mt-2'> Offer technical as well as non-technical solutions</li>
								<li className='mt-2'> Support aspiring minds</li>
							</ul>
						</div>
						<div className = "md:mt-4 w-full">
							<p className='break-normal md:text-lg flex justify-content-center align-items-center'>
								{' '}
								With an aim to to blur line between students and industries, Techno IT Hub offers
								mentorship,start-up support,internships, hackathon guidance, workspace for live projects
								and far more benefits. it encourages coding and management skills. apart from providing
								quality education at affordable prices, Techno It hub enlightens future prospects.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className = "relative bottom-0 w-full"> 
		
			</div>

			</>
	);
}

export default About;
