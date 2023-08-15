import {
  Breadcrumbs,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import Datepicker from "react-tailwindcss-datepicker";
import { useEffect, useState } from "react";
import { useToggle } from "../hooks/useToggle";
import EditDetail from "./EditDetail";
import { HeaderSection } from "../components/DetailCorrection/HeaderSection";
import { display } from "../services/Detailcorrection/DetailCorrectionService";
import { useLocation } from "react-router-dom";
import { responseModel } from "../models/DetailCorrection/DetailCorrectionModel";
import { TableSection } from "../components/DetailCorrection/TableSection";

export default function DetailCorrection() {

  const location = useLocation();
  const lotName:string = location.pathname.split('/')[1];

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const [data, setData] = useState<responseModel>({
    message: "",
    status: "",
    lot: {
      lotName: "",
      sendRdStatus: "",
      rdResponseMessage: "",
      transactionDate: "",
      totalDuty: "",
      totalSurcharge: "",
      totalFine: "",
      totalPayment: "",
      totalDoc: "",
    },
    detail: [{
      instId: "",
      partyTaxRegistrationId: "",
      name: "",
      surname: "",
      dutyAmount: "",
      surchargeAmount: "",
      fineAmount: "",
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
  });

  const [currentPage, setCurrentPage] = useState<string>("1");

  const [instId, setInstId] = useState("");

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const { status: isOpen, toggleStatus: setIsOpen } = useToggle();

  const setHidden = () => {
    setIsOpen();
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
    display(lotName, currentPage).then((res) => {
      setData(res);
    });
  };

  useEffect(() => {
    console.log("useEffect Trigger");
    display(lotName, currentPage).then((res) => {
      setData(res);
    });
  }, []);

  const handleDisplay = (pageNo: string) => {
    console.log("Change Page");
    setCurrentPage(pageNo);
    display(lotName, pageNo).then((res) => {
      setData(res);
    });
  };

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
              }} nonce={undefined} onResize={undefined} onResizeCapture={undefined}            />
          </div>
          <IconButton className="bg-black shadow-none hover:shadow-none rounded" 
          nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
            <Icon icon="tabler:search" width="16" />
          </IconButton>
        </div>
      </div>
      <div className="flex items-center">
        <Breadcrumbs
          className=" p-0 mb-5 bg-white"
          separator={<Icon icon="iconamoon:arrow-right-2-light" />} 
          nonce={undefined} onResize={undefined} onResizeCapture={undefined}        >
          <a href="/" className="opacity-60">
            Batch Data Result
          </a>
          <a href="/detail" className="opacity-60">
            Detail Correction
          </a>
        </Breadcrumbs>
      </div>
      <div className="w-full p-5 border-[#F9F9F9] border-2 rounded">
        <HeaderSection lot={data.lot}/>
        <TableSection detail={data.detail} paging={data.paging} handleDisplay={handleDisplay} setHidden={setHidden} setInstId={setInstId}/>
      </div>
      <div className="flex justify-end mt-5">
        <Button className="ml-2 rounded bg-[#B0B0B0] shadow-none hover:shadow-none font-Montserrat normal-case" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
          Denied
        </Button>
        <Button className="ml-2 rounded bg-[#000000] shadow-none hover:shadow-none font-Montserrat normal-case" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
          Submit
        </Button>
      </div>
      {isOpen && <EditDetail setHidden={setHidden} instId={instId}/>}
    </div>
  );
}
