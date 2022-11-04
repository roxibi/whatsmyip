import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [ip, setIp] = useState();
  const getIP = () => {
    const url =
      "https://geo.ipify.org/api/v2/country?apiKey=at_t9pjT5SduFKs5XgR2UHjRThw9mp9Q&ipAddress=8.8.8.8";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIp(data.ip);
      });
  };
console.log(ip)
  useEffect(()=>{
    getIP()
  }, []);
  return <div className="App">This is your IP: {ip}</div>;
}

export default App;
