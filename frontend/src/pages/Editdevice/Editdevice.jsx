import React, { useState, } from 'react'
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';


function Editdevice({ open, onClose, }) {


    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [status, setStatus] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [warrantyDate, setWarrantyDate] = useState('');



    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >

                {/* <div className='flex justify-center items-center h-screen bg-gray-100'> */}
                <div className="w-full sm:w-96 bg-white shadow-md rounded-md p-6">
                    <div className='justify-between flex '>
                        <h1 className="text-2xl font-bold mb-4">Edit Device</h1>
                        <CloseIcon onClick={handleClose} className='cursor-pointer ml-auto' />

                    </div>

                    <div className="mb-4">
                        <label className="text-sm mb-2 font-medium" htmlFor="name">
                            Device Name
                        </label>
                        <input
                            id="name"
                            className="shadow-sm border-2  rounded-md w-full px-3 py-2 "
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className=" mb-2  text-sm font-medium" htmlFor="category">
                            Category
                        </label>
                        <select

                            className="shadow-sm border-2 rounded-md w-full px-3 py-2 "
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="IOS">IOS</option>
                            <option value="Android">Android</option>
                            <option value="MacBook">MacBook</option>
                            <option value="EliteBook">EliteBook</option>
                            <option value="Desktop">Desktop</option>

                        </select>
                    </div>
                    {/* <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="image">
                Change Image
            </label>
            
        </div> */}




                    <div className="mb-4">
                        <label className=" mb-2  text-sm font-medium" htmlFor="status">
                            Status
                        </label>
                        <input
                            id="status"
                            className="shadow-sm border-2 rounded-md w-full px-3 py-2 "
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </div>


                    <div className="mb-4">
                        <label className="text-sm mb-2 font-medium" htmlFor="name">
                            Receiver Name
                        </label>
                        <input
                            id=" receiver name"
                            className="shadow-sm border-2  rounded-md w-full px-3 py-2 "
                            value={name}
                            onChange={(e) => setReceiverName(e.target.value)}
                        />
                    </div>


                    <div className="mb-4">
                        <label className=" mb-2  text-sm font-medium" htmlFor="purchaseDate">
                            Purchase Date
                        </label>
                        <input
                            id="purchaseDate"
                            type="date"
                            className="shadow-sm border-2 rounded-md w-full px-3 py-2 "
                            value={purchaseDate}
                            onChange={(e) => setPurchaseDate(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className=" mb-2  text-sm font-medium" htmlFor="warrantyDate">
                            Warranty Date
                        </label>
                        <input
                            id="warrantyDate"
                            type="date"
                            className="shadow-sm border-2 rounded-md w-full px-3 py-2 "
                            value={warrantyDate}
                            onChange={(e) => setWarrantyDate(e.target.value)}
                        />
                    </div>


                    {/* <div>
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <h3>Preview:</h3>
          <img src={selectedImage} alt="Selected" 
           className="max-w-full max-h-36 mt-2"/>
        </div>
      )}
    </div> */}

                    <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-full mt-2">
                        update
                    </button>
                </div>
                {/* </div> */}
            </Dialog>
        </>
    )
}


export default Editdevice;