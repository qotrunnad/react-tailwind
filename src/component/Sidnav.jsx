import React, {useState} from 'react'

function Sidnav() {
    const [open,setOpen] = useState(false);
return (
    <div className="flex">
        <div 
        className={`fixed top-0 h-full w-60 bg-gray-800 text-white
          ${open ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          md:translate-x-0`}
          >
            <div className="text-2x1 font-bold mb-8 text-center">Binus</div>

            <nav className="space-y-3">
              <a href="/d" className="block py-2 px-3 rounded hover:bg-blue-600">Dashboard</a> 
              <a href="/k" className="block py-2 px-3 rounded hover:bg-blue-600">Tabel Data</a>
              <a href="" classname="block py-2 px-3 rounded hover:bg-blue-600"></a>
            </nav>
            <div className=''></div>
        </div>
    </div>
)
};
export default Sidnav