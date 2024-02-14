import axios from "axios";
import { useEffect, useState } from "react";

function Admindashboard() {
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
    <div className=" pt-10">
      <h1 className='text-center text-slate-400 text-3xl underline underline-offset-8 uppercase'>Wellcome to Admin pannel</h1>
      <div className="flex gap-10 mt-[10vh] ml-10">
        <h1 id="Approved" onClick={hendleclick} className={`text-slate-200 cursor-pointer ${activeButton === 'Button-1' ? 'bg-cyan-500 p-1 rounded-full text-black font-bold ' : ''}`}>Approved User</h1>
        <h1 id="NotApproved" onClick={hendleclick} className={`text-slate-200 cursor-pointer ${activeButton === 'Button-2' ? 'bg-cyan-500 p-1 rounded-full text-black font-bold ' : ''}`}>Not Approved User</h1>
      </div>
      <div className="ml-10 mt-10">
      {
        Data.map(item=>(
          <div key={item.MemberId}>
            <p className="text-white">{item.MemberEmail}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Admindashboard