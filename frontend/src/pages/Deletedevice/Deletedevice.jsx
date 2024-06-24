import Dialog from '@mui/material/Dialog';

function Deletedevice ({ open, onClose, onDelete, deviceId })  {
const handleClose = () => { 
  onClose(); 
  };

  const handleDelete = () => {
    onDelete(deviceId)
    onClose()
  }
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
        <h1  className="text-2xl  mb-4 font-bold"> Delete Device</h1>
        <h3 className="text-xl font-normal mb-4">Are you sure you want to delete this 
        <br />Device?</h3>
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


export default Deletedevice;




