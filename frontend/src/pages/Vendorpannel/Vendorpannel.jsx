import React, { useState, useEffect } from "react";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Employees from '../employee/Employees';
import Leftmenu from "../leftmenu/Leftmenu";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddVendor from "../addvendor/AddVendor";
import EditVendor from "../editvendor/EditVendor";
import DeleteVendor from "../deletevendor/DeleteVendor";
import axios from "axios";

function Vendorpannel() {
  const [vendors, setVendors] = useState([]);
  const [isEditVendorOpen, setIsEditVendorOpen] = useState(false);
  const [isDeleteVendorOpen, setIsDeleteVendorOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAddVendorOpen, setIsAddVendorOpen] = useState(false);

  const open = Boolean(anchorEl);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/vendors',{

        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }});

      setVendors(response.data);
    } catch (error) {
      console.error('Error fetching vendors:', error);
    }
  };

  const handleClick = (event, vendor) => {
    setAnchorEl(event.currentTarget);
    setSelectedVendor(vendor);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleEditVendor = () => {
    setIsEditVendorOpen((prevState) => !prevState);
    setAnchorEl(null);
  };

  const toggleDeleteVendor = () => {
    setIsDeleteVendorOpen((prevState) => !prevState);
    setAnchorEl(null);
  };

  const toggleAddVendor = () => {
    setIsAddVendorOpen((prevState) => !prevState);
    setAnchorEl(null);
  };

  const refreshVendors = () => {
    fetchVendors();
  };

  const handleDeleteVendor = async (vendorId) => {
    try {
      await axios.delete(`http://localhost:5000/api/vendors/${vendorId}`);
      setVendors(vendors.filter(vendor => vendor._id !== vendorId));
      setIsDeleteVendorOpen(false);
    } catch (error) {
      console.error('Error deleting vendor:', error);
    }
  };

  return (
    <>
      <div>
        <Employees />
      </div>

      <div className="flex">
        <div className="sm:w-[10%] w-[10%] lg:w-[18%]">
          <Leftmenu />
        </div>

        <div className="sm:w-[90%] w-[90%] lg:w-[86%] mx-auto p-8 overflow-x-auto mt-2 shadow-md">
          <div className="flex justify-between space-y-4">
            <div className="">
              <h1 className="text-3xl font-bold">Vendor</h1>
            </div>
            <div className="relative gap-2 flex sm:flex-row flex-col  items-center justify-end">
              <div className="relative">
                <input type="search" className="border h-12 rounded-md placeholder:pl-2 pl-4 pr-4" placeholder="🔍 Search..." />
              </div>
              <div className="flex justify-between">
                <div className="px-4">
                  <button className="px-8 py-2 flex bg-red-500 text-white rounded-md hover:bg-red-700 space-x-4" onClick={toggleAddVendor}>
                    <PostAddIcon className="text-white" />
                    <p>Add Vendor</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <table className="w-full overflow-x-full text-left capitalize">
            <thead className="font-semibold uppercase bg-gray-200">
              <tr className="txt-left text-base h-16">
                <th className="p-2 h-16">VendorName<FontAwesomeIcon icon={faSort} /></th>
                <th className="p-2 h-16">Contact<FontAwesomeIcon icon={faSort} /></th>
                <th className="p-2 h-16">EmailId<FontAwesomeIcon icon={faSort} /></th>
                <th className="p-2 h-16">Address<FontAwesomeIcon icon={faSort} /></th>
                <th className="p-2 h-16">GST<FontAwesomeIcon icon={faSort} /></th>
                <th className="p-2 h-16"></th>
              </tr>
            </thead>
            <tbody className="font-semibold lg:text-xl font-sans">
              {vendors.map((vendor, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-4">{vendor.vendorName}</td>
                  <td className="px-4 py-4">{vendor.contact}</td>
                  <td className="px-4 py-4">{vendor.emailId}</td>
                  <td className="px-4 py-4">{vendor.address}</td>
                  <td className="px-4 py-4">{vendor.GST}</td>
                  <td className="px-4 py-4">
                    <Button
                      id={`basic-button-${index}`}
                      aria-controls={`basic-menu-${index}`}
                      aria-haspopup='true'
                      aria-expanded={open ? 'true' : undefined}
                      onClick={(event) => handleClick(event, vendor)}
                    >
                      <MoreHorizIcon style={{ color: 'black' }} />
                    </Button>
                    <Menu
                      id={`basic-menu-${index}`}
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': `basic-button-${index}`,
                      }}
                    >
                      <MenuItem onClick={toggleEditVendor}><EditIcon />Edit</MenuItem>
                      <MenuItem onClick={toggleDeleteVendor}><DeleteForeverIcon />Delete</MenuItem>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isEditVendorOpen && (
        <EditVendor 
          open={isEditVendorOpen} 
          onClose={toggleEditVendor} 
          vendor={selectedVendor}
          refreshVendors={refreshVendors}
        />
      )}

      {isDeleteVendorOpen && (
        <DeleteVendor 
          open={isDeleteVendorOpen} 
          onClose={toggleDeleteVendor} 
          onDelete={handleDeleteVendor} 
          vendorId={selectedVendor?._id} 
        />
      )}

      {isAddVendorOpen && (
        <AddVendor 
          open={isAddVendorOpen} 
          onClose={toggleAddVendor} 
          refreshVendors={refreshVendors} 
        />
      )}
    </>
  );
}

export default Vendorpannel;
