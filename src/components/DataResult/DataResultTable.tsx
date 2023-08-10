import { Icon } from "@iconify/react";
import { dataModel } from "../../models/DataResult/DataResultModel";
import { PagingTab } from "../commons/PagingTab";
import { useNavigate } from "react-router-dom"
import { pagingModel } from "../../models/commons/GlobalModels";

const table_head = [
    "No.",
    "Lot Name",
    "Approved By",
    "Last Update Date",
    "Total Doc",
    "Total Payment",
    "Status",
    "Action",
  ];

type thisModel = {
    handleDisplayPerDate: (date: string, pageNo: string) => void,
    batchDate: string,
    data: dataModel[],
    paging: pagingModel
}

export const DataResultTable = (props:thisModel) => {

  let navigate = useNavigate();

  const handleDisplayPerDate = (pageNo: string) => {
    props.handleDisplayPerDate(props.batchDate, pageNo);
  }

  function twClassName(type:string, arg: string){
    switch (type) {
      case 'status':
        switch (arg) {
          case 'pending':
            return "w-[80px] align-middle font-medium text-center text-xs py-2 text-white ml-2 rounded bg-[#EE9B00] font-Montserrat capitalize";
          case 'approve':
            return "w-[80px] align-middle font-medium text-center text-xs py-2 text-white ml-2 rounded bg-[#39876D] font-Montserrat capitalize";
          case 'wait_for_approve':
            return "w-[80px] align-middle font-medium text-center text-xs py-2 text-white ml-2 rounded bg-[#005F73] font-Montserrat capitalize";
          case 'invalid_data':
            return "w-[80px] align-middle font-medium text-center text-xs py-2 text-white ml-2 rounded bg-[#AE2012] font-Montserrat capitalize";
          default:
            return "w-[80px] align-middle font-medium text-center text-xs py-2 text-white ml-2 rounded bg-black font-Montserrat capitalize";
        }
      default:
        break;
    }
  }

    return (
        <div className="w-full p-5 border-[#F9F9F9] border-2 rounded">
            <span className="text-[14px]">Batch Date : {props.batchDate}</span>
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
                  {props.data.map((lot:dataModel, i:number) => (
                    <tr key={i}>
                      <td className="px-6 py-4">{i + 1}</td>
                      <td className="px-6 py-4">{lot.lotName}</td>
                      <td className="px-6 py-4">{lot.approveBy}</td>
                      <td className="px-6 py-4">{lot.transactionDate}</td>
                      <td className="px-6 py-4">{lot.totalDoc}</td>
                      <td className="px-6 py-4">{lot.totalPayment}</td>
                      <td className="px-6 py-4">
                        <button
                          disabled={true}
                          className={twClassName("status", lot.sendRdStatus.toLowerCase())} 
                        >
                            {lot.sendRdStatus === 'WAIT_FOR_APPROVE' ? 'In Progess' : (lot.sendRdStatus.toLowerCase()).replaceAll('_', ' ')}
                        </button>
                      </td>
                      <td className="px-6 py-4 flex justify-center items-center">
                        <Icon
                          icon="mdi:file-edit-outline"
                          width="22"
                          className="cursor-pointer text-gray-600"
                          onClick={() => {
                            navigate(`/${lot.lotName}/detail`);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <PagingTab handlePaging={handleDisplayPerDate} totalPage={props.paging.totalPage as unknown as number}/>
            </div>
        </div>
    );
}