/* eslint-disable @typescript-eslint/no-unused-vars */
import "./AddRole.scss";
import { Input } from "antd";
import { Checkbox } from "antd";
import { useState, useEffect } from "react";
import { AppDispatch, RootState } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addRole } from "../../../../redux/actions/roleActions";
import { fetchAccount } from "../../../../redux/actions/accountActions";

interface PropsChild {
    handleClosePageAdd: any;
}

function AddRole(props: PropsChild) {
    const dispatch: AppDispatch = useDispatch();
    const dataAccount = useSelector((state: RootState) => state.account.datas);

    const [nameRole, setNameRole] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [checkAll1, setCheckAll1] = useState<boolean>(false);
    const [userLog, setUserLog] = useState<boolean>(false);
    const [device, setDevice] = useState<boolean>(false);
    const [service, setService] = useState<boolean>(false);
    const [checkAll2, setCheckAll2] = useState<boolean>(false);
    const [role, setRole] = useState<boolean>(false);
    const [report, setReport] = useState<boolean>(false);
    const [account, setAccount] = useState<boolean>(false);

    // group
    const handleCheckedAll1 = () => {
        if (!checkAll1) {
            setUserLog(false)
            setDevice(false)
            setService(false)
            setCheckAll1(!checkAll1)
        } else {
            setCheckAll1(!checkAll1)
        }
    }

    const handleCheckedUserLog = () => {
        if (!userLog && device && service) {
            setCheckAll1(true)
            setUserLog(false)
            setDevice(false)
            setService(false)
        } else {
            setCheckAll1(false)
            setUserLog(!userLog)
        }
    }

    const handleCheckedDevice = () => {
        if (!device && userLog && service) {
            setCheckAll1(true)
            setUserLog(false)
            setDevice(false)
            setService(false)
        } else {
            setCheckAll1(false)
            setDevice(!device)
        }
    }

    const handleCheckedService = () => {
        if (!service && userLog && device) {
            setCheckAll1(true)
            setUserLog(false)
            setDevice(false)
            setService(false)
        } else {
            setCheckAll1(false)
            setService(!service)
        }
    }

    // group B
    const handleCheckedAll2 = () => {
        if (!checkAll2) {
            setRole(false)
            setReport(false)
            setAccount(false)
            setCheckAll2(!checkAll2)
        } else {
            setCheckAll2(!checkAll2)
        }
    }

    const handleCheckedRole = () => {
        if (!role && report && account) {
            setCheckAll2(true)
            setRole(false)
            setReport(false)
            setAccount(false)
        } else {
            setCheckAll2(false)
            setRole(!role)
        }
    }

    const handleCheckedReport = () => {
        if (!report && role && account) {
            setCheckAll2(true)
            setRole(false)
            setReport(false)
            setAccount(false)
        } else {
            setCheckAll2(false)
            setReport(!report)
        }
    }

    const handleCheckedAccount = () => {
        if (!account && role && report) {
            setCheckAll2(true)
            setRole(false)
            setReport(false)
            setAccount(false)
        } else {
            setCheckAll2(false)
            setAccount(!account)
        }
    }

    // handle add
    const numUserManage = dataAccount.filter((item) => item.role === "Quản lý").length;
    const numUserAccountant = dataAccount.filter((item) => item.role === "Kế toán").length;
    const numUserAdmin = dataAccount.filter((item) => item.role === "Admin").length;

    const handleChangeNumUser = () => {
        let num;
        if (nameRole === "Kế toán") {
            num = numUserAccountant;
        } else if (nameRole === "Quản lý") {
            num = numUserManage;
        } else if (nameRole === "Admin") {
            num = numUserAdmin
        }
        return num;
    };

    const numUser = handleChangeNumUser();

    const handleAddRole = async () => {
        if (nameRole && desc) {
            const newRole = {
                name: nameRole,
                user: String(numUser),
                desc: desc,
                role: {
                    A: {
                        userlog: checkAll1 || userLog,
                        device: checkAll1 || device,
                        service: checkAll1 || service,
                    },
                    B: {
                        role: checkAll2 || role,
                        report: checkAll2 || report,
                        account: checkAll2 || account,
                    }
                },
            };

            await dispatch(addRole(newRole));
            props.handleClosePageAdd();
        } else {
            alert("Vui lòng nhập đầy đủ thông tin cần thêm");
        }
    };

    // fetch data account
    useEffect(() => {
        dispatch(fetchAccount());
    }, [dispatch]);

    return (
        <div className="wrapper-add-role">
            <h2 className="title-add-role">Danh sách vai trò</h2>

            <div className="content-add-role">
                <h3 className="title-content-add-role">Thông tin vai trò</h3>
                <div className="content-add-role-child">
                    <div className="content-main-add-role">
                        <div className="content-main-add-role-child">
                            <div className="name-content-main-add-role-child">
                                <p>Tên vai trò</p>
                                <span>*</span>
                            </div>
                            <Input
                                placeholder="Nhập tên vai trò"
                                onChange={(e) => setNameRole(e.target.value)}
                            />
                        </div>
                        <div className="content-main-add-role-child">
                            <div className="name-content-main-add-role-child">
                                <p>Mô tả</p>
                                <span>*</span>
                            </div>
                            <div className="input-content-main-add-role-child">
                                <Input
                                    className="input-desc"
                                    placeholder="Mô tả dịch vụ"
                                    onChange={(e) => setDesc(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="footer-content-add-role">
                            <span>*</span>
                            <p>Là trường thông tin bắt buộc</p>
                        </div>
                    </div>

                    <div className="content-bot-add-role">
                        <div className="title-content-bot-add-role">
                            <p>Phân quyền chức năng</p>
                            <span>*</span>
                        </div>
                        <div className="main-content-bot-add-role">
                            <div className="main-content-bot-add-role-child">
                                <h4 className="title-main-content-bot-add-role-child">
                                    Nhóm chức năng A
                                </h4>
                                <div className="content-bot-add-role-child">
                                    <Checkbox
                                        className="checkbox-add-role-child"
                                        onClick={handleCheckedAll1}
                                        checked={checkAll1}
                                    >
                                        Tất cả
                                    </Checkbox>
                                    <Checkbox
                                        className="checkbox-add-role-child"
                                        onClick={handleCheckedUserLog}
                                        checked={userLog}
                                    >
                                        Sử dụng nhật ký
                                    </Checkbox>
                                    <Checkbox
                                        className="checkbox-add-role-child"
                                        onClick={handleCheckedDevice}
                                        checked={device}
                                    >
                                        Sử dụng thiết bị
                                    </Checkbox>
                                    <Checkbox
                                        className="checkbox-add-role-child"
                                        onClick={handleCheckedService}
                                        checked={service}
                                    >
                                        Sử dụng dịch vụ
                                    </Checkbox>
                                </div>
                            </div>
                            <div className="main-content-bot-add-role-child">
                                <h4 className="title-main-content-bot-add-role-child">
                                    Nhóm chức năng B
                                </h4>
                                <div className="content-bot-add-role-child">
                                    <Checkbox
                                        className="checkbox-add-role-child"
                                        onClick={handleCheckedAll2}
                                        checked={checkAll2}
                                    >
                                        Tất cả
                                    </Checkbox>
                                    <Checkbox
                                        className="checkbox-add-role-child"
                                        onClick={handleCheckedRole}
                                        checked={role}
                                    >
                                        Quản lý vai trò
                                    </Checkbox>
                                    <Checkbox
                                        className="checkbox-add-role-child"
                                        onClick={handleCheckedReport}
                                        checked={report}
                                    >
                                        Sử dụng báo cáo
                                    </Checkbox>
                                    <Checkbox
                                        className="checkbox-add-role-child"
                                        onClick={handleCheckedAccount}
                                        checked={account}
                                    >
                                        Quản lý tài khoản
                                    </Checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="button-role">
                <button
                    className="btn-cancel-role"
                    onClick={() => props.handleClosePageAdd()}
                >
                    <p>Hủy bỏ</p>
                </button>
                <button className="btn-add-role" onClick={handleAddRole}>
                    <p>Thêm</p>
                </button>
            </div>
        </div>
    );
}

export default AddRole;