import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR
} from "../types/index";

// cada reducer tiene su propio state;

const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoEliminar: null
}

export default function (state = initialState, action) {
  switch(action.type) {
    case COMENZAR_DESCARGA_PRODUCTOS:
    case AGREGAR_PRODUCTO: 
    return {
      ...state,
      loading: action.payload
    }
    case AGREGAR_PRODUCTO_EXITO: 
    return {
      ...state,
      loading: false,
      producto: [...state.productos, action.payload]
    }
    case AGREGAR_PRODUCTO_ERROR:
    case DESCARGA_PRODUCTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case DESCARGA_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        productos: action.payload
      }
    default:
      return state;
  }
}
