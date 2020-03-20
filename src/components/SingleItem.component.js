import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleItem() {
  let { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/drakulovski/dbplaceholder/products"
      )
      .then(res => {
        console.log(res.data);

        let item = res.data.filter(item => {
          return item.id == id;
        });

        setItem(item[0]);
      });
  }, []);

  return (
    <>
      <p>{item.price} MKD</p>
      <img src={item.picture} width="100" alt="{item.title}" />
      <span>{item.description}</span>
    </>
  );
}

export default SingleItem;
