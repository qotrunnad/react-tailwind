import { useState } from "react";
import { Link } from "react-router-dom";


function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('login data:', formData);
        alert('simulasi login berhasil');
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-2x1 font-blod text-center mb-6">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="blox text-gray-700 text-sm font-blod mb-2" htmlfor="email">
                            Email
                        </label>
                        <input
                            className="shadow appereance-none border rounded w-full 
                        py-2 px-3 text-gray-700 leading-tight focus:outline-one focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handlechange}
                            placeholder="Masukan email anda"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-blod mb-2" htmlfor="password">
                            Password
                        </label>
                        <input
                            className="shadow appreance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline"
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Masukan password anda"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white
                        font-blod py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Masuk
                        </button>
                        <Link to="/register" className="inline-block align-baseline
                            font-blod text-sm text-blue-500 hover:text-blue-800">
                            Belum punya akun? Daftar
                        </Link>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default LoginPage