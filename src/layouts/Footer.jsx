import React from 'react'
import always from '../assets/question.svg'
import lock from '../assets/lock.svg'
import apple from '../assets/playstore.svg'
import playstore from '../assets/apple.svg'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'

const Footer = () => {
  return (
    <>
      <main className='bg-black p-sm-5'>
        <div className='container text-white py-5 text-center text-lg-start'>
          <div className='d-flex justify-content-between flex-column flex-lg-row '>
            <div className='d-flex flex-column-reverse flex-lg-row gap-5'>
              <div className='d-lg-flex  gap-lg-2'>
                <img src={always} alt="" className='w-25'/>
                <p className='d-flex justify-content-center align-items-center gap-3'>
                  <span className='fw-bold fs-1'>24/7</span>
                  <span  className='fs-6'>Support</span>
                </p>
              </div>

              <div className='d-lg-flex gap-lg-2'>
                <img src={lock} alt="lock-Img" className='w-25'/>
                <p className='d-flex justify-content-center flex-column '>
                  <span className='fw-bold fs-1'>100%</span>
                  <span className='fs-6'>Payment Secured</span>
                </p>
              </div>
            </div>

            <div className='d-flex flex-column flex-lg-row gap-5 '>
              <div className='d-flex align-items-center border rounded-2 w-75 mx-auto'>
                <img src={apple} alt="iOS-Logo" className='w-25 h-25'/>
                <p className='d-flex flex-column '>
                  <span>DownLoad on the</span>
                  <span className='fw-bold fs-6'>APP STORE</span>
                </p>
              </div>

              <div className='d-flex align-items-center border rounded-2 w-75 mx-auto'>
                <img src={playstore} alt="playstore-logo" className='w-25 h-25'/>
                <p className='d-flex flex-column'>
                  <span>Get it on</span>
                  <span className='fw-bold fs-6'>GOOGLE PLAY</span>
                </p>
              </div>
            </div>
          </div>

          <div className='my-5'>
            <h4>Need Help</h4>
            <p><a href="#" className='text-white'>+234 907 466 6655</a> or</p>
            <a href="#" className='text-white'>help@jazzyburger.com</a>
          </div>

          <div>
            <h3 className='pb-3'>FOLLOW US</h3>
            <div className='d-flex w-75 mx '>
              <img src={facebook} alt="facebook-loge" />
              <img src={twitter} alt="twitter-logo" />
              <img src={instagram} alt="instagram-logo" />
              <img src={youtube} alt="youtube-logo" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Footer