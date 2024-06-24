// import { Button } from '@mui/material'
import React, { useState,useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

function Assigndevice({ open, onClose, deviceId, updateDevice }) {
    // console.log(deviceId)

    const handleClose = () => { 
        onClose(); 
    };

    const [receiver, setReceiver] = useState('');
    // const [status, setStatus] = useState('');
    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        fetchEmployees();
      }, []);
    
      const fetchEmployees = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/employees",{
        
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }});

          setEmployees(response.data);
          
          console.log("employees",response.data)
        } catch (error) {
          console.error("Error fetching employees:", error);
        }
      };

      let status = "Assign"

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/devices/${deviceId}`, { receiver, status });
            updateDevice(deviceId, response.data);  // Update the device in the parent component
            handleClose();
        } catch (error) {
            console.error('Error assigning device:', error);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-describedby="alert-dialog-slide-description">
            <div className="w-full sm:w-96 bg-white shadow-md rounded-md p-6">
                <div className='justify-between flex '>
                    <h1 className="text-2xl font-bold mb-4">Assign</h1>
                    <CloseIcon onClick={handleClose} className='cursor-pointer ml-auto' />
                </div>
                <div className="mb-4">
                    <label className="mb-2 text-sm font-medium" htmlFor="receiver">
                        Receiver Name
                    </label>
                   
                    <select
                        className="shadow-sm border-2 rounded-md w-full px-3 py-2"
                        value={receiver}
                        onChange={(e) => setReceiver(e.target.value)}
                    >
                        <option value="" disabled>Select Receiver</option>
                        {employees.map((employee) => (
                            <option key={employee._id} value={employee.name}>{employee.name}</option>
                        ))}
                    </select>

                    
          
                </div>
               
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-full mt-2" onClick={handleSubmit}>
                    Assign
                </button>
            </div>
        </Dialog>
    )
}

export default Assigndevice;
