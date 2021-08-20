import { combineReducers } from 'redux';
import productosReducer from './productosReducer';
import alertaReducer from './alertaReducer';

// en productos: estará el state de productos.
// en alerta: estará el state de alerta.

export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
})