import { useState } from "react";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";
import usuarios from "./constants/usuarios";
import { v4 as uuidv4 } from "uuid";

/* CONTENEDOR */
const InicioApp = () => {
  const [users, setUsers] = useState(usuarios);

  const [usuarioAEditar, setUsuarioAEditar] = useState(null);

  const agregarUsuario = (usuario) => {
    usuario.id = uuidv4();
    console.log("Agregando el usuario al array...", usuario);

    const nuevoEstadoUsuarios = [...users, usuario];
    setUsers(nuevoEstadoUsuarios);
  };

  const editarUsuario = (usuarioEditado) => {
    const nuevoEstadoUsuarios = users.map(function (usr) {
      if (usr.id === usuarioEditado.id) {
        return usuarioEditado;
      } else {
        return usr;
      }
    });

    setUsers(nuevoEstadoUsuarios);
  };

  const eliminarUsuario = (id) => {
    const nuevoEstadoUsuarios = users.filter((usr) => usr.id !== id);
    console.log(nuevoEstadoUsuarios);
    setUsers(nuevoEstadoUsuarios);
  };

  return (
    <div className="container">
      <Formulario
        agregarUsuario={agregarUsuario}
        usuarioAEditar={usuarioAEditar}
        setUsuarioAEditar={setUsuarioAEditar}
        editarUsuario={editarUsuario}
      />
      <Tabla
        users={users}
        eliminarUsuario={eliminarUsuario}
        setUsuarioAEditar={setUsuarioAEditar}
      />
    </div>
  );
};

export default InicioApp;
