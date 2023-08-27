import "./User.scss"
import Header from "../../components/Header/Header";
import { AiOutlineCamera } from "react-icons/ai"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAccount } from "../../redux/actions/accountActions";
import { AppDispatch } from "../../redux/store";
import NavTopUserInfo from "../../components/Header/NavTopUserInfo/NavTopUserInfo";
import defaultLogo from "../../images/newuser.png"

function User() {
    const dispatch: AppDispatch = useDispatch();

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

    // fetch data
    useEffect(() => {
        dispatch(fetchAccount());
    }, [dispatch]);

    return (
        <div className="wrapper-personal-info">
            <Header headName={<NavTopUserInfo />} />

            <div className="main-personal-info">
                <div className="content-main-personal-info">
                    <div className="main-info-left-park">
                        <div className="main-info-left-park-child">
                            <img className="logo-info" src={currAccount.image === "" ? defaultLogo : currAccount.image} alt="#" />
                            <div className="icon-camera-info">
                                <AiOutlineCamera size={30} style={{ color: "#fff" }} />
                            </div>
                        </div>
                        <h3 className="name-info">{currAccount.username}</h3>
                    </div>

                    <div className="main-info-right-park">
                        <div className="main-info-right-park-child">
                            <div className="content-main-info-right-park">
                                <p>Tên người dùng</p>
                                <input value={currAccount.username} type="text" />
                            </div>
                            <div className="content-main-info-right-park">
                                <p>Số điện thoại</p>
                                <input value={currAccount.sdt} type="text" />
                            </div>
                            <div className="content-main-info-right-park">
                                <p>Email:</p>
                                <input value={currAccount.email} type="text" />
                            </div>
                        </div>
                        <div className="main-info-right-park-child">
                            <div className="content-main-info-right-park">
                                <p>Tên đăng nhập</p>
                                <input value={currAccount.loginname} type="text" />
                            </div>
                            <div className="content-main-info-right-park">
                                <p>Mật khẩu</p>
                                <input value={currAccount.password} type="text" />
                            </div>
                            <div className="content-main-info-right-park">
                                <p>Vai trò:</p>
                                <input value={currAccount.role} type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;