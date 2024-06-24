import React from "react"
import DashboardIcon from '@mui/icons-material/Dashboard';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BadgeIcon from '@mui/icons-material/Badge';
import DevicesIcon from '@mui/icons-material/Devices';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SettingsIcon from '@mui/icons-material/Settings';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Link } from 'react-router-dom';
function Leftmenu() {
  return (
    <>
      <div className="pt-24 h-screen border-r-8  text-2xl font-sans border-gray-500">
        <ul className="space-y-14">  
          <li className=" ">
           <button className=" items-center space-x-3 flex pl-4"><DashboardIcon/><p className="hidden lg:block"><b>Dashboard</b></p></button>
          </li>
          <li className="mr-4">
           <button className=" items-center space-x-3 flex pl-4"><MeetingRoomIcon/><p className="hidden lg:block"><b>Meeting Room</b></p></button> 
          </li>
         <Link to = "/Rightpannel"><li className="mr-4">
          <button className=" items-center space-x-3 mt-14 flex pl-4"><BadgeIcon/><p className="hidden lg:block"><b>Employee</b></p></button> 
          </li> </Link> 
          <Link to = "/Devicepannel">  <li className="mr-4">
          <button className="items-center space-x-3  mt-14 flex pl-4"><DevicesIcon/><p className="hidden lg:block"><b>Devices</b></p></button>
          </li> </Link>
          <Link to = "/Vendorpannel"><li className=" ">
           <button className=" mt-14 items-center space-x-3 flex pl-4"><EngineeringIcon/><p className="hidden lg:block"><b>Vendors</b></p></button>
          </li> </Link>
          <li className="mr-4">
          <button className="items-center space-x-3 flex pl-4"><RocketLaunchIcon/><p className="hidden lg:block"><b>Project</b></p></button> 
          </li>
          <li className="mr-4">
          <button className=" items-center space-x-3 flex pl-4"><SettingsIcon/><p className="hidden lg:block"><b>Settings</b></p></button>
          </li>
        </ul>
 
      </div>
    </>
  )
}

export default Leftmenu;