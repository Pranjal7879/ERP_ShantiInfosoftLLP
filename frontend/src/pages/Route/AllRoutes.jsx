import Login from '../login/Login'
import ForgotPassword from "../forgotpass/Forgotpassword"
import Changepassword from '../changepass/Changepassword'
import OtpVerification from '../otp/OtpVerification'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Employees from '../employee/Employees'
import Leftmenu from '../leftmenu/Leftmenu'
import Rightpannel from '../rightsidepannel/Rightpannel'
import Moreoption from '../moreoption/Moreoption'
import Deleteemployee from '../deleteemployee/Deleteemployee'
// import Addemployee from '../addemployee/Addemployee'
// import Employeetable from '../Employeetable/Employeetable'
import Editemployee from '../editemployee/Editemployee'
import Devicepannel from '../Devicepannel/Devicepannel'
import Editdevice from '../Editdevice/Editdevice'
import Assigndevice from '../Assigndevice/Assigndevice'
import Adddevice from '../Adddevice/Adddevice'

import Vendorpannel from '../Vendorpannel/Vendorpannel'
import AddVendor from '../addvendor/AddVendor'
import EditVendor from '../editvendor/EditVendor'
import DeleteVendor from '../deletevendor/DeleteVendor'


const AllRoutes = () => {
  return (
    <>

      {/* return (
    <> */}
      {/* <h1>hello everyone </h1> */}

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path='/Forgotpassword' element={<ForgotPassword />} />
        <Route path='/Changepassword' element={<Changepassword />} />
        <Route path='/OtpVerification' element={<OtpVerification />} />
        <Route path='/Employees' element={<Employees />} />
        <Route path='/Leftmenu' element={<Leftmenu />} />
        <Route path='/Moreoption' element={<Moreoption />} />
        <Route path='/Rightpannel' element={<Rightpannel />} />
        <Route path='/Deleteemployee' element={<Deleteemployee />} />
        <Route path='/Editemployee' element={<Editemployee />} />
        <Route path='/Devicepannel' element={<Devicepannel />} />

        <Route path='/Editdevice' element={<Editdevice />} />
        <Route path='/Assigndevice' element={<Assigndevice />} />
        <Route path='/Adddevice' element={<Adddevice />} />
        <Route path='/Vendorpannel' element={<Vendorpannel />} />
        <Route path='/AddVendor' element={<AddVendor />} />
        <Route path='/EditVendor' element={<EditVendor />} />
        <Route path='/DeleteVendor' element={<DeleteVendor />} />


      </Routes>



    </>
  )
}

export default AllRoutes;