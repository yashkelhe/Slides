import axios from "axios";
import React, { useEffect } from "react";

function Q5() {
  // ✅ Post Data Function
  const postData = () => {
    axios
      .post(
        "https://your_api_endpoint",
        {
          name: "example name",
          arr: ["some", "thing"],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error posting data:", err);
      });
  };

  // ✅ Get Data with useEffect
  useEffect(() => {
    axios
      .get("https://your_api_endpoint")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  // ✅ Update Data Function
  const update = (id: number, newData: object) => {
    axios
      .put(`https://your_api_endpoint/${id}`, newData)
      .then((res) => {
        console.log("Updated data:", res.data);
      })
      .catch((err) => {
        console.error("Error updating data:", err);
      });
  };

  return (
    <div>
      <div>Get Post</div>
      <button onClick={postData}>Post Data</button>
      <button onClick={() => update(1, { name: "Updated Name" })}>
        Update Data
      </button>
    </div>
  );
}

export default Q5;
