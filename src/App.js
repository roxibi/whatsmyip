import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [ip, setIp] = useState();
  const [country, setCountry]=useState();
  const getIP = () => {
    const url =
      "https://geolocation-db.com/json/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIp(data.IPv4);
        setCountry(data.country_name)
      })
      
  };
console.log(ip)
  useEffect(()=>{
    getIP()
  }, []);
// const [location, setLocation]=useState();
//   const getLocation=()=>{
//     const url="http://ip-api.com/json/{ip}"
//     fetch(url).then((result)=>result.json()).then((loc)=>{setLocation(loc.country)})
//   }
//   useEffect(()=>{
//     getLocation()
//   }, []);
  return <><div className="App">This is your IP: {ip} <br/> I know where you are in {country}</div>
  {/* <p>This is your location: {location}</p> */}
  </>;
}

export default App;
