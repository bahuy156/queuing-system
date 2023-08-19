// type init table
export interface DataType {
    key: string;
    deviceCode: string | undefined;
    deviceName: string | undefined;
    ipAddress: string | undefined;
    statusActive: string,
    statusConnect: string,
    useServices: string;
}

// type table device
export interface DataTable {
    key: string,
    code: string | undefined,
    name: string | undefined,
    ip: string | undefined,
    status: string,
    connect: string,
    services: string
}

// type table services
export interface DataTableSev {
    key: string,
    code: string,
    name: string,
    desc: string,
    status: string
}

// type table detail service
export interface DataDetailService {
    key: string,
    stt: string,
    status: string
}

// type table provide number
export interface DataTableProvideNum {
    key: string,
    stt: string,
    nameCsm: string,
    nameSev: string,
    provideTime: string,
    expỉy: string,
    status: string,
    supply: string,
}

// type table report
export interface DataTableReport {
    key: string,
    stt: string,
    nameSev: string,
    timeProvide: string,
    status: string,
    supply: string,
}

// ty table list role 
export interface DataTableListRole {
    key: string,
    nameRole: string,
    userNum: string,
    desc: string,
}

// type table list account 
export interface DataTableListAccount {
    key: string,
    nameLogin: string,
    name: string,
    phone: string,
    email: string,
    role: string,
    status: string,
}

// type table user log
export interface DataTableUserLog {
    key: string,
    nameLogin: string,
    time: string,
    ip: string,
    operations: string,
}