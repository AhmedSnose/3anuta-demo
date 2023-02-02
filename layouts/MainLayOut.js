import  Dashboard  from './dashboard/Dashboard'
import Head from 'next/head'

import React from 'react'

export default function MainLayOut(props) {
  // console.log(props)
  const { className = ''} = props;
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${className }`} >
          <Dashboard>
              {props.children}
          </Dashboard>
      </div>
    </>
  )
}
