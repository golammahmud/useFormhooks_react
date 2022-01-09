import { React, useContext, useState, useEffect } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductContexts, loadContext } from "../context/productcontext";
import Isloading from "../isloading";

import {
  Button,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
  Table,
} from "react-bootstrap";



function Test() {
  const [items, setItems] = useContext(ProductContexts);
  console.log(items);
  return (
    <div>
   
    </div>
  );
}

export default Test;
