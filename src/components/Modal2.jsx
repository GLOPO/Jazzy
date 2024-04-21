import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/modal2.css'

const Modal2 = () => {
  return (
    <>
      <main >
      <div
            className="modal show modal-90w "
            style={{ display: 'block', position: 'initial' }}
          >
            <Modal.Dialog className='shadow'>
              <Modal.Header>
                <Modal.Title>Your order from</Modal.Title>
              </Modal.Header>

              <Modal.Body className='my-0 pb-0'>
                <div className='d-flex justify-content-between'>
                  <span className='text-danger fw-bold'>Double Grilled Chicken Burger</span>
                  <p className='text-muted fw-bold fs-6'>N12000.0</p>
                </div>
                <div className='w-25 d-flex justify-content-between border-0 rounded-3 p-1 align-items-center change px-2'>
                  <button className='border-0 rounded-1 w-25 text-danger fw-bold'>-</button>
                  <p className='my-1 fs-5'>1</p>
                  <button className='border-0 rounded-1 w-25 text-danger fw-bold'>+</button>
                </div>
              </Modal.Body>
              <hr />

              <Modal.Body className='text-secondary fw-bold'>
                <div className='d-flex justify-content-between'>
                  <span>Items total:</span>
                  <span>N12000.0</span>
                </div>
                <div className='d-flex justify-content-between'>
                  <span>Discount:</span>
                  <span>N0</span>
                </div>
                <div className='d-flex justify-content-between'>
                  <span>Delivery charge:</span>
                  <span>N0.0</span>
                </div>
              </Modal.Body>
              <hr />

              <Modal.Body>
                <div className='d-flex justify-content-between text-black fw-bold pb-5'>
                  <span>Total:</span>
                  <span>N12000.0</span>
                </div>
              </Modal.Body>
            </Modal.Dialog>
          </div>
      </main>
    </>
  )
}

export default Modal2