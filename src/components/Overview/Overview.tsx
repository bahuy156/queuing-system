import "./Overview.scss"
import { BiSolidBell } from "react-icons/bi"
import type { Dayjs } from 'dayjs';
import { Calendar } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import { FiMonitor } from "react-icons/fi"
import { BsDot } from "react-icons/bs"
import { TbMessageCircleQuestion } from "react-icons/tb"
import { PiStack } from "react-icons/pi"
import { Link } from "react-router-dom"
import { publicRoutes } from "../../routes"
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react"
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProvideNum } from "../../redux/actions/provideNumActions";
import { fetchDevices } from "../../redux/actions/deviceActions";
import { fetchServices } from "../../redux/actions/serviceActions";
import defaultLogo from "../../images/newuser.png"

function Overview() {
    const dispatch: AppDispatch = useDispatch();
    const dataProvideNum = useSelector((state: RootState) => state.provideNum.datas)
    const dataDevice = useSelector((state: RootState) => state.device.datas)
    const dataServices = useSelector((state: RootState) => state.service.datas)

    const [activeNoti, setActiveNoti] = useState<boolean>(false)

    // get data into the chart
    const granted = dataProvideNum.length
    const used = dataProvideNum.filter((item) => item.status === "Đã sử dụng").length
    const waiting = dataProvideNum.filter((item) => item.status === "Đang chờ").length
    const skip = dataProvideNum.filter((item) => item.status === "Bỏ qua").length

    const totalDevice = dataDevice.length
    const isActiveDevice = dataDevice.filter((item) => item.status === "Hoạt động").length
    const shutDownDevice = dataDevice.filter((item) => item.status === "Ngưng hoạt động").length

    const totalServices = dataServices.length
    const isActiveServices = dataServices.filter((item) => item.status === "Hoạt động").length
    const shutDownServices = dataServices.filter((item) => item.status === "Ngưng hoạt động").length

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

    // handle logic calendar
    const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    // fetch data
    useEffect(() => {
        dispatch(fetchProvideNum())
        dispatch(fetchDevices())
        dispatch(fetchServices())
    }, [dispatch])

    return (
        <div className="wrapper-overview">
            <div className="header-overview">
                <div className="wrapper-icon-notification-overview">
                    <div
                        className={!activeNoti ? "icon-notification-overview" : "icon-notification-overview-active"}
                        onClick={() => setActiveNoti(!activeNoti)}
                    >
                        <BiSolidBell className={!activeNoti ? "icon-notification2" : "icon-notification2-active"} />
                    </div>
                    <div className={!activeNoti ? "main-notification-overview" : "main-notification-overview-active"}>
                        <Notification />
                    </div>
                </div>
                <Link to={publicRoutes[6].path} className="info-notification-overview">
                    <img src={currAccount.image === "" ? defaultLogo : currAccount.image} alt="" />
                    <div className="info-notification-overview-child">
                        <span>Xin chào</span>
                        <p>{currAccount.username}</p>
                    </div>
                </Link>
            </div>

            <div className="main-overview">
                <h2 className="title-main-overview">Tổng quan</h2>
                <div className="content-main-overview">
                    <div className="content-main-overview-child">
                        <div className="main-overview-child1">
                            <div className="child1-statistical1">
                                <p>90%</p>
                            </div>
                            <div className="child1-info">
                                <p>{totalDevice}</p>
                                <div className="child1-info-name1">
                                    <FiMonitor size={14} style={{ color: "#FF7506" }} />
                                    <span>Thiết bị</span>
                                </div>
                            </div>
                        </div>
                        <div className="main-overview-child2">
                            <div className="child2-content1">
                                <div className="child2-content-status1">
                                    <BsDot style={{ color: "#FFD130" }} />
                                    <p>Đang hoạt động</p>
                                </div>
                                <span>{isActiveDevice}</span>
                            </div>
                            <div className="child2-content1">
                                <div className="child2-content-status1">
                                    <BsDot style={{ color: "#7E7D88" }} />
                                    <p>Ngưng hoạt động</p>
                                </div>
                                <span>{shutDownDevice}</span>
                            </div>
                        </div>
                    </div>
                    <div className="content-main-overview-child">
                        <div className="main-overview-child1">
                            <div className="child1-statistical2">
                                <p>76%</p>
                            </div>
                            <div className="child1-info">
                                <p>{totalServices}</p>
                                <div className="child1-info-name2">
                                    <TbMessageCircleQuestion size={14} style={{ color: "#4277FF" }} />
                                    <span>Dịch vụ</span>
                                </div>
                            </div>
                        </div>
                        <div className="main-overview-child2">
                            <div className="child2-content2">
                                <div className="child2-content-status2">
                                    <BsDot style={{ color: "#FFD130" }} />
                                    <p>Đang hoạt động</p>
                                </div>
                                <span>{isActiveServices}</span>
                            </div>
                            <div className="child2-content2">
                                <div className="child2-content-status2">
                                    <BsDot style={{ color: "#7E7D88" }} />
                                    <p>Ngưng hoạt động</p>
                                </div>
                                <span>{shutDownServices}</span>
                            </div>
                        </div>
                    </div>
                    <div className="content-main-overview-child">
                        <div className="main-overview-child1">
                            <div className="child1-statistical3">
                                <p>86%</p>
                            </div>
                            <div className="child1-info">
                                <p>{granted}</p>
                                <div className="child1-info-name3">
                                    <PiStack size={14} style={{ color: "#35C75A" }} />
                                    <span>Cấp số</span>
                                </div>
                            </div>
                        </div>
                        <div className="main-overview-child2">
                            <div className="child2-content3">
                                <div className="child2-content-status3">
                                    <BsDot style={{ color: "#FFD130" }} />
                                    <p>Đang sử dụng</p>
                                </div>
                                <span>{used}</span>
                            </div>
                            <div className="child2-content3">
                                <div className="child2-content-status3">
                                    <BsDot style={{ color: "#7E7D88" }} />
                                    <p>Đang chờ</p>
                                </div>
                                <span>{waiting}</span>
                            </div>
                            <div className="child2-content3">
                                <div className="child2-content-status3">
                                    <BsDot style={{ color: "#7E7D88" }} />
                                    <p>Bỏ qua</p>
                                </div>
                                <span>{skip}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="calendar-main-overview">
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
            </div>
        </div>
    );
}

export default Overview;