import Admindashboard from '../components/Admindashboard'
import Delegatedash from '../components/Delegatedash'
import Speakerdash  from '../components/Speakerdash'
import Sponserdash  from '../components/Sponserdash'

export default function Dashboard() {
  let a = localStorage.getItem("role");
  console.log(a);
  return (
    <div className="  w-[100vw] h-[100vh]">
      {a === "Admin" && <Admindashboard />}
      {a === "Delegate" && <Delegatedash />}
      {a === "Speaker" && <Speakerdash />}
      {a === "Sponsor" && <Sponserdash />}
            
    </div>
  );
}
