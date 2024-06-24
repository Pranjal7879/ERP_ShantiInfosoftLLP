import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import Employees from "../employee/Employees";
import Leftmenu from "../leftmenu/Leftmenu";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Switch from "@mui/material/Switch";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Addemployee from "../addemployee/Addemployee";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import Deleteemployee from "../deleteemployee/Deleteemployee";
import Editemployee from "../editemployee/Editemployee";
//  import Employees from "../employee/Employees";
function Rightpannel() {
  const [employees, setEmployees] = useState([]);
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false);
  const [isDeleteIconOpen, setIsDeleteIconOpen] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isEditEmployeeOpen, setIsEditEmployeeOpen] = useState(false);

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
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleEmployeeDelete = async (employeeId) => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${employeeId}`);
      setEmployees(employees.filter((employee) => employee._id !== employeeId));
      setIsDeleteIconOpen(false);
      // console.log(Employee with ID ${employeeId} deleted successfully.);
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const toggleAddEmployee = () => {
    setIsAddEmployeeOpen((prevState) => !prevState);
  };

  const toggleDeleteEmployee = (employeeId) => {
    setIsDeleteIconOpen(true);
    setSelectedEmployeeId(employeeId);
  };

  const toggleEditEmployee = () => {
    setIsEditEmployeeOpen(!isEditEmployeeOpen);
  };

  const handleEmployeeEdit = async (updatedEmployee) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/employees/${selectedEmployeeId}`, updatedEmployee);
      setEmployees(employees.map((employee) => employee._id === selectedEmployeeId ? response.data : employee));
      setIsEditEmployeeOpen(false);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleClick = (event, employee) => {
    setAnchorEl(event.currentTarget);
    setSelectedEmployeeId(employee._id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const refreshEmployees = () => {
    fetchEmployees();
  };

  return (
    <>
      <div>
        <Employees />
      </div>

      <div className="flex ">
        <div className=" sm:w-[10%] w-[10%] lg:w-[18%] ">
          <Leftmenu />
        </div>

        <div className="sm:w-[90%] w-[90%] lg:w-[86%] mx-auto p-8 overflow-x-auto mt-2 shadow-md ">
          <div className="flex justify-between space-y-4">
            <div className="">
              <h1 className="text-3xl font-bold ">Employees</h1>
            </div>
            <div className="relative gap-2 flex sm:flex-row flex-col  items-center justify-end">
              <div className="relative">
                <input
                  type="search"
                  className=" border h-12 rounded-md placeholder:pl-2 pl-4 pr-4 "
                  placeholder="🔍 Search..."
                />
              </div>
              <div className="flex justify-between">
                <div className="px-4">
                  <button
                    className="px-8 py-2 flex bg-red-500 text-white rounded-md hover:bg-red-700"
                    onClick={toggleAddEmployee}
                  >
                    <div className="">
                      <PostAddIcon className="text-white" />
                    </div>
                    <p>Add Employee</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <table className="w-full overflow-x-full text-left capitalize ">
            <thead className=" font-semibold uppercase bg-gray-200">
              <tr className="txt-left  text-base h-16 ">
                <th className="  p-2  h-16 ">
                  Employee <FontAwesomeIcon icon={faSort} />
                </th>
                <th className="  p-2  h-16 ">
                  Job Role <FontAwesomeIcon icon={faSort} />
                </th>
                <th className="  p-2  h-16 ">
                  Email <FontAwesomeIcon icon={faSort} />
                </th>
                <th className="  p-2  h-16 ">
                  Status <FontAwesomeIcon icon={faSort} />
                </th>
                <th className="  p-2  h-16"></th>
              </tr>
            </thead>
            <tbody className=" font-semibold lg:text-xl font-sans ">
              {employees.map((employee) => (
                <tr key={employee.email} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-4">{employee.name}</td>
                  <td className="px-4 py-4">{employee.jobRole}</td>
                  <td className="px-4 py-4">{employee.email}</td>
                  <td className="px-4 py-4">{employee.status}</td>
                  <td className="px-4 py-4">
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(event) => handleClick(event, employee)}
                    >
                      <MoreHorizIcon style={{ color: "black" }} />
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open && selectedEmployeeId === employee._id}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={() => { handleEmployeeEdit(employee) }}>
                        <EditIcon />
                        Edit
                      </MenuItem>
                      <MenuItem
                        onClick={() => toggleDeleteEmployee(employee._id)}
                      >
                        <DeleteForeverIcon />
                        Delete
                      </MenuItem>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isDeleteIconOpen && (
        <Deleteemployee
          open={isDeleteIconOpen}
          onClose={() => setIsDeleteIconOpen(false)}
          onDelete={handleEmployeeDelete}
          employeeId={selectedEmployeeId ? selectedEmployeeId.toString() : ""}
        />
      )}

      {isAddEmployeeOpen && (
        <Addemployee
          open={isAddEmployeeOpen}
          onClose={toggleAddEmployee}
          refreshEmployees={refreshEmployees}
        />
      )}

     
        {isEditEmployeeOpen && (
        <Editemployee
          open={isEditEmployeeOpen}
          employee={employees.find((emp) => emp._id === selectedEmployeeId)}
          onClose={toggleEditEmployee}
          handleEmployeeEdit={handleEmployeeEdit}
        />
      )}
    </>
  );
}

export default Rightpannel;