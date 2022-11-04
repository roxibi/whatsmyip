import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [details, setDetails]=useState();
  const [ip, setIp] = useState();
  const [country, setCountry]=useState();
  const [city, setCity]=useState();
  const getIP = () => {
    const url =
      "https://geolocation-db.com/json/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
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
  return <><div className="App">This is your IP: {details.IPv4} <br/> I know where you are in {details.city}, {details.country_name}.</div>
  {/* <p>This is your location: {location}</p> */}
  </>;
}

export default App;
