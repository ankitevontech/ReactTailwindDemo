import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { AiFillDelete ,AiOutlineEdit} from "react-icons/ai";

const TableData = () => {
  const [tableData, setTableData] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [designation, setDesignation] = useState();
  const [address, setAddress] = useState();
  const [deletedItem, setDeletedItem] = useState();

  let datas = {
    data: {
      name,
      designation,
      age,
      address,
    },
  };

  let data = {
    name,
    designation,
    age,
    address,
  };

  // for fetching data into table

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/tabledatas`
      );

      setTableData(res.data.data);

      console.log("ans:", res);
    } catch (err) {
      console.log("error:", err);
    }
  };

  // for posting data into strapi
  const submitData = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/tabledatas`,
        datas
      );
      fetchData();
    
      setName("");
      setAddress("");
      setAge("");
      setDesignation("");
     

      if (res.data.data) {
        swal("Good Job", "User Registered");
        // fetchData();
      }

      console.log(res, "11");
    } catch (err) {
      swal("Please Enter Correct Details");
      console.log(err);
    }
  };

  //for deleting the data

  const deleteData = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/tabledatas/${id}`,
        
      );
      console.log(res, "111");
      if (res.data.data) {
        swal("Congrats", "User Is Deleted");
      }
    } catch (err) {
      swal("Something Went Wrong");
      console.log(err);
    }
  };


  // for updating 

const updateData=async()=>{

try{
const res= await axios.post(`${process.env.REACT_APP_API_URL}/tabledatas`,datas)

console.log("done",res)

if(res.data.data){



}

}
catch(err){
  console.log(err)
}



}






  // for rendering
  useEffect(() => {
    fetchData();
    // updateData();
    setName(localStorage.getData('name'))
    setAddress(localStorage.getData('address'))
    setAge(localStorage.getData('age'))
    setDesignation(localStorage.getData('designation'))
  }, []);

  return (
    <>
      <div className="bg-[#2699fb] p-4">
        
        <div className="max-w-[1240px] py-[12px] items-center flex justify-between mx-auto">
          <div className=" text-white">Dashboard</div>

          <ul className="hidden md:flex  flex text-white gap-5">
            <li className="p-5"></li>
            <Link to="/">Home</Link>
          </ul>
        </div>
      </div>
      {/* modal */}
    

      {/* form start */}

      <form className="w-full max-w-lg ml-[465px]">
        <div className="flex flex-wrap -mx-3 mb-6 mt-[20px]">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              type="number"
            >
              Age
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
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
              name="desgination"
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
          onClick={(e) => submitData(e.target.value)}
        >
          Create Account
        </button>
      </form>
      {/* form end */}

      <div className="border-solid border-2 border-black mt-[166px]"></div>

      <div className="relative overflow-x-auto p-[251px] mt-[-177px] ml-[81px]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Designation
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
              <th scope="col" className="px-6 py-3">
                Update
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, id) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.attributes.name}
                </th>
                <td className="px-6 py-4">{item.attributes.designation}</td>
                <td className="px-6 py-4">{item.attributes.age}</td>
                <td className="px-6 py-4">{item.attributes.address}</td>

                <td
                  className="px-6 py-4 text-red-800 cursor-pointer"
                  name="deletedItem"
                  value="deletedItem"
                 
                  onClick={(e) => deleteData(item.id)}
                >
                  <AiFillDelete />
                </td>
                <td
                  className="px-6 py-4 text-blue-800 cursor-pointer " 
                 
                  name="deletedItem"
                  value="deletedItem"
                  
                 
                  
                >
                
                  <AiOutlineEdit/></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     {/* modal */}
    
     








    </>
  );
};

export default TableData;
