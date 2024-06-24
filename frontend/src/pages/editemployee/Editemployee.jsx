import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

function Editemployee({ open, onClose, employee, handleEmployeeEdit }) {
  
  const [name, setName] = useState(employee?.name ? employee?.name : ""); 
  const [email, setEmail] = useState(employee?.email ? employee?.email : "");
  const [jobRole, setJobRole] = useState(employee?.jobRole ? employee?.jobRole : "");

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedEmployee = {
      name,
      email,
      jobRole,
    };


    handleEmployeeEdit(updatedEmployee);
    setName('');
    setEmail('');
    setJobRole('');
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} aria-describedby="alert-dialog-slide-description">
        <div className="w-96 mx-auto p-4 mt-8 rounded-lg shadow-md">
          <div className="flex flex-row">
            <h1 className="text-2xl font-bold mb-4 w-full">Edit Employee</h1>
            <CloseIcon onClick={handleClose} className="cursor-pointer ml-auto" />
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
              // required
              />
            </div>
            <div className="flex flex-col mb-4 ">
              <label htmlFor="email" className="mb-2 text-xl">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border max-w-96 rounded-md px-2 py-1 "
              // required
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
                className="border max-w-96 rounded-md px-2 py-1 "
              // required
              />
            </div>

            <button type="submit" variant="contained" color="primary" fullWidth>
              Save
            </button>
          </form>
        </div>
      </Dialog>
    </>
  );
}

export default Editemployee;
