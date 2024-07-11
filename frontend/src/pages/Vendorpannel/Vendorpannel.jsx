import React, { useState, useEffect } from "react";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Employees from '../employee/Employees';
import Leftmenu from "../leftmenu/Leftmenu";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import AddVendor from "../addvendor/AddVendor";
import EditVendor from "../editvendor/EditVendor";
import DeleteVendor from "../deletevendor/DeleteVendor";
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export const fetchVendors = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/vendors', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching vendors:', error);
    return [];
  }
};

function Vendorpannel() {
  const [vendors, setVendors] = useState([]);
  const [isEditVendorOpen, setIsEditVendorOpen] = useState(false);
  const [isDeleteVendorOpen, setIsDeleteVendorOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showAddVendor, setShowAddVendor] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const vendorsPerPage = 8;

  const [searchInput, setSearchInput] = useState('');
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const vendorsData = await fetchVendors();
      setVendors(vendorsData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchInput) {
      const inputValue = searchInput.toLowerCase();
      const filtered = vendors.filter(vendor =>
        vendor.vendorName && vendor.vendorName.toLowerCase().includes(inputValue)
      );
      setFilteredVendors(filtered);
    } else {
      setFilteredVendors([]);
    }
  }, [searchInput, vendors]);

  const toggleAddVendor = () => {
    setShowAddVendor((prevState) => !prevState);
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

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastVendor = currentPage * vendorsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
  const currentVendors = vendors.slice(indexOfFirstVendor, indexOfLastVendor);

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchInput(inputValue);
    setShowSuggestions(true);

    if (inputValue) {
      const filtered = vendors.filter(vendor =>
        vendor.vendorName && vendor.vendorName.toLowerCase().includes(inputValue)
      );
      setFilteredVendors(filtered);
    } else {
      setFilteredVendors([]);
    }
  };

  const handleSuggestionClick = (vendor) => {
    const vendorIndex = vendors.findIndex(v => v._id === vendor._id);
    const newPage = Math.ceil((vendorIndex + 1) / vendorsPerPage);
    setCurrentPage(newPage);
    setShowSuggestions(false);
    setSearchInput('');
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
            <div className="relative gap-2 flex sm:flex-row flex-col items-center justify-end">
              <ClickAwayListener onClickAway={() => setShowSuggestions(false)}>
                <div className="relative">
                  <input
                    type="search"
                    className="border h-12 rounded-md placeholder:pl-2 pl-4 pr-4"
                    placeholder="🔍 Search..."
                    value={searchInput}
                    onChange={handleSearchInputChange}
                  />
                  {showSuggestions && searchInput && (
                    <div className="absolute bg-white border rounded-md w-full shadow-lg max-h-60 overflow-auto z-10">
                      {filteredVendors.map(vendor => (
                        <div
                          key={vendor._id}
                          className="p-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleSuggestionClick(vendor)}
                        >
                          {vendor.vendorName}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ClickAwayListener>
              <div className="px-4">
                <button
                  className="px-8 py-2 flex bg-red-500 text-white rounded-md hover:bg-red-700 space-x-4"
                  onClick={toggleAddVendor}
                >
                  <PostAddIcon className="text-white" />
                  <p>Add Vendor</p>
                </button>
              </div>
            </div>
          </div>

          <table className="w-full overflow-x-full text-left capitalize">
            <thead className="font-semibold uppercase bg-gray-200">
              <tr className="txt-left text-base h-16">
                <th className="p-2 h-16">Vendor Name<FontAwesomeIcon icon={faSort} /></th>
                <th className="p-2 h-16">Contact<FontAwesomeIcon icon={faSort} /></th>
                <th className="p-2 h-16">Email ID<FontAwesomeIcon icon={faSort} /></th>
                <th className="p-2 h-16">Address<FontAwesomeIcon icon={faSort} /></th>
                <th className="p-2 h-16">GST<FontAwesomeIcon icon={faSort} /></th>
                <th className="p-2 h-16"></th>
              </tr>
            </thead>
            <tbody className="font-semibold lg:text-xl font-sans">
              {currentVendors.map((vendor) => (
                <tr key={vendor._id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-4">{vendor.vendorName}</td>
                  <td className="px-4 py-4">{vendor.contact}</td>
                  <td className="px-4 py-4">{vendor.emailId}</td>
                  <td className="px-4 py-4">{vendor.address}</td>
                  <td className="px-4 py-4">{vendor.gst}</td>
                  <td className="px-4 py-4">
                    <Button
                      id='basic-button'
                      aria-controls={anchorEl ? 'basic-menu' : undefined}
                      aria-haspopup='true'
                      aria-expanded={anchorEl ? 'true' : undefined}
                      onClick={(event) => handleClick(event, vendor)}
                    >
                      <MoreHorizIcon style={{ color: 'black' }} />
                    </Button>
                    <Menu
                      id='basic-menu'
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
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
          <Stack spacing={2} className="flex justify-center mt-4">
            <Pagination
              count={Math.ceil(vendors.length / vendorsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              className="mx-auto"
              sx={{ display: vendors.length <= vendorsPerPage ? 'block' : 'flex', justifyContent: 'center' }}
            />
          </Stack>
        </div>
      </div>

      {showAddVendor && <AddVendor open={showAddVendor} onClose={() => setShowAddVendor(false)} refreshVendors={fetchVendors} />}
      {isDeleteVendorOpen &&
        <DeleteVendor
          open={isDeleteVendorOpen}
          onClose={() => setIsDeleteVendorOpen(false)}
          onDelete={handleDeleteVendor}
          vendorId={selectedVendor?._id}
        />}
      {isEditVendorOpen &&
        <EditVendor
          open={isEditVendorOpen}
          onClose={() => setIsEditVendorOpen(false)}
          setVendors={setVendors}
          vendor={selectedVendor}
        />}
    </>
  );
}

export default Vendorpannel;
