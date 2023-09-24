/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <Link to={`/detalle/${props.id}`}>
        <h3>{props.titulo}</h3>
        <img className="imagen" src={props.img} />
        <p>{props.contenido}</p>
      </Link>
    </div>
  );
}
