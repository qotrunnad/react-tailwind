import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Sidnav from "./Sidnav";


function Profil() {
  const navigate = useNavigate();

  const handlegundul = () => {
    Swal.fire({
      title: "test",
      text: "cek",
    });
  };

  return (
    <>
      <div className="p-5 mx-80 h-10">
      
        <div className="text-cyan-300 bg-white shadow-lg p-3 justify-center items-center mr-10 ">
          <img
            className="w-50 h-50 rounded-full mx-auto border-3 border-sky-300 shadow-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdyD6TsshWaNsKbXfWfoN0ncjffzZrIdSWYw&s"
            alt="Profil"
          />
            <h1 className="text-center text-3xl text-black font-bold mb-3">sunsent</h1>
        

        <div className="border-blue-500 shadow-lg p-3 border-5 font-semibold">
          <div className=" text-black font-bold ">

            <h2 className="text-2xl">Nada</h2>
            <h2 className="text-2xl">Pemandangan Pantai</h2>
          </div>
          <div className="flex justify-center">

            <button
              onClick={handlegundul}
              className=" bg-yellow-500 text-white ml-40 px-8 py-2 rounded font-semibold"
            >
              test
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Profil;