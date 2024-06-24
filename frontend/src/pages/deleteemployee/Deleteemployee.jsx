import Dialog from '@mui/material/Dialog';

function Deleteemployee ({ open, onClose, onDelete, employeeId  })  {
const handleClose = () => { 
  onClose(); 
  };

  const handleDelete = () => {
    if (typeof employeeId === 'string') {
      onDelete(employeeId);
    } else {
      console.error('Invalid employee ID:', employeeId);
    }
    onClose();
  };

  
    return (
        <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >

      {/* <div className="fixed  w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-6"> */}
          
       <div className='p-5'>
        <h1  className="text-2xl  mb-4 font-bold"> Delete Employee</h1>
        <h3 className="text-xl font-normal mb-4">Are you sure you want to delete this 
        <br />employee?</h3>
        <div className="flex justify-end space-x-2">
          <button type="button" className="px-4 py-2 rounded-md text-xl hover:bg-gray-200 font-medium" onClick={handleClose}> Cancel </button>
          <button type="button" className="px-4 py-2 rounded-md text-xl font-medium hover:bg-gray-200" onClick={handleDelete}> Delete </button>
        </div>
        </div>
      {/* </div>
    </div> */}

    </Dialog>
        </>
    )
}


export default Deleteemployee;




/*   








import React from 'react'

function ConfirmationModal({ message, onCancel, onDelete }) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50 transition-opacity duration-300">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 sm:px-0">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h5 className="text-xl font-bold text-gray-800">Delete Employee</h5>
            <button type="button" onClick={onCancel} className="text-gray-400 focus:outline-none hover:text-gray-700">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 010-1.414L10 8.586l5.707-5.707a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-5.707 5.707a1 1 0 01-1.414-1.414L8.586 10L4.293 4.293z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-700">{message}</p>
          </div>
          <div className="flex items-center justify-end space-x-2 p-4 border-t border-gray-200">
            <button type="button" onClick={onCancel} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-md px-3 py-2 text-sm">
              Cancel
            </button>
            <button type="button" onClick={onDelete} className="text-red-500 bg-red-100 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-md px-3 py-2 text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal











*/