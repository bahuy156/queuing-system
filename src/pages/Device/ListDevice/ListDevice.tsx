/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./ListDevice.scss";
import { Select } from "antd";
import { Input } from "antd";
import { BiSearch } from "react-icons/bi";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { AiFillCaretDown } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevices, fetchFilteredDevices, fetchDevicesByCode } from "../../../redux/actions/actions";
import { RootState } from "../../../redux/reducer";
import { useEffect, useState } from "react";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { DataTable } from "../../../types";

interface PropsChild {
    handleOpenPageAdd: any;
    handleOpenPageDetail: any;
    handleOpenPageUpdate: any;
}

function ListDevice(props: PropsChild) {
    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
    const devices = useSelector((state: RootState) => state.device.datas);

    const [valueStatus, setValueStatus] = useState<string>("Tất cả")
    const [valueConnect, setValueConnect] = useState<string>("Tất cả")
    const [findData, setFindData] = useState<string>("")

    // handle search by code
    const handleSearch = () => {
        if (findData) {
            dispatch(fetchDevicesByCode(findData));
        }
    };

    useEffect(() => {
        handleSearch()
    }, [findData])

    const handleGetValueSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFindData(e.target.value)
    }

    // filter data
    useEffect(() => {
        dispatch(fetchFilteredDevices(valueStatus, valueConnect))
    }, [dispatch, valueStatus, valueConnect])

    // fetch data
    useEffect(() => {
        dispatch(fetchDevices());
    }, [dispatch]);

    // data table
    const columns: ColumnsType<DataTable> = [
        {
            title: "Mã thiết bị",
            dataIndex: "code",
            key: "code",
        },
        {
            title: "Tên thiết bị",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Đại chỉ IP",
            dataIndex: "ip",
            key: "ip",
        },
        {
            title: "Trạng thái hoạt động",
            dataIndex: "status",
            key: "status",
            render: (text: any) => {
                if (text === "Hoạt động")
                    return (
                        <span className="status-active"><GoDotFill className="icon-active" /><p>Hoạt động</p></span>
                    );
                if (text === "Ngưng hoạt động")
                    return (
                        <span className="status-active"><GoDotFill className="icon-shutdown" /><p>Ngưng hoạt động</p></span>
                    )
            },
        },
        {
            title: "Trạng thái kết nối",
            dataIndex: "connect",
            key: "connect",
            render: (text: any) => {
                if (text === "Kết nối")
                    return (
                        <span className="status-connect"><GoDotFill className="icon-connect-active" /><p>Kết nối</p></span>
                    );
                if (text === "Mất kết nối")
                    return (
                        <span className="status-connect"><GoDotFill className="icon-unconnect" /><p>Mất kết nối</p></span>
                    )
            },
        },
        {
            title: "Dịch vụ sử dụng",
            dataIndex: "services",
            key: "services",
            render: (text: any) => (
                <div className="serives-used">
                    <p>
                        {text.length < 30 ? text : text.slice(0, 30) + "..."}
                    </p>
                    <a onClick={() => alert(text)}>Xem thêm</a>
                </div>
            ),
        },
        {
            title: "",
            key: "detail",
            dataIndex: "detail",
            render: (_, device: DataTable) => <a onClick={() => props.handleOpenPageDetail(device)}>Chi Tiết</a>,
        },
        {
            title: "",
            key: "update",
            dataIndex: "update",
            render: (_, device: DataTable) => <a onClick={() => props.handleOpenPageUpdate(device)}>Cập nhật</a>,
        },
    ];

    const data = devices.map((device: any, index: any) => ({
        key: String(index + 1),
        code: device.code,
        name: device.name,
        ip: device.ip,
        status: device.status,
        connect: device.connect,
        services: device.services,
    }));

    return (
        <div className="main-device">
            <div className="main-device-child">
                <h2 className="title-main-device-child">Danh sách thiết bị</h2>

                <div className="top-main-device-child">
                    <div className="top-status-main-device">
                        <div className="status-main-child">
                            <p>Trạng thái hoạt động</p>
                            <Select
                                className="status-main-child-selected"
                                defaultValue="Tất cả"
                                style={{ width: 270 }}
                                suffixIcon={
                                    <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                                }
                                onChange={(value: string) => setValueStatus(value)}
                                options={[
                                    { value: "Tất cả", label: "Tất cả" },
                                    { value: "Hoạt động", label: "Hoạt động" },
                                    { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
                                ]}
                            />
                        </div>
                        <div className="status-main-child">
                            <p>Trạng thái kết nối</p>
                            <Select
                                className="status-main-child-selected"
                                defaultValue="Tất cả"
                                style={{ width: 270 }}
                                suffixIcon={
                                    <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                                }
                                onChange={(value: string) => setValueConnect(value)}
                                options={[
                                    { value: "Tất cả", label: "Tất cả" },
                                    { value: "Kết nối", label: "Kết nối" },
                                    { value: "Ngưng Kết nối", label: "Mất Kết nối" },
                                ]}
                            />
                        </div>
                    </div>

                    <div className="top-search-main-device">
                        <p>Từ khóa</p>
                        <Input
                            placeholder="Nhập từ khóa"
                            onChange={(e) => handleGetValueSearch(e)} />
                        <BiSearch className="icon-search" />
                    </div>
                </div>

                <div className="content-main-device-child">
                    <div className="table-content-main-device">
                        <Table
                            columns={columns}
                            dataSource={data}
                            pagination={{ pageSize: 7 }}
                        />
                    </div>
                    <div className="panigation-main-device"></div>
                </div>
            </div>

            <div className="add-device">
                <button
                    className="button-add-device"
                    onClick={() => props.handleOpenPageAdd()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                    >
                        <path
                            d="M18.8884 2.33301H9.11171C4.86504 2.33301 2.33337 4.86467 2.33337 9.11134V18.8763C2.33337 23.1347 4.86504 25.6663 9.11171 25.6663H18.8767C23.1234 25.6663 25.655 23.1347 25.655 18.888V9.11134C25.6667 4.86467 23.135 2.33301 18.8884 2.33301ZM18.6667 14.8747H14.875V18.6663C14.875 19.1447 14.4784 19.5413 14 19.5413C13.5217 19.5413 13.125 19.1447 13.125 18.6663V14.8747H9.33337C8.85504 14.8747 8.45837 14.478 8.45837 13.9997C8.45837 13.5213 8.85504 13.1247 9.33337 13.1247H13.125V9.33301C13.125 8.85467 13.5217 8.45801 14 8.45801C14.4784 8.45801 14.875 8.85467 14.875 9.33301V13.1247H18.6667C19.145 13.1247 19.5417 13.5213 19.5417 13.9997C19.5417 14.478 19.145 14.8747 18.6667 14.8747Z"
                            fill="#FF9138"
                        />
                    </svg>
                    <p>
                        Thêm <br></br> thiết bị
                    </p>
                </button>
            </div>
        </div>
    );
}

export default ListDevice;


