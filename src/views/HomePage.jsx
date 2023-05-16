import React from "react";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
    <div>
      <img className="bannerImg" src={beers} alt="all beers" />
      </div>
      <div className='text'>
        <Link to="/beers">
          <h1>All Beers</h1>
        </Link>
        <p>
          Discover an extensive collection of beers from around the world on our
          website, featuring a comprehensive directory of links to all types of
          beers, with detailed information and reviews.
        </p>
      </div>
      <br></br>
      <div>
      <img className="bannerImg" src={randomBeer} alt="random beer" />
      </div>
      <div className='text'>
        <Link to="/random-beer">
          <h1>Random Beer</h1>
        </Link>
        <p>
          Looking to try something new and exciting? Our website offers a random
          beer generator, presenting you with a unique and flavorful beer
          selection every time you visit.
        </p>
      </div>
      <br></br>
      <div>
      <img className="bannerImg" src={newBeer} alt="new beer" />
      </div>
      <div className='text'>
        <Link to="/new-beer">
          <h1>New Beer</h1>
        </Link>
        <p>
          Unleash your inner brewmaster and create your own custom beer on our
          website, with our intuitive beer creation tool that lets you
          experiment with different ingredients, flavors, and brewing techniques
          to craft the perfect brew.
        </p>
      </div>
      <br></br>
    </div>
  );
}
