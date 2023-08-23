import db from "../../firebase/config";
import { collection, getDocs, addDoc, doc, updateDoc } from "@firebase/firestore";
import { DataTableSev } from "../../types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchServices = createAsyncThunk("list-service/fetchService", async () => {
    const docRef = await getDocs(collection(db, "list-service"))
    return docRef.docs.map((doc) => ({ id: doc.id, ...doc.data() } as DataTableSev))
})

export const addServices = createAsyncThunk("list-service/addServices", async (newServices: DataTableSev) => {
    const docRef = await addDoc(collection(db, "list-service"), newServices)
    return { ...newServices, id: docRef.id }
})

export const updateServives = createAsyncThunk("list-service/updateServives", async (services: any) => {
    const docRef = doc(collection(db, "list-service"), services.key)
    await updateDoc(docRef, services)
    return services
})

export const searchService = createAsyncThunk("list-service/searchService", async (findByCode: string) => {
    const docRef = await getDocs(collection(db, "list-service"))
    const fetchService = docRef.docs.map((doc) => ({ id: doc.id, ...doc.data() } as DataTableSev))

    const searchData = fetchService.filter((item) => item.code?.includes(findByCode))

    return searchData
})

const service = createSlice({
    name: "list-service",
    initialState: { datas: [] as DataTableSev[] },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.datas = action.payload
            })
            .addCase(addServices.fulfilled, (state, action) => {
                state.datas = [...state.datas, action.payload]
            })
            .addCase(updateServives.fulfilled, (state, action) => {
                state.datas = [...state.datas, action.payload]
            })
            .addCase(searchService.fulfilled, (state, action) => {
                state.datas = action.payload
            })
    }
})

export default service.reducer;