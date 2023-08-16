import {
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import Datepicker from "react-tailwindcss-datepicker";
import { useEffect, useState } from "react";
import { FilterTab } from "../components/commons/FilterTab";
import { display, displayPerDate, search } from "../services/DataResult/DataResultService";
import { responseModel } from "../models/DataResult/DataResultModel";
import { DataResultTable } from "../components/DataResult/DataResultTable";

export default function DataResult() {

  // const [value, setValue] = useState({
  //   startDate: null,
  //   endDate: null,
  // });

  const [searchLotName, setSearchLotName] = useState({
    lotName: ""
  });
  const [onSearch, setOnSearch] = useState(false);

  const [filter, setFilter] = useState("all");
  const [month, setMonth] = useState("2023-08-01");

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

  const allFilters = [
    {
      label: "All",
      value: "countAll",
      asParam: "all"
    },
    {
      label: "Pending",
      value: "countPending",
      asParam: "pending"
    },
    {
      label: "Approve",
      value: "countApprove",
      asParam: "approve"
    },
    {
      label: "In progress",
      value: "countInProgress",
      asParam: "wait_for_approve"
    },
    {
      label: "Invalid Data",
      value: "countInvalidData",
      asParam: "invalid_data"
    }
  ];

  const dataResultDisplayByFilter = (newFilter: string) => {
    console.log("Update Filter");
    setFilter(newFilter);
    display(newFilter, month, "1").then((res) => {
      setData(res);
    });
  }

  const handleSearch = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("Search Function!");
    if (searchLotName.lotName === "" || searchLotName.lotName === null) {
        setOnSearch(false);
        display("all", month, "1").then((res) => {
          setData(res);
        });
        return;
    }
    search(searchLotName.lotName, "1").then((res) => {
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
    displayPerDate(filter, date, pageNo).then((res) => {
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

  useEffect(() => {
    console.log("Hello");
    display("all", month, "1").then((res) => {
      setData(res);
    });
  },[])

  console.log(data);

  return (
    <div className="w-full mx-auto px-5 my-[70px]">
      <div className="md:flex md:justify-between md:items-center">
        <span className="font-[600] text-lg">Batch Data Result</span>
        <div className="flex items-center">
          {/* <Datepicker
            showShortcuts={true}
            useRange={false}
            asSingle={true}
            value={value}
            displayFormat={"DD/MM/YYYY"}
            onChange={handleValueChange}
            inputClassName="w-60 h-10 px-3 py-2 border-[1px] rounded border-blue-gray-200 text-sm"
            containerClassName="relative text-gray-700 w-60"
          /> */}
          <div className="w-60 mx-3 flex items-center">
            <Input
              name="lotName"
              label="Lot Name"
              color="black"
              className="!rounded"
              onChange={(e) => {
                handleSearchChange(e);
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
              handleSearch(e);
            }}
            nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
            <Icon icon="tabler:search" width="16" />
          </IconButton>
        </div>
      </div>

      <FilterTab filters={allFilters} updateFilter={dataResultDisplayByFilter} amount={data.amount}/>
      {
        Object.keys(data.data).map((batchDate:string) => {
          
          return (
            <DataResultTable key={batchDate} onSearch={onSearch} handleSearch={handleSearch} handleDisplayPerDate={handleDisplayPerDate} batchDate={batchDate} data={data.data[batchDate].data} paging={data.data[batchDate].paging}/>
          );
        })
      }
    </div>
  );
}
