import React from 'react'
import always from '../assets/question.svg'
import lock from '../assets/lock.svg'
import apple from '../assets/playstore.svg'
import playstore from '../assets/apple.svg'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
      <main className='bg-black p-sm-5'>
        <div className='container text-white py-4 text-center text-lg-start'>
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

            <div className='d-flex flex-column flex-lg-row gap-3 gap-lg-5 '>
              <img src={playstore} alt="iOS-logo" className='download mx-auto'/>

              <img src={apple} alt="google-playstore-logo" className='download mx-auto'/>
            </div>
          </div>

          <div className='my-5'>
            <h4>Need Help</h4>
            <p><a href="#" className='text-white'>+234 907 466 6655</a> or</p>
            <a href="#" className='text-white'>help@jazzyburger.com</a>
          </div>

          <div>
            <h3 className='pb-3'>FOLLOW US</h3>
                {/* logos   */}
            <div className='d-flex gap-2 justify-content-center justify-content-lg-start'>
              <img src={facebook} alt="facebook-loge" className='logos'/>
              <img src={twitter} alt="twitter-logo" className='logos'/>
              <img src={instagram} alt="instagram-logo" className='logos'/>
              <img src={youtube} alt="youtube-logo" className='logos'/>
            </div>
          </div>
        </div>
      </main>

      <p className='fw-bold container text-center my-2'>JJB Concepts. Developed by our Digital  LLC</p>
    </>
  )
}

export default Footer