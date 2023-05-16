import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BeerForm() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [tagline, setTagline] = useState('')
    const [contributedBy, setContributedBy] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()
        const payload =  {name, image, tagline, contributedBy}
        try {
            const response = await fetch("https://ih-beers-api2.herokuapp.com/beers", {
                method: 'POST',
                headers: {'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            })
            if(response.status === 201) {
                const newBeer = await response.json()
                navigate(`/beers/${newBeer.id}`)
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
    <form style={{ display: 'grid', gridTemplate: 'repeat(5, 1fr) / auto' }}
        onSubmit={handleSubmit}>
        <label>Name: <input value={name} onChange={event => {setName(event.target.value)
        }}/></label>
        <label>Tagline: <input value={tagline} onChange={event => {setTagline(event.target.value)
        }}/></label>
        <label>Contributed by: <input value={contributedBy} onChange={event => {setContributedBy(event.target.value)
        }}/></label>
        <button type='submit'>Create</button>
    </form>
    </div>
  )
}
