import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  
  return (
    <>
      <main className='container my-3 d-flex flex-column'>
        <div>
          <div className='text-center'>
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </div >
          <h2 className='fs-3 fw-bold my-4 text-center w-75 m-auto'>CREATE YOUR ACCOUNT</h2>

          <Form className='w-75 m-auto' onSubmit={handleSubmit(onSubmit)}>
            {/* first name  */}
            <Form.Label>First name</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="first-name" className='border border-3 rounded-3' {...register("firstName", { required: true, maxLength: 20 })}/>
              {/* {errors.firstName && <span className='fw-bold text-danger'>This field is required</span>} */}
            </FloatingLabel>

            {/* last name  */}
            <Form.Label>Last Name</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="last-name" className='border border-3 rounded-3' {...register("LastName", { required: true, maxLength: 20 })}/>
            </FloatingLabel>

            {/* email  */}
            <Form.Label>Email</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" className='border border-3 rounded-3'/>
            </FloatingLabel>

            {/* phone number  */}
            <Form.Label>Phone Number</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label=""
              className="mb-3"
            >
              <Form.Control type="number" placeholder="phone-number" className='border border-3 rounded-3' {...register("phoneNumber", { required: true, maxLength: 11 })}/>
            </FloatingLabel>

            {/* password  */}
            <Form.Label>Password (8 minimum characters)</Form.Label>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" className='border border-3 rounded-3' {...register('password', {required: true, minLength: 8})}/>
              {errors.password && <span className='fw-bold text-danger'>Minimum length of 8 characters</span>}
            </FloatingLabel>

            {/* confirm password  */}
            <Form.Label>Confirm Password</Form.Label>
            <FloatingLabel controlId="floatingPassword" label="Confirm Password">
              <Form.Control type="password" placeholder="Password" className='border border-3 rounded-3'/>
            </FloatingLabel>

            {/* check box  */}
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`default-${type}`}
                  label={`Keep me signed in`}
                />
              </div>
            ))}

            {/* button  */}
            <button>
              Create Account
            </button>

            {/* more details  */}
            <p>
              Have an account? 
              <Link to='/SignIn'>Sign In</Link>
            </p>
            <p>
            By Creating your Quickmunch account, you agree to the  <span>Terms of use</span> and <span>Privacy Policy</span>
            </p>

          </Form>
        </div>
      </main>
    </>
  )
}

export default SignUp