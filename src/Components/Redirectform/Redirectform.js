import React, { useState } from 'react'
import PageHeading from '../PageHeading/PageHeading'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
function Redirectform({ pageheading, routes }) {
  /*   let history = useHistory() */
  const [title, settitle] = useState('')
  const [description, setdesciption] = useState('')
  const [image, setimage] = useState('')
  const [price, setprice] = useState('')
  const [status, setstatus] = useState('500')
  function submit(e) {
    e.preventDefault()
    const data = { title, description, image, price }
    axios
      .post(`https://tih-backend.herokuapp.com/addform/${pageheading}`, data)
      .then((response) => {
        console.log(response.status)
        if (response.status === 200) {
          setstatus('200')
        }
      })
  }

  return (
    <>
      {status === '200' && <Navigate to={`/${routes}`} />}
      {status !== '200' && (
        <>
          <PageHeading pagname={pageheading} />

          <div className="flex justify-center align-items-center ">
            <form
              className="w-full max-w-lg mt-14 p-4"
              onSubmit={(e) => {
                submit(e)
              }}
              method="POST"
            >
              <div className="flex flex-wrap  mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 m-auto"
                  for="grid-first-name"
                >
                  Title
                </label>

                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="title"
                  type="text"
                  name="title"
                  onChange={(e) => {
                    settitle(e.target.value)
                  }}
                  placeholder="Enter The Title"
                  required
                />
              </div>
              <div className="flex flex-wrap  mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
                    for="grid-password"
                  >
                    Description
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 min-w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="description"
                    id="description"
                    required
                    type="text"
                    placeholder="Enter The Description"
                    onChange={(e) => {
                      setdesciption(e.target.value)
                    }}
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-wrap  mb-2">
                <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    Upload The Image(url)
                  </label>
                  <input
                    onChange={(e) => {
                      setimage(e.target.value)
                    }}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="image"
                    required
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-wrap  mb-2">
                <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    Price (₹)
                  </label>
                  <input
                    onChange={(e) => {
                      setprice(e.target.value)
                    }}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={price}
                    name="price"
                    required
                    type="text"
                  />
                </div>
              </div>

              <div>
                <button
                  className="btn btn-primary text-black bg-blue-400 p-2 mt-4"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default Redirectform
