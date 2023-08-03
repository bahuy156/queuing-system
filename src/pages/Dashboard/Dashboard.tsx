import "./Dashboard.scss"
import { BsCalendar } from "react-icons/bs"
import { GoArrowUp } from "react-icons/go"
import { BsCalendarCheck } from "react-icons/bs"

import { Select } from 'antd';
import Overview from "../../components/Overview/Overview";
import LineChartComponent from "../../components/Charts/LineChart";

function Dashboard() {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className="wrapper-content-dashboard">
            <div className="wrapper-content-dashboard-left">
                <h2 className="title-left-dash">Biểu đồ cấp số</h2>

                <div className="info-content-left-dash">
                    <div className="info-content-left-dash-child">
                        <div className="info-content-top">
                            <div className="wrapper-icon-granted">
                                <BsCalendar className="icon-granted" />
                            </div>
                            <p>Số thứ tự <br></br> đã cấp</p>
                        </div>
                        <div className="info-content-bot">
                            <p className="info-number">4.221</p>
                            <div className="desc-info-number">
                                <GoArrowUp className="icon-up" />
                                <span>32,41%</span>
                            </div>
                        </div>
                    </div>

                    <div className="info-content-left-dash-child">
                        <div className="info-content-top">
                            <div className="wrapper-icon-used">
                                <BsCalendarCheck className="icon-used" />
                            </div>
                            <p>Số thứ tự <br></br> đã sử dụng</p>
                        </div>
                        <div className="info-content-bot">
                            <p className="info-number">3.721</p>
                            <div className="desc-info-number">
                                <GoArrowUp className="icon-up" />
                                <span>32,41%</span>
                            </div>
                        </div>
                    </div>

                    <div className="info-content-left-dash-child">
                        <div className="info-content-top">
                            <div className="wrapper-icon-waiting">
                                <svg className="icon-waiting" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M19.2505 8.9625L20.155 8.058C20.2767 7.93778 20.4308 7.85549 20.5984 7.82114C20.766 7.78679 20.94 7.80185 21.0992 7.8645L22.2017 8.304C22.3627 8.36959 22.5007 8.48137 22.5983 8.62525C22.6958 8.76913 22.7486 8.93867 22.75 9.1125V11.1315C22.748 11.3637 22.6539 11.5856 22.4884 11.7485C22.3229 11.9113 22.0995 12.0018 21.8672 12L21.8297 11.9985C14.1077 11.5185 12.55 4.977 12.2552 2.4735C12.2425 2.35915 12.2525 2.24341 12.2845 2.1329C12.3165 2.02239 12.37 1.91927 12.4418 1.82942C12.5137 1.73958 12.6026 1.66477 12.7034 1.60928C12.8042 1.55379 12.9149 1.51869 13.0292 1.506C13.0631 1.50199 13.0972 1.49998 13.1312 1.5H15.0812C15.2552 1.50063 15.4249 1.55323 15.5687 1.65106C15.7125 1.74888 15.8238 1.88746 15.8882 2.049L16.3285 3.1515C16.3932 3.31023 16.4098 3.48452 16.376 3.65259C16.3423 3.82066 16.2597 3.97506 16.1387 4.0965L15.2342 5.001C15.2342 5.001 15.7547 8.526 19.2505 8.9625Z" fill="#FFAC6A" />
                                    <path d="M12.25 22.5H10.75V18.75C10.7494 18.1534 10.5122 17.5815 10.0903 17.1597C9.6685 16.7378 9.09655 16.5006 8.5 16.5H5.5C4.90345 16.5006 4.3315 16.7378 3.90967 17.1597C3.48784 17.5815 3.2506 18.1534 3.25 18.75V22.5H1.75V18.75C1.75119 17.7558 2.14666 16.8027 2.84966 16.0997C3.55267 15.3967 4.5058 15.0012 5.5 15H8.5C9.4942 15.0012 10.4473 15.3967 11.1503 16.0997C11.8533 16.8027 12.2488 17.7558 12.25 18.75V22.5Z" fill="#FFAC6A" />
                                    <path d="M7 7.5C7.44501 7.5 7.88002 7.63196 8.25004 7.87919C8.62005 8.12643 8.90843 8.47783 9.07873 8.88896C9.24903 9.3001 9.29359 9.7525 9.20677 10.189C9.11995 10.6254 8.90566 11.0263 8.59099 11.341C8.27632 11.6557 7.87541 11.87 7.43896 11.9568C7.0025 12.0436 6.5501 11.999 6.13896 11.8287C5.72783 11.6584 5.37643 11.37 5.1292 11C4.88196 10.63 4.75 10.195 4.75 9.75C4.75 9.15326 4.98705 8.58097 5.40901 8.15901C5.83097 7.73705 6.40326 7.5 7 7.5ZM7 6C6.25832 6 5.5333 6.21993 4.91661 6.63199C4.29993 7.04404 3.81928 7.62971 3.53545 8.31494C3.25162 9.00016 3.17736 9.75416 3.32206 10.4816C3.46675 11.209 3.8239 11.8772 4.34835 12.4017C4.8728 12.9261 5.54098 13.2833 6.26841 13.4279C6.99584 13.5726 7.74984 13.4984 8.43506 13.2145C9.12029 12.9307 9.70596 12.4501 10.118 11.8334C10.5301 11.2167 10.75 10.4917 10.75 9.75C10.75 9.25754 10.653 8.76991 10.4646 8.31494C10.2761 7.85997 9.99987 7.44657 9.65165 7.09835C9.30343 6.75013 8.89004 6.47391 8.43506 6.28545C7.98009 6.097 7.49246 6 7 6Z" fill="#FFAC6A" />
                                </svg>
                            </div>
                            <p>Số thứ tự <br></br> đang chờ</p>
                        </div>
                        <div className="info-content-bot">
                            <p className="info-number">468</p>
                            <div className="desc-info-number">
                                <GoArrowUp className="icon-up" />
                                <span>32,41%</span>
                            </div>
                        </div>
                    </div>

                    <div className="info-content-left-dash-child">
                        <div className="info-content-top">
                            <div className="wrapper-icon-omitted">
                                <svg className="icon-omitted" xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
                                    <path d="M9.26002 6.15C9.28194 6.10502 9.31607 6.06711 9.35851 6.04058C9.40094 6.01406 9.44997 6 9.50001 6C9.55006 6 9.59909 6.01406 9.64152 6.04058C9.68396 6.06711 9.71809 6.10502 9.74001 6.15L10.691 8.0775C10.7101 8.11649 10.7383 8.15025 10.7733 8.17587C10.8084 8.20148 10.8491 8.21817 10.892 8.2245L13.022 8.5335C13.2395 8.565 13.328 8.8335 13.169 8.988L11.63 10.4895C11.599 10.5198 11.5758 10.5572 11.5624 10.5985C11.5491 10.6398 11.546 10.6838 11.5535 10.7265L11.9165 12.8475C11.9247 12.8965 11.919 12.9468 11.9002 12.9927C11.8813 13.0386 11.85 13.0784 11.8098 13.1075C11.7696 13.1367 11.7221 13.154 11.6726 13.1576C11.6231 13.1613 11.5735 13.151 11.5295 13.128L9.62452 12.126C9.58632 12.106 9.54386 12.0956 9.50076 12.0956C9.45766 12.0956 9.41521 12.106 9.37702 12.126L7.47201 13.128C7.42805 13.1506 7.37869 13.1605 7.32942 13.1567C7.28015 13.1529 7.2329 13.1355 7.19294 13.1064C7.15298 13.0773 7.12187 13.0377 7.10308 12.992C7.08429 12.9463 7.07856 12.8963 7.08651 12.8475L7.44952 10.7265C7.45717 10.6839 7.45434 10.64 7.44128 10.5987C7.42821 10.5575 7.4053 10.52 7.37452 10.4895L5.82952 8.988C5.79413 8.95325 5.76911 8.90934 5.75728 8.86117C5.74545 8.81301 5.74727 8.7625 5.76253 8.71531C5.77779 8.66812 5.8059 8.62612 5.84369 8.59401C5.88149 8.56189 5.92748 8.54094 5.97652 8.5335L8.10652 8.2245C8.14944 8.21817 8.19018 8.20148 8.2252 8.17587C8.26022 8.15025 8.28848 8.11649 8.30751 8.0775L9.26002 6.15Z" fill="#F86D6D" />
                                    <path d="M0.5 3C0.5 2.20435 0.81607 1.44129 1.37868 0.87868C1.94129 0.316071 2.70435 0 3.5 0L15.5 0C16.2956 0 17.0587 0.316071 17.6213 0.87868C18.1839 1.44129 18.5 2.20435 18.5 3V23.25C18.4999 23.3857 18.4631 23.5188 18.3933 23.6351C18.3236 23.7515 18.2236 23.8468 18.104 23.9108C17.9844 23.9748 17.8497 24.0052 17.7142 23.9988C17.5787 23.9923 17.4474 23.9492 17.3345 23.874L9.5 19.6515L1.6655 23.874C1.55256 23.9492 1.42135 23.9923 1.28584 23.9988C1.15033 24.0052 1.0156 23.9748 0.895999 23.9108C0.776399 23.8468 0.676406 23.7515 0.606671 23.6351C0.536936 23.5188 0.50007 23.3857 0.5 23.25V3ZM3.5 1.5C3.10218 1.5 2.72064 1.65804 2.43934 1.93934C2.15804 2.22064 2 2.60218 2 3V21.849L9.0845 18.126C9.20759 18.0441 9.35215 18.0004 9.5 18.0004C9.64785 18.0004 9.79241 18.0441 9.9155 18.126L17 21.849V3C17 2.60218 16.842 2.22064 16.5607 1.93934C16.2794 1.65804 15.8978 1.5 15.5 1.5H3.5Z" fill="#F86D6D" />
                                </svg>
                            </div>
                            <p>Số thứ tự <br></br> đã bỏ qua</p>
                        </div>
                        <div className="info-content-bot">
                            <p className="info-number">32</p>
                            <div className="desc-info-number">
                                <GoArrowUp className="icon-up" />
                                <span>32,41%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="statistical-content-left-dash">
                    <div className="statistical-header-left">
                        <h4 className="title-statistical">Bảng thống kê theo ngày</h4>
                        <div className="statistical-header-calendar">
                            <p>Xem theo</p>
                            <Select
                                className="statistical-header-selected"
                                defaultValue="Ngày"
                                style={{ width: 100 }}
                                onChange={handleChange}
                                options={[
                                    { value: 'Ngày', label: 'Ngày' },
                                    { value: 'Tuần', label: 'Tuần' },
                                    { value: 'Tháng', label: 'Tháng' },
                                ]}
                            />
                        </div>
                    </div>

                    <div className="statistical-desc">Tháng 11/2023</div>

                    <div className="statistical-chart-left">
                        <LineChartComponent />
                    </div>
                </div>
            </div>

            <div className="wrapper-content-dashboard-right">
                <Overview />
            </div>
        </div>
    );
}

export default Dashboard;