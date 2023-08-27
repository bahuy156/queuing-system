import "./Notification.scss"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { useEffect } from "react"
import { fetchNoti } from "../../redux/actions/notificationActions"

function Notification() {
    const dispatch: AppDispatch = useDispatch()
    const dataNoti = useSelector((state: RootState) => state.notification.datas)

    // fetch data
    useEffect(() => {
        dispatch(fetchNoti())
    }, [dispatch])

    return (
        <div className="wrapper-notification">
            <div className="title-notification">
                <p>Thông báo</p>
            </div>
            <div className="content-notification">
                {dataNoti.map((noti, index) => (
                    <div key={index} className="content-notification-child">
                        <p className="content-notification-name">Người dùng: {noti.username}</p>
                        <p className="content-notification-time">Thời gian nhận số: {noti.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notification;