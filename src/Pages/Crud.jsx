import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { AiFillDelete ,AiOutlineEdit} from "react-icons/ai";

const Crud = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [address, setAddress] = useState("");
  const [tableData, setTableData] = useState([]);

let datas={
data:{
  name,
  email,
  designation,
  address}
}


let data={
  name,
  email,
  designation,
  address

}



  // for getting the data
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/tabledatas`,
      );
      setTableData(res.data.data);
      console.log("ans:", res);
    } catch (err) {
      console.log(err);
    }
  };

// for posting the data

const sendData=async()=>{

try{
  const res= await axios.post(`${process.env.REACT_APP_API_URL}/tabledatas`,datas)
  fetchData();
  setName("");
  setAddress("");
  setEmail("");
  setDesignation("")
      
  if(res.data.data){
    swal("Good Job", "User Registered")
  }
}
catch(err){
  swal("Enter Correct Details")
}
}

// for deleteing data

const deletedata=async(id)=>{

  try{
    const res= await axios.delete(`${process.env.REACT_APP_API_URL}/tabledatas/${id}`)
    fetchData();
    if(res.data.data){
 swal("Congrats", "User Is Deleted")

    }
  }
  catch(err){
   swal("You don't have permission")
  }
}




// for updating data

const updateData = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/tabledatas/${id}`,
      datas
    );
    setName(res.data.data.attributes.name)
    setEmail(res.data.data.attributes.email)
    setDesignation(res.data.data.attributes.designation)
    setAddress(res.data.data.attributes.address)
    console.log("anss:", res)
    
   
   

 


  } catch (err) {
    // swal("Please Enter Correct Details");
    console.log(err);
  }
};



useEffect(()=>{
fetchData();
// updateData();


},[])

  return (
    <>
      <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1240px] py-[12px] items-center flex justify-between mx-auto">
          <div className=" text-white">Crud Dashboard</div>

          <ul className="hidden md:flex  flex text-white gap-5">
            <li className="p-5"></li>
            <Link to="/">Home</Link>
          </ul>
        </div>
      </div>
      {/* form */}

      <form className="w-full max-w-lg ml-[465px]">
        <div className="flex flex-wrap -mx-3 mb-6 mt-[20px]">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block upupdateDatapercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              type="number"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Designation
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <button
          className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
          type="button"
          onClick={(e) => sendData(e.target.value)}
        >
          Submit
        </button>
      </form>

      {/* table */}

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Deatils</h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Designation
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Update
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData?.map((item,id)=>(

                 
                  <tr key={id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                          {item.attributes.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                      {item.attributes.email}
                      </p>
                    
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                      {item.attributes.address}
                      </p>
                      
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">{item.attributes.designation}</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="whitespace-no-wrap text-blue-900 ml-[19px] cursor-pointer"  onClick={(e)=>{
                        updateData(item.id);
                      
                      }}>
                      <AiOutlineEdit/>
                      </p>
                      
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className=" whitespace-no-wrap text-red-900 ml-[19px]"
                      onClick={(e)=>deletedata(item.id)}>
                      <AiFillDelete/>
                      </p>
                      
                    </td>
                    
                  </tr>
                   ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crud;
