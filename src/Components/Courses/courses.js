import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Heading from '../PageHeading/PageHeading'

function Service() {
  const [initial, final] = useState([])

  useEffect(() => {
    let servicedata = async () => {
      await fetch(' https://tihbackendapi.herokuapp.com/api/courses')
        .then((res) => {
          if (res.ok) 
          {
             return res.json()
          }
        })
        .then((jsonres) => {
          final(jsonres)
        })
    }
    servicedata()
  }, [])

  return (
    <div className="courses ">
      <div className="flex flex-col items-center justify-center">
      <Heading pagname="Courses" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-10 mb-auto">
          {initial &&
            initial.map((card) => (
              <Card
                heading={card.title}
                paragraph={card.description}
                source="https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270"
                button
              />
            ))}
        </div>
      </div>
      <div className="absolute  w-full"></div>
    </div>
  )
}

export default Service
