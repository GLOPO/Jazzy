import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const schema = yup
  .object({
    firstName: yup.string().required(),
    // lastName: yup.string().required(),
    phoneNumber: yup.number().positive().integer().required(),
  })
  .required()

const SignUp = () => {
  const [isReveal, setIsReveal] = useState(false);
  const [isReveal2, setIsReveal2] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  let pswd = document.getElementsByClassName('.pswd').innerHTML;
  let confirmPswd = document.getElementsByClassName('.con-pswd').innerHTML;

  function confirmPassword() {
    !(pswd === confirmPswd) ? alert('The 2 paswords doesnt match') : 'ko'
  }

  function handleToggle1() {
    !isReveal ? setIsReveal(true) : setIsReveal(false)
  }
  function handleToggle2() {
    !isReveal2 ? setIsReveal2(true) : setIsReveal2(false)
  }

  const onSubmit = (data) => console.log(data)


  
  return (
    <>
      <main className='container-lg my-3 d-flex flex-column '>
        <div>
          <div className='text-center'>
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </div >
          <h2 className='fs-3 fw-bold my-4 text-center w-75 m-auto'>CREATE YOUR ACCOUNT</h2>

          <Form className='w-75 m-auto from' onSubmit={handleSubmit(onSubmit)}>
            {/* first name  */}
            <Form.Label>First name</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="first-name" className='border border-3 rounded-3' {...register("firstName")}/>
              {/* {errors.firstName && <span className='fw-bold text-danger'>This field is required</span>} */}
              <p className='text-danger fw-bold'>{errors.firstName?.message}</p>
            </FloatingLabel>

            {/* last name  */}
            <Form.Label>Last Name</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="last-name" className='border border-3 rounded-3' {...register("LastName")}/>
              {/* <p className='text-danger fw-bold'>{errors.lastName?.message}</p> */}
            </FloatingLabel>

            {/* email  */}
            <Form.Label>Email</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" className='border border-3 rounded-3' {...register('Email')}/>
            </FloatingLabel>

            {/* phone number  */}
            <Form.Label>Phone Number</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label=""
              className="mb-3"
            >
              <Form.Control type="number" placeholder="phone-number" className='border border-3 rounded-3' {...register("phoneNumber")}/>
              <p>{errors.phoneNumber?.message}</p>
            </FloatingLabel>

            {/* password  */}
            <Form.Label>Password (8 minimum characters)</Form.Label>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type={isReveal ? 'text' : 'password'} placeholder="Password" className='border border-3 rounded-3 position-relative pswd' {...register('password')}/>
              {errors.password && <span className='fw-bold text-danger'>Minimum length of 8 characters</span>}
              <p className='position-absolute top-0 end-0 mt-3 me-3' onClick={handleToggle1} role='button'>
                {isReveal ? <FaEyeSlash /> : <FaEye />}
              </p>
            </FloatingLabel>

            {/* confirm password  */}
            <Form.Label>Confirm Password</Form.Label>
            <FloatingLabel controlId="floatingPassword" label="Confirm Password">
              <Form.Control type={isReveal2 ? 'text' : 'password'} placeholder="Password" className='border border-3 rounded-3 position-relative con-pswd' {...register('Confirm Password')}/>
              <p className='position-absolute top-0 end-0 mt-3 me-3' onClick={handleToggle2} role='button'>
                {isReveal2 ? <FaEyeSlash /> : <FaEye />}
              </p>
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
            <button className='btn btn-danger fs-3 text-white w-100' onClick={confirmPassword}>
              Create Account
            </button>

            {/* more details  */}
            <p className='text-center mt-3 fw-bold'>
              Have an account? 
              <Link to='/SignIn' className='text-decoration-none'>Sign In</Link>
            </p>
            <p className='text-center'>
            By Creating your Quickmunch account, you agree to the  <a href="#" className='text-decoration-none'>Terms of Use</a> and <a href="#" className='text-decoration-none'>Privacy Policy</a>
            </p>

          </Form>
        </div>
      </main>
    </>
  )
}

export default SignUp