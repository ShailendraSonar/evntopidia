import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
    from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';

function Home() {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const [activeButton, setActiveButton] = useState("Button-1");
    const [Data,setData]=useState([])
  
    async function getdata(APIuRL) {
      try {
        const response = await axios.get(APIuRL);
        setData(response.data)
      } catch (error) {
        console.error(error.response.data);
      }
    }
  
    useEffect(()=>{
      getdata("http://localhost:3001/aprovedusers")
    },[])
  
  
    function hendleclick(event) {
      if (event.target.id==="Approved") {
        setActiveButton("Button-1")
        getdata("http://localhost:3001/aprovedusers")
  
      }
      if (event.target.id==="NotApproved") {
        setActiveButton("Button-2")
        getdata("http://localhost:3001/notaprovedusers")
      }
    }
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h1 id="Approved" onClick={hendleclick} className={`text-slate-200 cursor-pointer ${activeButton === 'Button-1' ? 'bg-cyan-500 p-1 rounded-full text-black font-bold ' : ''}`}>Approved User</h1>
                        <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h1 id="NotApproved" onClick={hendleclick} className={`text-slate-200 cursor-pointer ${activeButton === 'Button-2' ? 'bg-cyan-500 p-1 rounded-full text-black font-bold ' : ''}`}>Not Approved User</h1>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Speaker</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Total user</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%" >
                   <div >
                    
                   {
                        Data.map(item => (
                            <div key={item.MemberId}>
                                <p className="text-black">{item.MemberEmail}</p>
                            </div>
                        ))
                    }
                   </div>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    {/* <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart> */}
                </ResponsiveContainer>

            </div>
        </main>
    )
}

export default Home