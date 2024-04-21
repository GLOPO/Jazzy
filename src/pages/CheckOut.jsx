import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Modal1 from '../components/Modal1';
import Modal2 from '../components/Modal2';

const CheckOut = () => {
  useEffect(() => {
    document.title = 'Checkout | Page'
  })

  return (
    <>
      <main className='row px-0'>
        {/* first modal  */}
        <div className='col-lg-7'>
            <Modal1 />
        </div>

          {/* second modal  */}
        <div className='col-lg-5'>
            <Modal2 />
        </div>

        <div className=''>
          
  

        </div>
      </main>
    </>
  )
}

export default CheckOut