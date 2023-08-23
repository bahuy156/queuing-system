import "./UpdateAccount.scss"
import { Input } from "antd";
import { Select } from "antd";
import { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { AppDispatch } from "../../../../redux/store";
import { useDispatch } from "react-redux";
import { updateAccount } from "../../../../redux/actions/accountActions";

interface PropsChild {
    handleClosePageUpdate: any
    selectedPage: any
}

function UpdateAccount(props: PropsChild) {
    const dispatch: AppDispatch = useDispatch()

    const [showPass, setShowPass] = useState<string>("password");
    const [showPass2, setShowPass2] = useState<string>("password");
    const [valueNewPass, setValueNewPass] = useState<string>("");
    const [valueNewPass2, setValueNewPass2] = useState<string>("");
    const [valueName, setValueName] = useState<string>("");
    const [valueSdt, setValueSdt] = useState<string>("");
    const [valueEmail, setValueEmail] = useState<string>("");
    const [valueRole, setValueRole] = useState<string>("");
    const [valueLoginName, setValueLoginNAme] = useState<string>("");
    const [valueStatus, setValueStatus] = useState<string>("");

    const curName = props.selectedPage.username;
    const curSdt = props.selectedPage.sdt;
    const curEmail = props.selectedPage.email;
    const curRole = props.selectedPage.role;
    const curLoginname = props.selectedPage.loginname;
    const curPass = props.selectedPage.password
    const curPass2 = props.selectedPage.password
    const curStatus = props.selectedPage.status;
    const id = props.selectedPage.id

    useEffect(() => {
        setValueName(curName);
        setValueSdt(curSdt);
        setValueEmail(curEmail);
        setValueRole(curRole);
        setValueLoginNAme(curLoginname);
        setValueNewPass(curPass);
        setValueNewPass2(curPass2);
        setValueStatus(curStatus);
    }, [curName, curSdt, curEmail, curRole, curLoginname, curPass, curPass2, curStatus])

    // handle update account
    const handleUpdateAccount = async () => {
        if (id) {
            const accountUpdate = {
                id: id,
                username: valueName,
                sdt: valueSdt,
                email: valueEmail,
                loginname: valueLoginName,
                password: valueNewPass,
                role: valueRole,
                status: valueStatus,
            }

            await dispatch(updateAccount(accountUpdate))
            props.handleClosePageUpdate()
        } else {
            console.log("Không tìm thấy id cần cập nhật")
        }
    }

    // handle toggle pass    
    const togglePassword = (setFunction: (value: string) => void, currentState: string) => {
        setFunction(currentState === "password" ? "text" : "password");
    };

    return (
        <div className="wrapper-update-account">
            <h2 className="title-update-account">Quản lý tài khoản</h2>

            <div className="content-update-account">
                <h3 className="title-content-update-account">Thông tin tài khoản</h3>

                <div className="content-main-update-account">
                    <div className="content-main-update-account-child1">
                        <div className="content-main-update-account-child">
                            <div className="name-content-main-update-account-child">
                                <p>Họ tên</p>
                                <span>*</span>
                            </div>
                            <Input
                                value={valueName}
                                placeholder="Nhập họ tên"
                                onChange={(e) => setValueName(e.target.value)}
                            />
                        </div>
                        <div className="content-main-update-account-child">
                            <div className="name-content-main-update-account-child">
                                <p>Số điện thoại</p>
                                <span>*</span>
                            </div>
                            <Input
                                value={valueSdt}
                                placeholder="Nhập số điện thoại"
                                onChange={(e) => setValueSdt(e.target.value)}
                            />
                        </div>
                        <div className="content-main-update-account-child">
                            <div className="name-content-main-update-account-child">
                                <p>Email</p>
                                <span>*</span>
                            </div>
                            <Input
                                value={valueEmail}
                                placeholder="Nhập email"
                                onChange={(e) => setValueEmail(e.target.value)}
                            />
                        </div>
                        <div className="content-main-update-account-child">
                            <div className="name-content-main-update-account-child">
                                <p>Vai trò</p>
                                <span>*</span>
                            </div>
                            <Select
                                value={valueRole}
                                className="update-account-child-selected"
                                placeholder="Chọn vai trò"
                                suffixIcon={
                                    <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                                }
                                style={{ width: 572, height: 32 }}
                                onChange={(value) => setValueRole(value)}
                                options={[
                                    { value: "Kế toán", label: "Kế toán" },
                                    { value: "Quản lý", label: "Quản lý" },
                                    { value: "Admin", label: "Admin" },
                                ]}
                            />
                        </div>
                    </div>

                    <div className="content-main-update-account-child2">
                        <div className="content-main-update-account-child">
                            <div className="name-content-main-update-account-child">
                                <p>Tên đăng nhập</p>
                                <span>*</span>
                            </div>
                            <Input
                                value={valueLoginName}
                                placeholder="Nhập tài khoản"
                                onChange={(e) => setValueLoginNAme(e.target.value)}
                            />
                        </div>
                        <div className="content-main-update-account-child">
                            <div className="name-content-main-update-account-child">
                                <p>Mật khẩu</p>
                                <span>*</span>
                            </div>
                            <Input
                                value={valueNewPass}
                                type={showPass}
                                placeholder="Nhập mật khẩu"
                                onChange={(e) => setValueNewPass(e.target.value)}
                            />
                            {showPass === "password" ? (
                                <BsEyeSlash
                                    className={
                                        valueNewPass.length
                                            ? "icon-password-active3"
                                            : "icon-password3"
                                    }
                                    size={20}
                                    onClick={() => togglePassword(setShowPass, showPass)}
                                />
                            ) : (
                                <AiOutlineEye
                                    className={
                                        valueNewPass.length
                                            ? "icon-password-active3"
                                            : "icon-password3"
                                    }
                                    size={20}
                                    onClick={() => togglePassword(setShowPass, showPass)}
                                />
                            )}
                        </div>
                        <div className="content-main-update-account-child">
                            <div className="name-content-main-update-account-child">
                                <p>Nhập lại mật khẩu</p>
                                <span>*</span>
                            </div>
                            <Input
                                value={valueNewPass2}
                                type={showPass2}
                                placeholder="Nhập mật khẩu"
                                onChange={(e) => setValueNewPass2(e.target.value)}
                            />
                            {showPass2 === "password" ? (
                                <BsEyeSlash
                                    className={
                                        valueNewPass2.length
                                            ? "icon-password-active3"
                                            : "icon-password3"
                                    }
                                    size={20}
                                    onClick={() => togglePassword(setShowPass2, showPass2)}
                                />
                            ) : (
                                <AiOutlineEye
                                    className={
                                        valueNewPass2.length
                                            ? "icon-password-active3"
                                            : "icon-password3"
                                    }
                                    size={20}
                                    onClick={() => togglePassword(setShowPass2, showPass2)}
                                />
                            )}
                        </div>
                        <div className="content-main-update-account-child">
                            <div className="name-content-main-update-account-child">
                                <p>Tình trạng</p>
                                <span>*</span>
                            </div>
                            <Select
                                value={valueStatus}
                                className="update-account-child-selected"
                                placeholder="Tình trạng"
                                suffixIcon={
                                    <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                                }
                                style={{ width: 572, height: 32 }}
                                onChange={(value) => setValueStatus(value)}
                                options={[
                                    { value: "Hoạt động", label: "Hoạt động" },
                                    { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
                                ]}
                            />
                        </div>
                    </div>
                </div>

                <div className="footer-content-update-account">
                    <span>*</span>
                    <p>Là trường thông tin bắt buộc</p>
                </div>
            </div>

            <div className="button-account">
                <button
                    className="btn-cancel-account-update"
                    onClick={() => props.handleClosePageUpdate()}
                >
                    <p>Hủy bỏ</p>
                </button>
                <button
                    className="btn-update-account-update"
                    onClick={handleUpdateAccount}
                >
                    <p>Cập nhật</p>
                </button>
            </div>
        </div>
    );
}

export default UpdateAccount;