import React, { useEffect, useState } from "react";

import "./SignIn.css";

function SigIn() {
  const [UserData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = UserData;

  const setData = async (e) => {
    e.preventDefault();

    const res = await fetch(`https://react-movi-default-rtdb.firebaseio.com/data.json`, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (res) {
      alert("done");
      setUserData({
        name: "",
        email: "",
        password: "",
      });
    } else {
      alert("error");
    }
  };

  const ChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserData({ ...UserData, [name]: value });
  };

  useEffect(() => {
    const resData = fetch(`https://react-movi-default-rtdb.firebaseio.com/data.json`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="SignInComponent">
      <div className="SignInDiv">
        <form method="POST">
          <input type="text" name="name" placeholder="enter name" autoComplete="off" required value={UserData.name} onChange={ChangeHandler} />

          <input type="email" name="email" placeholder="enter email" autoComplete="off" required value={UserData.email} onChange={ChangeHandler} />

          <input
            type="password"
            name="password"
            placeholder="password"
            autoComplete="off"
            required
            value={UserData.password}
            onChange={ChangeHandler}
          />

          <button type="submit" className="submiteButton" onClick={setData}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SigIn;
