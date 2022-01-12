import React from 'react'
import { Avatar } from '@mui/material'
import Heading from '../PageHeading/PageHeading'

function Contact() {
  const style = {
    border: '0',
    width: '40vw',
    height: '50vh',
  }

  const style1 = {
    resize: 'none',
  }

  return (
    <>
      <div className="flex justify-center mb-12">
        <Heading pagname="Contact Us" />
      </div>


        <div className=" grid lg:grid-cols-2 grid-cols-1  ">
          <div className="map w-1/2 border-2 border-black">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1455.60369312146!2d72.56334564300455!3d23.031668564003056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85a79eebdec9%3A0xd0ab8cb58ab0d0dc!2sTechno%20IT%20HUB!5e0!3m2!1sen!2sin!4v1636615698970!5m2!1sen!2sin"
              className="h-full"            
              allowfullscreen="true"
              title="map_location"
            />
          </div>
       

          <div className="contact-details ml-20 mt-5">
            <div className=" flex align-items-center justify-content-baseline ml-16  ">
              <h2 className="font-bold  lg:text-3xl text-md text-center">
                {' '}
                Techno IT Hub
              </h2>
            </div>

          {/* flexbox for contact details */}
          <div className = "main flex flex-col border-2 border-black">
            <div className = "grid lg:grid-cols-2 grid-cols-1 place-items-center"> 
            <div>
              <Avatar> </Avatar>
            </div>
            <div>
              <span>Address:</span> <p>GUJARAT INNOVATION COUNCIL</p>
            </div>
            </div>

            <div className = "grid lg:grid-cols-2 grid-cols-1 place-items-center"> 
            <div>
              <Avatar> </Avatar>
              </div>
            <div> </div>
            </div>

            <div className = "grid lg:grid-cols-2 grid-cols-1 place-items-center"> 
            <div>
              <Avatar> </Avatar>
              </div>
            <div> </div>
            </div>
          </div>
           
          </div>
        </div>
    
      <div className="contactForm border-2 border-black flex justify-center align-items-center mt-12 mb-4 p-4">
        <form class="w-full max-w-lg border-gray-300">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-email"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Contact No
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="+91"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Apply For
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Choose..</option>
                  <option>Graphics Designer</option>
                  <option>Tutor</option>
                  <option>Intern</option>
                  <option>Student/Member</option>
                  <option>Developer</option>
                  <option>Others</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <textarea
              className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Message"
              style={style1}
            />
          </div>
          <div className="flex justify-center align-items-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
              Submit
            </button>
          </div>
        </form>{' '}
      </div>
    </>
  )
}

export default Contact
