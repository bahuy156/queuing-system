import db from "../../firebase/config";
import { collection, doc, getDocs, addDoc, updateDoc, where, query } from "@firebase/firestore";
import { DataTable } from "../../types";

// devices
export const fetchDevices = () => {
    return async (dispatch: any) => {
        try {
            const collectionListDevice = collection(db, "list-device")
            const snapshot = await getDocs(collectionListDevice)

            const devices = snapshot.docs.map((doc: any) => ({
                id: doc.id,
                ...doc.data()
            }));

            dispatch({ type: 'FETCH_DEVICES', payload: devices });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
};

export const fetchFilteredDevices = (valueStatus: string, valueConnect: string) => {
    return async (dispatch: any) => {
        try {
            const collectionListDevice = collection(db, "list-device");

            let q = query(collectionListDevice);

            if (valueStatus !== "Tất cả") {
                q = query(q, where("status", "==", valueStatus));
            }
            if (valueConnect !== "Tất cả") {
                const connectionStatus = valueConnect === "Kết nối" ? "Kết nối" : "Mất kết nối";
                q = query(q, where("connect", "==", connectionStatus));
            }

            const snapshot = await getDocs(q);

            const fetchedDevices = snapshot.docs.map((doc: any) => ({
                id: doc.id,
                ...doc.data(),
            }));

            dispatch({ type: 'FETCH_DEVICES', payload: fetchedDevices });
        } catch {
            console.log("Không lọc được dữ liệu")
        }
    }
}

export const fetchDevicesByCode = (findByCode: string) => {
    return async (dispatch: any) => {
        try {
            const collectionListDevice = collection(db, "list-device");
            const snapshot = await getDocs(collectionListDevice)

            const fetchedDevices = snapshot.docs.map((doc: any) => ({
                id: doc.id,
                ...doc.data(),
            }));

            const searchData = fetchedDevices.filter((item) => {
                return item.code.includes(findByCode)
            })

            dispatch({ type: 'FETCH_DEVICES', payload: searchData });
        } catch (error) {
            console.error("Error fetching data by code:", error);
        }
    }
}

export const addDevices = (device: DataTable) => {
    return async (dispatch: any) => {
        try {
            const collectionListDevice = collection(db, "list-device")
            const docRef = await addDoc(collectionListDevice, device)

            device.key = docRef.id
            console.log(device.key);

            dispatch({ type: "ADD_DEVICE", payload: device })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

export const updateDevice = (id: string, updatedDevice: DataTable) => {
    return async (dispatch: any) => {
        try {
            const docRef = doc(db, "list-device", id);
            const newUpdate = await updateDoc(docRef, {
                key: updatedDevice.key,
                code: updatedDevice.code,
                ip: updatedDevice.ip,
                name: updatedDevice.name,
                status: updatedDevice.status,
                connect: updatedDevice.connect,
                services: updatedDevice.services
            });

            console.log("update thành công");

            dispatch({ type: "UPDATE_DEVICE", payload: newUpdate });
        } catch (error) {
            console.log("Lỗi khi cập nhật thiết bị:", error);
        }
    }
};

// account
export const fetchAccount = () => {
    return async (dispatch: any) => {
        try {
            const collectionAccount = collection(db, "account")
            const snapshot = await getDocs(collectionAccount)

            const account = snapshot.docs.map((doc: any) => ({
                id: doc.id,
                ...doc.data()
            }));

            dispatch({ type: "FETCH_ACCOUNT", payload: account })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

export const verifyAccount = (name: any, pass: any) => {
    return async (dispatch: any) => {
        try {
            const collectionAccount = collection(db, "account")
            let q = query(collectionAccount)

            if (name) {
                q = query(q, where("loginname", "==", name))
            }
            if (pass) {
                q = query(q, where("password", "==", pass))
            }

            const snapshot = await getDocs(q)

            const account = snapshot.docs.map((doc: any) => ({
                id: doc.id,
                ...doc.data()
            }));

            dispatch({ type: "VERIFY_ACCOUNT", payload: account });

            if (account.length > 0) {
                dispatch({ type: "LOGIN_SUCCESS" });
            } else {
                dispatch({ type: "LOGIN_FAILURE", payload: "Sai tên đăng nhập hoặc mật khẩu" });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            dispatch({ type: "LOGIN_FAILURE", payload: "Đăng nhập thất bại" });
        }
    }
}

export const logoutAccount = () => {
    return async (dispatch: any) => {
        try {
            dispatch({ type: "LOGOUT_ACCOUNT", payload: [] })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}


