import React, { useState } from 'react'
function OtpVerification (){
  
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');
    return(
        <>
        <div className="container mx-auto px-2 py-12">
      <div className=" md:w-1/2 max-w-md mx-auto shadow-md rounded-lg p-8">
        <h2 className="text-xl font-semibold text-center">OTP Verification</h2>
        <p className="text-gray-600 mt-4 text-center">
          Enter the OTP sent to your email address:
        </p>
        <p className="font-medium text-center">pranjalshuklaji2002@gmail.com</p>
        <form className='mt-6'>
          <div className="flex justify-center space-x-3 ">
            <input type="text" className="w-12 h-12 border border-gray-300 sm:w-12 md:w-16 rounded px-3 py-2 text-center " maxLength={1} value={otp1} 
            onChange={(e) => setOtp1(e.target.value)}/>
            <input type="text" className="w-10  sm:w-12 md:w-16 border border-gray-300 rounded px-3 py-2 text-center " maxLength={1}  value={otp2} 
            onChange={(e) => setOtp2(e.target.value)} />
            <input type="text" className="w-10  sm:w-12 md:w-16  border border-gray-300 rounded px-3 py-2 text-center " maxLength={1}  value={otp3} 
            onChange={(e) => setOtp3(e.target.value)} />
            <input type="text" className="w-10  sm:w-12 md:w-16 border border-gray-300 rounded px-3 py-2  text-center " maxLength={1} value={otp4}
             onChange={(e) => setOtp4(e.target.value)} />
          </div> 
          <div className=" mt-4 justify-center">
            <a href="#" className="text-blue-500">
              Don't receive code? <b>Re Send</b>
              {/* Don't receive code? <b></b> */} 
            </a>
            <div className='w-full py-2 mt-5 text-center bg-blue-600 hover:bg-blue-700 rounded-lg text-white'>
            <button type="submit" className=""> Submit
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
        </>
    )
}

export default OtpVerification;