import React, { useEffect, useState } from "react";


const Tempapp = () => {
  const [city, setCity] = useState();
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchapi = async () => {
      const url = `<your Api Key>`;
      const response = await fetch(url);
      const resjson = await response.json();
      setCity(resjson.main)
    };
    fetchapi();
  }, [search]);

  return (
    <>
    <div style={{backgroundColor:"#4D75C6",border:"2px solid black",width:"600px",textAlign:"center",margin:"40px", padding:"20px"}} >
        <div>
          <h4>Enter the City Name</h4>
          <input
          style={{borderRadius:"10px",height:"40px"}}
            type="search "
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>


      {!city ? (
        <p>No Data Found</p>
      ) : (
        <div>
          <h2>City :- {search}</h2>
          <h1> Temperature : -{city.temp}°Celcius</h1>
          <h3>Humidity :- {city.humidity}</h3>
          <h3>Pressure :- {city.pressure}</h3>
        </div>
      )}
      </div>
    </>
  );
};

export default Tempapp;
