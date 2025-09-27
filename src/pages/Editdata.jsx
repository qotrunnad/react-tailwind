import React, { useEffect, useState, UseState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Editdata() {
    const { ID} = UseParams(); // ambil id dari URL
    const Navigate = UseNavigate();

    const [FormData,SetFormData] = useState({
        makanan:"",
        paket:"",
        harga:"",
});
const [Loading,SetLoading] =UseState(true);

//ambil data berdasarkan id
useEffect(() => {
    const fetchData = async () => {
try{
    const res = await axios.get
    ('http://localhost:5000/menu/${id}');
    const data = Array.isArray(res.data) ? res.data[0]
    : res.data; // antisipasi kalau API return array 
    SetFormData(data);
} catch (err) {
    console.error("Gagal mengambil data:", err);
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
    try {
        await axios.put('http://localhost:5000/menu/${id}'),
        (FormData);
        alert("Data berhasil diubah!");
        Navigate("/Labeldata");
    } catch (err) {
        console.error("Gagal mengupdate data:", err);
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
                htmlFor="makanan"
            >
                Makanan
            </label>
            <input
                id="makanan"
                name="Makanan"
                type="text"
                value={FormData.Makanan || ""}
                onChange={handlechange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                required
            />
        </div>
        <div className="mb-4">
        <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlfor="paket"
    >
        Paket
        </label>
        <input
        id="Paket"
        name="Paket"
        type="text"
        value={FormData.Paket || ""}
        onChange={handlechange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" 
        required
        />
        </div>
        <div className="mb-6">
            <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="harga"
            >
                harga
            </label>
            <input
            id="harga"
            name="harga"
            type="number"
            value={FormData.harga || ""}
            onChange={handlechange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
            />
        </div>
        <div className="flex items-center justify-between">
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