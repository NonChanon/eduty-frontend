import {
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import Datepicker from "react-tailwindcss-datepicker";
import { useEffect, useState } from "react";
import { FilterTab } from "../components/DataResult/FilterTab";
import { dataResultDisplay, dataResultDisplayPerDate } from "../services/DataResult/DataResultService";
import { responseModel } from "../services/DataResult/DataResultModel";
import { DataResultTable } from "../components/DataResult/DataResultTable";

export default function DataResult() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const [filter, setFilter] = useState("all");

  const [data, setData] = useState<responseModel>({
    message: "",
    status: "",
    data: {
        [""]: {
            data: [{
              lotId: "",
              lotName: "",
              sendRdStatus: "",
              rdResponseMessage: "",
              transactionDate: "",
              totalDuty: "",
              totalSurcharge: "",
              totalPayment: "",
              totalDoc: "",
              approveBy: ""
            },],
            paging: {
              pageNo: "",
              pageSize: "",
              rowsPerPageOption: [],
              totalPage: "",
              totalRow: "",
              pageSizeStr: "",
              pageNoStr: "",
              totalPageStr: "",
              totalRowStr: ""
            }
        }
    },
    amount: {
      countAll: "",
      countPending: "",
      countInProgress: "",
      countInvalidData: "",
      countApprove: "",
      countDeny: "",
    }
  });

  const updateFilter = (newFilter: string) => {
    console.log("Update Filter");
    setFilter(newFilter);
  }

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const handleDisplayPerDate = (date: string, pageNo: string) => {
    dataResultDisplayPerDate(filter, date, pageNo).then((res) => {
      const batchDate:string = Object.keys(res.data)[0];
      console.log("res:", res);
      setData({
        ...data, 
        data:{
          ...data.data,
          [batchDate]:{
            ...data.data[batchDate],
            data: res.data[batchDate].data,
            paging: res.data[batchDate].paging
          }
        }
      });
      // setData((prevData) => {
      //   const newData = {...prevData}
      //   newData.data[batchDate] = res.data[batchDate]
      //   return newData
      // });
    });
  }

  useEffect(()=>{
    console.log("Hello")
    dataResultDisplay("all", "2023-08-01", "1").then((res) => {
      setData(res);
    });
  },[])

  console.log(data);

  return (
    <div className="w-full mx-auto px-5 my-[70px]">
      <div className="md:flex md:justify-between md:items-center">
        <span className="font-[600] text-lg">Batch Data Result</span>
        <div className="flex items-center">
          <Datepicker
            showShortcuts={true}
            useRange={false}
            asSingle={true}
            value={value}
            displayFormat={"DD/MM/YYYY"}
            onChange={handleValueChange}
            inputClassName="w-60 h-10 px-3 py-2 border-[1px] rounded border-blue-gray-200 text-sm"
            containerClassName="relative text-gray-700 w-60"
          />
          <div className="w-60 mx-3 flex items-center">
            <Input
              label="Lot Name"
              color="black"
              className="!rounded"
              containerProps={{
                className: "",
              }}
              labelProps={{
                className: "!text-gray-400 peer-focus:!text-black",
              }} 
              nonce={undefined}
              onResize={undefined} 
              onResizeCapture={undefined}            
            />
          </div>
          <IconButton className="bg-black shadow-none hover:shadow-none rounded" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
            <Icon icon="tabler:search" width="16" />
          </IconButton>
        </div>
      </div>

      <FilterTab updateFilter={updateFilter} amount={data.amount}/>

      {
        Object.keys(data.data).map((batchDate:string) => {
          return (
            <DataResultTable handleDisplayPerDate={handleDisplayPerDate} batchDate={batchDate} data={data.data[batchDate].data} paging={data.data[batchDate].paging}/>
          );
        })
      }
    </div>
  );
}
