/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Report.scss"
import Header from "../../components/Header/Header";
import { GoDotFill } from "react-icons/go";
import { BiSolidRightArrow } from "react-icons/bi"
import { ColumnsType } from "antd/es/table";
import { Table } from "antd";
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { DataTableReport } from "../../types"
import NavTopReportList from "../../components/Header/NavTopReport/NavTopReportList";

function Report() {
    // data table
    const columns: ColumnsType<DataTableReport> = [
        {
            title: "Số thứ tự",
            dataIndex: "stt",
            key: "stt",
            filters: [
                {
                    text: '2010001',
                    value: '2010001',
                },
                {
                    text: 'Thời gian cấp',
                    value: '2010002',
                },
            ],
        },
        {
            title: "Tên dịch vụ",
            dataIndex: "nameSev",
            key: "nameSev",
            filters: [
                {
                    text: '2010001',
                    value: '2010001',
                },
                {
                    text: 'Thời gian cấp',
                    value: '2010002',
                },
            ],
        },
        {
            title: "Thời gian cấp",
            dataIndex: "timeProvide",
            key: "timeProvide",
            filters: [
                {
                    text: '2010001',
                    value: '2010001',
                },
                {
                    text: 'Thời gian cấp',
                    value: '2010002',
                },
            ],
        },
        {
            title: "Tình trạng",
            dataIndex: "status",
            key: "status",
            filters: [
                {
                    text: '2010001',
                    value: '2010001',
                },
                {
                    text: 'Thời gian cấp',
                    value: '2010002',
                },
            ],
            render: (text: any) => {
                if (text === "Đang chờ")
                    return (
                        <span className="status-active"><GoDotFill className="icon-waiting-report" /><p>Đang chờ</p></span>
                    );
                if (text === "Đã sử dụng")
                    return (
                        <span className="status-active"><GoDotFill className="icon-used-report" /><p>Đã sử dụng</p></span>
                    );
                if (text === "Bỏ qua")
                    return (
                        <span className="status-active"><GoDotFill className="icon-skip-report" /><p>Bỏ qua</p></span>
                    )
            },
        },
        {
            title: "Nguồn cấp",
            dataIndex: "supply",
            key: "supply",
            filters: [
                {
                    text: '2010001',
                    value: '2010001',
                },
                {
                    text: 'Thời gian cấp',
                    value: '2010002',
                },
            ],
        },
    ];

    const data: DataTableReport[] = [
        {
            key: '1',
            stt: "2010001",
            nameSev: "Răng hàm mặt",
            timeProvide: "07:20 - 07/10/2021",
            status: "Đang chờ",
            supply: "Kiosk"
        },
        {
            key: '2',
            stt: "2010001",
            nameSev: "Răng hàm mặt",
            timeProvide: "07:20 - 07/10/2021",
            status: "Đã sử dụng",
            supply: "Kiosk"
        },
        {
            key: '3',
            stt: "2010001",
            nameSev: "Răng hàm mặt",
            timeProvide: "07:20 - 07/10/2021",
            status: "Đã sử dụng",
            supply: "Kiosk"
        },
        {
            key: '4',
            stt: "2010001",
            nameSev: "Răng hàm mặt",
            timeProvide: "07:20 - 07/10/2021",
            status: "Bỏ qua",
            supply: "Kiosk"
        },
        {
            key: '5',
            stt: "2010001",
            nameSev: "Răng hàm mặt",
            timeProvide: "07:20 - 07/10/2021",
            status: "Đang chờ",
            supply: "Kiosk"
        },
        {
            key: '6',
            stt: "2010001",
            nameSev: "Răng hàm mặt",
            timeProvide: "07:20 - 07/10/2021",
            status: "Bỏ qua",
            supply: "Kiosk"
        },
        {
            key: '7',
            stt: "2010001",
            nameSev: "Răng hàm mặt",
            timeProvide: "07:20 - 07/10/2021",
            status: "Đang chờ",
            supply: "Kiosk"
        },
        {
            key: '8',
            stt: "2010001",
            nameSev: "Răng hàm mặt",
            timeProvide: "07:20 - 07/10/2021",
            status: "Đang chờ",
            supply: "Kiosk"
        },
    ];

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div>
            <Header headName={<NavTopReportList />} />
            <div className="main-report">
                <div className="main-report-child">
                    <div className="top-main-report-child">
                        <div className="top-status-main-report">
                            <div className="status-main-report-child">
                                <p>Chọn thời gian</p>
                                <div className="status-date-main-child">
                                    <DatePicker format="DD/MM/YYYY" onChange={onChange} style={{ marginRight: 7, height: 32 }} />
                                    <BiSolidRightArrow size={10} />
                                    <DatePicker format="DD/MM/YYYY" onChange={onChange} style={{ marginLeft: 7, height: 32 }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-main-report-child">
                        <div className="table-content-main-report">
                            <Table
                                className="table-report"
                                columns={columns}
                                dataSource={data}
                                pagination={{ pageSize: 8 }}
                            />
                        </div>
                    </div>
                </div>

                <div className="add-report">
                    <button
                        className="button-add-report"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M23.9166 11.888H20.545C17.78 11.888 15.5283 9.63634 15.5283 6.87134V3.49967C15.5283 2.85801 15.0033 2.33301 14.3616 2.33301H9.41496C5.82163 2.33301 2.91663 4.66634 2.91663 8.83134V19.168C2.91663 23.333 5.82163 25.6663 9.41496 25.6663H18.585C22.1783 25.6663 25.0833 23.333 25.0833 19.168V13.0547C25.0833 12.413 24.5583 11.888 23.9166 11.888ZM14.3266 18.4097L11.9933 20.743C11.9116 20.8247 11.8066 20.8947 11.7016 20.9297C11.5966 20.9763 11.4916 20.9997 11.375 20.9997C11.2583 20.9997 11.1533 20.9763 11.0483 20.9297C10.955 20.8947 10.8616 20.8247 10.7916 20.7547C10.78 20.743 10.7683 20.743 10.7683 20.7313L8.43496 18.398C8.09663 18.0597 8.09663 17.4997 8.43496 17.1613C8.77329 16.823 9.33329 16.823 9.67163 17.1613L10.5 18.013V13.1247C10.5 12.6463 10.8966 12.2497 11.375 12.2497C11.8533 12.2497 12.25 12.6463 12.25 13.1247V18.013L13.09 17.173C13.4283 16.8347 13.9883 16.8347 14.3266 17.173C14.665 17.5113 14.665 18.0713 14.3266 18.4097Z" fill="#FF7506" />
                            <path d="M20.335 10.2779C21.4434 10.2896 22.9834 10.2896 24.3017 10.2896C24.9667 10.2896 25.3167 9.50792 24.85 9.04125C23.17 7.34958 20.16 4.30458 18.4334 2.57792C17.955 2.09958 17.1267 2.42625 17.1267 3.09125V7.16292C17.1267 8.86625 18.5734 10.2779 20.335 10.2779Z" fill="#FF7506" />
                        </svg>
                        <p>
                            Tải về
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Report;