import { useState, useEffect } from "react";
import axios from "axios";

const pinAPI = "https://api.postalpincode.in/pincode/";

function Q6() {
  const [pin, setPin] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    // ✅ Avoid fetching when pin is empty
    if (pin === "") return;

    // ✅ Set up debounce with `setTimeout`
    const debounce = setTimeout(() => {
      axios
        .get(pinAPI + pin)
        .then((res) => {
          console.log(res.data[0].PostOffice);
          setData(res.data[0].PostOffice);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    }, 1000); // Wait for 1 second before making the API call

    // ✅ Cleanup function to clear timeout when `pin` changes
    return () => clearTimeout(debounce);
  }, [pin]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your Pin-Code"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default Q6;
