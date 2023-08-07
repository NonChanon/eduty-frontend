import {
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

export default function DataResult() {
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
    "Lot Name",
    "Approved By",
    "Last Update Date",
    "Total Doc",
    "Total Payment",
    "Action",
  ];

  const table_rows = [
    {
      name: "John Michael",
      merchain: "Alexa Liras",
    },
    {
      name: "John Michael",
      merchain: "Alexa Liras",
    },
    {
      name: "John Michael",
      merchain: "Alexa Liras",
    },
    {
      name: "John Michael",
      merchain: "Alexa Liras",
    },
    {
      name: "John Michael",
      merchain: "Alexa Liras",
    },
    {
      name: "John Michael",
      merchain: "Alexa Liras",
    },
    {
      name: "John Michael",
      merchain: "Alexa Liras",
    },
    {
      name: "John Michael",
      merchain: "Alexa Liras",
    },
    {
      name: "John Michael",
      merchain: "Alexa Liras",
    },
    {
      name: "John Michael",
      merchain: "Alexa Liras",
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

      <Tabs className="overflow-auto my-5">
        <TabsHeader className="h-12 rounded overflow-auto w-fit">
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="text-[13px] h-10 mx-1 w-36"
            >
              <div className="flex justify-between items-center w-32">
                {label}
                <div className="bg-black text-white px-[10px] h-6 rounded flex items-center">
                  1
                </div>
              </div>
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>

      <div className="w-full p-5 border-[#F9F9F9] border-2 rounded">
        <span className="text-[14px]">Batch Date : 18/07/2023</span>
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
                  <td className="px-6 py-4">{row.name}</td>
                  <td className="px-6 py-4">{row.merchain}</td>
                  <td className="px-6 py-4">20 / 7 / 66</td>
                  <td className="px-6 py-4">10</td>
                  <td className="px-6 py-4">300</td>
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
