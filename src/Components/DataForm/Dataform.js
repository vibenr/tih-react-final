import React, { useState } from 'react'
import RedirectForm from '../Redirectform/Redirectform'
import './data.css'
import Addform from '../Addform/Addform'

function DataForm() {
  const [currenttab, settab] = useState('/')
  const [route, setroute] = useState('/')

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
                    setroute('services')
                  }}
                >
                  Service
                </li>
                <li
                  onClick={() => {
                    settab('COURSES')
                    setroute('courses')
                  }}
                >
                  Courses
                </li>
                <li
                  onClick={() => {
                    settab('STARTUP')
                    setroute('startups')
                  }}
                >
                  Startup
                </li>
              </ul>
            </div>
          </div>
        </div>

        {currenttab === '/' && <Addform />}

        {currenttab !== '/' && <RedirectForm pageheading={currenttab} routes={route} />}
      </div>
    </>
  )
}

export default DataForm
