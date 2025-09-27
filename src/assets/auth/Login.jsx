import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:5000/users", {
        params: { email: formData.email, password: formData.password },
      });

      if (res.data.length > 0) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Login berhasil, anda akan diarahkan ke dashboard.", 
          showConfirmButton: false,
          timer: 2000,
        });

        navigate("/dashbaord");
      } else {
        Swal.fire({
          icon: "error",
          title: "Login gagal!",
          text: "Email atau password salah.",
          confirmButtonText: "Coba Lagi",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire ({
        icon: "error",
        title: "Terjadi Error",
        text: "Silakan coba lagi nanti.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
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

export default Login; 