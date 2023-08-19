import "./UpdateAccount.scss"
import { Input } from "antd";
import { Select } from "antd";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

interface PropsChild {
    handleClosePageUpdate: any
}

function UpdateAccount(props: PropsChild) {
    const [showPass, setShowPass] = useState<string>("password");
    const [showPass2, setShowPass2] = useState<string>("password");
    const [valueNewPass, setValueNewPass] = useState<string>("");
    const [valueNewPass2, setValueNewPass2] = useState<string>("");

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
                                placeholder="Nhập họ tên"
                            />
                        </div>
                        <div className="content-main-update-account-child">
                            <div className="name-content-main-update-account-child">
                                <p>Số điện thoại</p>
                                <span>*</span>
                            </div>
                            <Input
                                placeholder="Nhập số điện thoại"
                            />
                        </div>
                        <div className="content-main-update-account-child">
                            <div className="name-content-main-update-account-child">
                                <p>Email</p>
                                <span>*</span>
                            </div>
                            <Input
                                placeholder="Nhập email"
                            />
                        </div>
                        <div className="content-main-update-account-child">
                            <div className="name-content-main-update-account-child">
                                <p>Vai trò</p>
                                <span>*</span>
                            </div>
                            <Select
                                className="update-account-child-selected"
                                placeholder="Chọn vai trò"
                                suffixIcon={
                                    <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                                }
                                style={{ width: 572, height: 32 }}
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
                                placeholder="Nhập tài khoản"
                            />
                        </div>
                        <div className="content-main-update-account-child">
                            <div className="name-content-main-update-account-child">
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
                        <div className="content-main-update-account-child">
                            <div className="name-content-main-update-account-child">
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
                        <div className="content-main-update-account-child">
                            <div className="name-content-main-update-account-child">
                                <p>Tình trạng</p>
                                <span>*</span>
                            </div>
                            <Select
                                className="update-account-child-selected"
                                placeholder="Tình trạng"
                                suffixIcon={
                                    <AiFillCaretDown size={20} style={{ color: "#FF7506" }} />
                                }
                                style={{ width: 572, height: 32 }}
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
                    onClick={() => props.handleClosePageUpdate()}
                >
                    <p>Cập nhật</p>
                </button>
            </div>
        </div>
    );
}

export default UpdateAccount;