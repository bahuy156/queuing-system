import Header from "../../../components/Header/Header";
import { useState } from "react";
import ListAccount from "./ListAccount/ListAccount";
import AddAccount from "./AddAccount/AddAccount";
import UpdateAccount from "./UpdateAccount/UpdateAccount";
import NavTopAccountManageAdd from "../../../components/Header/NavTopAccountManage/NavTopAccountManageAdd/NavTopAccountManageAdd";
import NavTopAccountManageList from "../../../components/Header/NavTopAccountManage/NavTopAccountManageList/NavTopAccountManageList";
import NavTopAccountManageUpdate from "../../../components/Header/NavTopAccountManage/NavTopAccountManageUpdate/NavTopAccountManageUpdate";
import { DataAccount } from "../../../types";

function AccountManage() {
    const [pageAccount, setPageAccount] = useState<string>("0");
    const [selectedPage, setSelectedPage] = useState<DataAccount | null>(null);

    const handleOpentPageAdd = () => {
        setPageAccount("1")
    }

    const handleOpentPageUpdate = (account: DataAccount) => {
        setPageAccount("2")
        setSelectedPage(account)
    }

    return (
        <div>
            <Header
                headName={
                    pageAccount === "0" ? (
                        <NavTopAccountManageList />
                    ) : pageAccount === "1" ? (
                        <NavTopAccountManageAdd handleBackList={() => setPageAccount("0")} />
                    ) : (
                        <NavTopAccountManageUpdate handleBackList={() => setPageAccount("0")} />
                    )
                }
            />

            {pageAccount === "0" ? (
                <ListAccount
                    handleOpentPageAdd={handleOpentPageAdd}
                    handleOpentPageUpdate={handleOpentPageUpdate}
                />
            ) : pageAccount === "1" ? (
                <AddAccount handleClosePageAdd={() => setPageAccount("0")} />
            ) : (
                <UpdateAccount handleClosePageUpdate={() => setPageAccount("0")} selectedPage={selectedPage} />
            )}
        </div>
    );
}

export default AccountManage;