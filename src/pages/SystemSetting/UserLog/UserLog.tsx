/* eslint-disable jsx-a11y/anchor-is-valid */
import "./UserLog.scss"
import Header from "../../../components/Header/Header";
import { Input } from "antd";
import { BiSolidRightArrow } from "react-icons/bi"
import { BiSearch } from "react-icons/bi";
import { DataTableUserLog } from "../../../types";
import { ColumnsType } from "antd/es/table";
import { Table } from "antd";
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd'
import NavTopUserLog from "../../../components/Header/NavTopUserLog/NavTopUserLog";

function UserLog() {
    // data table
    const columns: ColumnsType<DataTableUserLog> = [
        {
            title: "Tên đăng nhập",
            dataIndex: "nameLogin",
            key: "nameLogin",
        },
        {
            title: "Thời gian tác dụng",
            dataIndex: "time",
            key: "time",
        },
        {
            title: "IP thực hiện",
            dataIndex: "ip",
            key: "ip",
        },
        {
            title: "Thao tác thực hiện",
            dataIndex: "operations",
            key: "operations",
        },
    ];

    const data: DataTableUserLog[] = [
        {
            key: '1',
            nameLogin: "bahuy156",
            time: "19/08/2023 15:12:17",
            ip: "192.168.3.1",
            operations: "Cập nhật thông tin dịch vụ DV_01",
        },
        {
            key: '2',
            nameLogin: "bahuy156",
            time: "19/08/2023 15:12:17",
            ip: "192.168.3.1",
            operations: "Cập nhật thông tin dịch vụ DV_01",
        },
        {
            key: '3',
            nameLogin: "bahuy156",
            time: "19/08/2023 15:12:17",
            ip: "192.168.3.1",
            operations: "Cập nhật thông tin dịch vụ DV_01",
        },
        {
            key: '4',
            nameLogin: "bahuy156",
            time: "19/08/2023 15:12:17",
            ip: "192.168.3.1",
            operations: "Cập nhật thông tin dịch vụ DV_01",
        },
        {
            key: '5',
            nameLogin: "bahuy156",
            time: "19/08/2023 15:12:17",
            ip: "192.168.3.1",
            operations: "Cập nhật thông tin dịch vụ DV_01",
        },
        {
            key: '6',
            nameLogin: "bahuy156",
            time: "19/08/2023 15:12:17",
            ip: "192.168.3.1",
            operations: "Cập nhật thông tin dịch vụ DV_01",
        },
        {
            key: '7',
            nameLogin: "bahuy156",
            time: "19/08/2023 15:12:17",
            ip: "192.168.3.1",
            operations: "Cập nhật thông tin dịch vụ DV_01",
        },
        {
            key: '8',
            nameLogin: "bahuy156",
            time: "19/08/2023 15:12:17",
            ip: "192.168.3.1",
            operations: "Cập nhật thông tin dịch vụ DV_01",
        },
    ];

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div>
            <Header headName={<NavTopUserLog />} />

            <div className="main-user-log">
                <div className="top-main-user-log-child">
                    <div className="top-status-main-user-log">
                        <div className="status-main-user-log-child">
                            <p>Chọn thời gian</p>
                            <div className="status-date-main-child">
                                <DatePicker format="DD/MM/YYYY" onChange={onChange} style={{ marginRight: 7, height: 32 }} />
                                <BiSolidRightArrow size={10} />
                                <DatePicker format="DD/MM/YYYY" onChange={onChange} style={{ marginLeft: 7, height: 32 }} />
                            </div>
                        </div>
                    </div>

                    <div className="top-search-main-user-log">
                        <p>Từ khóa</p>
                        <Input placeholder="Nhập từ khóa" />
                        <BiSearch className="icon-search" />
                    </div>
                </div>

                <div className="content-main-user-log-child">
                    <div className="table-content-main-user-log">
                        <Table
                            className="table-user-log"
                            columns={columns}
                            dataSource={data}
                            pagination={{ pageSize: 8 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLog;