import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Heading from '../PageHeading/PageHeading'
import Header from '../Header/Header'

function Service() {
  const [initial, final] = useState([])

  useEffect(() => {
    let servicedata = async () => {
      await fetch(' https://tih-backend.herokuapp.com/api/courses')
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
      <Header />
      <div className="flex flex-col items-center justify-center">
      <Heading pagname="Courses" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-10 mb-auto">
          {initial &&
            initial.map((card) => (
              <Card
                heading={card.title}
                paragraph={card.description}
                source=""
                button
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Service
