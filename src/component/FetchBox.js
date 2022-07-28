import React, { useState, useEffect } from "react";

const FetchBox = () => {
  const [values, setValues] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/";

  const urlP = "https://api.adviceslip.com/advice";

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setValues(data);
    // console.log(values)
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(values)
  return (
    <div>
      <h2>Fetch API</h2>
      <div>
        {values.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.username}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchBox;
