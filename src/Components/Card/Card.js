import React from 'react';


function Card({ heading, source, paragraph,button}) {
	return (
		<div className='max-w-sm h-auto rounded  shadow-lg  p-4  '>
			{source && <img className='w-full h-1/2' src={source} alt='Sunset in the mountains' />}
			<div className=''>
				{heading && <div className='font-bold text-xl mb-2 text-center'>{heading}</div>}
				{ paragraph && <p className='text-gray-700 text-base mb-4 '>{paragraph}</p>}
			</div>
		<div className="flex justify-center align-items-center  ">
		   { button &&	<button className='bg-blue-800 text-white font-semibold p-2 rounded-lg  hover:bg-blue-400 mb-6 lg:mb-4 '>Enroll Now</button>}
		</div>
		
		</div>
	);
}

export default Card;
