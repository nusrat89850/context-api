import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const cart = ["test"];
  return (
    <>
    <div>
        <header className="bg-white">
         <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back to Fake Shop!</h1>

        <p className="mt-1.5 text-sm text-gray-500">
          Let's shop around! 
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/">
        <button
          className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium"> Shop </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>
        </Link>
        <Link to={"/cart"}>
        <button
          className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
          type="button"
        >
          Go to Cart &nbsp; 
         
<span class="inline-flex items-center justify-center gap-1 rounded-full bg-blue-400 px-1.5 text-sm text-white">
{cart.length ? cart.length : ""}
  
</span>
          
        </button>
        </Link>
        
      </div>
    </div>
         </div>
</header>
    </div>
    </>
  )
}