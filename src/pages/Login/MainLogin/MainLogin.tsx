/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/exhaustive-deps */
import "./MainLogin.scss";
import LogoLogin from "../../../images/Logo-alta2.png";
import LogoLoginRight from "../../../images/logo-login.png";
import { BsEyeSlash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { verifyAccount } from "../../../redux/actions/actions";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchAccount } from "../../../redux/actions/accountActions";

interface PropsChild {
    handleForgetPass: any;
}

function MainLogin(props: PropsChild) {
    const [showPass, setShowPass] = useState<string>("password");
    const [valueNameLogin, setValueNameLogin] = useState<string>("");
    const [valuePassword, setValuePassWord] = useState<string>("");
    const [checkLogin, setChecklogin] = useState<boolean>(true);
    const [checkLoginValue, setCheckloginValue] = useState<boolean>();

    const handleShowPass = () => {
        setShowPass("text");
    };

    const handleHidePass = () => {
        setShowPass("password");
    };

    // handle check login
    const dispatch: AppDispatch = useDispatch();
    const accountInfo = useSelector((state: RootState) => state.account.datas);

    const navaigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAccount());
    }, []);

    const handleCheckLogin = () => {
        accountInfo.forEach((account) => {
            if (
                valueNameLogin === account.loginname &&
                valuePassword === account.password
            ) {
                setChecklogin(true);
                navaigate("/home");
            } else {
                setChecklogin(false);
            }

            if (valueNameLogin === "" && valuePassword === "") {
                setCheckloginValue(true)
            } else if (valueNameLogin !== account.loginname ||
                valuePassword !== account.password
            ) {
                setCheckloginValue(false)
            }
        });
    };

    return (
        <div className="wrapper-login">
            <div className="login-left-park">
                <div className="login-left-park-child">
                    <img className="logo-login-left-park" src={LogoLogin} alt="#" />
                    <div className="main-login-left-park">
                        <div
                            className={
                                checkLogin
                                    ? "main-login-left-park-child"
                                    : "main-login-left-park-child-error"
                            }
                        >
                            <div className="top-login-child">
                                <p>Tên đăng nhập</p>
                                <span>*</span>
                            </div>
                            <input
                                value={valueNameLogin}
                                type="text"
                                onChange={(e) => {
                                    setValueNameLogin(e.target.value);
                                }}
                            />
                        </div>
                        <div
                            className={
                                checkLogin
                                    ? "main-login-left-park-child"
                                    : "main-login-left-park-child-error"
                            }
                        >
                            <div className="top-login-child">
                                <p>Mật khẩu</p>
                                <span>*</span>
                            </div>
                            <div className="top-login-password-child">
                                <input
                                    value={valuePassword}
                                    type={showPass}
                                    onChange={(e) => setValuePassWord(e.target.value)}
                                />
                                {showPass === "password" ? (
                                    <BsEyeSlash
                                        className={
                                            valuePassword.length
                                                ? "icon-password-active"
                                                : "icon-password"
                                        }
                                        size={20}
                                        onClick={handleShowPass}
                                    />
                                ) : (
                                    <AiOutlineEye
                                        className={
                                            valuePassword.length
                                                ? "icon-password-active"
                                                : "icon-password"
                                        }
                                        size={20}
                                        onClick={handleHidePass}
                                    />
                                )}
                            </div>
                        </div>
                        {!checkLogin && (
                            checkLoginValue ? (
                                <div className="type-error">
                                    <span>Vui lòng nhập tài khoản và mật khẩu</span>
                                </div>
                            ) : (
                                <div className="type-error">
                                    <span>Sai mật khẩu hoặc tên đăng nhập</span>
                                </div>
                            )
                        )}
                        <div className="title-forget-password">
                            <span onClick={props.handleForgetPass}>Quên mật khẩu ?</span>
                        </div>
                    </div>
                    <div className="btn-login" onClick={handleCheckLogin}>
                        Đăng nhập
                    </div>
                </div>
            </div>

            <div className="login-right-park">
                <img className="logo-login-right-park" src={LogoLoginRight} alt="#" />
                <div className="title-login-right-park">
                    <p>Hệ thống</p>
                    <span>Quản lý xếp hàng</span>
                </div>
            </div>
        </div>
    );
}

export default MainLogin;