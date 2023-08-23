import db from "../../firebase/config";
import { collection, getDocs, addDoc, updateDoc, doc } from "@firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataAccount } from "../../types";

export const fetchAccount = createAsyncThunk("account/fetchAccount", async () => {
    const docRef = await getDocs(collection(db, "account"))
    return docRef.docs.map((item) => ({ id: item.id, ...item.data() } as DataAccount))
})

export const addAccount = createAsyncThunk("account/addAccount", async (account: DataAccount) => {
    const docRef = await addDoc(collection(db, "account"), account)
    return { ...account, id: docRef.id }
})

export const updateAccount = createAsyncThunk("account/updateAccount", async (account: any) => {
    const docRef = doc(collection(db, "account"), account.id)
    await updateDoc(docRef, account)
    return account
})

export const resetPasswordByMail = createAsyncThunk("account/resetPasswordByMail", async (data: { email: string, newPassword: string }) => {
    const docRef = await getDocs(collection(db, "account"))
    const accounts = docRef.docs.map((item) => ({ id: item.id, ...item.data() } as DataAccount))

    const matchedAccount = accounts.find(account => account.email === data.email)
    if (matchedAccount) {
        const documentRef = doc(collection(db, "account"), matchedAccount.id)
        await updateDoc(documentRef, { password: data.newPassword })
        return { ...matchedAccount, password: data.newPassword }
    }
    throw new Error("Email không hợp lệ!")
})

export const searchAccount = createAsyncThunk("account/searchAccount", async (findByCode: string) => {
    const docRef = await getDocs(collection(db, "account"))
    const fetchDevice = docRef.docs.map((item) => ({ id: item.id, ...item.data() } as DataAccount))

    const searchData = fetchDevice.filter((item) => item.loginname.includes(findByCode))

    return searchData
})

const account = createSlice({
    name: "account",
    initialState: { datas: [] as DataAccount[] },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAccount.fulfilled, (state, action) => {
                state.datas = action.payload
            })
            .addCase(addAccount.fulfilled, (state, action) => {
                state.datas = [...state.datas, action.payload]
            })
            .addCase(updateAccount.fulfilled, (state, action) => {
                state.datas = [...state.datas, action.payload]
            })
            .addCase(searchAccount.fulfilled, (state, action) => {
                state.datas = action.payload
            })
            .addCase(resetPasswordByMail.fulfilled, (state, action) => {
                const index = state.datas.findIndex(account => account.id === action.payload.id)
                if (index !== -1) {
                    state.datas[index] = action.payload
                }
            })
    },
})

export default account.reducer;