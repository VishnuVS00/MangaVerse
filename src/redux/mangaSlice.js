import { createSlice } from "@reduxjs/toolkit";
import {
    fetchManga,
    fetchLatest,
    searchManga,
    singleManga,
} from './mangaAction';

const initialState = {
    fetchMangaData: [],
    mangaDataLoading: false,
    fetchLatestData: [],
    latestLoading: false,
    searchManga: [],
    searchLoading: false,
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
                state.fetchMangaData == payload?.data;
            });

        builder
            .addCase(fetchLatest.pending, (state) => {
                state.latestLoading = true;
            })
            .addCase(fetchLatest.rejected, (state) => {
                state.latestLoading = false;
            })
            .addCase(fetchLatest.fulfilled, (state, { payload }) => {
                state.latestLoading = false;
                state.fetchLatestData == payload?.data;
            });
        builder
            .addCase(searchManga.pending, (state) => {
                state.searchLoading = true;
            })
            .addCase(searchManga.rejected, (state) => {
                state.searchLoading = false;
            })
            .addCase(searchManga.fulfilled, (state, { payload }) => {
                state.searchLoading = false;
                state.searchManga == payload?.data;
            });
        builder
            .addCase(singleManga.pending, (state) => {
                state.singleMangaLoading = true;
            })
            .addCase(singleManga.rejected, (state) => {
                state.singleMangaLoading = false;
            })
            .addCase(singleManga.fulfilled, (state, { payload }) => {
                state.singleMangaLoading = false;
                state.fetchSingleManga == payload?.data;
            });
    }
});

export default mangaSlice.reducer;