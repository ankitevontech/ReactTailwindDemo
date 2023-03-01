import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [identifier, setIdentifier] = useState();
  const [password, setPassword] = useState();

  const nav = useNavigate();

  const data = {
    identifier,
    password,
  };

  const handleSUbmit = () => {
    //

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/local`, data)
      .then((response) => {

       

        if(response.data.user){
          swal("Good Job", "User Logged In")
          localStorage.setItem('jwt_token',response.data.jwt)
          nav("/dashboard")

        }
        
      
       
        // Handle success.
       console.log(response)
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
        swal( "Invalid Crediantials")
      });
  };

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] py-[12px] items-center flex justify-between mx-auto">
        <div className=" text-white">Login With Us</div>

        <ul className="hidden md:flex  flex text-white gap-5">
          <li className="p-5">Don't Have An Account?</li>
          <Link to="/register">
            <li className="p-5 text-black">Register</li>
          </Link>
        </ul>
      </div>
      {/* htmlForm responsive */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center">Login With Us</h3>
          <form action="">
            <div className="mt-4">
              <div className="mt-4">
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="identifier"
                  value={identifier}
                  onChange={(e) => {
                    setIdentifier(e.target.value);
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
                    handleSUbmit(e.target.value);
                  }}
                >
                  Login
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Forgot Your Password 
                <Link
                  to="/forgotpassword"
                  className="text-blue-600 hover:underline ml-[7px]"
                  alt="#"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
