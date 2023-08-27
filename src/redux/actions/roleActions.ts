import db from "../../firebase/config";
import { collection, getDocs, addDoc, doc, updateDoc } from "@firebase/firestore";
import { DataTableRole } from "../../types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRole = createAsyncThunk("list-role/fetchRole", async () => {
    const docRef = await getDocs(collection(db, "list-role"))
    return docRef.docs.map((item) => ({ id: item.id, ...item.data() } as DataTableRole))
})

export const addRole = createAsyncThunk("list-role/addRole", async (role: DataTableRole) => {
    const docRef = await addDoc(collection(db, "list-role"), role)
    return { ...role, id: docRef.id }
})

export const updateRole = createAsyncThunk("list-role/updateRole", async (role: any) => {
    const docRef = doc(collection(db, "list-role"), role.id)
    await updateDoc(docRef, role)
    return role
})

export const searchRole = createAsyncThunk("list-role/searchRole", async (findByCode: string) => {
    const docRef = await getDocs(collection(db, "list-role"))
    const fetchDevice = docRef.docs.map((item) => ({ id: item.id, ...item.data() } as DataTableRole))

    const searchData = fetchDevice.filter((item) => item.name.includes(findByCode))

    return searchData
})

const role = createSlice({
    name: "list-role",
    initialState: { datas: [] as DataTableRole[] },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchRole.fulfilled, (state, action) => {
                state.datas = action.payload
            })
            .addCase(addRole.fulfilled, (state, action) => {
                state.datas = [...state.datas, action.payload]
            })
            .addCase(updateRole.fulfilled, (state, action) => {
                state.datas = [...state.datas, action.payload]
            })
            .addCase(searchRole.fulfilled, (state, action) => {
                state.datas = action.payload
            })
    },
})

export default role.reducer;