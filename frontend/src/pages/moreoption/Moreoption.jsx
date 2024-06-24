import React from 'react'
import Dialog from '@mui/material/Dialog';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Moreoption = () => {
  return (
    <div className='flex-col '>

     <Dialog
        open={open}
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        
        
   <button className="text-2xl font-bold p-2 m-1  bg-green-200">
     <EditIcon/> Edit
    </button>


    <button className="text-2xl font-bold p-2 m-1  bg-red-200" >
     <DeleteForeverIcon/> Delete
    </button>

 </Dialog>
    </div>
  )
}

export default Moreoption;

