/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from "../../components/Header/Header";
import { useState } from "react";
import AddDevice from "./AddDevice/AddDevice";
import ListDevice from "./ListDevice/ListDevice";
import DetailDevice from "./DetailDevice/DetailDevice";
import UpdateDevice from "./UpdateDevice/UpdateDevice";
import { DataTable } from "../../types";
import NavTopDeviceList from "../../components/Header/NavTopDevice/NavTopDeviceList/NavTopDeviceList";
import NavTopDeviceDetail from "../../components/Header/NavTopDevice/NavTopDeviceDetail/NavTopDeviceDetail";
import NavTopDeviceAdd from "../../components/Header/NavTopDevice/NavTopDeviceAdd/NavTopDeviceAdd";
import NavTopDeviceUpdate from "../../components/Header/NavTopDevice/NavTopDeviceUpdate/NavTopDeviceUpdate";

function Device() {
    const [pageDevice, setPageDevice] = useState<string>("0");
    const [selectedDevice, setSelectedDevice] = useState<DataTable | null>(null);

    const handleOpenPageDetail = (deviceDetail: DataTable) => {
        setSelectedDevice(deviceDetail);
        setPageDevice("2");
    };

    const handleOpenPageUpdate = (deviceUpdate: DataTable) => {
        setSelectedDevice(deviceUpdate);
        setPageDevice("3");
    };

    return (
        <div className="wrapper-device">
            <Header
                headName={
                    pageDevice === "0" ? (
                        <NavTopDeviceList />
                    ) : pageDevice === "1" ? (
                        <NavTopDeviceAdd handleBackList={() => setPageDevice("0")} />
                    ) : pageDevice === "2" ? (
                        <NavTopDeviceDetail handleBackList={() => setPageDevice("0")} />
                    ) : (
                        <NavTopDeviceUpdate handleBackList={() => setPageDevice("0")} />
                    )
                }
            />

            {pageDevice === "0" ? (
                <ListDevice
                    handleOpenPageAdd={() => setPageDevice("1")}
                    handleOpenPageDetail={handleOpenPageDetail}
                    handleOpenPageUpdate={handleOpenPageUpdate}
                />
            ) : pageDevice === "1" ? (
                <AddDevice handleClosePageAdd={() => setPageDevice("0")} />
            ) : pageDevice === "2" ? (
                <DetailDevice
                    handleOpenPageUpdate={handleOpenPageUpdate}
                    selectedDeviceDetail={selectedDevice}
                />
            ) : (
                <UpdateDevice
                    handleClosePageUpdate={() => setPageDevice("0")}
                    selectedDeviceUpdate={selectedDevice}
                />
            )}
        </div>
    );
}

export default Device;