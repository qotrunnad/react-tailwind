import { useState } from "react";

function TambahData() {
    const [formData, setFormData] = useState({
        makanan: '',
        Paket: '',
        Harga: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Tambah data:', formData);
        alert('Penambahan data berhasil!');
    };

    const handleKembali = () => {
        window.history.back();
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-md shadow-md w-96"
            >
                <div className="">
                    <h2 className="text-center font-bold mb-4 text-lg">Tambah Teks</h2>

                    <label className="block mb-2 font-semibold" htmlFor="makanan">
                        Makanan
                    </label>
                    <input
                        id="makanan"
                        name="makanan"
                        type="text"
                        placeholder="masukan teks"
                        value={formData.makanan}
                        onChange={handleChange}
                        className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
                        required
                    />

                    <label className="block mb-2 font-semibold" htmlFor="paket">
                        Paket
                    </label>
                    <input
                        id="paket"
                        name="Paket"
                        type="text"
                        placeholder="masukan teks"
                        value={formData.Paket}
                        onChange={handleChange}
                        className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
                        required
                    />
                    <label htmlFor="Harga" className="block text-gray-700 text-sm font-bold mb-2">
                        Harga
                    </label>
                    <input
                        id="Harga"
                        type="text"
                        name="Harga"
                        value={formData.Harga}
                        onChange={handleChange}
                        placeholder="Masukkan harga"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    /> 

                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Simpan Data
                        </button>
                        <button
                            type="button"
                            onClick={handleKembali}
                            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                        >
                            Kembali
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;