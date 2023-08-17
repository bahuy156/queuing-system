import Header from "../../components/Header/Header";
import { useState } from "react";
import ListService from "./ListService/ListService";
import AddService from "./AddService/AddService";
import DetailService from "./DetailService/DetailService";
import UpdateService from "./UpdateService/UpdateService";

function Device() {
    const [pageService, setPageService] = useState<string>("0");

    const handleOpenPageDetail = () => {
        setPageService("2")
    }

    const handleOpenPageUpdate = () => {
        setPageService("3")
    }

    return (
        <div className="wrapper-services">
            <Header headName='Dịch vụ' />

            {pageService === "0" ? (
                <ListService
                    handleOpenPageAdd={() => setPageService("1")}
                    handleOpenPageDetail={handleOpenPageDetail}
                    handleOpenPageUpdate={handleOpenPageUpdate}
                />
            ) : pageService === "1" ? (
                <AddService handleClosePageAdd={() => setPageService("0")} />
            ) : pageService === "2" ? (
                <DetailService handleOpenPageUpdate={handleOpenPageUpdate} handleClosePageDetail={() => setPageService("0")} />
            ) : (
                <UpdateService handleClosePageUpdate={() => setPageService("0")} />
            )}
        </div>
    );
}

export default Device;