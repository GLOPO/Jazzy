import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [isReveal, setIsReveal] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  
  function handleToggle () {
  !isReveal ? setIsReveal(true) : setIsReveal(false)
  }

  useEffect(() => {
    document.title = 'Login | page'
  })

  return (
    <>
      <main className='container vh-50 d-flex flex-column my-3'>
        <div>
          <div className="text-center">
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </div>
          <h2 className='fs-3 fw-bold my-4 text-center w-75 m-auto'>SIGN IN TO YOUR ACCOUNT</h2>

          {/* form  */}
          <Form className='w-75 m-auto' onSubmit={handleSubmit(onSubmit)}>
            {/* input for email  */}
            <Form.Label className='fs-6 text-secondary'> Email </Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="example@mail.com"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" className='border rounded-3 border-3 '/>
            </FloatingLabel>

            {/* input for password  */}
            <Form.Label className='fs-6 text-secondary'> Password </Form.Label>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type={isReveal ? 'text' : 'password'} placeholder="Password" className='border border-3 rounded-3 position-relative' {...register("password" ,{ required: true })}/>
              {errors.password && <span className='text-danger fw-bold'>This field is required</span>}
              <p className='position-absolute top-0 end-0 mt-3 me-2' role='button' onClick={handleToggle}>
                {isReveal ? <FaEyeSlash /> : <FaEye />}
              </p>
            </FloatingLabel>

            {/* below is for check box  */}
            <div className='d-flex mt-3 justify-content-between'>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`default-${type}`}
                  label={'Keep me signed in'}
                  className='fs-6 fw-bold'
                />
              </div>
            ))}

            <Link className='text-decoration-none d-none d-lg-block' to='#'>Reset Password</Link>
            </div>

            <button className='btn btn-danger fs-3 text-white w-100'> Sign In</button>

            <p className='text-center mt-3 fw-bold'>
              Don't have an account?
              <Link className='text-decoration-none' to='/SignUp'>Create one</Link>
            </p>
          </Form>
        </div>
      </main>
    </>
  )
}

export default SignIn