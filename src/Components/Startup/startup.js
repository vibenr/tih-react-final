import React from 'react'
import Heading from '../PageHeading/PageHeading'
import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import axios from 'axios'
function Startup() {
  const [initial, final] = useState([])

  useEffect(() => {
    let servicedata = async () => {
      const data = await axios.get('https://tihapi.herokuapp.com/Startups')
      console.log(data)
    }
    servicedata()
  }, [])

  return (
    <>
      <Header />
      <div className="flex justify-center mb-8">
        <Heading pagname="Startups" className="border-2 border-black " />
      </div>
      <div classNameNames="container container max-w-xl  m-auto flex  flex-wrap flex-col md:flex-row items-center justify-start ">
        {initial &&
          initial.map((card) => (
            <div className="w-full lg:w-3/4 p-3 lg:mx-auto">
              <div className="grid lg:grid-cols-2 grid-cols-1  rounded overflow-hidden h-auto lg:h-auto  shadow-lg">
                <div className="lg:w-3/4  h-full ">
                  <img
                    className="  w-full h-full   flex-none bg-cover "
                    src="https://source.unsplash.com/random"
                    alt="alternative"
                  />
                </div>
                <div className="w-full ">
                  <p className="text-2xl font-bold mt-2 text-center">
                    {card.title}{' '}
                  </p>
                  <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4   ">
                    <p className="text-grey-darker text-base mt-2">
                      {card.description}
                    </p>{' '}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default Startup
