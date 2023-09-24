import data from "../data";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

export default function Detalle() {
  const { id } = useParams();
  const [detalle, setDetalle] = useState([]);

  function getData() {
    //data.id = id;
    const response = data[id-1];
    setDetalle(response);
  }
  console.log(detalle.titulo);

  useEffect(() => {
    getData();
  });

  return (
    <>
      <h1>{detalle.titulo}</h1>
      <h3>{detalle.p1titulo}</h3>
      <p>{detalle.p1}</p>
      <h3>{detalle.p2titulo}</h3>
      <p>{detalle.p2}</p>
      <h3>{detalle.p3titulo}</h3>
      <p>{detalle.p3}</p>
    </>
  );
}
