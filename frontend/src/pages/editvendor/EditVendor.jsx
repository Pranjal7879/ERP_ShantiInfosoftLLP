import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

function EditVendor({ open, onClose, vendor, refreshVendors }) {
  const [VendorName, setVendorName] = useState("");
  const [Contact, setContact] = useState("");
  const [EmailId, setEmailId] = useState("");
  const [Address, setAddress] = useState("");
  const [GST, setGST] = useState("");

  useEffect(() => {
    if (vendor) {
      setVendorName(vendor.vendorName);
      setContact(vendor.contact);
      setEmailId(vendor.emailId);
      setAddress(vendor.address);
      setGST(vendor.GST);
    }
  }, [vendor]);

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedVendor = {
      vendorName: VendorName,
      contact: Contact,
      emailId: EmailId,
      address: Address,
      GST: GST,
    };

    try {
      await axios.put(`http://localhost:5000/api/vendors/${vendor._id}`, updatedVendor);
      refreshVendors();
      onClose();
    } catch (error) {
      console.error('Error updating vendor:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-describedby="alert-dialog-slide-description">
      <div className="w-96 mx-auto p-4 mt-8 rounded-lg shadow-md">
        <div className="flex flex-row">
          <h1 className="text-2xl font-bold mb-4 w-full">Edit Vendor</h1>
          <CloseIcon onClick={handleClose} className="cursor-pointer ml-auto" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-2 text-xl">Vendor Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={VendorName}
              onChange={(e) => setVendorName(e.target.value)}
              className="shadow-sm border-2 rounded-md w-full px-3 py-2"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="Contact" className="mb-2 text-xl">Contact</label>
            <input
              id="contact"
              name="contact"
              type="text"
              placeholder="789xxxxx63"
              value={Contact}
              onChange={(e) => setContact(e.target.value)}
              className="shadow-sm border-2 rounded-md w-full px-3 py-2"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-2 text-xl">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={EmailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="shadow-sm border-2 rounded-md w-full px-3 py-2"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="Address" className="mb-2 text-xl">Address</label>
            <input
              id="Address"
              name="Address"
              type="text"
              placeholder="Address"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              className="shadow-sm border-2 rounded-md w-full px-3 py-2"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="GST" className="mb-2 text-xl">GST</label>
            <input
              id="GST"
              name="GST"
              type="text"
              placeholder="GST79xxxxxx546"
              value={GST}
              onChange={(e) => setGST(e.target.value)}
              className="shadow-sm border-2 rounded-md w-full px-3 py-2"
            />
          </div>

          <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-full mt-2">
            Save
          </button>
        </form>
      </div>
    </Dialog>
  );
}

export default EditVendor;
  