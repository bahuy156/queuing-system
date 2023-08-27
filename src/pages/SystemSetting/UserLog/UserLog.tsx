/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./UserLog.scss"
import Header from "../../../components/Header/Header";
import { Input } from "antd";
import { BiSolidRightArrow } from "react-icons/bi"
import { BiSearch } from "react-icons/bi";
import { DataTableDiary } from "../../../types";
import { ColumnsType } from "antd/es/table";
import { Table } from "antd";
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd'
import NavTopUserLog from "../../../components/Header/NavTopUserLog/NavTopUserLog";
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchDiary, searchDiary } from "../../../redux/actions/diaryActoins"

function UserLog() {
    const dispatch: AppDispatch = useDispatch()
    const dataDiary = useSelector((state: RootState) => state.diary.datas)

    const [dateFrom, setDateFrom] = useState<string>("")
    const [dateTo, setDateTo] = useState<string>("")
    const [filteredData, setFilteredData] = useState<DataTableDiary[]>([]);
    const [valueSearch, setValueSearch] = useState<string>("")

    // handle search by code
    const handleSearchByLoginname = () => {
        if (valueSearch) {
            dispatch(searchDiary(valueSearch));
        } else {
            dispatch(fetchDiary());
        }
    }

    useEffect(() => {
        handleSearchByLoginname();
    }, [valueSearch])

    // handle filter date 
    const onChangeDteFrom: DatePickerProps['onChange'] = (date, dateString) => {
        setDateFrom(dateString)
    };

    const onChangeDteTo: DatePickerProps['onChange'] = (date, dateString) => {
        setDateTo(dateString)
    };

    const parseDate = (str: string) => {
        const [day, month, year] = str.split("/").map(s => parseInt(s, 10));
        return new Date(year, month - 1, day);
    };

    useEffect(() => {
        if (dataDiary.length > 0) {
            if (!dateFrom && !dateTo) {
                setFilteredData(dataDiary);
            } else {
                const dateFiltered = dataDiary.filter(item => {
                    const curTimeDiary = item.time.split(" - ")
                    const timeDiaryDate = parseDate(curTimeDiary[1]);

                    const fromDate = dateFrom ? parseDate(dateFrom) : null;
                    const toDate = dateTo ? parseDate(dateTo) : null;

                    return (!fromDate || timeDiaryDate >= fromDate) && (!toDate || timeDiaryDate <= toDate);
                });

                setFilteredData(dateFiltered);
            }
        }
    }, [dataDiary, dateFrom, dateTo]);

    // fetch data
    useEffect(() => {
        dispatch(fetchDiary())
    }, [dispatch])

    // data table
    const columns: ColumnsType<DataTableDiary> = [
        {
            title: "Tên đăng nhập",
            dataIndex: "loginname",
            key: "loginname",
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
            dataIndex: "operation",
            key: "operation",
        },
    ];

    return (
        <div>
            <Header headName={<NavTopUserLog />} />

            <div className="main-user-log">
                <div className="top-main-user-log-child">
                    <div className="top-status-main-user-log">
                        <div className="status-main-user-log-child">
                            <p>Chọn thời gian</p>
                            <div className="status-date-main-child">
                                <DatePicker format="DD/MM/YYYY" onChange={onChangeDteFrom} style={{ marginRight: 7, height: 32 }} />
                                <BiSolidRightArrow size={10} />
                                <DatePicker format="DD/MM/YYYY" onChange={onChangeDteTo} style={{ marginLeft: 7, height: 32 }} />
                            </div>
                        </div>
                    </div>

                    <div className="top-search-main-user-log">
                        <p>Từ khóa</p>
                        <Input placeholder="Nhập từ khóa" onChange={(e) => setValueSearch(e.target.value)} />
                        <BiSearch className="icon-search" />
                    </div>
                </div>

                <div className="content-main-user-log-child">
                    <div className="table-content-main-user-log">
                        <Table
                            rowKey={(record) => record.id!}
                            className="table-user-log"
                            columns={columns}
                            dataSource={filteredData}
                            pagination={{ pageSize: 8 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLog;