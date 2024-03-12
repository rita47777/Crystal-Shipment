import React from 'react'

function Form() {
    return (
        <>
            <form action="#">
                <div className="d-flex mt-3">
                    <div className="flex-grow-1 me-2">
                        <input type="text" placeholder='Name' className='form-control' />
                    </div>
                    <div className="flex-grow-1 ms-2">
                        <input type="email" placeholder='Email' className='form-control' />
                    </div>
                </div>
                <div className="d-flex mt-3">
                    <div className="flex-grow-1 me-2">
                        <input type="tel" placeholder='Phone (Optional)' className='form-control' />
                    </div>
                    <div className="flex-grow-1 ms-2">
                        <input type="text" placeholder='Subject' className='form-control' />
                    </div>
                </div>
                <textarea className='form-control mt-3 p-2' placeholder='Enter your message here' name="" id="" cols="30" rows="10"></textarea>

                <div className="mt-3">
                    <button className="btn btn-danger">Submit</button>
                </div>

            </form>
        </>
    )
}

export default Form