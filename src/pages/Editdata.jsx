import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Editdata() {
    const { ID} = useParams(); // ambil id dari URL
    const Navigate = useNavigate();

    const [FormData,SetFormData] = useState({
        Name:"",
        Email:"",
        Jurusan:"",
});
const [Loading,SetLoading] =useState(true);

//ambil data berdasarkan id
console.log("ID dari URL:", ID);
useEffect(() => {
    const fetchData = async () => {
try{
    const res = await axios.get
    (`http://localhost:5000/menu/:ID`);
    const data = Array.isArray(res.data) ? res.data[0]
    : res.data; // antisipasi kalau API return array 
    SetFormData(data);
} catch (err) {
    console.error("Gagal mengambil data:", err.response?.data || err.message);
    alert ("Gagal mengambil data!");
} finally {
    SetLoading(false)
}}

    fetchData();
}, [ID]);

const handlechange = (e) => {
    SetFormData({...FormData, [e.target.name]: e.target.value})
};

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data yang dikirim ke backend:", FormData)
    try {
        await axios.put(`http://localhost:5000/menu/:ID`, FormData),
        (FormData);
        alert("Data berhasil diubah!");
        Navigate("/Labeldata");
    } catch (err) {
        console.error("Gagal mengupdate data:", err.response?.data || err.message);
        alert("Gagal mengupdate data!");
    }
};

if (Loading) return <p className="text-center mt-10">
    Loading data</p>

return (
        <div className="container mx-auto p-4 max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
        Edit data</h1>
        <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6"
        >
        <div className="mb-4">
            <label 
                className="block text-gray-700 text-sm font-bold mb"
                htmlFor="Name"
            >
                Name
            </label>
            <input
                id="Name"
                name="Name"
                type="text"
                value={FormData.Name || ""}
                onChange={handlechange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                required
            />
        </div>
        <div className="mb-4">
        <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="Email"
    >
        Email
        </label>
        <input
        id="Email"
        name="Email"
        type="text"
        value={FormData.Email || ""}
        onChange={handlechange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" 
        required
        />
        </div>
        <div className="mb-6">
            <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Jurusan"
            >
                Jurusan
            </label>
            <input
            id="Jurusan"
            name="Jurusan"
            type="text"
            value={FormData.Jurusan || ""}
            onChange={handlechange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
            />
        </div>
        

        <div className="flex items-center justify-between">
            <button
               type="submit"
               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                simpan data
            </button>
            <button
                type="button"
                onClick={() => Navigate(-1)}
                className="bg-gray-500 hover:bg-gray-700 text-white
                font-bold py-2 px-4 rounded"
            >
                Kembali
            </button>
        </div>
        </form>
    </div>
);
}







export default Editdata;