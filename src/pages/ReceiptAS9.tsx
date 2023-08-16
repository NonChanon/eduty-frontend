import {
    IconButton,
    Input,
  } from "@material-tailwind/react";
  import { Icon } from "@iconify/react";
  import Datepicker from "react-tailwindcss-datepicker";
  import { useEffect, useState } from "react";
  import { display, displayPerDate } from "../services/ReceiptAS9/ReceiptAS9Service";
  import { responseModel } from "../models/ReceiptAS9/ReceiptAS9Model";
  import { ReceiptAS9Table } from "../components/ReceiptAS9/ReceiptAS9Table";
  
  export default function ReceiptAS9() {
    const [value, setValue] = useState({
      startDate: null,
      endDate: null,
    });
  
    const [month, setMonth] = useState("2023-08-01");
  
    const [data, setData] = useState<responseModel>({
      message: "",
      status: "",
      data: {
          [""]: {
              data: [{
                lotName: "",
                apiRefNo: "",
                paymentDatetime: "",
                totalDoc: "",
                totalPayment: "",
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
      }
    });
  
    const handleValueChange = (newValue: any) => {
      console.log("newValue:", newValue);
      setValue(newValue);
    };
  
    const handleDisplayPerDate = (date: string, pageNo: string) => {
      displayPerDate(date, pageNo).then((res) => {
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
      });
    }
  
    useEffect(()=>{
      console.log("Hello");
      display(month, "1").then((res) => {
        setData(res);
      });
    },[])
  
    console.log(data);
  
    return (
      <div className="w-full mx-auto px-5 my-[70px]">
        <div className="md:flex md:justify-between md:items-center">
          <span className="font-[600] text-lg">Receipt & AS9</span>
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
        {
          Object.keys(data.data).map((batchDate:string) => {
            return (
              <ReceiptAS9Table key={batchDate} handleDisplayPerDate={handleDisplayPerDate} batchDate={batchDate} data={data.data[batchDate].data} paging={data.data[batchDate].paging}/>
            );
          })
        }
      </div>
    );
  }
  