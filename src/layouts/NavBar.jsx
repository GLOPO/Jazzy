import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Location from '../assets/location.png'
import allProducts from '../assets/alarm.png'
import guest from '../assets/person.png'
import cart from '../assets/cart (2).png'
import AuthDropDown from '../components/AuthDropDown'
import DropDown from '../components/DropDown'
import { IoChevronUpSharp } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import Bag from '../components/Bag'

const NavBar = ({cartItem}) => {
  const [authShow, setAuthShow] = useState(false)
  // const [dropDown, setDropDown] = useState(false)
  const [bagShow, setBagShow] = useState(false)

  return (
    <>
      <main className='position-relative container'>
        <nav className='container d-flex justify-content-between align-items-center'>
          {/* section-1  */}
          <section className='d-flex justify-content-between align-items-center'>

            {/* div-1  */}
            <div>
              <Link to='/'>
                <img src={Logo} alt="Logo" className='img-fluid p-3 gap-3 w-100'/>
              </Link>
            </div>

            {/* div-2  */}
            <div>
              <img src={Location} alt="Location" className='d-none d-lg-block'/>
            </div>
            
            <h5 className='text-danger d-none d-lg-block'>Lagos, Nigeria</h5>
          </section>

          {/* section-2  */}
          <section className='d-flex align-items-center justify-content-between gap-4'>
            <img src={allProducts} alt="all-products" className='img-fluid' />
            <h5 className='d-none d-lg-block text-danger mt-3'>All products</h5>

            <div className='d-flex align-items-center gap-3 position-relative' role='button' onClick={() => !authShow ? setAuthShow(true) : setAuthShow(false)}>
              <img src={guest} alt="Guest" />
              
              <h5 className='d-none d-lg-block text-secondary mt-3'>Hi, Guests</h5>
              {!authShow ? (
                <div className='d-none d-lg-block mt-3'>
                  <IoChevronDownSharp/>
                </div>
              ) :
              (
                <div className='d-none d-lg-block mt-3'>
                  <IoChevronUpSharp/>
                </div>
              )
              }

              <div className='position-absolute top-100 end-0 mt-3'>
                {authShow && <AuthDropDown />}
              </div>
            </div>

            <div onClick={() => (!bagShow ? setBagShow(true) : setBagShow(false))} role='button'>
              <div className='position-relative'>
                <div className='position-absolute top-0 start-100 translate-middle bg-danger rounded-circle w-75 h-75 p-1 text-light fw-bold text-center'>
                  <p>{cartItem.length}</p>
                </div>
                <img src={cart} alt="" />
              </div>
            </div>


            {/* <img src={cart} alt="" role='button' onClick={() => !dropDown ? setDropDown(true) : setDropDown(false)} className='position-relative'/>
            <div className='position-absolute drop-down end-0 bg-white'>
            {dropDown && <DropDown />}
            </div> */}
                      </section>
        </nav>

        <div className='position-absolute end-0'>
          {bagShow && <Bag />}
        </div>

        <Outlet />
      </main>
    </>
  )
}

export default NavBar
{/* {!authShow ? (
  <div className="d-none d-lg-none mt-3 text-secondary">
    <IoChevronDownSharp />
  </div>
) : (
  <div className="d-none d-lg-block mt-3 text-secondary">
    <IoChevronUpSharp />
  </div>
)} */}