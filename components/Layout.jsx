import React from 'react'
import Navigation from './Navigation'

const Layout = ({children}) => {
  return (
    <div className='flex min-h-screen'>
    <Navigation/>
    <main className="p-5 grow bg-white my-2 mr-2 rounded-3xl">
        {children}
      </main>
    </div>
  )
}

export default Layout