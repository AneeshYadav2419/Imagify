import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import { Testinomials } from '../components/Testinomials'
import { GenerateBtn } from '../components/GenerateBtn'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testinomials/>
      <GenerateBtn/>
      
    </div>
  )
}
export default Home