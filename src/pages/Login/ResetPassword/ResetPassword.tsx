import "./ResetPassword.scss"
import LogoLogin from "../../../images/Logo-alta2.png"
import LogoLoginRight2 from "../../../images/logo-login2.png"
import { BsEyeSlash } from "react-icons/bs"
import { AiOutlineEye } from "react-icons/ai"
import { useState } from "react"

interface PropsChild {
    handleForgetPass: any
}

function ResetPassword(props: PropsChild) {
    const [confirmRsPass, setConfirmRsPass] = useState<boolean>(false)
    const [showPass, setShowPass] = useState<string>('password')

    const handleShowPass = () => {
        setShowPass('text')
    }

    const handleHidePass = () => {
        setShowPass('password')
    }

    const handleConfirmResetPass = () => {
        setConfirmRsPass(true)
    }

    return (
        <div className="wrapper-reset-pass">
            <div className="reset-left-park">
                <div className="reset-left-park-child">
                    <img className="logo-reset-left-park" src={LogoLogin} alt="#" />
                    {!confirmRsPass ? (
                        <div className="content-main-reset-left-park">
                            <div className="main-reset-left-park">
                                <p className="title-main-reset"> Đặt lại mật khẩu</p>
                                <p className="desc-main-reset">Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
                                <div className="reset-password-child">
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="btn-reset">
                                <button className="btn-reset-cancel" onClick={props.handleForgetPass} >Hủy</button>
                                <button className="btn-reset-continue" onClick={handleConfirmResetPass} >Tiếp tục</button>
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
                                        <input type={showPass} />
                                        {showPass === "password"
                                            ? <BsEyeSlash className="icon-password" size={20} onClick={handleShowPass} />
                                            : <AiOutlineEye className="icon-password" size={20} onClick={handleHidePass} />
                                        }
                                    </div>
                                </div>
                                <div className="main-confirm-left-park-child">
                                    <div className="top-confirm-child">
                                        <p>Nhập lại mật khẩu</p>
                                        <span>*</span>
                                    </div>
                                    <div className="top-confirm-password-child">
                                        <input type={showPass} />
                                        {showPass === "password"
                                            ? <BsEyeSlash className="icon-password" size={20} onClick={handleShowPass} />
                                            : <AiOutlineEye className="icon-password" size={20} onClick={handleHidePass} />
                                        }
                                    </div>
                                </div>
                            </div>
                            <button className="btn-confirm" onClick={props.handleForgetPass} >Xác nhận</button>
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