import Dialog from '@mui/material/Dialog';
function DeleteVendor ({  open,onClose,onDelete, vendorId  })  {

const handleClose = () => { 
  onClose(); 
  };

  const handleDelete = () => {
    onDelete(vendorId)
    onClose()
  }
    return (
        <>
         <Dialog open={open}
          onClose={handleClose}
           aria-describedby="alert-dialog-slide-description"
        >

          
       <div className='p-5'>
        <h1  className="text-2xl  mb-4 font-bold"> Delete Vendor</h1>
        <h3 className="text-xl font-normal mb-4">Are you sure you want to delete this 
        <br />Vendor?</h3>
        <div className="flex justify-end space-x-2">
          <button type="button" className="px-4 py-2 rounded-md text-xl hover:bg-gray-200 font-medium" onClick={handleClose}> Cancel </button>
          <button type="button" className="px-4 py-2 rounded-md text-xl font-medium hover:bg-gray-200" onClick={handleDelete}> Delete </button>
        </div>
        </div>


    </Dialog>
        </>
    )
}


export default DeleteVendor;




