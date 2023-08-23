import db from "../../firebase/config";
import { collection, getDocs, addDoc, doc, updateDoc } from "@firebase/firestore";
import { DataTable } from "../../types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDevices = createAsyncThunk("list-device/fetchDevices", async () => {
    const docRef = await getDocs(collection(db, "list-device"))
    return docRef.docs.map((item) => ({ id: item.id, ...item.data() } as DataTable))
})

export const addDevices = createAsyncThunk("list-device/addDevices", async (device: DataTable) => {
    const docRef = await addDoc(collection(db, "list-device"), device)
    return { ...device, id: docRef.id }
})

export const updateDevice = createAsyncThunk("list-device/updateDevice", async (device: any) => {
    const docRef = doc(collection(db, "list-device"), device.key)
    await updateDoc(docRef, device)
    return device
})

export const searchDevice = createAsyncThunk("list-device/searchDevice", async (findByCode: string) => {
    const docRef = await getDocs(collection(db, "list-device"))
    const fetchDevice = docRef.docs.map((item) => ({ id: item.id, ...item.data() } as DataTable))

    const searchData = fetchDevice.filter((item) => item.code?.includes(findByCode))

    return searchData
})

const device = createSlice({
    name: "list-device",
    initialState: { datas: [] as DataTable[] },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchDevices.fulfilled, (state, action) => {
                state.datas = action.payload
            })
            .addCase(addDevices.fulfilled, (state, action) => {
                state.datas = [...state.datas, action.payload]
            })
            .addCase(updateDevice.fulfilled, (state, action) => {
                state.datas = [...state.datas, action.payload]
            })
            .addCase(searchDevice.fulfilled, (state, action) => {
                state.datas = action.payload
            })
    },
})

export default device.reducer;