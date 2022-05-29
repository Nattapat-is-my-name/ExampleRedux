import { configureStore } from "@reduxjs/toolkit"
import todoStore from "./defaultStore"

export const store = ()=>{
    const init = configureStore({
        reducer: {
            todos: todoStore
        }
    })
    return init
}