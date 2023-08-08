import { Icon } from "@iconify/react";
import { Button, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { dataModel } from "../../services/DataResult/DataResultModel";

const table_head = [
    "No.",
    "Lot Name",
    "Approved By",
    "Last Update Date",
    "Total Doc",
    "Total Payment",
    "Action",
  ];

type thisModel = {
    batchDate: string,
    data: dataModel[]
}

export const DataResultTable = (props:thisModel) => {
    let {batchDate, data} = props
    const [active, setActive] = useState(1);

    const getItemProps = (index: any) =>
    ({
    variant: active === index ? "filled" : "text",
    className:
        active === index
        ? "bg-black text-white rounded"
        : "text-black hover:bg-gray-100",
    onClick: () => setActive(index),
    } as any);
    const next = () => {
        if (active === 5) return;
        setActive(active + 1);
    };
    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };
    return (
        <div className="w-full p-5 border-[#F9F9F9] border-2 rounded">
              <span className="text-[14px]">Batch Date : {batchDate}</span>
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
                    {data.map((lot:dataModel, i:number) => (
                      <tr>
                        <td className="px-6 py-4">{i + 1}</td>
                        <td className="px-6 py-4">{lot.lotName}</td>
                        <td className="px-6 py-4">{lot.approveBy}</td>
                        <td className="px-6 py-4">{lot.transactionDate}</td>
                        <td className="px-6 py-4">{lot.totalDoc}</td>
                        <td className="px-6 py-4">{lot.totalPayment}</td>
                        <td className="px-6 py-4 flex justify-center items-center">
                          <Icon
                            icon="mdi:file-edit-outline"
                            width="22"
                            className="text-gray-600"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-center items-center mt-5">
                  <Button
                    variant="text"
                    size="sm"
                    className="flex items-center gap-2 font-Montserrat normal-case text-black"
                    onClick={prev}
                    disabled={active === 1}
                    nonce={undefined} 
                    onResize={undefined} 
                    onResizeCapture={undefined}                  >
                    <Icon icon="ep:arrow-left-bold" /> Previous
                  </Button>
                  <div className="flex items-center gap-2">
                    <IconButton {...getItemProps(1)} size="sm">
                      1
                    </IconButton>
                    <IconButton {...getItemProps(2)} size="sm">
                      2
                    </IconButton>
                    <IconButton {...getItemProps(3)} size="sm">
                      3
                    </IconButton>
                    <IconButton {...getItemProps(4)} size="sm">
                      4
                    </IconButton>
                    <IconButton {...getItemProps(5)} size="sm">
                      5
                    </IconButton>
                  </div>
                  <Button
                    variant="text"
                    size="sm"
                    className="flex items-center gap-2 font-Montserrat normal-case text-black"
                    onClick={next}
                    disabled={active === 5} nonce={undefined} onResize={undefined} onResizeCapture={undefined}                  >
                    Next
                    <Icon icon="ep:arrow-right-bold" />
                  </Button>
                </div>
              </div>
            </div>
    );
}