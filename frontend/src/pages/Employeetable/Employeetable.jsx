import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PostAddIcon from '@mui/icons-material/PostAdd';
import {  faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
function Rightpannel () {
      //   const employees = [
      //   { name: 'Pranjal', jobRole: 'MERN Stack Developer', email: 'pranjal.shantiinfosoft@gmail.com', status: <ToggleOnIcon/> },
      //   { name: 'Ashish', jobRole: 'UX Designer', email: 'ashish.shantiinfosoft@gmail.com', status: <ToggleOffIcon/> },
      //   { name: 'Raghav', jobRole: 'Frontend Developer', email: 'raghav.shantiinfosoft@gmail.com', status:  <ToggleOnIcon/> },
      //   { name: 'Lavisha', jobRole: 'React Developer', email: 'lavisha.shantiinfosoft@gmail.com', status: <ToggleOffIcon/> },
      //   { name: 'Ajit', jobRole: 'Backend Developer', email: 'ajit.shantiinfosoft@gmail.com', status: <ToggleOnIcon/> },
      //   { name: 'Abhinay', jobRole: 'Tester', email: 'abhinay.shantiinfosoft@gmail.com', status: <ToggleOnIcon/> },
      // ];

    return (
        <>

<div className="container">
      <header className="flex justify-between items-center ">
        <div>
        <h1 className="text-3xl font-bold">Employees</h1>
        </div>
          <div className="relative right-0  flex items-center">
            <input type="search" className="px-4 py-2 border rounded-md pl-10" placeholder="Search..." />
            <div className="absolute inset-y-0  pl-3 flex items-center">
            <SearchIcon />
            </div> 
            <div className="px-4">
            <button className="px-8 py-2 bg-red-500 text-white rounded-md hover:bg-red-700">Add Employee</button>
            </div>
            <div className="absolute inset-y-0 left-64 flex items-center">
            <PostAddIcon/>
            </div>
            </div>
  
        </header>
      
        </div>
    
    <div className="container mx-auto  overflow-x-auto shadow-md">
  <table className="w-full text-left capitalize ">
    <thead className="text-xs font-semibold uppercase bg-red-200 ">
<tr className="txt-left  text-base h-16 ">
<th className="  p-2  h-16 ">Employee <FontAwesomeIcon icon={faSort}/></th>
<th className="  p-2  h-16 ">Job Role <FontAwesomeIcon icon={faSort}/></th>
<th className="  p-2  h-16 ">Email <FontAwesomeIcon icon={faSort}/></th>
<th className="  p-2  h-16 ">Status <FontAwesomeIcon icon={faSort}/></th>
</tr>
    </thead>
    <tbody className=" font-light ">
      {employees.map((employee) => (
        <tr key={employee.email} className="border-b hover:bg-gray-100">
          <td className="px-4 py-4">{employee.name}
          </td>
          <td className="px-4 py-4">
            {employee.jobRole}
          </td>
          <td className="px-4 py-4">
            {employee.email}
          </td>
          <td className="px-4 py-4">
            {employee.status}
          </td>
        </tr>
       ))} 
    </tbody>
  </table>
  
  </div>  
   </>
)
}




export default Rightpannel;








