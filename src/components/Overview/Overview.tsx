import "./Overview.scss"
import { BiSolidBell } from "react-icons/bi"
import bahuyLogo from "../../images/bahuy.png"
import type { Dayjs } from 'dayjs';
import { Calendar, theme } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';

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
                <div className="info-notification-overview">
                    <img src={bahuyLogo} alt="" />
                    <div className="info-notification-overview-child">
                        <span>Xin chào</span>
                        <p>Sa Mai Bá Huy</p>
                    </div>
                </div>
            </div>

            <div className="main-overview">
                <h2 className="title-main-overview">Tổng quan</h2>

                <div style={wrapperStyleCalendar} className="calendar-main-overview">
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
            </div>
        </div>
    );
}

export default Overview;