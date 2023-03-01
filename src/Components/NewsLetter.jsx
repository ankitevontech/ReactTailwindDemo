import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
        <div className="">
          <h1 className="text-[40px] text-white fonnt-bold">
            Want To Learn Any It Skills?
          </h1>
          <span className="text-white">
            Sign Up To Our NewsLetter And Stay Update
          </span>
        </div>
        <div className=" ">
          <input className="py-3 mr-2 text-slate-600 mb-2 rounded sm:w-full xs:w-full" placeholder="Email..." type="text" />
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Notify Me
          </button>
          <br/>
          <p className='text-white'>
          We care about protection of your data, Read our privacy policy.
            </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
