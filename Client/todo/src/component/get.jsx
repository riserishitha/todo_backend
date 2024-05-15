import axios from "axios";
import { useState, useEffect } from "react";
function FetchData() {
  const [todoData, settodoData] = useState([]);
  useEffect(() => {
    const gettingData = async () => {
      try {
        const database = await axios.get("http://localhost:4000/get");
        console.log(database.data.a);
        settodoData(database.data.a);
      } catch (err) {
        console.error("Error :", err);
      }
    };
    gettingData();
  }, []);
  return (
    <div>
      {todoData.map((data) => {
        return (
          <div key={data._id}>
            <h3><b>Daily Task: </b> {data.task}</h3>
          </div>
        )})}
    </div>
)}

export default FetchData;