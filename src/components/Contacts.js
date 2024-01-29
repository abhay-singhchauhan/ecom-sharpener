import { useEffect, useState } from "react";
import "./Contacts.css";

const Contacts = () => {
  const [inputData, setInputData] = useState({});
  function input(str, value) {
    let obj = { ...inputData };
    obj[str] = value;
    setInputData({ ...obj });
    console.log(inputData);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("////", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      });
      const res2 = await res.json();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        onInput={(e) => input("Name", e.target.value)}
        type="text"
        placeholder="Name"
      ></input>
      <input
        onInput={(e) => input("Email", e.target.value)}
        type="text"
        placeholder="Email"
      ></input>
      <input
        onInput={(e) => input("Phone", e.target.value)}
        type="phone"
        placeholder="Phone"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Contacts;
