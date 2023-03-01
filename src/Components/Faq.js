import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Faq = () => {

const[faqData, setFaqData]= useState([])

useEffect(()=>{

const fetchData=async()=>{

try{
const res= await axios.get(
    process.env.REACT_APP_API_URL+`/faq-collections?populate=*`,
    {
        headers:{
            Authorization: "bearer"+process.env.REACT_APP_API_TOKEN,
        }
    }


)
setFaqData(res.data.data)

console.log(res,"11")

}
catch(err){
    console.log(err)
}


}

fetchData();


},[])



  return (
    
    <div>
{faqData.map((item)=>(
<div>
<h1>{item.attributes.title}</h1>

<p>{item.attributes.text}</p>
</div>

))}


    </div>
 
 
 
 
    )
}

export default Faq