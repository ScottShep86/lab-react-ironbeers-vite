import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'

export default function AllBeers() {
    const [beers, setBeers] = useState([])

    const getBeers = async () => {
        try {
            const response = await fetch("https://ih-beers-api2.herokuapp.com/beers")
            if(response.status === 200) {
                const parsed = await response.json()
                setBeers(parsed)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeers()
    }, [])
  return (
    <div>
    <Navbar />
    {beers.map(beer => (
        <div key={beer.id} className="beerContainer">
        <div className="beerImgContainer">
        <img className="beerImg" src={beer.image_url} alt={beer.name}/>
        </div>
        <div className="beerInfo">
        <h4>{beer.name}</h4>
        <h5>{beer.tagline}</h5>
        <p>Created by: {beer.contributed_by}</p>
        </div>
        <div>
        <hr></hr>
        </div>
        </div>
    ))}
    
    </div>
  )
}
