import style from "./home.module.css";

import { useState } from "react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  let [abc, setAbc] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      setAbc(response.data);
    });
  }, []);
  return (
    <section id={style.mainbox}>
      <article>
        <h5 style={{ marginTop: "8px", color: "grey" }}>Select an account</h5>
        <hr />
        <div id={style.box}>
          {abc.map((x) => {
            return (
              <div key={x.id} id={style.profiles}>
                <img src={x.profilepicture} />
                <Link className={style.link} to={`/propath/${x.id}`}>
                  <h5 className={style.head}>{x.username}</h5>
                </Link>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};
export default Home;