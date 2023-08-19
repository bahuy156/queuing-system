import "./Overview.scss"
import { BiSolidBell } from "react-icons/bi"
import bahuyLogo from "../../images/bahuy.png"
import type { Dayjs } from 'dayjs';
import { Calendar, theme } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import { FiMonitor } from "react-icons/fi"
import { BsDot } from "react-icons/bs"
import { TbMessageCircleQuestion } from "react-icons/tb"
import { PiStack } from "react-icons/pi"
import { Link } from "react-router-dom"
import { publicRoutes } from "../../routes"

function Overview() {
    const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const { token } = theme.useToken();

    const wrapperStyleCalendar: React.CSSProperties = {
        width: 334,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    return (
        <div className="wrapper-overview">
            <div className="header-overview">
                <div className="icon-notification-overview">
                    <BiSolidBell className="icon-notification" />
                </div>
                <Link to={publicRoutes[6].path} className="info-notification-overview">
                    <img src={bahuyLogo} alt="" />
                    <div className="info-notification-overview-child">
                        <span>Xin chào</span>
                        <p>Sa Mai Bá Huy</p>
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
                                <p>4.221</p>
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
                                <span>3.799</span>
                            </div>
                            <div className="child2-content1">
                                <div className="child2-content-status1">
                                    <BsDot style={{ color: "#7E7D88" }} />
                                    <p>Ngưng hoạt động</p>
                                </div>
                                <span>422</span>
                            </div>
                        </div>
                    </div>
                    <div className="content-main-overview-child">
                        <div className="main-overview-child1">
                            <div className="child1-statistical2">
                                <p>76%</p>
                            </div>
                            <div className="child1-info">
                                <p>276</p>
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
                                <span>210</span>
                            </div>
                            <div className="child2-content2">
                                <div className="child2-content-status2">
                                    <BsDot style={{ color: "#7E7D88" }} />
                                    <p>Ngưng hoạt động</p>
                                </div>
                                <span>66</span>
                            </div>
                        </div>
                    </div>
                    <div className="content-main-overview-child">
                        <div className="main-overview-child1">
                            <div className="child1-statistical3">
                                <p>86%</p>
                            </div>
                            <div className="child1-info">
                                <p>4.221</p>
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
                                <span>3.721</span>
                            </div>
                            <div className="child2-content3">
                                <div className="child2-content-status3">
                                    <BsDot style={{ color: "#7E7D88" }} />
                                    <p>Đang chờ</p>
                                </div>
                                <span>486</span>
                            </div>
                            <div className="child2-content3">
                                <div className="child2-content-status3">
                                    <BsDot style={{ color: "#7E7D88" }} />
                                    <p>Bỏ qua</p>
                                </div>
                                <span>32</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={wrapperStyleCalendar} className="calendar-main-overview">
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
            </div>
        </div>
    );
}

export default Overview;