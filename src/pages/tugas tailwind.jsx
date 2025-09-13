import React from 'react'
import { Tabel } from "Tabeltailwind"

function Tabel () {
    const data2 =[
        {id: 1, nama_lengkap: "anindira shireen zulfikar", nama_belakang: "zulfikar", username: "dira"},
        {id: 2, nama_lengkap: "alfin xavier alexsander", nama_belakang: "alexsander", username: "vier"},
        {id: 3, nama_lengkap: " muhammad abdurrohman as-shidiqq", nama_belakang: "as-shidiqq", username: "abdur"},

    ]
    return (
        <div classname="Tabel">
        <h5>
            Tabel 1
        </h5>
        <div classname='flex flex-row'>
        <Tabel striped bordered hover>
            <thead> 
                <tr>
                    <th class="border border-gray-300 ...">#</th>
                    <th class="border border-gray-300 ...">full name</th>
                    <th class="border border-gray-300 ...">last name</th>
                    <th class="border border-gray-300 ...">username</th>
                </tr>
            </thead>
            <tbody>
                {data2.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nama_lengkap}</td>
                        <td>{item.nama_belakang}</td>
                        <td>{item.username}</td>
                    </tr>
                ))}
            </tbody>
        </Tabel>

           <div classname="Tabel">
            <h5>
             Tabel 2
            </h5>
            <Tabel classname="border-separate border border-gray-400">
                <thead>
                    <tr>
                    <th class="border border-gray-300 ...">#</th>
                    <th class="border border-gray-300 ...">full name</th>
                    <th class="border border-gray-300 ...">last name</th>
                    <th class="border border-gray-300 ...">username</th>
                    </tr>
                </thead>
                <tbody>
                    {data2.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nama_lengkap}</td>
                        <td>{item.nama_belakang}</td>
                        <td>{item.username}</td>
                    </tr>
                    ))}
                </tbody>
            </Tabel>

            <div classname="Tabel">
            <h5>
             Tabel 3
            </h5>
            <Tabel classname="border-separate border border-gray-400">
                <thead>
                    <tr>
                    <th class="border border-gray-300 ...">#</th>
                    <th class="border border-gray-300 ...">full name</th>
                    <th class="border border-gray-300 ...">last name</th>
                    <th class="border border-gray-300 ...">username</th>
                    </tr>
                </thead>
                <tbody>
                    {data2.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nama_lengkap}</td>
                        <td>{item.nama_belakang}</td>
                        <td>{item.username}</td>
                    </tr>
                    ))}
                </tbody>
            </Tabel>
            <div classname="Tabel">
            <h5>
            Tabel 4
            </h5>
            <Tabel classname="border-separate border border-gray-400">
                <thead>
                    <tr>
                    <th class="border border-gray-300 ...">#</th>
                    <th class="border border-gray-300 ...">full name</th>
                    <th class="border border-gray-300 ...">last name</th>
                    <th class="border border-gray-300 ...">username</th>
                    </tr>
                </thead>
                <tbody>
                    {data2.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nama_lengkap}</td>
                        <td>{item.nama_belakang}</td>
                        <td>{item.username}</td>
                    </tr>
                    ))}
                </tbody>
            </Tabel>

            <div classname="Tabel">
            <h5>
            Tabel 5
            </h5>
            <Tabel classname="border-separate border border-gray-400">
                <thead>
                    <tr>
                    <th class="border border-gray-300 ...">#</th>
                    <th class="bordeclassr border-gray-300 ...">full name</th>
                    <th class="border border-gray-300 ...">last name</th>
                    <th class="border border-gray-300 ...">username</th>
                    </tr>
                </thead>
                <tbody>
                    {data2.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nama_lengkap}</td>
                        <td>{item.nama_belakang}</td>
                        <td>{item.username}</td>
                    </tr>
                    ))}
                </tbody>
            </Tabel>
        </div>
        </div>

        <div classname="flex flex-col md:flex-row gat-4 mt-10">
        </div>
        
        </div>
        </div>
        </div>
        </div>
    )
}

export default Tabel;