import React,{useEffect, useState} from 'react'
import { AiOutlineBars, AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from 'axios';

const Cms = () => {
  const [toogle, setToogle] = useState(false);
  const[navbardata, setNavbarData]= useState([])


const fetchNavbar=async()=>{
try{
  const res= await axios.get(`${process.env.REACT_APP_API_URL}/navbars`)
  setNavbarData(res.data.data)
  console.log("ans:", res)

}
catch(err){
  console.log(err)
}


}

useEffect(()=>{
fetchNavbar();

},[])





  return (
 <>
 
 <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] py-[12px] items-center flex justify-between mx-auto">
        <div className="text-3xl font-bold">Blogger</div>
        {toogle ? (
          <AiOutlineCloseCircle
            onClick={() => setToogle(!toogle)}
            className="text-white text-3xl md:hidden block"
          />
        ) : (
          <AiOutlineBars
            onClick={() => setToogle(!toogle)}
            className="text-white text-3xl md:hidden block"
          />
        )}
 {navbardata?.map((item,id)=>(
        <ul className="hidden md:flex  flex text-white gap-5" key={item.id}>
         

        <>
      
          <li className="p-5" >{item.attributes.Home}</li>
          <li className="p-5">{item.attributes.ContactUs}</li>
          <li className="p-5">{item.attributes.AboutUs}</li>
          <Link to="/login">
            <li className="p-5">{item.attributes.Login}</li>
          </Link>
          <Link to="/register">
            <li className="p-5">{item.attributes.SignUp}</li>
          </Link>
          
          </>
          
        </ul>
          ))}
        {/* Responsive mENU */}
        <ul
          className={` duration-300 md:hidden w-full h-screen text-white gap-5 fixed bg-black top-[92px] 
        
         ${toogle ? "left-[0]" : "left-[-100%]"}
         `}
        >
          <li className="p-5">Home</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact Us</li>
          <li className="p-5">Login</li>
          <li className="p-5">Register</li>
        </ul>
      </div>
    </div>
 
 </>
  )
}

export default Cms