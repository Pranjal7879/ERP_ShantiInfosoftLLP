// import { useState } from "react";
// import { toast } from 'react-toastify';
// import axios from "axios";

const useLogin = async(email, password) => {

        try {  
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({emailId: email, password: password})
            })

            const data = await res.json()
            const token = data.token;
            console.log(token)
            localStorage.setItem("token", token )
            // console.log(data)
            
            if (res.status === 200) {
             
                return { success: true, data: data };
            } else {
               
                return { success: false, error: data.error };
            }
            
        } catch (error) {
            throw new Error("Login failed: " + error.message);
        }
        
    }

export default useLogin