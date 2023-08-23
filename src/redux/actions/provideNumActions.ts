import db from "../../firebase/config";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataTableProvideNum } from "../../types";

export const fetchProvideNum = createAsyncThunk("provide-number/fetchProvideNum", async () => {
    const docRef = await getDocs(collection(db, "provide-number"))
    return docRef.docs.map((item) => ({ id: item.id, ...item.data() } as DataTableProvideNum))
})

export const addNumber = createAsyncThunk("provide-number/addNumber", async (newNumber: DataTableProvideNum) => {
    const docRef = await addDoc(collection(db, "provide-number"), newNumber)
    return { ...newNumber, id: docRef.id }
})

export const searchProvideNumber = createAsyncThunk("provide-number/searchProvideNumber", async (valueSearch: string) => {
    const docRef = await getDocs(collection(db, "provide-number"))
    const fetchProvideNum = docRef.docs.map((doc) => ({ id: doc.id, ...doc.data() } as DataTableProvideNum))

    const searchData = fetchProvideNum.filter((item) => item.sevname.includes(valueSearch))

    return searchData
})

const provideNumber = createSlice({
    name: "provide-number",
    initialState: { datas: [] as DataTableProvideNum[] },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProvideNum.fulfilled, (state, action) => {
                state.datas = action.payload
            })
            .addCase(addNumber.fulfilled, (state, action) => {
                state.datas = [...state.datas, action.payload]
            })
            .addCase(searchProvideNumber.fulfilled, (state, action) => {
                state.datas = action.payload
            })
    }
})

export default provideNumber.reducer;