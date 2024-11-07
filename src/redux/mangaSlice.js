import { createSlice } from "@reduxjs/toolkit";
import {
    fetchManga
} from './mangaAction';

const initialState = {
    fetchMangaData: [],
    mangaDataLoading: false,
    fetchLatestData: [],
    latestLoading: false,
    fetchSingleManga: {},
    singleMangaLoading: false,
}

const mangaSlice = createSlice({
    name: "mangaReducer",
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchManga.pending, (state) => {
                state.mangaDataLoading = true;
            })
            .addCase(fetchManga.rejected, (state) => {
                state.mangaDataLoading = false;
            })
            .addCase(fetchManga.fulfilled, (state, { payload }) => {
                state.mangaDataLoading = false;
                console.log("🚀  payload:-", payload)

            });
    }
});

export default mangaSlice.reducer;