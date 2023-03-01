import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';
// import { useEffect } from "react";

const Register = () => {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let data = {
    username,
    email,
    password,
  };

  const submitData = (event) => {
  

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/local/register`, data)

      .then((response) => {

setUserName('') 
setEmail("")
setPassword("")
       

        
        if(response.data.user){
          localStorage.setItem('jwt_token',response.data.jwt)
          
swal("Good Job", "User Registered")
        }
       
        console.log(response, "11");
        console.log(response.data.jwt)
      })

      .catch((error) => {
        console.log(error.response, "11");
        swal("Please Enter Correct Details")
      });
      
      
  };
  

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] py-[12px] items-center flex justify-between mx-auto">
        <div className=" text-white">Register With Us</div>

        <ul className="hidden md:flex  flex text-white gap-5">
          <li className="p-5">Already Have An Account?</li>
          <Link to="/login">
            <li className="p-5 text-black">Login</li>
          </Link>
        </ul>
      </div>
      {/* htmlForm responsive */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center">Register With Us</h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="Name">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="registerblock" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div className="flex">
                <button
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                  type="button"
                  onClick={(e) => {
                    submitData(e.target.value);
                  }}
                >
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <Link
                  to="/login"
                  className="text-blue-600 hover:underline"
                  alt="#"
                >
                  Log in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
