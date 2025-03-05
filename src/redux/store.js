import { configureStore } from "@reduxjs/toolkit";
import contentReducer  from "./slices/contentSlices";

const store = configureStore({
    reducer: {
        content: contentReducer
    }
})

export default store;