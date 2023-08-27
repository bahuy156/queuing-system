import db from "../../firebase/config";
import { collection, getDocs, addDoc, query, where } from "@firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataTableDiary } from "../../types";

export const fetchDiary = createAsyncThunk("diary/fetchDiary", async () => {
    const docRef = await getDocs(collection(db, "diary"))
    return docRef.docs.map((doc) => ({ id: doc.id, ...doc.data() } as DataTableDiary))
})

export const addDiary = createAsyncThunk("diary/addDiary", async (diary: DataTableDiary) => {
    const docRef = await addDoc(collection(db, "diary"), diary)
    return { ...diary, id: docRef.id }
})

export const searchDiary = createAsyncThunk("diary/searchDiary", async (valueSearch: string) => {
    const q = query(collection(db, "diary"), where("loginname", "==", valueSearch));
    const querySnapshot = await getDocs(q);
    const searchData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as DataTableDiary))
    return searchData || [];
})

const diary = createSlice({
    name: "diary",
    initialState: { datas: [] as DataTableDiary[] },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchDiary.fulfilled, (state, action) => {
                state.datas = action.payload
            })
            .addCase(addDiary.fulfilled, (state, action) => {
                state.datas = [...state.datas, action.payload]
            })
            .addCase(searchDiary.fulfilled, (state, action) => {
                state.datas = action.payload
            })
    }
})

export default diary.reducer;