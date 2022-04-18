import React from 'react'

function Courses() {
  return (
    <div>
        <div className="bg-slate-500 w-screen p-5">
            <div className='py-10 bg-pink-700 w-[100%]'>
                <h1 className="">Courses for <span className="text-myColor">Students</span></h1>
            </div>
            
            <div className="sm:flex block">
                <div className="bg-green-500 sm:w-[60%]">text</div>
                <div className="sm:w-[40%] bg-yellow-200">images</div>
            </div>
        </div>
    </div>
  )
}

export default Courses