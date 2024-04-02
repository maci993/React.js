import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    phoneNum: "",
    email: "",
    password: "",
  });

  const [flag, setFlag] = useState(false);
  const handleChange = (value, inputValue) => {
    setData({ ...data, [inputValue]: value.target.value });
  };
  const handleForm = (e) => {
    e.preventDefault();
    if (
      data.name === "" ||
      data.surname === "" ||
      data.phoneNum === "" ||
      data.email === "" ||
      data.password === ""
    )
      alert("Please fill up all the fields");
    else setFlag(true);
  };

  return (
    <div>
      {flag ? (
        <>
          <Card 
            name={data.name}
            surname={data.surname}
            phoneNum={data.phoneNum}
            email={data.email}
            />
        </>
      ) : (
        <form>
          <input
            onChange={(e) => handleChange(e, "name")}
            value={data.name}
            type="text"
            placeholder="Name"
          />
          <br />
          <input
            onChange={(e) => handleChange(e, "surname")}
            value={data.surname}
            type="text"
            placeholder="Surname"
          />
          <br />
          <input
            onChange={(e) => handleChange(e, "phoneNum")}
            value={data.phoneNum}
            type="text"
            placeholder="Phone Number"
          />
          <br />
          <input
            onChange={(e) => handleChange(e, "email")}
            value={data.email}
            type="text"
            placeholder="Email"
          />
          <br />
          <input
            onChange={(e) => handleChange(e, "password")}
            value={data.password}
            type="text"
            placeholder="Password"
          />
          <br />
          <button onClick={(e) => handleForm(e)}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Form;
