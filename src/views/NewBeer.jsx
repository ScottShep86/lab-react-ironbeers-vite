import React from 'react'
import Navbar from '../components/Navbar'
import BeerForm from '../components/BeerForm'

export default function NewBeer() {
  return (
    <div>
    <Navbar />
    <br>
    </br>
    <h1>Create a beer</h1>
    <BeerForm />
    </div>
  )
}
