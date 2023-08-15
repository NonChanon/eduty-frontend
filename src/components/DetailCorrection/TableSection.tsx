import { Icon } from "@iconify/react";
import { PagingTab } from "../commons/PagingTab";
import { detailModel } from "../../models/DetailCorrection/DetailCorrectionModel";
import { pagingModel } from "../../models/commons/GlobalModels";

type thisModel = {
    detail: detailModel[],
    paging: pagingModel,
    handleDisplay: (pageNo: string) => void,
    setHidden: () => void,
    setInstId: (instId: string) => void
}

export const TableSection = (props:thisModel) => {
    const table_head = [
        "No.",
        "InstInfo ID",
        "Tax Player ID",
        "Name",
        "Duty Amount",
        "Surcharge Amount",
        "Fine Amount",
        "Total Amount",
        "Action",
      ];

    return (
        <div className="relative overflow-x-auto mt-5">
          <table className="w-full text-center border-b border-[#DFDFDF] text-xs">
            <thead className="text-[#818181] border-b border-[#DFDFDF]">
              <tr>
                {table_head.map((head) => (
                  <th className="px-6 py-4">{head}</th>
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
          <PagingTab totalPage={props.paging.totalPage as unknown as number} handlePaging={props.handleDisplay}/>
        </div>
    );
}