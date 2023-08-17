import "./User.scss"
import Header from "../../components/Header/Header";
import bahuyLogo from "../../images/bahuy.png"
import { AiOutlineCamera } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useEffect } from "react";
import { fetchAccount } from "../../redux/actions/actions";

function User() {
    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
    const accountInfo = useSelector((state: RootState) => state.account.datas);

    useEffect(() => {
        dispatch(fetchAccount());
    }, [dispatch]);

    return (
        <div className="wrapper-personal-info">
            <Header headName="Thông tin cá nhân" />

            <div className="main-personal-info">
                <div className="content-main-personal-info">
                    <div className="main-info-left-park">
                        <div className="main-info-left-park-child">
                            <img className="logo-info" src={bahuyLogo} alt="#" />
                            <div className="icon-camera-info">
                                <AiOutlineCamera size={30} style={{ color: "#fff" }} />
                            </div>
                        </div>
                        <h3 className="name-info">Sa Mai Bá Huy</h3>
                    </div>

                    <div className="main-info-right-park">
                        <div className="main-info-right-park-child">
                            <div className="content-main-info-right-park">
                                <p>Tên người dùng</p>
                                <input value={accountInfo[0]?.username} type="text" />
                            </div>
                            <div className="content-main-info-right-park">
                                <p>Số điện thoại</p>
                                <input value={accountInfo[0]?.sdt} type="text" />
                            </div>
                            <div className="content-main-info-right-park">
                                <p>Email:</p>
                                <input value={accountInfo[0]?.email} type="text" />
                            </div>
                        </div>
                        <div className="main-info-right-park-child">
                            <div className="content-main-info-right-park">
                                <p>Tên đăng nhập</p>
                                <input value={accountInfo[0]?.loginname} type="text" />
                            </div>
                            <div className="content-main-info-right-park">
                                <p>Mật khẩu</p>
                                <input value={accountInfo[0]?.password} type="text" />
                            </div>
                            <div className="content-main-info-right-park">
                                <p>Vai trò:</p>
                                <input value={accountInfo[0]?.role} type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;