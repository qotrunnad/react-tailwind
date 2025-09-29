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
          <h2>Sangat Puas</h2>
          <p className="text-blue-600 text-2xl font-bold">90</p>
        </div>
        <div className="p-4 shadow rounded text-center">
          <h2>Tidak Puas</h2>
          <p className="text-red-600 text-2xl font-bold">4</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Daftar sekolah</h2>
        <button
        onClick={() => navigate("/a")}
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
      </table>
    </>
  );
}

export default Dashboard;