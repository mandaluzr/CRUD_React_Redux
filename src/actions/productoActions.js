//generalmente productoReducer y productoActions tienen lo mismo.

import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types/index";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

// crear nuevos productos

export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      // insertar en la api -> para eso Axios.
      await clienteAxios.post("/productos", producto);

      // si todo sale bien.. el dispatch actualiza el state
      dispatch(agregarProductoExito(producto));

      // Alerta de que se agregó correctamente
      Swal.fire("Correcto", "El producto se agregó correctamente", "success");
    } catch (error) {
      console.log(error);
      // si hay un error cambiar el state
      dispatch(agregarProductoError(true));

      // Alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "El producto no se pudo agregar. Intenta nuevamente.",
      });
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
});
