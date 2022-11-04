import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [ip, setIp] = useState();
  const getIP = () => {
    const url =
      "https://geolocation-db.com/json/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIp(data.IPv4);
      })
      
  };
console.log(ip)
  useEffect(()=>{
    getIP()
  }, []);
  return <div className="App">This is your IP: {ip}</div>;
}

export default App;
