// import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
// import from "react";
import useLogin from "../../hooks/useLogin";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const validmail = () => {
        if (!email) {
            setEmailError('Email is Required');
        } else if (!email.includes('@')) {
            setEmailError('Email must contain "@" symbol');
        } else if (!email.includes('.com')) {
            setEmailError('Email must contain ".com" symbol');
        } else {
            setEmailError('');
        }
    };

    const validPass = () => {
        if (!password) {
            setPasswordError('Password is required');
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 8 characters long');
        } else {
            setPasswordError('');
        }
    };

    const handleLogin = async (e) => {
        console.log("handleLogin  hit");
        e.preventDefault();

        validmail();
        validPass();

        if (email && password) {
            try {
                const response = await useLogin(email, password);
                // Call login function from context
                if (response.success) {
                    // console.log("sdfasdfasf");
                    navigate('/Rightpannel'); // Redirect on successful login
                } else {
                    console.error('Login failed:', response.error);
                    // Handle login error (e.g., display error message)
                }
            } catch (error) {
                console.error('Login error:', error);
                // Handle login error (e.g., display generic error message)
            }
        }
    }


    // const {Login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await useLogin(email, password)
    }

    return (
        <>
            <div className=" space-y-8 md:flex md:flex-row md:justify-between md:items-center">

                <div className="md:w-3/5 w-full bg-gradient-to-r from-[#152747] via-[#5571a1] to-[#031330] md:bg-gradient-to-b from-[#152747] via-[#5571a1] to-[#031330] md:flex md:justify-center md:items-center md:h-screen ">
                    <div className="w-full">
                        {/* <img src="https://flipr.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflipr_old_logo.ee0c3d40.png&w=2048&q=75" alt='logo' className='w-screen p-16 ' /> */}
                        <img src="https://shantiinfosoft.com/images/footer-logo.svg" alt='logo' className='w-screen p-16 ' />
                    </div>
                </div>

                <div className="flex justify-center items-center w-full  md:w-2/5 space-y-15 mb-5">
                    <div className="p-20 font-semibold max-w-full">
                        <div className="flex  items-center">
                            <h1 className="font-bold text-4xl">Hello Again👋</h1>
                        </div>
                        <div className="flex flex-wrap">
                            <p className="mt-2 text-2xl">Welcome Back</p>
                        </div>
                        <div>
                            <form className="space-y-2" onSubmit={handleLogin}>
                                <div className="w-full">
                                    <div className="">
                                        <label className="block mt-4 text-xl">Email</label>
                                        <input type="email" placeholder="Write your mail-id"
                                            className="rounded-md border-gray- border-2 w-full w-80 h-10 pl-2"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onBlur={validmail}
                                        // required
                                        />
                                        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                                    </div>

                                    <div className="">
                                        <label className="block">Password</label>
                                        <input type="password" placeholder="password"
                                            className="rounded-md border-gray border-2 w-full pl-2 h-10"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onBlur={validPass}
                                        // required
                                        />
                                        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}

                                    </div>

                                    <div className="space-y-5 mt-6">
                                        <button type="submit" className='bg-[#3e6cce] text-white text-lg font-semibold rounded w-full py-2'> login </button>
                                    </div>
                                </div>
                            </form>
                            <Link to="/Forgotpassword">
                                    <div className="text-xs mt-4">
                                    <button>Forgot Password</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Login; 