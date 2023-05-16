import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import AllBeers from './views/AllBeers'
import RandomBeer from './views/RandomBeer'
import NewBeer from './views/NewBeer'


import React from 'react'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/beers' element={<AllBeers />} />
      <Route path='/random-beer' element={<RandomBeer />} />
      <Route path='/new-beer' element={<NewBeer />} />
    </Routes>
  )
}