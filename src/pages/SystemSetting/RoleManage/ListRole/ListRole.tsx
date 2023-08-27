/* eslint-disable react-hooks/exhaustive-deps */
import "./ListRole.scss"
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Input } from "antd";
import { BiSearch } from "react-icons/bi";
import { DataTableRole } from "../../../../types";
import { ColumnsType } from "antd/es/table";
import { Table } from "antd";
import { AppDispatch, RootState } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react"
import { fetchRole, searchRole } from "../../../../redux/actions/roleActions";

interface PrposChild {
    handleOpentPageAdd: any
    handleOpentPageUpdate: any
}

function ListRole(props: PrposChild) {
    const dispatch: AppDispatch = useDispatch()
    const dataRole = useSelector((state: RootState) => state.role.datas)

    const [findData, setFindData] = useState<string>("");

    // handle search by code
    const handleSearch = () => {
        if (findData) {
            dispatch(searchRole(findData));
        } else {
            dispatch(fetchRole())
        }
    };

    useEffect(() => {
        handleSearch();
    }, [findData]);

    // fetch data
    useEffect(() => {
        dispatch(fetchRole())
    }, [dispatch])

    // data table
    const columns: ColumnsType<DataTableRole> = [
        {
            title: "Tên vai trò",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Số người dùng",
            dataIndex: "user",
            key: "user",
        },
        {
            title: "Mô tả",
            dataIndex: "desc",
            key: "desc",
        },
        {
            title: "",
            key: "update",
            dataIndex: "update",
            render: (_, role: DataTableRole) => <a onClick={() => props.handleOpentPageUpdate(role)} >Cập nhật</a>,
        },
    ];

    return (
        <div className="main-list-role">
            <div className="main-list-role-child">
                <div className="top-main-list-role-child">
                    <h2 className="title-main-list-role-child">Danh sách vai trò</h2>
                    <div className="top-search-main-list-role">
                        <p>Từ khóa</p>
                        <Input placeholder="Nhập từ khóa" onChange={(e) => setFindData(e.target.value)} />
                        <BiSearch className="icon-search" />
                    </div>
                </div>

                <div className="table-content-main-list-role">
                    <Table
                        rowKey={(record) => record.id!}
                        className="table-list-role"
                        columns={columns}
                        dataSource={dataRole}
                        pagination={{ pageSize: 7 }}
                    />
                </div>
            </div>

            <div className="add-list-role">
                <button className="button-add-list-role" onClick={() => props.handleOpentPageAdd()} >
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
                        Thêm <br></br> vai trò
                    </p>
                </button>
            </div>
        </div>
    );
}

export default ListRole;