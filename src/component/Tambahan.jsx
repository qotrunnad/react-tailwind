import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidnav from "./Sidnav";

function Editdataytta() {
    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        jurusan: "",
        angkatan: "",
        status: "",
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {

            const response = await axios.post("http://localhost:5000/siswa", formData);
            console.log("Respon server:", response.data);
            setFormData({
                nama: "",
                email: "",
                jurusan: "",
                angkatan: "",
                status: "",
            });
           alert("Data berhasil diubah!");
            navigate("/d");
        } catch (error) {
            console.error("Error saat menambahkan data:", error);
            alert("Gagal menambahkan data!");
        } finally {
            setLoading(false);
        }
    };
    const handleKembali = () => {
        navigate("/ntol");
    };


    return (
            <div className="flex justify-center items-center min-h-screen ">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white-500  p-12 rounded-md shadow-md w-96"
                >
                    <div className="bg-white">
                        <h2 className="text-center font-bold mb-4 text-lg">Tambah Teks</h2>
                        <label className="block mb-2 font-semibold" htmlFor="nama">
                            nama
                        </label>
                        <input
                            id="nama"
                            name="nama"
                            type="text"
                            placeholder="masukan teks"
                            value={formData.nama}
                            onChange={handleChange}
                            className="border border-gray-800 rounded px-3 py-2 mb-4 w-full"
                            required
                        />
                        <label className="block mb-2 font-semibold" htmlFor="email">
                            email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="masukan teks"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-800 rounded px-3 py-2 mb-4 w-full"
                            required
                        />
                        <label className="block mb-2 font-semibold"
htmlFor="jurusan">
                            jurusan
                        </label>
                        <input
                            id="jurusan"
                            name="jurusan"
                            type="text"
                            placeholder="masukan teks"
                            value={formData.jurusan}
                            onChange={handleChange}
                            className="border border-gray-800 rounded px-3 py-2 mb-4 w-full"
                            required
                        />

                        <label className="block mb-2 font-semibold" htmlFor="angkatan">
                             angkatan
                        </label>
                        <input
                            id="angkatan"
                            name="angkatan"
                            type="text"
                            placeholder="masukan teks"
                            value={formData.angkatan}
                            onChange={handleChange}
                            className="border
border-gray-800 rounded px-3 py-2 mb-4 w-full"
                            required
                        />
                        <label className="block mb-2 font-semibold" htmlFor="status">
                             status
                        </label>
                        <input
                            id="status"
                            name="status"
                            type="text"
                            placeholder="masukan teks"
                            value={formData.status}
                            onChange={handleChange}
                            className="border border-gray-800 rounded px-3 py-2 mb-4 w-full"
                            required
                        />

                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-10"
                            >
                                Simpan
                            </button>

                            <button
                                type="submit"
                                onClick={handleKembali}
                                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 mt-10"
                            >
                                Kembali
                            </button>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default Editdataytta;
