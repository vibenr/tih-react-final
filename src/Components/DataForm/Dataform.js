import React, { useState } from 'react'
import RedirectForm from '../Redirectform/Redirectform'

import Addform from '../Addform/Addform'

function DataForm() {
  const [currenttab, settab] = useState('/')

  return (
    <>
      <div className="rounded-lg shadow bg-base-200 drawer h-30">
       
        <div className="flex flex-col drawer-content">
          <div className="w-full navbar bg-base-300">
            

            <div className="lg:block">
              <ul className="menu horizontal text-black">
                <li>
                  <a href="/">Home</a>
                </li>
                <li
                  onClick={() => {
                    settab('SERVICES')
                  }}
                >
                  Service
                </li> 
                <li
                  onClick={() => {
                    settab('COURSES')
                  }}
                >
                  Courses
                </li>
                <li
                  onClick={() => {
                    settab('STARTUP')
                  }}
                >
                  Startup
                </li>
              </ul>
            </div>
          </div>
        </div>

        {currenttab === '/' && <Addform />}

        {currenttab !== '/' && <RedirectForm pageheading={currenttab} />}
      </div>
    </>
  )
}

export default DataForm
