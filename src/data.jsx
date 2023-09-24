export default [
  {
    id: 1,
    titulo: "Introduccion a React.js",
    img: "intro.png",
    resumen:
      "¿Qué es React.js? Historia y Evolución de React. Ventajas de Usar React",

    p1titulo: "¿Qué es React.js?",
    p1: "React.js es una biblioteca de JavaScript utilizada para construir interfaces de usuario modernas y dinámicas. Ofrece ventajas como la reutilización de componentes y un Virtual DOM eficiente para mejorar el rendimiento de las aplicaciones. A lo largo de su historia, React ha evolucionado y se ha convertido en una herramienta esencial para el desarrollo web. Este tema proporciona una visión general de React y establece las bases para comprender los conceptos posteriores en el curso.",
    p2titulo: "Historia y Evolución de React",
    p2: "React fue desarrollado por Facebook y se lanzó por primera vez en 2013. Desde entonces, ha experimentado un crecimiento significativo y se ha convertido en una de las bibliotecas de JavaScript más populares. React ha evolucionado con el tiempo, incorporando nuevas características y mejoras, como React Hooks y React Fiber.",
    p3titulo: "Ventajas de Usar React",
    p3:
      "React ofrece varias ventajas, incluyendo:" +
      "Reutilización de Componentes: La capacidad de crear componentes reutilizables facilita el desarrollo y el mantenimiento de aplicaciones." +
      "Virtual DOM: React utiliza un Virtual DOM para optimizar las actualizaciones de la interfaz de usuario, lo que mejora el rendimiento." +
      "Comunidad Activa: React tiene una comunidad activa de desarrolladores y una gran cantidad de bibliotecas y herramientas complementarias." +
      "Flexibilidad: Puede utilizarse con otras bibliotecas y marcos, lo que permite la integración con tecnologías existentes.",
  },
  {
    id: 2,
    titulo: "Configuración del Entorno de Desarrollo",
    img: "nodejs.png",
    resumen:
      "Instalación de Node.js y npm. Creación de una Nueva Aplicación React. Estructura de Archivos y Carpetas de un Proyecto React",
    p1titulo: "Instalación de Node.js y npm",
    p1:
      "Node.js es un entorno de ejecución de JavaScript que permite ejecutar código JavaScript en el servidor." +
      "npm (Node Package Manager) es un administrador de paquetes que facilita la instalación y gestión de bibliotecas y dependencias de JavaScript.",
    p2titulo: "Creación de una Nueva Aplicación React",
    p2: "Puedes crear una nueva aplicación React utilizando la herramienta oficial de línea de comandos de React llamada Create React App (CRA). CRA configura automáticamente una estructura de proyecto y las dependencias necesarias para comenzar a desarrollar con React.",
    p3titulo: "Estructura de Archivos y Carpetas de un Proyecto React",
    p3: "Un proyecto React típico tiene una estructura de archivos y carpetas organizada. Algunos de los archivos y carpetas más importantes incluyen:"+
    "src/: Contiene el código fuente de la aplicación. "+
    "public/: Contiene archivos estáticos como HTML y otros recursos. "+
    "package.json: Define las dependencias y scripts de la aplicación. "+
    "node_modules/: Contiene las bibliotecas y dependencias instaladas.",
  },
  {
    id: 3,
    titulo: "Componentes en React",
    img: "componentes.jpg",
    resumen: "Concepto de Componentes. Creación de Componentes Funcionales y de Clase. Props y su Uso para Pasar Datos a Componentes.",
    p1titulo: "Concepto de Componentes",
    p1: "En React, los componentes son bloques de construcción fundamentales que representan partes individuales y reutilizables de una interfaz de usuario (UI)."+
    "Los componentes pueden ser considerados como funciones o clases de JavaScript que generan elementos de la interfaz de usuario.",
    p2titulo: "Creación de Componentes Funcionales y de Clase",
    p2: "En React, puedes crear componentes de dos maneras principales: como componentes funcionales y como componentes de clase."+
    "Los componentes funcionales son funciones de JavaScript que devuelven elementos JSX."+
    "Los componentes de clase son clases de JavaScript que extienden la clase React.Component y tienen un método render() que devuelve elementos JSX.",
    p3titulo: "Props y su Uso para Pasar Datos a Componentes",
    p3: "Las props (abreviatura de propiedades) son objetos que contienen datos que se pueden pasar de un componente padre a un componente hijo."+
    "Las props permiten la comunicación y la transferencia de datos entre componentes en una aplicación React."+
    "Los componentes pueden acceder a las props mediante el uso de la función props (en componentes funcionales) o this.props (en componentes de clase).",
  },
  {
    id: 4,
    titulo: "Renderización en React",
    img: "jsx.jpg",
    resumen: "JSX (JavaScript XML). Renderización de Elementos y Componentes. Uso de Expresiones en JSX.",
    p1titulo: "JSX (JavaScript XML)",
    p1: "JSX es una extensión de JavaScript que permite escribir código similar a HTML dentro de JavaScript. "+
    "En React, JSX se utiliza para describir la estructura y el aspecto de los componentes y elementos de la interfaz de usuario.",
    p2titulo: "Renderización de Elementos y Componentes",
    p2: "En React, la renderización se refiere al proceso de convertir componentes y elementos de JSX en una representación del DOM (Document Object Model) que se muestra en el navegador. "+
    "Los elementos JSX se pueden renderizar en el DOM utilizando el método ReactDOM.render().",
    p3titulo: "Uso de Expresiones en JSX",
    p3: "JSX permite la inclusión de expresiones JavaScript dentro de las llaves {}. "+
    "Estas expresiones se evalúan y se pueden utilizar para mostrar dinámicamente datos en la interfaz de usuario."
  }
];
