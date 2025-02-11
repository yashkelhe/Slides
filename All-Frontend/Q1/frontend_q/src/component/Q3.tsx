import { useState } from "react";

function Q3() {
  const [object, setObject] = useState<{ [key: string]: string | number }>({});

  // ✅ Function to update the object
  const updateObject = (value: string, name: string) => {
    setObject((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Fixed submit handler
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with data:", object);
  };

  return (
    <form onSubmit={submit}>
      {" "}
      {/* ✅ Changed from onClick to onSubmit */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => updateObject(e.target.value, e.target.name)}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        onChange={(e) => updateObject(e.target.value, e.target.name)}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={(e) => updateObject(e.target.value, e.target.name)}
      />
      <input
        type="date"
        name="date"
        placeholder="Birth Date"
        onChange={(e) => updateObject(e.target.value, e.target.name)}
      />
      <button type="submit">Submit</button>
      <button type="reset">reset</button>
      {/* ✅ Display the updated object */}
      <pre>{JSON.stringify(object, null, 2)}</pre>
    </form>
  );
}

export default Q3;
