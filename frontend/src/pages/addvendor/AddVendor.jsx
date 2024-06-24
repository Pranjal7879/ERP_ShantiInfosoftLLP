import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';

function AddVendor({ open, onClose, refreshVendors }) {
  const [vendorName, setVendorName] = useState('');
  const [contact, setContact] = useState('');
  const [emailId, setEmailId] = useState('');
  const [address, setAddress] = useState('');
  const [GST, setGST] = useState('');

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/vendors', {
        vendorName,
        contact,
        emailId,
        address,
        GST,
      });
      console.log('Vendor added successfully:', response.data);
      refreshVendors();
      handleClose();
    } catch (error) {
      console.error('Error adding vendor:', error);
      console.error('Error response:', error.response?.data); // Additional logging
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-describedby="alert-dialog-slide-description">
      <div className="w-96 mx-auto p-4 mt-8 rounded-lg shadow-md">
        <div className="flex flex-row">
          <h1 className="text-2xl font-bold mb-4 w-full">Add Vendor</h1>
          <CloseIcon onClick={handleClose} className="cursor-pointer ml-auto" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="vendorName" className="mb-2 text-xl">Vendor Name</label>
            <input
              id="vendorName"
              name="vendorName"
              type="text"
              placeholder="Vendor Name"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
              className="border max-w-96 rounded-md px-2 py-1"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="contact" className="mb-2 text-xl">Contact</label>
            <input
              id="contact"
              name="contact"
              type="text"
              placeholder="123xxxxx89"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="border max-w-96 rounded-md px-2 py-1"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="emailId" className="mb-2 text-xl">Email Id</label>
            <input
              id="emailId"
              name="emailId"
              type="email"
              placeholder="abcd@gmail.com"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="border max-w-96 rounded-md px-2 py-1"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="address" className="mb-2 text-xl">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border max-w-96 rounded-md px-2 py-1"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="GST" className="mb-2 text-xl">GST</label>
            <input
              id="GST"
              name="GST"
              type="text"
              placeholder="GSTxxxxx89"
              value={GST}
              onChange={(e) => setGST(e.target.value)}
              className="border max-w-96 rounded-md px-2 py-1"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 w-full rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </form>
      </div>
    </Dialog>
  );
}

export default AddVendor;
