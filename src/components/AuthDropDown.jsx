import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogIn from '../assets/enter.svg'
import SignUp from '../assets/login.svg'

const AuthDropDown = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <main className='container shadow-lg border rounded bg-light p-2'>
        <div className='d-flex flex-column gap-3 m-3'>
          {isLoggedIn ? 
            <>
              <Link className='btn btn-primary text-light f-5'>LogOut</Link>
              <Link className='btn btn-primary text-light f-5'>Order</Link>
            </> :
            <>
            {/* log in div  */}
              <div className='d-flex bg-primary border rounded p-2 gap-3'>
                <img src={LogIn} alt="Log-in" className=''/>
                <Link to='/SignIn' className='btn btn-primary text-light f-5'>LogIn</Link>
              </div>

            {/* sign up div  */}
              <div className='d-flex border border-danger rounded px-1'>
                <img src={SignUp} alt="Sign-up" />
                <Link to='/SignUp' className='btn text-danger fw-bolder'>SignUp</Link>
              </div>
            </>
          }
        </div>
      </main>
    </>
  )
}

export default AuthDropDown