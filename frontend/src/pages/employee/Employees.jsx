
// import React, { useState } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Shantilogo from '../../assets/Shantilogo.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import profile from '../../assets/profile.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Employees() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/logout')

            if (response.status === 200) {
                localStorage.removeItem("token")
                navigate('/');
            } else {
                console.error('Logout failed:');
            }
        } catch (error) {
            console.error('Logout failed:', error.message);
        }
        console.log("handleLogout")
    }

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === 'Change Password') {
            navigate('/Changepassword');
            return;
        }
        else if (selectedOption === 'Logout') {

            handleLogout();
            return;
        }
    }
    return (
        <>
            <div className=" bg-gray-700 text-white ">
                <div className=" w-full px-4 flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <a href="#  " className="font-bold h-auto w-80 ">
                            <img src={Shantilogo} alt="logo" />
                            {/* <img src="https://flipr.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflipr_old_logo.ee0c3d40.png&w=2048&q=75" className='h-12 w-80' alt="" /> */}
                        </a>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='ml-auto flex space-x-2'>
                            <button className=''><HelpOutlineIcon /> </button>
                            <p className=' hidden sm:block '>Help</p>
                        </div>
                        <div className=''>
                            <MoreVertIcon />
                        </div>
                        <button>
                            <div className="ml-1">
                                <img
                                    className="rounded-full w-8 h-8 object-cover"
                                    src={profile}
                                    alt="Profile Picture"
                                />
                            </div>
                        </button>
                        <div className='m-2 space-x-2 hidden sm:block'>
                            <h6 className=''>Admin</h6>
                        </div>

                        <div className='flex justify-end '>
                            <select className='w-5 bg-transparent border-none text-black hover:border-gray-500 rounded shadow ' onChange={handleSelectChange}>
                                <option value="" disabled> </option>
                                {/* <option value="" disabled>Select Receiver</option> */}
                                <option>Change Password</option>
                                <option> Logout</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}


export default Employees;