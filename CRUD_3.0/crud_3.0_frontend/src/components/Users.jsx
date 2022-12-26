import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const Users = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const Data = async () => {
    await axios
      .get("http://localhost:3000/users?limit=3&sort=desc")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    Data();
  }, []);
  return (
    <div>
      {!loading ? (
        data.map((e) => (
          <>
            <div
              style={{
                color: "red",
                width: "600px",
                marginLeft: "300px",
                borderRadius: "10px",
                marginTop: "5px",
                backgroundColor: "beige",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "50px",
              }}
            >
              <h1>{e.name}</h1>
              <span>{e.email}</span>
            </div>
          </>
        ))
      ) : (
        <h1>Loading.........</h1>
      )}
    </div>
  );
};

export default Users;
