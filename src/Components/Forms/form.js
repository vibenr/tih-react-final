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
          <div className="flex justify-center">
            <Header pagname={heading} />
          </div>
          <div className="flex justify-center mt-2 align-items-center">
            <p className="text-red-400">*Only Admins Can Login</p>
          </div>
          <div class="max-h-screen flex items-center justify-center bg-gray-50 py-12  px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
              <div>
                <img
                  class="mx-auto h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Log in to your account
                </h2>
              </div>
              <form class="mt-8 space-y-6" method="POST">
                <div class="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label for="username" class="sr-only">
                      Username
                    </label>
                    <input
                      onChange={(e) => {
                        setusername(e.target.value)
                      }}
                      name="username"
                      value={username}
                      type="text"
                      autocomplete="text"
                      required
                      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <label for="password" class="sr-only">
                      Password
                    </label>
                    <input
                      onChange={(e) => {
                        setpassword(e.target.value)
                      }}
                      name="password"
                      value={password}
                      type="password"
                      autocomplete="current-password"
                      required
                      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={login}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg
                        class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    Log In
                  </button>
                </div>
              </form>
            </div>
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
