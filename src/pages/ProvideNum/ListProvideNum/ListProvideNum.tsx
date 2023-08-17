/* eslint-disable jsx-a11y/anchor-is-valid */
import "./ListProvideNum.scss"
import { Input, Select } from "antd";
import { AiFillCaretDown } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { BiSolidRightArrow } from "react-icons/bi"
import { BiSearch } from "react-icons/bi";
import { DataTableProvideNum } from "../../../types";
import { ColumnsType } from "antd/es/table";
import { Table } from "antd";
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';

interface PropsChild {
    handleOpentPageNewNum: any
    handleOpenPageDetail: any
}

function ListProvideNum(props: PropsChild) {
    // data table
    const columns: ColumnsType<DataTableProvideNum> = [
        {
            title: "STT",
            dataIndex: "stt",
            key: "stt",
        },
        {
            title: "Tên khách hàng",
            dataIndex: "nameCsm",
            key: "nameCsm",
        },
        {
            title: "Tên dịch vụ",
            dataIndex: "nameSev",
            key: "nameSev",
        },
        {
            title: "Thời gian cấp",
            dataIndex: "provideTime",
            key: "provideTime",
        },
        {
            title: "Hạn sử dụng",
            dataIndex: "expỉy",
            key: "expỉy",
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (text: any) => {
                if (text === "Đang chờ")
                    return (
                        <span className="status-active"><GoDotFill className="icon-waiting-provide" /><p>Đang chờ</p></span>
                    );
                if (text === "Đã sử dụng")
                    return (
                        <span className="status-active"><GoDotFill className="icon-used-provide" /><p>Đã sử dụng</p></span>
                    );
                if (text === "Bỏ qua")
                    return (
                        <span className="status-active"><GoDotFill className="icon-skip-provide" /><p>Bỏ qua</p></span>
                    )
            },
        },
        {
            title: "Nguồn cấp",
            dataIndex: "supply",
            key: "supply",
        },
        {
            title: "",
            key: "detail",
            dataIndex: "detail",
            render: () => <a onClick={() => props.handleOpenPageDetail()} >Chi Tiết</a>,
        },
    ];

    const data: DataTableProvideNum[] = [
        {
            key: '1',
            stt: "2010001",
            nameCsm: "Lê Huỳnh Ái Vân",
            nameSev: "Khám tim mạch",
            provideTime: "14:35 - 07/11/2021",
            expỉy: "14:35 - 12/11/2021",
            status: "Đang chờ",
            supply: "Kiosk",
        },
        {
            key: '2',
            stt: "2010002",
            nameCsm: "Lê Huỳnh Ái Vân",
            nameSev: "Khám tim mạch",
            provideTime: "14:35 - 07/11/2021",
            expỉy: "14:35 - 12/11/2021",
            status: "Đang chờ",
            supply: "Kiosk",
        },
        {
            key: '3',
            stt: "2010003",
            nameCsm: "Lê Huỳnh Ái Vân",
            nameSev: "Khám tim mạch",
            provideTime: "14:35 - 07/11/2021",
            expỉy: "14:35 - 12/11/2021",
            status: "Đã sử dụng",
            supply: "Kiosk",
        },
        {
            key: '4',
            stt: "2010004",
            nameCsm: "Lê Huỳnh Ái Vân",
            nameSev: "Khám tim mạch",
            provideTime: "14:35 - 07/11/2021",
            expỉy: "14:35 - 12/11/2021",
            status: "Đã sử dụng",
            supply: "Kiosk",
        },
        {
            key: '5',
            stt: "2010005",
            nameCsm: "Lê Huỳnh Ái Vân",
            nameSev: "Khám tim mạch",
            provideTime: "14:35 - 07/11/2021",
            expỉy: "14:35 - 12/11/2021",
            status: "Đang chờ",
            supply: "Kiosk",
        },
        {
            key: '6',
            stt: "2010006",
            nameCsm: "Lê Huỳnh Ái Vân",
            nameSev: "Khám tim mạch",
            provideTime: "14:35 - 07/11/2021",
            expỉy: "14:35 - 12/11/2021",
            status: "Bỏ qua",
            supply: "Kiosk",
        },
        {
            key: '7',
            stt: "2010007",
            nameCsm: "Lê Huỳnh Ái Vân",
            nameSev: "Khám tim mạch",
            provideTime: "14:35 - 07/11/2021",
            expỉy: "14:35 - 12/11/2021",
            status: "Đang chờ",
            supply: "Kiosk",
        },
    ];

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div className="main-provide-num">
            <div className="main-provide-num-child">
                <h2 className="title-main-provide-num-child">Quản lý cấp số</h2>

                <div className="top-main-provide-num-child">
                    <div className="top-status-main-provide-num">
                        <div className="status-main-provide-num-child">
                            <p>Tên dịch vụ</p>
                            <Select
                                className="status-main-child-selected"
                                defaultValue="Tất cả"
                                style={{ width: 180 }}
                                suffixIcon={
                                    <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                                }
                                options={[
                                    { value: "Tất cả", label: "Tất cả" },
                                    { value: "Khám sản - Phụ khoa", label: "Khám sản - Phụ khoa" },
                                    { value: "Khám răng hàm mặt", label: "Khám răng hàm mặt" },
                                    { value: "Khám tai mũi họng", label: "Khám tai mũi họng" },
                                ]}
                            />
                        </div>
                        <div className="status-main-provide-num-child">
                            <p>Tình trạng</p>
                            <Select
                                className="status-main-child-selected"
                                defaultValue="Tất cả"
                                style={{ width: 180 }}
                                suffixIcon={
                                    <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                                }
                                options={[
                                    { value: "Tất cả", label: "Tất cả" },
                                    { value: "Đang chờ", label: "Đang chờ" },
                                    { value: "Đã sử dụng", label: "Đã sử dụng" },
                                    { value: "Bỏ qua", label: "Bỏ qua" },
                                ]}
                            />
                        </div>
                        <div className="status-main-provide-num-child">
                            <p>Nguồn cấp</p>
                            <Select
                                className="status-main-child-selected"
                                defaultValue="Tất cả"
                                style={{ width: 180 }}
                                suffixIcon={
                                    <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                                }
                                options={[
                                    { value: "Tất cả", label: "Tất cả" },
                                    { value: "Kiosk", label: "Kiosk" },
                                    { value: "Hệ thống", label: "Hệ thống" },
                                ]}
                            />
                        </div>
                        <div className="status-main-provide-num-child">
                            <p>Chọn thời gian</p>
                            <div className="status-date-main-provide-num-child">
                                <DatePicker format="DD/MM/YYYY" onChange={onChange} style={{ marginRight: 7, height: 32 }} />
                                <BiSolidRightArrow size={10} />
                                <DatePicker format="DD/MM/YYYY" onChange={onChange} style={{ marginLeft: 7, height: 32 }} />
                            </div>
                        </div>
                    </div>

                    <div className="top-search-main-provide-num">
                        <p>Từ khóa</p>
                        <Input placeholder="Nhập từ khóa" />
                        <BiSearch className="icon-search" />
                    </div>
                </div>

                <div className="content-main-provide-num-child">
                    <div className="table-content-main-provide-num">
                        <Table
                            className="table-provide-num"
                            columns={columns}
                            dataSource={data}
                            pagination={{ pageSize: 7 }}
                        />
                    </div>
                </div>
            </div>

            <div className="add-provide-num">
                <button
                    className="button-add-provide-num"
                    onClick={() => props.handleOpentPageNewNum()}
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
                        Cấp <br></br> số mới
                    </p>
                </button>
            </div>
        </div>
    );
}

export default ListProvideNum;