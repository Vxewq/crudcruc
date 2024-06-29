import { useEffect, useState } from "react";
import { backend } from "../../axios";

export default function Map() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    backend.get("/users").then((e) => setUsers(e.data));
  }, []);
  console.log(users);

  return (
    <>
      <h1>Lorem ipsum dolor sit.</h1>
      {users.map((u, i) => {
        return <h1 key={i}>{u.firstNsame}</h1>;
      })}
    </>
  );
}
