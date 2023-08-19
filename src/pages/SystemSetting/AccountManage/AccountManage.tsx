import Header from "../../../components/Header/Header";
import { useState } from "react";
import ListAccount from "./ListAccount/ListAccount";
import AddAccount from "./AddAccount/AddAccount";
import UpdateAccount from "./UpdateAccount/UpdateAccount";

function AccountManage() {
    const [pageAccount, setPageAccount] = useState<string>("0");

    const handleOpentPageAdd = () => {
        setPageAccount("1")
    }

    const handleOpentPageUpdate = () => {
        setPageAccount("2")
    }

    return (
        <div>
            <Header headName='Quản lý tài khoản' />

            {pageAccount === "0" ? (
                <ListAccount
                    handleOpentPageAdd={handleOpentPageAdd}
                    handleOpentPageUpdate={handleOpentPageUpdate}
                />
            ) : pageAccount === "1" ? (
                <AddAccount handleClosePageAdd={() => setPageAccount("0")} />
            ) : (
                <UpdateAccount handleClosePageUpdate={() => setPageAccount("0")} />
            )}
        </div>
    );
}

export default AccountManage;