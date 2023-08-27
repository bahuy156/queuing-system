/* eslint-disable react-hooks/exhaustive-deps */
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
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProvideNum, searchProvideNumber } from "../../../redux/actions/provideNumActions";

interface PropsChild {
    handleOpentPageNewNum: any
    handleOpenPageDetail: any
}

function ListProvideNum(props: PropsChild) {
    const dispatch: AppDispatch = useDispatch()
    const provideNumber = useSelector((state: RootState) => state.provideNum.datas)

    const [valueSearch, setValueSearch] = useState<string>("")
    const [valueSevName, setValueSevName] = useState<string>("Tất cả")
    const [valueStatus, setValueStatus] = useState<string>("Tất cả")
    const [valueSupply, setValueSupply] = useState<string>("Tất cả")
    const [dateFrom, setDateFrom] = useState<string>("")
    const [dateTo, setDateTo] = useState<string>("")
    const [filteredData, setFilteredData] = useState<DataTableProvideNum[]>([]);

    // fetch data
    useEffect(() => {
        dispatch(fetchProvideNum())
    }, [dispatch])

    // handle filter data
    const onChangeDateFrom: DatePickerProps['onChange'] = (date, dateString) => {
        setDateFrom(dateString)
    };

    const onChangeDateTo: DatePickerProps['onChange'] = (date, dateString) => {
        setDateTo(dateString)
    };

    const parseDate = (str: string) => {
        const [day, month, year] = str.split("/").map(s => parseInt(s, 10));
        return new Date(year, month - 1, day);
    };

    useEffect(() => {
        const dateFiltered = provideNumber.filter(item => {
            const curTimeProvide = item.timeprovide.split(" - ")
            const timeProvideDate = parseDate(curTimeProvide[1]);

            const fromDate = dateFrom ? parseDate(dateFrom) : null;
            const toDate = dateTo ? parseDate(dateTo) : null;

            return (!fromDate || timeProvideDate >= fromDate) && (!toDate || timeProvideDate <= toDate);
        });

        const finalFiltered = dateFiltered.filter(
            item =>
                (valueSevName === "Tất cả" || item.sevname === valueSevName) &&
                (valueStatus === "Tất cả" || item.status === valueStatus) &&
                (valueSupply === "Tất cả" || item.supply === valueSupply)
        );

        setFilteredData(finalFiltered);
    }, [dateFrom, dateTo, provideNumber, valueSevName, valueStatus, valueSupply]);

    // handle search by code
    const handleSearchByCode = () => {
        if (valueSearch) {
            dispatch(searchProvideNumber(valueSearch));
        } else {
            dispatch(fetchProvideNum())
        }
    }

    useEffect(() => {
        handleSearchByCode();
    }, [valueSearch])

    // data table
    const columns: ColumnsType<DataTableProvideNum> = [
        {
            title: "STT",
            dataIndex: "stt",
            key: "stt",
        },
        {
            title: "Tên khách hàng",
            dataIndex: "cusname",
            key: "cusname",
        },
        {
            title: "Tên dịch vụ",
            dataIndex: "sevname",
            key: "sevname",
        },
        {
            title: "Thời gian cấp",
            dataIndex: "timeprovide",
            key: "timeprovide",
        },
        {
            title: "Hạn sử dụng",
            dataIndex: "expiry",
            key: "expiry",
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
            render: (_, providenum) => <a onClick={() => props.handleOpenPageDetail(providenum)} >Chi Tiết</a>,
        },
    ];

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
                                onChange={(value: string) => setValueSevName(value)}
                                options={[
                                    { value: "Tất cả", label: "Tất cả" },
                                    { value: "Khám sản - Phụ khoa", label: "Khám sản - Phụ khoa" },
                                    { value: "Khám răng hàm mặt", label: "Khám răng hàm mặt" },
                                    { value: "Khám tai mũi họng", label: "Khám tai mũi họng" },
                                    { value: "Khám tim mạch", label: "Khám tim mạch" },
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
                                onChange={(value: string) => setValueStatus(value)}
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
                                onChange={(value: string) => setValueSupply(value)}
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
                                <DatePicker format="DD/MM/YYYY" onChange={onChangeDateFrom} style={{ marginRight: 7, height: 32 }} />
                                <BiSolidRightArrow size={10} />
                                <DatePicker format="DD/MM/YYYY" onChange={onChangeDateTo} style={{ marginLeft: 7, height: 32 }} />
                            </div>
                        </div>
                    </div>

                    <div className="top-search-main-provide-num">
                        <p>Từ khóa</p>
                        <Input placeholder="Nhập từ khóa" onChange={(e) => setValueSearch(e.target.value)} />
                        <BiSearch className="icon-search" />
                    </div>
                </div>

                <div className="content-main-provide-num-child">
                    <div className="table-content-main-provide-num">
                        <Table
                            rowKey={(record) => record.id!}
                            className="table-provide-num"
                            columns={columns}
                            dataSource={filteredData}
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