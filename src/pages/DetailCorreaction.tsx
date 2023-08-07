import {
  Breadcrumbs,
  Button,
  IconButton,
  Input,
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";

export default function DetailCorrection() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

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

  const data = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Pending",
      value: "pending",
    },

    {
      label: "In progress",
      value: "progress",
    },

    {
      label: "Invalid Data",
      value: "invalid",
    },
  ];

  const table_head = [
    "No.",
    "InstInfo ID",
    "Tax Player ID",
    "Name",
    "Duty Amount",
    "Service Charge Amount",
    "Fine Amount",
    "Total Amount",
    "Action",
  ];

  const table_rows = [
    {
      name: "John Michael",
      taxID: "1102918928918",
      InstInfo: "2562/10",
      dutyAmount: 10,
      serviceCharge: 10,
      fineAmount: 10,
    },
    {
      name: "John Michael",
      taxID: "1102918928918",
      InstInfo: "2562/10",
      dutyAmount: 10,
      serviceCharge: 10,
      fineAmount: 10,
    },
    {
      name: "John Michael",
      taxID: "1102918928918",
      InstInfo: "2562/10",
      dutyAmount: 10,
      serviceCharge: 10,
      fineAmount: 10,
    },
    {
      name: "John Michael",
      taxID: "1102918928918",
      InstInfo: "2562/10",
      dutyAmount: 10,
      serviceCharge: 10,
      fineAmount: 10,
    },
    {
      name: "John Michael",
      taxID: "1102918928918",
      InstInfo: "2562/10",
      dutyAmount: 10,
      serviceCharge: 10,
      fineAmount: 10,
    },
    {
      name: "John Michael",
      taxID: "1102918928918",
      InstInfo: "2562/10",
      dutyAmount: 10,
      serviceCharge: 10,
      fineAmount: 10,
    },
    {
      name: "John Michael",
      taxID: "1102918928918",
      InstInfo: "2562/10",
      dutyAmount: 10,
      serviceCharge: 10,
      fineAmount: 10,
    },
    {
      name: "John Michael",
      taxID: "1102918928918",
      InstInfo: "2562/10",
      dutyAmount: 10,
      serviceCharge: 10,
      fineAmount: 10,
    },
    {
      name: "John Michael",
      taxID: "1102918928918",
      InstInfo: "2562/10",
      dutyAmount: 10,
      serviceCharge: 10,
      fineAmount: 10,
    },
    {
      name: "John Michael",
      taxID: "1102918928918",
      InstInfo: "2562/10",
      dutyAmount: 10,
      serviceCharge: 10,
      fineAmount: 10,
    },
  ];

  return (
    <div className="w-full mx-auto px-5 my-[70px]">
      <div className="md:flex md:justify-between md:items-center">
        <span className="font-[600] text-lg">Batch Data Rusult</span>
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
            />
          </div>
          <IconButton className="bg-black shadow-none hover:shadow-none rounded">
            <Icon icon="tabler:search" width="16" />
          </IconButton>
        </div>
      </div>
      <div className="flex items-center">
        <Breadcrumbs
          className=" p-0 mb-5 bg-white"
          separator={<Icon icon="iconamoon:arrow-right-2-light" />}
        >
          <a href="/" className="opacity-60">
            Batch Data Result
          </a>
          <a href="/detail" className="opacity-60">
            Detail Correction
          </a>
        </Breadcrumbs>
      </div>
      <div className="w-full p-5 border-[#F9F9F9] border-2 rounded">
        <div className="flex justify-between text-sm">
          <div className="w-[60%] grid grid-cols-4 gap-3">
            <span>Lot Name : Lot_1</span>
            <span>Last Update: 18/07/2023</span>
            <span>Total Doc : 10</span>
            <span>Total Duty : 100</span>
            <span>Total Survice Charge : 100</span>
            <span>Total Fine : 100</span>
            <span>Total Payment : 1000</span>
          </div>
          <div>
            Status :
            <Button
              className="ml-2 rounded bg-[#EE9B00] shadow-none hover:shadow-none font-Montserrat normal-case"
              size="sm"
            >
              Pending
            </Button>
          </div>
        </div>
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
              {table_rows.map((row, i) => (
                <tr>
                  <td className="px-6 py-4">{i + 1}</td>
                  <td className="px-6 py-4">{row.InstInfo}</td>
                  <td className="px-6 py-4">{row.taxID}</td>
                  <td className="px-6 py-4">{row.name}</td>
                  <td className="px-6 py-4">{row.dutyAmount}</td>
                  <td className="px-6 py-4">{row.serviceCharge}</td>
                  <td className="px-6 py-4">{row.fineAmount}</td>
                  <td className="px-6 py-4">
                    {row.dutyAmount + row.serviceCharge + row.fineAmount}
                  </td>
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
            >
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
              disabled={active === 5}
            >
              Next
              <Icon icon="ep:arrow-right-bold" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
