import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Tabeldata() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/menu");
        setData(res.data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const konfirmasi = window.confirm("Yakin ingin menghapus data ini?");
    if (!konfirmasi) return;

    try {
      await axios.delete(`http://localhost:5000/menu/${id}`)
      alert("Data berhasil dihapus");
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Gagal menghapus data:", err);
      alert("Gagal menghapus data");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (

    <div className="mt-10 m-10 p-5">
      <div className="flex justify-end p-8 mr-14">

        <button
          type="submit" className=" px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600 transition">

          tambah
        </button>
      </div>



      <table className="table-auto w-full border border-gray-300 ">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-1 py-2 border">No</th>
            <th className="px-2 py-2 border">Makanan</th>
            <th className="px-2 py-2 border">Paket</th>
            <th className="px-2 py-2 border">Harga</th>
          </tr>
        </thead>
        <tbody>
  {data.length > 0 ? (
    data.map((item, index) => (
      <tr key={item.id} className="hover:bg-gray-100">
        <td className="px-4 py-2 border text-center">{index + 1}</td>
        <td className="px-4 py-2 border">{item.makanan}</td>
        <td className="px-4 py-2 border">{item.paket}</td>
        <td className="px-4 py-2 border">{item.harga}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" className="text-center py-4 border">
        Tidak ada data
      </td>
    </tr>
  )}
</tbody>

      </table>
    </div>

  ); 
};
export default Tabeldata;