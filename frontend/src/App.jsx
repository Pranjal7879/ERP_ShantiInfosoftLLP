import { useState,useEffect } from 'react'
import { Link, Navigate,Route,BrowserRouter, Routes } from 'react-router-dom'
import './App.css';
import AllRoutes from './pages/Route/AllRoutes';
import Login from './pages/login/Login'
// import ForgotPassword from './pages/forgotpass/Forgotpassword'
// import Changepassword from './pages/changepass/Changepassword'
// import OtpVerification from './pages/otp/OtpVerification'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Employees from './pages/employee/Employees'
// import Leftmenu from './pages/leftmenu/Leftmenu'
// import Rightpannel from './pages/rightsidepannel/Rightpannel'
// import Moreoption from './pages/moreoption/Moreoption'
// import Deleteemployee from './pages/deleteemployee/Deleteemployee'
// import Addemployee from './pages/addemployee/Addemployee'
// import Employeetable from './pages/Employeetable/Employeetable'
// import Editemployee from './pages/editemployee/Editemployee'
// import Devicepannel from './pages/Devicepannel/Devicepannel'
// import Editdevice from './pages/Editdevice/Editdevice'
// import Assigndevice from './pages/Assigndevice/Assigndevice'
// import Adddevice from './pages/Adddevice/Adddevice'
// import Login from './hooks/useLogin'
// import Vendorpannel from './pages/Vendorpannel/Vendorpannel'
// import AddVendor from './pages/addvendor/AddVendor'
// import EditVendor from './pages/editvendor/EditVendor'
// import DeleteVendor from './pages/deletevendor/DeleteVendor'
// import Vendor from './pages/vendorpage/Vendor'
// import Deletedevice from './pages/Deletedevice/Deletedevice'
// import AuthContext from './context/AuthContext';
// import ProtectedRoute from './protectroutes/ProtectedRoute'


const getToken = () => {
  return localStorage.getItem('token');

};

let real_token = localStorage.getItem('token')

function App() {
  const [token, SetToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setToken = getToken();
    SetToken(setToken);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <>
      {/* <h1>hello everyone </h1> */}
      <BrowserRouter>
        <Routes>
         
         <Route path="/" element={ <Login /> } />
         {/* <Route path="/signUp" element={<SignUp />} /> */}

<Route path="*" element={<AppRoutes role={token} />} />
{/* <Route path="*" element={<Navigate to="/login" />} /> */}
{/*         
          <Route path='/Forgotpassword' element={<ForgotPassword />} />
          <Route path='/Changepassword' element={<Changepassword />} />
          <Route path='/OtpVerification' element={<OtpVerification />} />
          <Route path='/Employees' element={<Employees />} />
          <Route path='/Leftmenu' element={<Leftmenu />} />
          <Route path='/Moreoption' element={<Moreoption/>} />
          <Route path='/Rightpannel' element={<Rightpannel/>}/>
          <Route path='/Deleteemployee' element={<Deleteemployee/>} />
          <Route path='/Editemployee' element={<Editemployee/>} />
          <Route path='/Devicepannel' element={<Devicepannel/>} />
    
          <Route path='/Editdevice' element={<Editdevice/>} />
          <Route path='/Assigndevice' element={<Assigndevice/>} />
          <Route path='/Adddevice' element={<Adddevice/>} />
          <Route path='/Vendorpannel' element={<Vendorpannel/>} />
          <Route path='/AddVendor' element={<AddVendor/>} />   
          <Route path='/EditVendor' element={<EditVendor/>} />
          <Route path='/DeleteVendor' element={<DeleteVendor/>} />
          
         */}

        </Routes>
      </BrowserRouter>

     
    </>
  )
}
const AppRoutes = ({ role }) => {
  if (!role) {
    return <Navigate to="/" />;
  }

  if (role === real_token){
    return <AllRoutes/>;
  }
};

export default App
