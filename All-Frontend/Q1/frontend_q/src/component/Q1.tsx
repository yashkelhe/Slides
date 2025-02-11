import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
function Q1() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        return Response.json();
      })
      .then((json) => {
        console.log(json);
        setUsers(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const data = () => {
    let arrays = users.map((user) => user.phone.slice(1, 6));

    console.log("from data", arrays);
  };
  // it will return the only those id which are the less then  the 5
  const Filter = users.filter((user) => {
    return user.id <= 5;
  });

  console.log("Less then the 5 data : ", Filter);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      <br />

      <div>this are the filter value </div>
      {Filter.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      <br />

      <button onClick={data}>Click here to see Jadu</button>
    </div>
  );
}

export default Q1;
