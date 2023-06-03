import React from 'react'
import PropertyCard from './PropertyCard';
import Login from './Login';
import SignUp from './Signup';

const Main = () => {
  const HOUSE = {
    name: "Modern home in city center",
    location: "New York",
    price: 1900000,
    beds: 3,
    baths: 2,
    area: 200,
  };

  return (
    <PropertyCard house={HOUSE}/>
  )
}

export default Main;