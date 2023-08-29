import {
    IconButton,
    Input,
  } from "@material-tailwind/react";
  import { Icon } from "@iconify/react";
  import { useEffect, useState } from "react";
  import { display, displayPerDate, search } from "../services/ReceiptAS9/ReceiptAS9Service";
  import { responseModel } from "../models/ReceiptAS9/ReceiptAS9Model";
  import { ReceiptAS9Table } from "../components/ReceiptAS9/ReceiptAS9Table";
import { DataNotFound } from "../components/DataNotFound";
  
  export default function ReceiptAS9() {
  
    const [month, setMonth] = useState("2023-08-01");
    const [searchLotName, setSearchLotName] = useState({
      lotName: ""
    });
    const [onSearch, setOnSearch] = useState(false);
  
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
                totalDuty: "",
                totalFine: "",
                totalSurcharge: "",
                totalAmount: "",
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

    const handleSearch = (e:React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement>, pageNo: string) => {
      e.preventDefault();
      console.log("Search Function!");
      if (searchLotName.lotName === "" || searchLotName.lotName === null) {
          setOnSearch(false);
          display(month, "1").then((res) => {
            setData(res);
          });
          return;
      }
      search(searchLotName.lotName, pageNo).then((res) => {
        setData({
          ...data,
          data: res.data
        });
        setOnSearch(true);
      });
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchLotName({...searchLotName, [e.target.name]: e.target.value})
    }
  
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
            <div className="w-60 mx-3 flex items-center">
              <Input
                name="lotName"
                label="Lot Name"
                color="black"
                className="!rounded"
                onChange={(e) => {
                  handleSearchChange(e);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch(e, "1");
                  }
                }}
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
            <IconButton 
              className="bg-black shadow-none hover:shadow-none rounded"
              onClick={(e) => {
                handleSearch(e, "1");
              }}
              nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
              <Icon icon="tabler:search" width="16" />
            </IconButton>
          </div>
        </div>
        {data.status === "02" ? <DataNotFound /> : 
          Object.keys(data.data).map((batchDate:string) => {
            return (
              <ReceiptAS9Table key={batchDate} onSearch={onSearch} handleSearch={handleSearch} handleDisplayPerDate={handleDisplayPerDate} batchDate={batchDate} data={data.data[batchDate].data} paging={data.data[batchDate].paging}/>
            );
          })
        }
      </div>
    );
  }
  