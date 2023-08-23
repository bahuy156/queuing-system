import Header from "../../components/Header/Header";
import { useState } from "react";
import ListService from "./ListService/ListService";
import AddService from "./AddService/AddService";
import DetailService from "./DetailService/DetailService";
import UpdateService from "./UpdateService/UpdateService";
import { DataTableSev } from "../../types";
import NavTopServiceList from "../../components/Header/NavTopService/NavTopServiceList/NavTopServiceList";
import NavTopServiceAdd from "../../components/Header/NavTopService/NavTopServiceAdd/NavTopServiceAdd";
import NavTopServiceDetail from "../../components/Header/NavTopService/NavTopServiceDetail/NavTopServiceDetail";
import NavTopServiceUpdate from "../../components/Header/NavTopService/NavTopServiceUpdate/NavTopServiceUpdate";


function Device() {
    const [pageService, setPageService] = useState<string>("0");
    const [selectedServices, setSelectedServices] = useState<DataTableSev | null>(null);

    const handleOpenPageDetail = (servicesDetail: DataTableSev) => {
        setPageService("2")
        setSelectedServices(servicesDetail)
    }

    const handleOpenPageUpdate = (servicesUpdate: DataTableSev) => {
        setPageService("3")
        setSelectedServices(servicesUpdate)
    }

    return (
        <div className="wrapper-services">
            <Header
                headName={
                    pageService === "0" ? (
                        <NavTopServiceList />
                    ) : pageService === "1" ? (
                        <NavTopServiceAdd handleBackList={() => setPageService("0")} />
                    ) : pageService === "2" ? (
                        <NavTopServiceDetail handleBackList={() => setPageService("0")} />
                    ) : (
                        <NavTopServiceUpdate handleBackList={() => setPageService("0")} />
                    )
                }
            />

            {pageService === "0" ? (
                <ListService
                    handleOpenPageAdd={() => setPageService("1")}
                    handleOpenPageDetail={handleOpenPageDetail}
                    handleOpenPageUpdate={handleOpenPageUpdate}
                />
            ) : pageService === "1" ? (
                <AddService handleClosePageAdd={() => setPageService("0")} />
            ) : pageService === "2" ? (
                <DetailService
                    handleOpenPageUpdate={handleOpenPageUpdate}
                    handleClosePageDetail={() => setPageService("0")}
                    selectedServices={selectedServices}
                />
            ) : (
                <UpdateService
                    handleClosePageUpdate={() => setPageService("0")}
                    setSelectedServices={selectedServices}
                />
            )}
        </div>
    );
}

export default Device;