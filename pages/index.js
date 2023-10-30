import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect
  const[image,setImage]=useState(null)

  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(r =>r.json())
    .then(data => setImage(data.image))
  })
  const handleFetchImages = () => {
    // This function can be used to fetch new images, for example, when a button is clicked.
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then((response) => response.json())
      .then((data) => setImage(data.message))
  };

   return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      {/* <Form /> Uncomment <Form /> if you are going after the bonus */}
      {/* This page should receive the images array */}

      <DogList image={image} />
    </div>
  );
}

