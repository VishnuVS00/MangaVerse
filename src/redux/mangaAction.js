import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchManga = createAsyncThunk(
    "manga/fetchManga",
    async (data, thunkApi) => {
        const options = {
            method: 'GET',
            url: 'https://mangaverse-api.p.rapidapi.com/manga/fetch',
            params: {
                page: '1',
                genres: 'Harem,Fantasy',
                nsfw: 'true',
                type: 'all'
            },
            headers: {
                'x-rapidapi-key': 'd99907482cmsh9ab0fc66bc0daf3p153337jsn95f51e31894e',
                'x-rapidapi-host': 'mangaverse-api.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log("🚀  response:-", response?.data);
        } catch (error) {
            console.log("🚀  error:-", error)
        }
    }
);

export const fetchLatest = createAsyncThunk(
    "manga/fetchLatest",
    async (data, thunkApi) => {
        const options = {
            method: 'GET',
            url: 'https://mangaverse-api.p.rapidapi.com/manga/latest',
            params: {
                page: '1',
                genres: 'Harem,Fantasy',
                nsfw: 'true',
                type: 'all'
            },
            headers: {
                'x-rapidapi-key': 'd99907482cmsh9ab0fc66bc0daf3p153337jsn95f51e31894e',
                'x-rapidapi-host': 'mangaverse-api.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log("🚀  response:-", response?.data);
        } catch (error) {
            console.log("🚀  error:-", error)
        }
    }
);

export const searchManga = createAsyncThunk(
    "manga/searchManga",
    async (data, thunkApi) => {
        const options = {
            method: 'GET',
            url: 'https://mangaverse-api.p.rapidapi.com/manga/search',
            params: {
                text: 'legendary',
                nsfw: 'true',
                type: 'all'
            },
            headers: {
                'x-rapidapi-key': 'd99907482cmsh9ab0fc66bc0daf3p153337jsn95f51e31894e',
                'x-rapidapi-host': 'mangaverse-api.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log("🚀  response:-", response?.data);
        } catch (error) {
            console.log("🚀  error:-", error)
        }
    }
);

export const singleManga = createAsyncThunk(
    "manga/singleManga",
    async (data, thunkApi) => {
        const options = {
            method: 'GET',
            url: 'https://mangaverse-api.p.rapidapi.com/manga',
            params: {
                id: '659524dd597f3b00281f06ff'
            },
            headers: {
                'x-rapidapi-key': 'd99907482cmsh9ab0fc66bc0daf3p153337jsn95f51e31894e',
                'x-rapidapi-host': 'mangaverse-api.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log("🚀  response:-", response?.data);
        } catch (error) {
            console.log("🚀  error:-", error)
        }
    }
);