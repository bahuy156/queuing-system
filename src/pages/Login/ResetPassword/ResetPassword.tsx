import "./ResetPassword.scss";
import LogoLogin from "../../../images/Logo-alta2.png";
import LogoLoginRight2 from "../../../images/logo-login2.png";
import { BsEyeSlash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react";

interface PropsChild {
    handleForgetPass: any;
}

function ResetPassword(props: PropsChild) {
    const [confirmRsPass, setConfirmRsPass] = useState<boolean>(false);
    const [showPass, setShowPass] = useState<string>("password");
    const [showPass2, setShowPass2] = useState<string>("password");
    const [valueNewPass, setValueNewPass] = useState<string>("");
    const [valueNewPass2, setValueNewPass2] = useState<string>("");

    const handleConfirmResetPass = () => {
        setConfirmRsPass(true);
    };

    const togglePassword = (setFunction: (value: string) => void, currentState: string) => {
        setFunction(currentState === "password" ? "text" : "password");
    };

    return (
        <div className="wrapper-reset-pass">
            <div className="reset-left-park">
                <div className="reset-left-park-child">
                    <img className="logo-reset-left-park" src={LogoLogin} alt="#" />
                    {!confirmRsPass ? (
                        <div className="content-main-reset-left-park">
                            <div className="main-reset-left-park">
                                <p className="title-main-reset"> Đặt lại mật khẩu</p>
                                <p className="desc-main-reset">
                                    Vui lòng nhập email để đặt lại mật khẩu của bạn *
                                </p>
                                <div className="reset-password-child">
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="btn-reset">
                                <button
                                    className="btn-reset-cancel"
                                    onClick={props.handleForgetPass}
                                >
                                    Hủy
                                </button>
                                <button
                                    className="btn-reset-continue"
                                    onClick={handleConfirmResetPass}
                                >
                                    Tiếp tục
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="content-main-confirm-reset-pass">
                            <p className="title-main-confirm-reset">Đặt lại mật khẩu mới</p>
                            <div className="main-confirm-reset">
                                <div className="main-confirm-left-park-child">
                                    <div className="top-confirm-child">
                                        <p>Mật khẩu</p>
                                        <span>*</span>
                                    </div>
                                    <div className="top-confirm-password-child">
                                        <input
                                            type={showPass}
                                            onChange={(e) => setValueNewPass(e.target.value)}
                                        />
                                        {showPass === "password" ? (
                                            <BsEyeSlash
                                                className={
                                                    valueNewPass.length
                                                        ? "icon-password-active2"
                                                        : "icon-password2"
                                                }
                                                size={20}
                                                onClick={() => togglePassword(setShowPass, showPass)}
                                            />
                                        ) : (
                                            <AiOutlineEye
                                                className={
                                                    valueNewPass.length
                                                        ? "icon-password-active2"
                                                        : "icon-password2"
                                                }
                                                size={20}
                                                onClick={() => togglePassword(setShowPass, showPass)}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="main-confirm-left-park-child">
                                    <div className="top-confirm-child">
                                        <p>Nhập lại mật khẩu</p>
                                        <span>*</span>
                                    </div>
                                    <div className="top-confirm-password-child">
                                        <input
                                            type={showPass2}
                                            onChange={(e) => setValueNewPass2(e.target.value)}
                                        />
                                        {showPass2 === "password" ? (
                                            <BsEyeSlash
                                                className={
                                                    valueNewPass2.length
                                                        ? "icon-password-active2"
                                                        : "icon-password2"
                                                }
                                                size={20}
                                                onClick={() => togglePassword(setShowPass2, showPass2)}
                                            />
                                        ) : (
                                            <AiOutlineEye
                                                className={
                                                    valueNewPass2.length
                                                        ? "icon-password-active2"
                                                        : "icon-password2"
                                                }
                                                size={20}
                                                onClick={() => togglePassword(setShowPass2, showPass2)}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button className="btn-confirm" onClick={props.handleForgetPass}>
                                Xác nhận
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="reset-right-park">
                <img className="logo-reset-right-park" src={LogoLoginRight2} alt="#" />
            </div>
        </div>
    );
}

export default ResetPassword;