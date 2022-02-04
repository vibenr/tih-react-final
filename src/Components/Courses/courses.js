import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Heading from '../PageHeading/PageHeading'
import Header from '../Header/Header'
import axios from '../../axios'
function Service() {
  const [initial, final] = useState([])

  useEffect(() => {
    let servicedata = async () => {
      const data=await  axios.get('https://tihapi.herokuapp.com/Courses')
      console.log(data)
      final(data.data)
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
                paragraph={card.desc}
                source={card.image}
                price={card.price}
                button
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Service
