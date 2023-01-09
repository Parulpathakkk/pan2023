import { useState } from "react";
import style from "./profile.module.css";
import { useEffect } from "react";
import axios from "axios";
import React from "react";
import pic from "./map.png";
import Dropdown from "react-bootstrap/Dropdown";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
const Profile = () => {
  let [name, setName] = useState("");
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [propic, setPropic] = useState("");
  let [street, setStreet] = useState("");
  let [suite, setSuite] = useState("");
  let [city, setCity] = useState("");
  let [zip, setZip] = useState("");
  let [lat, setLat] = useState("");
  let [lon, setLon] = useState("");
  let [phone, setPhone] = useState("");
  let [web, setWeb] = useState("");
  let [comp, setComp] = useState("");
  let [catchph, setCatchph] = useState("");
  let [bs, setBs] = useState("");
  let { index } = useParams();
  console.log(index);
  useEffect(() => {
    axios.get(`http://localhost:3000/users/${index}`).then((response) => {
      console.log(response);
      setName(response.data.name);
      setUsername(response.data.username);
      setEmail(response.data.email);
      setPropic(response.data.profilepicture);
      setStreet(response.data.address.street);
      setSuite(response.data.address.suite);
      setCity(response.data.address.city);
      setZip(response.data.address.zipcode);
      setLat(response.data.address.geo.lat);
      setLon(response.data.address.geo.lng);
      setPhone(response.data.phone);
      setWeb(response.data.website);
      setComp(response.data.company.name);
      setCatchph(response.data.company.catchPhrase);
      setBs(response.data.company.bs);
    });
  }, []);

  return (
    <section id={style.main}>
      <article>
        <div id={style.left}>
          <div>
            <h4>Profile</h4>
            <h4>Posts</h4>
            <h4>Gallery</h4>
            <h4>ToDo</h4>
          </div>
        </div>
        <div id={style.right}>
          <nav>
            <div>Profile</div>
            <div>
              {" "}
              <Dropdown>
                <Dropdown.Toggle
                  variant="white"
                  style={{ border: "hidden" }}
                  id="dropdown-basic"
                >
                  <img src={propic} /> {name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <div>
                      <img src={propic} />
                    </div>
                    <div>{email}</div>
                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item href="#/action-2">
                    <img src={propic} />
                    {name}
                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item href="#/action-3">
                    <img src={propic} />
                    {name}
                  </Dropdown.Item>
                  <Dropdown.Item href="">
                    <Button
                      style={{
                        background: "red",
                        border: "hidden",
                        borderRadius: "18px",
                      }}
                    >
                      Sign out
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </nav>
          <hr />
          <div>
            <div className={style.pho}>
              <img src={propic} />
              <h1>{name}</h1>

              <table>
                <tr>
                  <td className={style.label}>Username:</td>
                  <td className={style.data}>{username}</td>
                </tr>
                <tr>
                  <td className={style.label}>email:</td>
                  <td className={style.data}>{email}</td>
                </tr>
                <tr>
                  <td className={style.label}>phone:</td>
                  <td className={style.data}>{phone}</td>
                </tr>
                <tr>
                  <td className={style.label}>Website:</td>
                  <td className={style.data}>{web}</td>
                </tr>
                <hr />
                <h3>Company</h3>

                <tr>
                  <td className={style.label}>Name:</td>
                  <td className={style.data}>{comp}</td>
                </tr>
                <tr>
                  <td className={style.label}>Catchphrase:</td>
                  <td className={style.data}>{catchph}</td>
                </tr>
                <tr>
                  <td className={style.label}>bs:</td>
                  <td className={style.data}>{bs}</td>
                </tr>
              </table>
            </div>
            <div className={style.det}>
              <div id={style.add}>
                <h3>Address:</h3>
                <table>
                  <tr>
                    <td className={style.label}>Street:</td>
                    <td className={style.data}>{street}</td>
                  </tr>
                  <tr>
                    <td className={style.label}>Suite:</td>
                    <td className={style.data}>{suite}</td>
                  </tr>
                  <tr>
                    <td className={style.label}>City:</td>
                    <td className={style.data}>{city}</td>
                  </tr>
                  <tr>
                    <td className={style.label}>Zip code:</td>
                    <td className={style.data}>{zip} </td>
                  </tr>
                </table>
              </div>
              <div id={style.lat}>
                <img style={{ marginLeft: "80px" }} height="300px" src={pic} />
                <p>
                  Lat: {lat} Lng: {lon}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Profile;