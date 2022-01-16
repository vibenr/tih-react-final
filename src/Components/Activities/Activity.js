import React from 'react';
import Card from '../Card/Card';
import Heading from '../PageHeading/PageHeading';
import Header from '../Header/Header'

import { useState, useEffect } from 'react';

function Actitvity() {
  const [initial, final] = useState([]);
  useEffect(() => {
    let servicedata = async () => {
      await fetch(' https://tih-backend.herokuapp.com/api/activity')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonres) => {
         
          final(jsonres);
        });
    };
    servicedata();
  }, []);

  return (
    <>
      <Header />
      <div className="flex items-center flex-col justify-center h-full w-full ">
      <Heading pagname="Activities" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-10 ">
          {initial &&
            initial.map((card) => (
              <Card heading={card.title} paragraph={card.description} />
            ))}
        </div>
      </div>
      <div className="">
      
      </div>
    </>
  );
}

export default Actitvity;
