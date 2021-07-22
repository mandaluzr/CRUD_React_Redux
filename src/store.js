import { createStore, applyMiddleware, compose } from "redux"; //applyMiddleware se requiere porque usamos THUNK.. sino no es necesario.
import thunk from "redux-thunk";
import reducer from "./reducers/index";

// EL STORE TOMA LOS REDUCERS Y PUEDE TENER MUCHOS REDUCERS. PARA PARTE DE LA APP TENDRÁ SUS REDUCERS Y CADA REDUCER TENDRÁ SU PROPIO STATE.
// SI NECESITAMOS MÁS DE 1 REDUCER.. USAR COMBINEREDUCERS -> PQ EN STORE SOLO SE PUEDE PASAR 1.
// EL STORE TIENE TODO EL STATE... Y SOLO HAY 1 POR APP.

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),

    typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
