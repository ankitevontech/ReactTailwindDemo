import React from 'react'
import { Link } from 'react-router-dom';


const DashboardHeader = () => {
    const logout=()=>{
        localStorage.clear();
        
         }
        
          return (
           
            <div className="bg-[#2699fb] p-4">
            <div className="max-w-[1240px] py-[12px] items-center flex justify-between mx-auto">
              <div className=" text-white">Dashboard</div>
        
              <ul className="hidden md:flex  flex text-white gap-5">
                <li className="p-5"></li>
                <Link to="/">
                  <button onClick={(e)=>{logout()}}>Logout</button>
                </Link>
              </ul>
            </div>

        

            </div>
                
          )
        }
  


export default DashboardHeader