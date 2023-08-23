import Header from "../../../components/Header/Header";
import { useState } from "react";
import ListRole from "./ListRole/ListRole";
import AddRole from "./AddRole/AddRole";
import UpdateRole from "./UpdateRole/UpdateRole";
import NavTopRoleManageList from "../../../components/Header/NavTopRoleManage/NavTopRoleManageList/NavTopRoleManageList";
import NavTopRoleManageAdd from "../../../components/Header/NavTopRoleManage/NavTopRoleManageAdd/NavTopRoleManageAdd";
import NavTopRoleManageUpdate from "../../../components/Header/NavTopRoleManage/NavTopRoleManageUpdate/NavTopRoleManageUpdate";

function RoleManage() {
    const [pageSystem, setPageSystem] = useState<string>("0");

    const handleOpentPageAdd = () => {
        setPageSystem("1")
    }

    const handleOpentPageUpdate = () => {
        setPageSystem("2")
    }

    return (
        <div>
            <Header
                headName={
                    pageSystem === "0" ? (
                        <NavTopRoleManageList />
                    ) : pageSystem === "1" ? (
                        <NavTopRoleManageAdd handleBackList={() => setPageSystem("0")} />
                    ) : (
                        <NavTopRoleManageUpdate handleBackList={() => setPageSystem("0")} />
                    )
                }
            />

            {pageSystem === "0" ? (
                <ListRole
                    handleOpentPageAdd={handleOpentPageAdd}
                    handleOpentPageUpdate={handleOpentPageUpdate}
                />
            ) : pageSystem === "1" ? (
                <AddRole handleClosePageAdd={() => setPageSystem("0")} />
            ) : (
                <UpdateRole handleClosePageUpdate={() => setPageSystem("0")} />
            )}
        </div>
    );
}

export default RoleManage;
