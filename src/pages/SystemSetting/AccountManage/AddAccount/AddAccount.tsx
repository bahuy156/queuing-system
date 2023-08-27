import "./AddAccount.scss"
import { Input } from "antd";
import { Select } from "antd";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { AppDispatch } from "../../../../redux/store";
import { useDispatch } from "react-redux";
import { addAccount } from "../../../../redux/actions/accountActions";
import { addDiary } from "../../../../redux/actions/diaryActoins";

interface PropsChild {
    handleClosePageAdd: any
}

function AddAccount(props: PropsChild) {
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

    const time = new Date()
    const day = time.getDate()
    const day2 = Number(day) < 10 ? `0${day}` : day
    const month = time.getMonth() + 1
    const month2 = Number(month) < 10 ? `0${month}` : month
    const year = time.getFullYear()
    const hours = time.getHours()
    const hours2 = Number(hours) < 10 ? `0${hours}` : hours
    const minute = time.getMinutes()
    const minute2 = Number(minute) < 10 ? `0${minute}` : minute
    const nowDay = `${hours2}:${minute2} - ${day2}/${month2}/${year}`

    // handle get current account
    const getAccountStorage = () => {
        const accountStorage = localStorage.getItem("currentAccount")

        if (accountStorage) {
            return JSON.parse(accountStorage)
        } else {
            return null
        }
    }
    const currAccount = getAccountStorage();

    // handle add account
    const handleAddAccount = async () => {
        if (valueName && valueSdt && valueEmail && valueRole) {
            const newAccount = {
                username: valueName,
                sdt: valueSdt,
                email: valueEmail,
                loginname: valueLoginName,
                password: valueNewPass,
                role: valueRole,
                status: valueStatus,
                image: "",
            }

            const operation = `thêm tài khoản với tên đăng nhập ${valueLoginName}`
            const newDiary = {
                loginname: currAccount.loginname,
                time: nowDay,
                ip: "192.168.1.1",
                operation: `Thực hiện ${operation}`,
            }

            await dispatch(addAccount(newAccount))
            props.handleClosePageAdd();
            dispatch(addDiary(newDiary));
        } else {
            alert("Vui lòng nhập đầy đủ thông tin")
        }
    }

    // handle toggle pass
    const togglePassword = (setFunction: (value: string) => void, currentState: string) => {
        setFunction(currentState === "password" ? "text" : "password");
    };

    return (
        <div className="wrapper-add-account">
            <h2 className="title-add-account">Quản lý tài khoản</h2>

            <div className="content-add-account">
                <h3 className="title-content-add-account">Thông tin tài khoản</h3>

                <div className="content-main-add-account">
                    <div className="content-main-add-account-child1">
                        <div className="content-main-add-account-child">
                            <div className="name-content-main-add-account-child">
                                <p>Họ tên</p>
                                <span>*</span>
                            </div>
                            <Input
                                placeholder="Nhập họ tên"
                                onChange={(e) => setValueName(e.target.value)}
                            />
                        </div>
                        <div className="content-main-add-account-child">
                            <div className="name-content-main-add-account-child">
                                <p>Số điện thoại</p>
                                <span>*</span>
                            </div>
                            <Input
                                placeholder="Nhập số điện thoại"
                                onChange={(e) => setValueSdt(e.target.value)}
                            />
                        </div>
                        <div className="content-main-add-account-child">
                            <div className="name-content-main-add-account-child">
                                <p>Email</p>
                                <span>*</span>
                            </div>
                            <Input
                                placeholder="Nhập email"
                                onChange={(e) => setValueEmail(e.target.value)}
                            />
                        </div>
                        <div className="content-main-add-account-child">
                            <div className="name-content-main-add-account-child">
                                <p>Vai trò</p>
                                <span>*</span>
                            </div>
                            <Select
                                className="add-account-child-selected"
                                placeholder="Chọn vai trò"
                                suffixIcon={
                                    <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                                }
                                style={{ width: 572, height: 32 }}
                                onChange={(value: string) => setValueRole(value)}
                                options={[
                                    { value: "Kế toán", label: "Kế toán" },
                                    { value: "Quản lý", label: "Quản lý" },
                                    { value: "Admin", label: "Admin" },
                                ]}
                            />
                        </div>
                    </div>

                    <div className="content-main-add-account-child2">
                        <div className="content-main-add-account-child">
                            <div className="name-content-main-add-account-child">
                                <p>Tên đăng nhập</p>
                                <span>*</span>
                            </div>
                            <Input
                                placeholder="Nhập tài khoản"
                                onChange={(e) => setValueLoginNAme(e.target.value)}
                            />
                        </div>
                        <div className="content-main-add-account-child">
                            <div className="name-content-main-add-account-child">
                                <p>Mật khẩu</p>
                                <span>*</span>
                            </div>
                            <Input
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
                        <div className="content-main-add-account-child">
                            <div className="name-content-main-add-account-child">
                                <p>Nhập lại mật khẩu</p>
                                <span>*</span>
                            </div>
                            <Input
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
                        <div className="content-main-add-account-child">
                            <div className="name-content-main-add-account-child">
                                <p>Tình trạng</p>
                                <span>*</span>
                            </div>
                            <Select
                                className="add-account-child-selected"
                                placeholder="Tình trạng"
                                suffixIcon={
                                    <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                                }
                                style={{ width: 572, height: 32 }}
                                onChange={(value: string) => setValueStatus(value)}
                                options={[
                                    { value: "Hoạt động", label: "Hoạt động" },
                                    { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
                                ]}
                            />
                        </div>
                    </div>
                </div>

                <div className="footer-content-add-account">
                    <span>*</span>
                    <p>Là trường thông tin bắt buộc</p>
                </div>
            </div>

            <div className="button-account">
                <button
                    className="btn-cancel-account"
                    onClick={() => props.handleClosePageAdd()}
                >
                    <p>Hủy bỏ</p>
                </button>
                <button
                    className="btn-add-account"
                    onClick={handleAddAccount}
                >
                    <p>Thêm</p>
                </button>
            </div>
        </div>
    );
}

export default AddAccount;