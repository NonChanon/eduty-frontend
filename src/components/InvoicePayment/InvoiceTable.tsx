import { dataModel } from "../../models/InvoicePayment/InvoicePaymentModel";
import { PagingTab } from "../commons/PagingTab";
import { pagingModel } from "../../models/commons/GlobalModels";
import { Icon } from "@iconify/react";

const table_head = [
    "No.",
    "Lot Name",
    "Total Payment",
    "Payment Datetime",
    "Payment Status",
    "Expire Date",
    "Ref1",
    "Ref2",
    "QR Payment",
    "Slip Payment"
  ];

type thisModel = {
    handleDisplayPerDate: (date: string, pageNo: string) => void,
    batchDate: string,
    data: dataModel[],
    paging: pagingModel
}

export const InvoiceTable = (props:thisModel) => {

  const handleDisplayPerDate = (pageNo: string) => {
    props.handleDisplayPerDate(props.batchDate, pageNo);
  }

  function twClassName(type:string, arg: string){
    switch (type) {
      case 'status':
        switch (arg) {
          case 'N':
            return "w-[80px] align-middle font-medium text-center text-xs py-2 text-white ml-2 rounded bg-[#EE9B00] font-Montserrat capitalize";
          case 'Y':
            return "w-[80px] align-middle font-medium text-center text-xs py-2 text-white ml-2 rounded bg-[#39876D] font-Montserrat capitalize";
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
                      <td className="px-6 py-4">{lot.totalPayment}</td>
                      <td className="px-6 py-4">{lot.paymentDatetime}</td>
                      <td className="px-6 py-4">
                        <button
                          disabled={true}
                          className={twClassName("status", lot.paymentStatus)} 
                        >
                            {lot.paymentStatus === 'Y' ? 'Paid' : 'Pending'}
                        </button>
                      </td>
                      <td className="px-6 py-4">{lot.expireDate}</td>
                      <td className="px-6 py-4">{lot.ref1}</td>
                      <td className="px-6 py-4">{lot.ref2}</td>
                      <td style={{border:"1px solid red"}} className="px-6 py-6">
                        <Icon 
                          icon="bx:qr-scan"
                          width="22"
                          className="cursor-pointer text-gray-600"
                        />
                      </td>
                      <td style={{border:"1px solid red"}} className="px-6 py-4">
                        <Icon
                          icon="ion:receipt-outline"
                          width="22"
                          className="cursor-pointer text-gray-600"
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