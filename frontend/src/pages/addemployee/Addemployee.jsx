import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
// import { useState } from 'react';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import Slide from '@mui/material/Slide';
// import React from 'react';
function Addemployee({ open, onClose, refreshEmployees }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [jobRole, setJobRole] = useState('')
  //   For Modal->>>>>>>>>>>>>>>>>>>>>>>>>>>.

  const handleClose = () => {
    onClose();
  };
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/employees', {
        name,
        email,
        jobRole,
      });
      console.log('New employee added:', response.data);
      refreshEmployees(); 
      handleClose();
    } catch (error) {
      console.error('Error adding new employee:', error);
    }
  }
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >


        {/* <div className='flex p-36  justify-center'> */}
        <div className=" w-96 mx-auto p-4 mt-8 rounded-lg shadow-md">
          <div className='flex flex-row'>
            <h1 className="text-2xl font-bold mb-4 w-full">Add Employee</h1>
            <CloseIcon onClick={handleClose} className='cursor-pointer  ml-auto' />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-2 text-xl">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border max-w-96 rounded-md px-2 py-1"
                required
              />
            </div>
            <div className="flex flex-col mb-4 ">
              <label htmlFor="email" className="mb-2  text-xl">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border max-w-96 rounded-md px-2 py-1 "
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="jobRole" className="mb-2 text-xl">Job Role</label>
              <input
                id="jobRole"
                name="jobRole"
                type="text"
                placeholder="Role"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                className="border  max-w-96 rounded-md px-2 py-1 "
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 w-full rounded-md hover:bg-blue-700  "
            >
              Save
            </button>
          </form>
        </div>
        {/* </div> */}


      </Dialog>

    </>
  )
}

export default Addemployee;
















// import { Link, useNavigate } from 'react-router-dom';
// import ClearIcon from '@mui/icons-material/Clear';
// import { useState } from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import Slide from '@mui/material/Slide';
// import React from 'react';


// const AddEmployee = ({ open, onClose }) => {
//     const navigate = useNavigate();
//    const[addEmailError,setAddEmailError] = useState('');
//     function EmailValidation(e) {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (emailRegex.test(e.target.value) && e.target.value.includes('@gmail.com') || e.target.value === '') {
//             setAddEmailError('');
//         } else {
//             setAddEmailError('Please Enter valid Email address.')
//         }
//         console.log("ggs")
//     }

//     function handleSubmit(e) {
//         e.preventDefault();

//         }
//     const Transition = React.forwardRef(function Transition(props, ref) {
//         return <Slide direction="up" ref={ref} {...props} />;
//       });
// const handleClose = () => {
//     onClose();
// };

//     return(
//         <>
//     <Dialog
//     open={open}
//     TransitionComponent={Transition}
//     keepMounted
//     onClose={handleClose}
//     aria-describedby="alert-dialog-slide-description"
//   >
//      <div className="w-[450px] h-[450px] bg-[#fff] rounded-xl">
//                 <div className="flex justify-between mt-8 text-2xl">
//                     <h2 className='ml-8'>Add Employee</h2>
//                     <DialogActions>
//               <ClearIcon className="text-2xl mr-7 cursor-pointer" onClick={handleClose} />
//                     </DialogActions>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mt-8 flex flex-col gap-5">
//                         <div>
//                             <label className="text-2xl ml-8">Name</label><br />
//                             <input className="h-9 w-96 ml-8 pl-2.5 text-base border border-gray-300 rounded w-[26vw]" type="text" name="" id="" placeholder='Name' required/>
//                         </div>
//                         <div>
//                             <label className='text-2xl ml-8'>Email</label><br />
//                             <input className="h-9 w-96 ml-8 pl-2.5 text-base border border-gray-300 rounded w-[26vw]" type="email" name="" id="" placeholder='Email' onChange={EmailValidation}required/>
//                             {addEmailError && <p className="text-red-600 ml-8 mt-1">{addEmailError}</p>}
//                         </div>
//                         <div>
//                             <label className='text-2xl ml-8'>Job Role</label><br />
//                             <input className='h-9 w-96 ml-8 pl-2.5 text-base border border-gray-300 rounded w-[26vw]' type="text" name="" id="" placeholder='Job Role' required/>
//                         </div>
//                         <button type='submit' className='h-9 w-96 ml-8 bg-[#031130] text-white text-base mt-4 rounded w-[26vw] cursor-pointer'>Save</button>
//                     </div>
//                 </form>
//             </div>
//   </Dialog>
//         </>
//     );
// }






