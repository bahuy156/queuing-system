import Header from "../../components/Header/Header";
import { useState } from "react";
import ListProvideNum from "./ListProvideNum/ListProvideNum";
import NewNumber from "./NewNumber/NewNumber";
import DetailProvideNum from "./DetailProvideNum/DetailProvideNum";
import NavTopProvideNumList from "../../components/Header/NavTopProvideNum/NavTopProvideNumList/NavTopProvideNumList";
import NavTopProvideNumAdd from "../../components/Header/NavTopProvideNum/NavTopProvideNumAdd/NavTopProvideNumAdd";
import NavTopProvideNumDetail from "../../components/Header/NavTopProvideNum/NavTopProvideNumDetail/NavTopProvideNumDetail";
import { DataTableProvideNum } from "../../types";

function ProvideNum() {
    const [pageProvideNum, setPageProvideNum] = useState<string>("0");
    const [selectedProvideNum, setSelectedProvideNum] = useState<DataTableProvideNum | null>(null)

    const handleOpenPageDetail = (providenum: DataTableProvideNum) => {
        setPageProvideNum("2")
        setSelectedProvideNum(providenum)
    }

    return (
        <div>
            <Header
                headName={
                    pageProvideNum === "0" ? (
                        <NavTopProvideNumList />
                    ) : pageProvideNum === "1" ? (
                        <NavTopProvideNumAdd handleBackList={() => setPageProvideNum("0")} />
                    ) : (
                        <NavTopProvideNumDetail handleBackList={() => setPageProvideNum("0")} />
                    )
                }
            />

            {pageProvideNum === "0" ? (
                <ListProvideNum
                    handleOpentPageNewNum={() => setPageProvideNum("1")}
                    handleOpenPageDetail={handleOpenPageDetail}
                />
            ) : pageProvideNum === "1" ? (
                <NewNumber handleClosePageNewNumber={() => setPageProvideNum("0")} />
            ) : (
                <DetailProvideNum handleClosePageDetail={() => setPageProvideNum("0")} selectedProvideNum={selectedProvideNum} />
            )}
        </div>
    );
}

export default ProvideNum;