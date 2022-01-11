import React from 'react'
import Heading from '../PageHeading/PageHeading'
import { useState, useEffect } from 'react'

function Startup() {


  const [initial, final] = useState([])

  useEffect(() => {
    let servicedata = async () => {
      await fetch('https://tihbackendapi.herokuapp.com/api/startup')
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
        })
        .then((jsonres) => {
          final(jsonres)
        })
    }
    servicedata()
  }, [initial])

  return (
    <>
      <div className="flex justify-center mb-8">
        <Heading pagname="Startups" className="border-2 border-black " />
      </div>
      <div classNameNames="container container max-w-xl  m-auto flex  flex-wrap flex-col md:flex-row items-center justify-start ">
        {initial &&
          initial.map(
            (card) => (
              <div className="w-full lg:w-3/4 p-3 lg:mx-auto">
                <div className="grid lg:grid-cols-2 grid-cols-1  rounded overflow-hidden h-auto lg:h-auto border shadow shadow-lg">
                 <div className="lg:w-3/4  h-full border-2">
                  <img
                    className="  w-full h-full   flex-none bg-cover "
                    src="https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270"
                    alt="alternative"
                  />
                  </div>
                  <div className="w-full border-2">

                    <p className="text-2xl font-bold text-center">{card.title} </p>
                  <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4   ">
                    <p className="text-grey-darker text-base mt-8">
                      {card.description}
                    </p>{' '}
                    
                  </div>
                </div>
                </div>
              </div>
            ),
            [initial],
          )}
      </div>
    </>
  )
}

export default Startup
