import React from 'react'

function Header() {

  const[show,setShow]=React.useState("false");
  

  return (
    <div>
        <div className="bg-yellow-50 px-10 py-3 shadow-headerShadow fixed w-full">

         <div className="sm:flex  block justify-between items-center">

            <div className='flex justify-between items-center'>
                <div>
                    <h1 className="text-logoName font-bold">Polyprep</h1>
                </div>

                <div className="md:hidden" onClick={()=>setShow(!show)}>
                {show?(<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>):(<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>)}
                </div>
            </div>

            <div className="hidden md:block">
                <ul className="sm:flex">
                    <li className="p-2">Home</li>
                    <li className="p-2">About</li>
                    <li className="p-2">Team</li>
                    <li className="p-2">Courses</li>
                    <li className="p-2">Contact Us</li>
                </ul>
            </div>

            

           

            {show?null:( <div className="md:hidden">
                <ul>
                    <li className="p-2">Home</li>
                    <li className="p-2">About</li>
                    <li className="p-2">Team</li>
                    <li className="p-2">Courses</li>
                    <li className="p-2">Contact Us</li>
                </ul>
            </div>)}


            

        </div>

        </div>
    </div>
  )
}

export default Header