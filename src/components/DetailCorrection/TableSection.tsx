import { Icon } from "@iconify/react";
import { PagingTab } from "../commons/PagingTab";
import { detailModel } from "../../models/DetailCorrection/DetailCorrectionModel";
import { pagingModel } from "../../models/commons/GlobalModels";
import { useEffect, useState } from "react";
import { stringToNumber } from "../../utils/ConvertDataType";

type thisModel = {
    detail: detailModel[],
    paging: pagingModel,
    onSearch: boolean,
    handleSearch: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, pageNo: string) => void,
    handleDisplay: (pageNo: string) => void,
    setHidden: () => void,
    setInstId: (instId: string) => void,
}

export const TableSection = (props:thisModel) => {
    const table_head = [
        "No.",
        "InstInfo ID",
        "Party Tax ID",
        "Name",
        "Duty Amount",
        "Surcharge Amount",
        "Fine Amount",
        "Total Amount",
        "Action",
      ];
    const [active, setActive] = useState(1);

    useEffect(() => {
      setActive(1);
    }, [props.paging.totalPage])
    
    return (
        <div className="relative overflow-x-auto mt-5">
          <table className="w-full text-center border-b border-[#DFDFDF] text-xs">
            <thead className="text-[#818181] border-b border-[#DFDFDF]">
              <tr>
                {table_head.map((head) => (
                  <th key={head} className="px-6 py-4">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.detail.map((row: detailModel, i: number) => (
                <tr key={i}>
                  <td className="px-6 py-4">{i + 1}</td>
                  <td className="px-6 py-4">{row.instId}</td>
                  <td className="px-6 py-4">{row.partyTaxRegistrationId}</td>
                  <td className="px-6 py-4">{row.name + " " + row.surname}</td>
                  <td className="px-6 py-4">{row.dutyAmount}</td>
                  <td className="px-6 py-4">{row.surchargeAmount}</td>
                  <td className="px-6 py-4">{row.fineAmount}</td>
                  <td className="px-6 py-4">{row.totalAmount}</td>
                  <td className="px-6 py-4 flex justify-center items-center">
                    <Icon
                      icon="mdi:file-edit-outline"
                      width="22"
                      className="text-gray-600 cursor-pointer"
                      onClick={() => {
                        props.setHidden();
                        props.setInstId(row.instId);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <PagingTab totalPage={stringToNumber(props.paging.totalPage)} onSearch={props.onSearch} handleSearch={props.handleSearch} handlePaging={props.handleDisplay} active={active} setActive={setActive}/>
        </div>
    );
}