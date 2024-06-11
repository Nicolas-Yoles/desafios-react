import React, { useEffect, useState } from "react";

const Usuarios = ({ param }) => {
  const [mostrar, setMostrar] = useState(false);
  const [usuariosList, setUsuariosList] = useState(null);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [idBuscado, setIdBuscado] = useState(null);

  const getDatos = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const datos = await res.json();
      if (!datos) {
        throw new Error("Error al procesar los datos");
      }
      setUsuariosList(datos);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (event) => {
    setIdBuscado(event.target.value);
  };

  const getDatosById = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${idBuscado}`
      );
      const datos = await res.json();
      if (!datos) {
        throw new Error("Error al procesar los datos");
      }
      setUsuarioSeleccionado(datos);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    setMostrar(param);
  }, [param]);

  // useEffect(() => {
  //   setMostrar();
  // });

  return (
    <>
      <button onClick={() => setMostrar(!mostrar)}>Mostrar titulo</button>
      {mostrar && <h2>Consulta de Usuarios</h2>}
      <br />

      <button onClick={getDatos}>Consultar API</button>

      {usuariosList && (
        <ul>
          {usuariosList.map((usuario) => (
            <li key={usuario.id}>{usuario.name}</li>
          ))}
        </ul>
      )}
      <br />
      <input
        type="text"
        placeholder="Escribe algo"
        value={idBuscado}
        onChange={handleChange}
      />

      <button onClick={getDatosById}>Consultar por id</button>
      {usuarioSeleccionado && (
        <>
        <h2>{usuarioSeleccionado.name}</h2>
        </>
      )
      }
    </>
  );
};

export default Usuarios;
