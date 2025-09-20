import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
            const response = await axios.post
                ('http://localhost:5000/users', formData);
            console.log('Register success:', response.data);

            alert('Pendaftaran berhasil!');
            navigate('/login'); // setelah daftar, arahkan ke login
        } catch (error) {
            console.error('Error register:', error);
            alert('Terjadi kesalahan saat mendaftar.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email anda"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              required
            />
          </div>

          {/* Alamat Rumah */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alamatRumah">
              Alamat Rumah
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="alamatRumah"
              type="text"
              name="alamatRumah"
              value={formData.alamatRumah}
              onChange={handleChange}
              placeholder="Masukkan alamat rumah anda"
              required
            />
          </div>

          {/* Nama Orang Tua */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orangtua">
              Nama Orang Tua
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="orangtua"
              type="text"
              name="orangtua"
              value={formData.orangtua}
              onChange={handleChange}
              placeholder="Masukkan nama orang tua"
              required
            />
          </div>

          {/* Asal Sekolah */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="asalSekolah">
              Asal Sekolah
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="asalSekolah"
              type="text"
              name="asalSekolah"
              value={formData.asalSekolah}
              onChange={handleChange}
              placeholder="Masukkan asal sekolah"
              required
            />
          </div>

          {/* Tombol & Link */}
          <div className="flex items-center justify-between">
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Masuk
            </button>
            <Link
              to="/Register"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Belum punya akun? Daftar
            </Link>
          </div>
        </form>
      </div>
      <div>
      </div>
    </div>
    );
}

export default Register;