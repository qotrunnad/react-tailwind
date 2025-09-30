import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Dashboard() {
  const [siswa, setSiswa] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/siswa");
        setSiswa(response.data);
      } catch (error) {
        console.error("Gagal ambil data siswa:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="p-4 shadow rounded text-center">
          <h2>Total Pendaftaran</h2>
          <p className="text-green-600 text-2xl font-bold">{siswa.length}</p>
        </div>
        <div className="p-4 shadow rounded text-center">
          <h2>Diterima</h2>
          <p className="text-blue-600 text-2xl font-bold">80</p>
        </div>
        <div className="p-4 shadow rounded text-center">
          <h2>Ditolak</h2>
          <p className="text-red-600 text-2xl font-bold">5</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Daftar sekolah</h2>
        <button
        onClick={() => navigate("/e")}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4"
        >
            Tambah data
        </button>
      </div>
      <table className="table-auto w-full border border-collapse">
        <thead>
            <tr>
                <th className="border px-4 py-2">No</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Jurusan</th>
                <th className="border px-4 py-2">Aksi</th>
            </tr>
        </thead>
        <tbody>
               {siswa.map((item, index) => (
               <tr key={item.id}>
               <td className="border px-4 py-2">{index + 1}</td>
               <td className="border px-4 py-2">{item.nama}</td>
               <td className="border px-4 py-2">{item.email}</td>
               <td className="border px-4 py-2">{item.jurusan}</td>
               <td className="border px-4 py-2">{item.angkatan}</td>
               <td className="border px-4 py-2">{item.status}</td>
               <td className="border px-4 py-2">
            <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded mr-2"
                onClick={() => navigate(`/edit/${item.id}`)}
            >
                Edit 
            </button>
            <button
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(item.id)}
            >
                Hapus
            </button>
         </td>
       </tr>
      ))}
    </tbody>

      </table>
    </>
  );
}

export default Dashboard;