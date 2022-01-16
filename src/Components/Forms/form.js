import React, { useState } from 'react'
import Header from '../PageHeading/PageHeading'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
function Form({ heading }) {
  const [status, setstatus] = useState('501')
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const url = 'https://tih-backend.herokuapp.com/checkadmin'

  function login() {
    let data = { username, password }
    console.log(data)

    axios.post(url, data).then((response) => {
      console.log(response.status)
      if (response.status === 200) {
        setstatus('200')
      }
    })
  }

  return (
    <>
      {status === '200' && <Navigate to="/addform/data" />}

      {status !== '200' && (
        <>
          <div className="grid place-items-center">
            <div className="flex justify-center">
              <Header pagname={heading} />
            </div>

            <form className="w-full max-w-sm mt-14 md:p-x-8" onSubmit={login} method="POST">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    Username
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setusername(e.target.value)
                    }}
                    placeholder="Enter Your Username"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Password
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value)
                    }}
                    placeholder="Enter Your Password"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className=" flex justify-center">
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    LOGIN
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default Form

/* headers: {
  'Content-Type': 'application/json',
  'Access-Control-Request-Headers': '*',
}, */

{
  /* <div className="flex justify-center mt-2 align-items-center">
<p className="text-red-400">*Only Admin Can Login</p>
</div>
<div className="max-h-screen flex items-center justify-center bg-gray-50 py-12  px-4 sm:px-6 lg:px-8">
<div className="max-w-md w-full space-y-8">
  <div>
    <img
      className="mx-auto h-12 w-auto"
      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
      alt="Workflow"
    />
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Log in to your account
    </h2>
  </div>
  
</div>
</div> */
}
