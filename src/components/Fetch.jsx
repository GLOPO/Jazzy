import React, { useState, useEffect } from 'react'
import { FaNairaSign } from "react-icons/fa6";
import ingredients from '../assets/ingredients.png'
import add from '../assets/add.svg'
import heart from '../assets/heart.png'
import Spinner from 'react-bootstrap/Spinner';

const Fetch = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    try {
      setIsLoading(true)

      const request = await fetch('https://jazzy-mern.onrender.com/api/products')
      const response = await request.json()
      setData(response.products)

      console.log(response.products);

    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {isLoading && (
        <Spinner animation="border" />
      )}

      <main className='d-flex flex-wrap justify-content-evenly gap-1 align-items-end position-absolute'>

        {data.map((datum) => {
          const { _id, title, image, price } = datum

          return (
            <div key={_id} className='border rounded shadow position-relative'>
              <img src={image} alt="" className='img-fluid w-100 h-50' />
              <img src={heart} alt="" className='position-absolute top-0 end-0 rounded-pill p-2 bg-muted' />
              <div className='px-2 py-3'>
                <p className='fw-bold '>{title}</p>
                <p className='text-secondary fw-bold'>Total Price</p>
                <div className='d-flex h-100 align-items-baseline'>
                  <FaNairaSign />
                  <p className='fs-4 fw-bold'>{price}</p>
                </div>
                <img src={ingredients} alt="" className='img-fluid' />
                <button className='btn btn-danger w-100 d-flex justify-content-center gap-4 align-items-center p-0'>
                  <img src={add} alt="" className='img-fluid ' />
                  <p className='text-light fs-4 fw-bold'>Add to Cart</p>
                </button>
              </div>
            </div>
          )
        })}
      </main>
    </>
  )
}

export default Fetch