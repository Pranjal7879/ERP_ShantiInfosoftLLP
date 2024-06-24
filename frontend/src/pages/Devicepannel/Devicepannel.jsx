import React, { useState, useEffect } from "react";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Employees from '../employee/Employees'
import Leftmenu from "../leftmenu/Leftmenu";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Button from '@mui/material/Button';
import Deletedevice from "../Deletedevice/Deletedevice";
import Editdevice from "../Editdevice/Editdevice";
import Assigndevice from "../Assigndevice/Assigndevice";
import Adddevice from "../Adddevice/Adddevice";
import axios from "axios";

export const fetchDevices = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/devices',{
        
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }});

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching devices:', error);
    return [];
  }
};

function Devicepannel() {
  const [devices, setDevices] = useState([]);
  const [isDeleteDeviceOpen, setIsDeleteDeviceOpen] = useState(false);
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const [showAdddevice, setShowAdddevice] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const devicesData = await fetchDevices();
      setDevices(devicesData);
    };
    fetchData();
  }, []);

  const toggleAddDevice = () => {
    setShowAdddevice((prevState) => !prevState);
  };

  const handleDeleteDevice = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/devices/${selectedDeviceId}`);
      setDevices(devices.filter(device => device._id !== selectedDeviceId));
      setIsDeleteDeviceOpen(false);
    } catch (error) {
      console.error('Error deleting device:', error);
    }
  };

  const [isAddDeviceOpen, setIsAddDeviceOpen] = useState(false);
  const [isDeleteiconOpen, setIsDeleteiconopen] = useState(false);
  const [isEditdeviceOpen, setIsEditdeviceOpen] = useState(false);
  const [isAssigndeviceOpen, setIsAssigndeviceOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event, deviceId) => {
    setAnchorEl(event.currentTarget);
    setSelectedDeviceId(deviceId);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDeleteDevice = () => {
    setIsDeleteDeviceOpen(true);
  };

  const updateDevice = (deviceId, updatedDevice) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) => (device._id === deviceId ? updatedDevice : device))
    );
  };

  return (
    <>
      <div>
        < Employees />
      </div>

      <div className="flex ">
        <div className=" sm:w-[10%] w-[10%] lg:w-[18%] ">
          < Leftmenu />
        </div>

        <div className="sm:w-[90%] w-[90%] lg:w-[86%] mx-auto p-8 overflow-x-auto mt-2 shadow-md ">
          <div className="flex justify-between space-y-4">
            <div className="">
              <h1 className="text-3xl font-bold ">Devices</h1>
            </div>
            <div className="relative gap-2 flex sm:flex-row flex-col  items-center justify-end">
              <div className="relative">
                <input type="search" className=" border h-12 rounded-md placeholder:pl-2 pl-4 pr-4 " placeholder="🔍 Search..." />
              </div>
              <div className="flex justify-between">
                <div className="px-4">
                  <button className="px-8 py-2 flex bg-red-500 text-white rounded-md hover:bg-red-700 space-x-4" onClick={() => setShowAdddevice(true)}>
                    <PostAddIcon className="text-white" />
                    <p>Add Device</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <table className="w-full overflow-x-full text-left capitalize ">
            <thead className=" font-semibold uppercase bg-gray-200">
              <tr className="txt-left  text-base h-16 ">
                <th className="  p-2  h-16 ">Device Name<FontAwesomeIcon icon={faSort} /></th>
                <th className="  p-2  h-16 ">Category<FontAwesomeIcon icon={faSort} /></th>
                <th className="  p-2  h-16 ">Status<FontAwesomeIcon icon={faSort} /></th>
                <th className="  p-2  h-16 ">Purchased Date<FontAwesomeIcon icon={faSort} /></th>
                <th className="  p-2  h-16">Warranty<FontAwesomeIcon icon={faSort} /></th>
                <th className="  p-2  h-16">Receiver<FontAwesomeIcon icon={faSort} /></th>
                <th className="  p-2  h-16"></th>
              </tr>
            </thead>
            <tbody className=" font-semibold lg:text-xl font-sans ">
              {devices.map((device) => (
                <tr key={device._id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-4">{device.Devicename}</td>
                  <td className="px-4 py-4">{device.Category}</td>
                  <td className="px-4 py-4">{device.status}</td>
                  <td className="px-4 py-4">{device.Purchaseddate}</td>
                  <td className="px-4 py-4">{device.Warranty}</td>
                  <td className="px-4 py-4">{device.receiver}</td>
                  <td className="px-4 py-4">
                    <Button
                      id='basic-button'
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup='true'
                      aria-expanded={open ? 'true' : undefined}
                      onClick={(event) => handleClick(event, device._id)}
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
                      <MenuItem onClick={() => setIsAssigndeviceOpen(true)}><AssignmentIndIcon />Assign</MenuItem>
                      <MenuItem onClick={() => setIsEditdeviceOpen(true)}><EditIcon />Edit</MenuItem>
                      <MenuItem onClick={toggleDeleteDevice}><DeleteForeverIcon />Delete</MenuItem>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>{showAdddevice && <Adddevice className='device-addDevice' refreshDevices={fetchDevices} onClose={() => setShowAdddevice(false)} />}</div>

      {isDeleteDeviceOpen &&
        <Deletedevice
          open={isDeleteDeviceOpen}
          onClose={() => setIsDeleteDeviceOpen(false)}
          onDelete={handleDeleteDevice}
          deviceId={selectedDeviceId}
        />}

      {isAddDeviceOpen &&
        <Adddevice
          open={isAddDeviceOpen}
          onClose={toggleAddDevice}
        />}

      {isEditdeviceOpen &&
        <Editdevice
          open={isEditdeviceOpen}
          onClose={() => setIsEditdeviceOpen(false)}
        />}

      {isAssigndeviceOpen &&
        <Assigndevice
          open={isAssigndeviceOpen}
          onClose={() => setIsAssigndeviceOpen(false)}
          deviceId={selectedDeviceId}
          updateDevice={updateDevice}
        />}
    </>
  )
}

export default Devicepannel;
