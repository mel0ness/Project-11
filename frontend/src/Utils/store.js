import { configureStore } from "@reduxjs/toolkit"
import connexionReducer from "../Features/connexion"

export default configureStore ({
    reducer: {
        connexion : connexionReducer
    }
})