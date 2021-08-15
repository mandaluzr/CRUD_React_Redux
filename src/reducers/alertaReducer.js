import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

// cada reducer tiene su propio statement
const initialState = {
    alerta: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
} 