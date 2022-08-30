import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
                "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDYxOGUxMDY4YmJiMDM4YzFiOGE0ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTQ5MDY3NCwiZXhwIjoxNjYxOTIyNjc0fQ.xTezhID3e6WqZINqrZvFTQI5qUoVJUXWUDfyh5k1ECM",
            },
          }
        );
        setLists(()=>res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />      
      {lists.map((list)=>
        <List list ={list}/>
      )}
    </div>
  );
};

export default Home;
