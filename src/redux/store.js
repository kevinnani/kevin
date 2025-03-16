import { configureStore } from "@reduxjs/toolkit";
import contentReducer  from "./slices/contentSlices";
import themeReducer  from "./slices/themeSlice";


const store = configureStore({
    reducer: {
        content: contentReducer,
        theme: themeReducer,
    }
})

export default store;