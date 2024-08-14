import Swal from "sweetalert2";

const TablaFila = ({ user, eliminarUsuario, setUsuarioAEditar }) => {
  const handleEliminar = () => {
    Swal.fire({
      title: `¿Estás seguro de que quieres eliminar al usuario: ${user.nombre} ${user.apellido}?`,
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, adelante!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarUsuario(user.id);
        Swal.fire({
          title: "Eliminado!",
          text: "El usuario ha sido eliminado.",
          icon: "success",
        });
      }
    });
  };

  const handleEditar = (usr) => {
    console.log(usr);
    setUsuarioAEditar(usr);
  };

  return (
    <tr>
      <th scope="row">{user.nombre}</th>
      <td>{user.apellido}</td>
      <td>{user.edad}</td>
      <td>{user.color}</td>
      <td>
        <button
          className="btn btn-warning me-2"
          onClick={() => handleEditar(user)}
        >
          Editar
        </button>
        <button className="btn btn-danger" onClick={handleEliminar}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TablaFila;
