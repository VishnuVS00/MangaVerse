import { combineReducers, configureStore } from "@reduxjs/toolkit";
import manga from "./mangaSlice";
const reducer = combineReducers({
    manga: manga,
});

export default configureStore({
    reducer,
    middleware: (defaultMiddleware) =>
        defaultMiddleware({ serializableCheck: false }),
});
