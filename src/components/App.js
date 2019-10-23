import React, { useState } from 'react'

import { Header, Footer } from './layouts'
import Exercises from './exercises'

export default () => {
  return (
    <>
      <Header />
      
      <Exercises />

      <Footer />
    </>
  )
}
