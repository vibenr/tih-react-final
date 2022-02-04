import { useState, useEffect } from 'react'
import React from 'react'
import Card from '../Card/Card'
import Heading from '../PageHeading/PageHeading'
import Header from '../Header/Header'
import axios from 'axios'

function Service() {
  const [initial, final] = useState([])

  useEffect(() => {
    const servicedata = async () => {
      const datas = await axios.get('https://tihapi.herokuapp.com/Services')
      console.log(datas)
      final(datas.data)
    }
    servicedata()
  }, [])

  return (
    <div className="Service ">
      <Header />
      <div className="flex items-center flex-col justify-center">
        <Heading pagname="SERVICES" className="border-2 border-black" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {initial &&
            initial.map((card) => (
              <Card
                heading={card.title}
                paragraph={card.desc}
                source={card.image}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Service
