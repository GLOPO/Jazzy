import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/modal1.css'

const Modal1 = () => {
  return (
    <>
      <main >
      <div
            className="modal show modal-90w "
            style={{ display: 'block', position: 'initial' }}
          >
            <Modal.Dialog className='shadow mode'>

              <Modal.Body>
                {/* title  */}
                <Modal.Title>
                    <p>Review and place order</p>
                    <p className='fs-6 fw-normal'>Review / Add address and fulfill payments to complete your purchase   </p>
                </Modal.Title>
                <hr />

{/* recipient  */}
                <Modal.Title>Recipient Information</Modal.Title>
                <button className='mt-2 bg-black text-white fw-bold border-0  rounded-3 py-2 button'>Add Receipt</button>
                <hr />

{/* delivery address  */}
                <Modal.Title>Delivery Address</Modal.Title>
                <button className='mt-2 bg-black text-white fw-bold border-0  rounded-3 py-2  button'>Add Delivery Address</button>
                <hr />

                {/* button  */}
                <button className='btn btn-success w-100 fw-bold'>Place your order</button>
              </Modal.Body>
            </Modal.Dialog>
          </div>
      </main>
    </>
  )
}

export default Modal1