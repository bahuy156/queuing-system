/* eslint-disable jsx-a11y/anchor-is-valid */
import "./DetailService.scss"
import { Select, Input } from "antd";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi"
import { BiSearch } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { FaPencilAlt } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri"
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { ColumnsType } from "antd/es/table";
import { Table } from "antd";
import { DataDetailService } from "../../../types";

interface PropsChild {
    handleOpenPageUpdate: any
    handleClosePageDetail: any
    selectedServices: any
}

function DetailService(props: PropsChild) {
    // data table
    const columns: ColumnsType<DataDetailService> = [
        {
            title: "Số thứ tự",
            dataIndex: "stt",
            key: "stt",
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (text: any) => {
                if (text === "Đã hoàn thành")
                    return (
                        <span className="status-active"><GoDotFill className="icon-active" /><p>Đã hoàn thành</p></span>
                    );
                if (text === "Đang thực hiện")
                    return (
                        <span className="status-active"><GoDotFill className="icon-process-detail" /><p>Đang thực hiện</p></span>
                    );
                if (text === "Vắng")
                    return (
                        <span className="status-active"><GoDotFill className="icon-absent-detail" /><p>Vắng</p></span>
                    )
            },
        },
    ];

    const data: DataDetailService[] = [
        {
            key: '1',
            stt: "2010001",
            status: "Đã hoàn thành",
        },
        {
            key: '2',
            stt: "2010002",
            status: "Đã hoàn thành",
        },
        {
            key: '3',
            stt: "2010003",
            status: "Đang thực hiện",
        },
        {
            key: '4',
            stt: "2010004",
            status: "Đã hoàn thành",
        },
        {
            key: '5',
            stt: "2010005",
            status: "Đã hoàn thành",
        },
        {
            key: '6',
            stt: "2010006",
            status: "Vắng",
        },
        {
            key: '7',
            stt: "2010007",
            status: "Đã hoàn thành",
        },
    ];

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div className="wrapper-detail-service">
            <h2 className="title-detail-service">Quản lý dịch vụ</h2>

            <div className="main-detail-service">
                <div className="main-detail-left">
                    <div className="top-main-detail-left">
                        <h3 className="title-top-main-detail-left">Thông tin dịch vụ</h3>
                        <div className="content-top-main-detail-left">
                            <div className="content-top-main-detail-left-child1">
                                <p>Mã dịch vụ:</p>
                                <p>Tên dịch vụ:</p>
                                <p>Mô tả:</p>
                            </div>
                            <div className="content-top-main-detail-left-child2">
                                <p>{props.selectedServices?.code}</p>
                                <p>{props.selectedServices?.servicename}</p>
                                <p>{props.selectedServices?.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bot-main-detail-left">
                        <h3 className="title-bot-main-detail-left">Quy tắc cấp số</h3>
                        <div className="content-bot-main-detail-left">
                            <div className="content-bot-main-detail-left-child">
                                <p>Tăng tự động:</p>
                                <button>0001</button>
                                <span>đến</span>
                                <button>9999</button>
                            </div>
                            <div className="content-bot-main-detail-left-child2">
                                <p>Prefix:</p>
                                <button>0001</button>
                            </div>
                            <div className="content-bot-main-detail-left-child3">
                                <p>Reset mỗi ngày</p>
                                <span>Ví dụ: 201-2001</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-detail-center">
                    <div className="top-main-detail-center">
                        <div className="top-main-detail-cente-child">
                            <p>Trạng thái</p>
                            <Select
                                className="status-main-child-selected"
                                defaultValue="Tất cả"
                                style={{ width: 160 }}
                                suffixIcon={
                                    <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                                }
                                options={[
                                    { value: "Tất cả", label: "Tất cả" },
                                    { value: "Đã hoàn thành", label: "Đã hoàn thành" },
                                    { value: "Đã thực hiện", label: "Đã thực hiện" },
                                    { value: "Vắng", label: "Vắng" },
                                ]}
                            />
                        </div>
                        <div className="top-main-detail-cente-child1">
                            <p>Chọn thời gian</p>
                            <div className="">
                                <DatePicker format="DD/MM/YYYY" onChange={onChange} style={{ marginRight: 7, width: 130 }} />
                                <BiSolidRightArrow size={10} />
                                <DatePicker format="DD/MM/YYYY" onChange={onChange} style={{ marginLeft: 7, width: 130 }} />
                            </div>
                        </div>
                        <div className="top-main-detail-cente-child2">
                            <p>Từ khóa</p>
                            <Input placeholder="Nhập từ khóa" />
                            <BiSearch className="icon-search-detail" />
                        </div>
                    </div>
                    <div className="content-main-detail-center">
                        <Table
                            className="table-detail-service"
                            columns={columns}
                            dataSource={data}
                            pagination={{ pageSize: 7 }}
                        />
                    </div>
                </div>
                <div className="main-detail-right">
                    <button className="btn-update-service" onClick={() => props.handleOpenPageUpdate(props.selectedServices)}>
                        <div className="icon-service"><FaPencilAlt /></div>
                        <p>Cập nhật <br></br> danh sách
                        </p>
                    </button>
                    <button className="btn-back-service" onClick={() => props.handleClosePageDetail()}>
                        <div className="icon-service"><RiArrowGoBackFill /></div>
                        <p>Quay lại</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetailService;