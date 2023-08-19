/* eslint-disable jsx-a11y/anchor-is-valid */
import "./ListAccount.scss"
import { Select } from "antd";
import { Input } from "antd";
import { BiSearch } from "react-icons/bi";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { AiFillCaretDown } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { DataTableListAccount } from "../../../../types";

interface PropsChild {
    handleOpentPageAdd: any
    handleOpentPageUpdate: any
}

function ListAccount(props: PropsChild) {
    // data table
    const columns: ColumnsType<DataTableListAccount> = [
        {
            title: "Tên đăng nhập",
            dataIndex: "nameLogin",
            key: "nameLogin",
        },
        {
            title: "Họ Tên",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Số điện thoại",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Vai trò",
            dataIndex: "role",
            key: "role",
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
            title: "",
            key: "update",
            dataIndex: "update",
            render: () => <a onClick={() => props.handleOpentPageUpdate()} >Cập nhật</a>,
        },
    ];

    const data: DataTableListAccount[] = [
        {
            key: '1',
            nameLogin: "bahuy156",
            name: "Sa Mai Bá Huy",
            phone: "0988368690",
            email: "bahuy156@gmail.com",
            role: "Admin",
            status: "Hoạt động"
        },
        {
            key: '2',
            nameLogin: "ngockim2711",
            name: "Nguyễn Thị Kim Ngọc",
            phone: "0988368690",
            email: "kunsgd@gmail.com",
            role: "Kế toán",
            status: "Hoạt động"
        },
        {
            key: '3',
            nameLogin: "tuyetnguyen12",
            name: "Nguyễn Thị Ngọc Tuyết",
            phone: "0988368690",
            email: "tuyetngoc@gmail.com",
            role: "Quản lý",
            status: "Hoạt động"
        },
        {
            key: '4',
            nameLogin: "thuyngan23",
            name: "Lê Thị Thùy Ngân",
            phone: "0988368690",
            email: "nganthuy@gmail.com",
            role: "Kế toán",
            status: "Ngưng hoạt động"
        },
    ];

    return (
        <div className="main-account">
            <div className="main-account-child">
                <h2 className="title-main-account-child">Danh sách tài khoản</h2>

                <div className="top-main-account-child">
                    <div className="top-status-main-account">
                        <div className="status-main-child">
                            <p>Tên vài trò</p>
                            <Select
                                className="status-main-child-selected"
                                defaultValue="Tất cả"
                                style={{ width: 270 }}
                                suffixIcon={
                                    <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                                }
                                options={[
                                    { value: "Tất cả", label: "Tất cả" },
                                    { value: "Kế toán", label: "Kế toán" },
                                    { value: "Quản lý", label: "Quản lý" },
                                    { value: "Admin", label: "Admin" },
                                ]}
                            />
                        </div>
                    </div>

                    <div className="top-search-main-account">
                        <p>Từ khóa</p>
                        <Input
                            placeholder="Nhập từ khóa"
                        />
                        <BiSearch className="icon-search" />
                    </div>
                </div>

                <div className="content-main-account-child">
                    <div className="table-content-main-account">
                        <Table
                            className="table-account"
                            columns={columns}
                            dataSource={data}
                            pagination={{ pageSize: 7 }}
                        />
                    </div>
                    <div className="panigation-main-account"></div>
                </div>
            </div>

            <div className="add-account">
                <button
                    className="button-add-account"
                    onClick={() => props.handleOpentPageAdd()}
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
                        Thêm <br></br> tài khoản
                    </p>
                </button>
            </div>
        </div>
    );
}

export default ListAccount;