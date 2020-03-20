import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ItemsList extends React.Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/drakulovski/dbplaceholder/products"
      )
      .then(res => {
        this.setState({ items: res.data });
      });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.items.map((item, i) => {
            return (
              <li key={item.id}>
                <Link to={`/item/${item.id}`}>{item.title}</Link>
                <p>{item.price} MKD</p>
                <img src={item.picture} width="100" alt="{item.title}" />
                <span>{item.description}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
