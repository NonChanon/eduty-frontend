import { IconButton, Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import Datepicker from "react-tailwindcss-datepicker";
import { useEffect, useState } from "react";
import { FilterTab } from "../components/commons/FilterTab";
import {
  display,
  displayPerDate,
  search,
} from "../services/InvoicePayment/InvoicePaymentService";
import { responseModel } from "../models/InvoicePayment/InvoicePaymentModel";
import { InvoiceTable } from "../components/InvoicePayment/InvoiceTable";
import { DataNotFound } from "../components/DataNotFound";

export default function InvoicePayment() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const [filter, setFilter] = useState("all");
  const [month, setMonth] = useState("2023-08-01");

  const [data, setData] = useState<responseModel>({
    message: "",
    status: "",
    data: {
      [""]: {
        data: [
          {
            lotName: "",
            ref1: "",
            ref2: "",
            expireDate: "",
            totalDuty: "",
            totalFine: "",
            totalSurcharge: "",
            totalAmount: "",
            paymentStatus: "",
            paymentDatetime: "",
            qrPayment: "",
            payInSlipFile: "",
          },
        ],
        paging: {
          pageNo: "",
          pageSize: "",
          rowsPerPageOption: [],
          totalPage: "",
          totalRow: "",
          pageSizeStr: "",
          pageNoStr: "",
          totalPageStr: "",
          totalRowStr: "",
        },
      },
    },
    amount: {
      countAll: "",
      countPending: "",
      countPaid: "",
    },
  });

  const allFilters = [
    {
      label: "All",
      value: "countAll",
      asParam: "all",
    },
    {
      label: "Pending",
      value: "countPending",
      asParam: "n",
    },
    {
      label: "Paid",
      value: "countPaid",
      asParam: "y",
    },
  ];

  const [onSearch, setOnSearch] = useState(false);
  const [searchLotName, setSearchLotName] = useState({
    lotName: "",
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLotName({ ...searchLotName, [e.target.name]: e.target.value });
  };

  const paymentDisplayByFilter = (newFilter: string) => {
    console.log("Update Filter");
    setFilter(newFilter);
    display(newFilter, month, "1").then((res) => {
      setData(res);
    });
  };

  const handleSearch = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>,
    pageNo: string
  ) => {
    e.preventDefault();
    console.log("Search Function!");
    if (searchLotName.lotName === "" || searchLotName.lotName === null) {
      setOnSearch(false);
      display("all", month, "1").then((res) => {
        setData(res);
      });
      return;
    }
    search(searchLotName.lotName, pageNo).then((res) => {
      setData({
        ...data,
        data: res.data,
        message: res.message,
        status: res.status,
      });
      setOnSearch(true);
    });
  };

  const handleDisplayPerDate = (date: string, pageNo: string) => {
    displayPerDate(filter, date, pageNo).then((res) => {
      const batchDate: string = Object.keys(res.data)[0];
      console.log("res:", res);
      setData({
        ...data,
        data: {
          ...data.data,
          [batchDate]: {
            ...data.data[batchDate],
            data: res.data[batchDate].data,
            paging: res.data[batchDate].paging,
          },
        },
      });
    });
  };

  useEffect(() => {
    console.log("Hello");
    display("all", month, "1").then((res) => {
      setData(res);
    });
  }, []);

  console.log(data);

  return (
    <div className="w-full mx-auto px-5 my-[70px]">
      <div className="md:flex md:justify-between md:items-center">
        <span className="font-[600] text-lg">Invoice Payment</span>
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
                if (e.key === "Enter") {
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
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <Icon icon="tabler:search" width="16" />
          </IconButton>
        </div>
      </div>

      <FilterTab
        filters={allFilters}
        updateFilter={paymentDisplayByFilter}
        amount={data.amount}
      />
      {data.status === "02" ? (
        <DataNotFound />
      ) : (
        Object.keys(data.data).map((batchDate: string) => {
          return (
            <InvoiceTable
              key={batchDate}
              onSearch={onSearch}
              handleSearch={handleSearch}
              handleDisplayPerDate={handleDisplayPerDate}
              batchDate={batchDate}
              data={data.data[batchDate].data}
              paging={data.data[batchDate].paging}
            />
          );
        })
      )}
    </div>
  );
}
