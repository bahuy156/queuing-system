import "./UpdateRole.scss";
import { Input } from "antd";
import { Checkbox } from "antd";
import { useState, useEffect } from "react";
import { AppDispatch, RootState } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updateRole } from "../../../../redux/actions/roleActions";
import { fetchAccount } from "../../../../redux/actions/accountActions";

interface PropsChild {
    handleClosePageUpdate: any;
    selectedPage: any;
}

function UpdateRole(props: PropsChild) {
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

    const currName = props.selectedPage.name;
    const currDesc = props.selectedPage.desc;
    const currRole = props.selectedPage.role;
    console.log(currRole);
    const id = props.selectedPage?.id;

    useEffect(() => {
        setNameRole(currName);
        setDesc(currDesc);
    }, [currName, currDesc]);

    // group
    const handleCheckedAll1 = () => {
        if (!checkAll1) {
            setUserLog(false);
            setDevice(false);
            setService(false);
            setCheckAll1(!checkAll1);
        } else {
            setCheckAll1(!checkAll1);
        }
    };

    const handleCheckedUserLog = () => {
        if (!userLog && device && service) {
            setCheckAll1(true);
            setUserLog(false);
            setDevice(false);
            setService(false);
        } else {
            setCheckAll1(false);
            setUserLog(!userLog);
        }
    };

    const handleCheckedDevice = () => {
        if (!device && userLog && service) {
            setCheckAll1(true);
            setUserLog(false);
            setDevice(false);
            setService(false);
        } else {
            setCheckAll1(false);
            setDevice(!device);
        }
    };

    const handleCheckedService = () => {
        if (!service && userLog && device) {
            setCheckAll1(true);
            setUserLog(false);
            setDevice(false);
            setService(false);
        } else {
            setCheckAll1(false);
            setService(!service);
        }
    };

    // group B
    const handleCheckedAll2 = () => {
        if (!checkAll2) {
            setRole(false);
            setReport(false);
            setAccount(false);
            setCheckAll2(!checkAll2);
        } else {
            setCheckAll2(!checkAll2);
        }
    };

    const handleCheckedRole = () => {
        if (!role && report && account) {
            setCheckAll2(true);
            setRole(false);
            setReport(false);
            setAccount(false);
        } else {
            setCheckAll2(false);
            setRole(!role);
        }
    };

    const handleCheckedReport = () => {
        if (!report && role && account) {
            setCheckAll2(true);
            setRole(false);
            setReport(false);
            setAccount(false);
        } else {
            setCheckAll2(false);
            setReport(!report);
        }
    };

    const handleCheckedAccount = () => {
        if (!account && role && report) {
            setCheckAll2(true);
            setRole(false);
            setReport(false);
            setAccount(false);
        } else {
            setCheckAll2(false);
            setAccount(!account);
        }
    };

    // handle update role
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

    const handleUpdateRole = async () => {
        if (id) {
            const newupdateRole = {
                id: id,
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

            await dispatch(updateRole(newupdateRole));
            props.handleClosePageUpdate();
        } else {
            console.log("Không tìm thấy id cần cập nhật");
        }
    };

    // fetch data account
    useEffect(() => {
        dispatch(fetchAccount());
    }, [dispatch]);

    return (
        <div className="wrapper-update-role">
            <h2 className="title-update-role">Danh sách vai trò</h2>

            <div className="content-update-role">
                <h3 className="title-content-update-role">Thông tin vai trò</h3>
                <div className="content-update-role-child">
                    <div className="content-main-update-role">
                        <div className="content-main-update-role-child">
                            <div className="name-content-main-update-role-child">
                                <p>Tên vai trò</p>
                                <span>*</span>
                            </div>
                            <Input
                                value={nameRole}
                                placeholder="Nhập tên vai trò"
                                onChange={(e) => setNameRole(e.target.value)}
                            />
                        </div>
                        <div className="content-main-update-role-child">
                            <div className="name-content-main-update-role-child">
                                <p>Mô tả</p>
                                <span>*</span>
                            </div>
                            <div className="input-content-main-update-role-child">
                                <Input
                                    value={desc}
                                    className="input-desc"
                                    placeholder="Mô tả dịch vụ"
                                    onChange={(e) => setDesc(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="footer-content-update-role">
                            <span>*</span>
                            <p>Là trường thông tin bắt buộc</p>
                        </div>
                    </div>

                    <div className="content-bot-update-role">
                        <div className="title-content-bot-update-role">
                            <p>Phân quyền chức năng</p>
                            <span>*</span>
                        </div>
                        <div className="main-content-bot-update-role">
                            <div className="main-content-bot-update-role-child">
                                <h4 className="title-main-content-bot-update-role-child">
                                    Nhóm chức năng A
                                </h4>
                                <div className="content-bot-update-role-child">
                                    <Checkbox
                                        className="checkbox-update-role-child"
                                        onClick={handleCheckedAll1}
                                        checked={checkAll1}
                                    >
                                        Tất cả
                                    </Checkbox>
                                    <Checkbox
                                        className="checkbox-update-role-child"
                                        onClick={handleCheckedUserLog}
                                        checked={userLog}
                                    >
                                        Sử dụng nhật ký
                                    </Checkbox>
                                    <Checkbox
                                        className="checkbox-update-role-child"
                                        onClick={handleCheckedDevice}
                                        checked={device}
                                    >
                                        Sử dụng thiết bị
                                    </Checkbox>
                                    <Checkbox
                                        className="checkbox-update-role-child"
                                        onClick={handleCheckedService}
                                        checked={service}
                                    >
                                        Sử dụng dịch vụ
                                    </Checkbox>
                                </div>
                            </div>
                            <div className="main-content-bot-update-role-child">
                                <h4 className="title-main-content-bot-update-role-child">
                                    Nhóm chức năng B
                                </h4>
                                <div className="content-bot-update-role-child">
                                    <Checkbox
                                        className="checkbox-update-role-child"
                                        onClick={handleCheckedAll2}
                                        checked={checkAll2}
                                    >
                                        Tất cả
                                    </Checkbox>
                                    <Checkbox
                                        className="checkbox-update-role-child"
                                        onClick={handleCheckedRole}
                                        checked={role}
                                    >
                                        Quản lý vai trò
                                    </Checkbox>
                                    <Checkbox
                                        className="checkbox-update-role-child"
                                        onClick={handleCheckedReport}
                                        checked={report}
                                    >
                                        Sử dụng báo cáo
                                    </Checkbox>
                                    <Checkbox
                                        className="checkbox-update-role-child"
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
                    onClick={() => props.handleClosePageUpdate()}
                >
                    <p>Hủy bỏ</p>
                </button>
                <button className="btn-update-role" onClick={handleUpdateRole}>
                    <p>Cập nhật</p>
                </button>
            </div>
        </div>
    );
}

export default UpdateRole;