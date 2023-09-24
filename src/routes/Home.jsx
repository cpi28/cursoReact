import Card from "../components/Card";
import data from "../data";
//import { useContext, useEffect, useState } from "react";

export default function MainContent() {

  
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        titulo={item.titulo}
        img={item.img}
        contenido={item.resumen}
      />
    );
    
  });

  
  
  return (
    <div className="main">
      <h1>Bienvenid@s</h1>
      <p>
        Mi nombre es Carla, soy estudiante de Full Stack Developer y me gustaría
        compartir contigo un pequeño curso de introducción a React para
        demostrar lo aprendido.
      </p>
      <section className="cards-list">{cards}</section>
    </div>
  );
}
