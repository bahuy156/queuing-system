/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./ListService.scss";
import { Input, Select } from "antd";
import { AiFillCaretDown } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { DataTableSev } from "../../../types";
import { ColumnsType } from "antd/es/table";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { DatePicker } from "antd";
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices, searchService } from "../../../redux/actions/serviceActions";

interface PropsChild {
    handleOpenPageAdd: any;
    handleOpenPageDetail: any;
    handleOpenPageUpdate: any;
}

function ListService(props: PropsChild) {
    const dispatch: AppDispatch = useDispatch();
    const services = useSelector((state: RootState) => state.service.datas);

    const [valueStatus, setValueStatus] = useState<string>("Tất cả");
    const [findByCode, setFindByCode] = useState<string>("")

    // handle search by code
    const handleSearchByCode = () => {
        if (findByCode) {
            dispatch(searchService(findByCode))
        }
    }

    useEffect(() => {
        handleSearchByCode()
    }, [findByCode])

    // handle filter data
    let filterServices = services.filter(
        (item) => valueStatus === "Tất cả" || item.status === valueStatus
    );

    // fetch data
    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);

    // data table
    const columns: ColumnsType<DataTableSev> = [
        {
            title: "Mã dịch vụ",
            dataIndex: "code",
            key: "code",
        },
        {
            title: "Tên dịch vụ",
            dataIndex: "servicename",
            key: "servicename",
        },
        {
            title: "Mô tả",
            dataIndex: "desc",
            key: "desc",
        },
        {
            title: "Trạng thái hoạt động",
            dataIndex: "status",
            key: "status",
            render: (text: any) => {
                if (text === "Hoạt động")
                    return (
                        <span className="status-active">
                            <GoDotFill className="icon-active" />
                            <p>Hoạt động</p>
                        </span>
                    );
                if (text === "Ngưng hoạt động")
                    return (
                        <span className="status-active">
                            <GoDotFill className="icon-shutdown" />
                            <p>Ngưng hoạt động</p>
                        </span>
                    );
            },
        },
        {
            title: "",
            key: "detail",
            dataIndex: "detail",
            render: (_, services: DataTableSev) => (
                <a onClick={() => props.handleOpenPageDetail(services)}>Chi Tiết</a>
            ),
        },
        {
            title: "",
            key: "update",
            dataIndex: "update",
            render: (_, services: DataTableSev) => (
                <a onClick={() => props.handleOpenPageUpdate(services)}>Cập nhật</a>
            ),
        },
    ];

    return (
        <div className="main-service">
            <div className="main-service-child">
                <h2 className="title-main-service-child">Danh sách dịch vụ</h2>

                <div className="top-main-service-child">
                    <div className="top-status-main-service">
                        <div className="status-main-service-child">
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
                        <div className="status-main-service-child">
                            <p>Chọn thời gian</p>
                            <div className="status-date-main-child">
                                <DatePicker
                                    format="DD/MM/YYYY"
                                    style={{ marginRight: 7, height: 32 }}
                                />
                                <BiSolidRightArrow size={10} />
                                <DatePicker
                                    format="DD/MM/YYYY"
                                    style={{ marginLeft: 7, height: 32 }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="top-search-main-service">
                        <p>Từ khóa</p>
                        <Input placeholder="Nhập từ khóa" onChange={(e) => setFindByCode(e.target.value)} />
                        <BiSearch className="icon-search" />
                    </div>
                </div>

                <div className="content-main-service-child">
                    <div className="table-content-main-service">
                        <Table
                            className="table-service"
                            rowKey={(record) => record.id!}
                            columns={columns}
                            dataSource={filterServices}
                            pagination={{ pageSize: 7 }}
                        />
                    </div>
                </div>
            </div>

            <div className="add-service">
                <button
                    className="button-add-service"
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
                        Thêm <br></br> dịch vụ
                    </p>
                </button>
            </div>
        </div>
    );
}

export default ListService;