import React from 'react';

const Contact = () => {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8 w-screen">
        <div className="text-center">
          <p className="sm:text-6xl font-semibold text-gray-200">404</p>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray sm:text-7xl">COMING SOON</h1>
          <p className="mt-6 text-base leading-7 text-gray-400">Maaf yaa, Website ini masih dalam tahap pengembangan fitur, mohon pengertiannya.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="./home"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="./footer" className="text-sm font-semibold text-gray-200">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact;
