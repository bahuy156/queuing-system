import db from "../../firebase/config";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataNotification } from "../../types";

export const fetchNoti = createAsyncThunk("notification/fetchNoti", async () => {
    const docRef = await getDocs(collection(db, "notification"))
    return docRef.docs.map((doc) => ({ id: doc.id, ...doc.data() } as DataNotification))
})

export const addNoti = createAsyncThunk("notification/addNoti", async (diary: DataNotification) => {
    const docRef = await addDoc(collection(db, "notification"), diary)
    return { ...diary, id: docRef.id }
})

const notification = createSlice({
    name: "notification",
    initialState: { datas: [] as DataNotification[] },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchNoti.fulfilled, (state, action) => {
                state.datas = action.payload
            })
            .addCase(addNoti.fulfilled, (state, action) => {
                state.datas = [...state.datas, action.payload]
            })
    }
})

export default notification.reducer;