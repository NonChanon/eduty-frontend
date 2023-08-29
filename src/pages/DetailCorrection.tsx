import {
  Breadcrumbs,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useToggle } from "../hooks/useToggle";
import EditDetail from "./EditDetail";
import { HeaderSection } from "../components/DetailCorrection/HeaderSection";
import { deny, display, search, submitToRd } from "../services/DetailCorrection/DetailCorrectionService";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { responseModel } from "../models/DetailCorrection/DetailCorrectionModel";
import { TableSection } from "../components/DetailCorrection/TableSection";
import { DataNotFound } from "../components/DataNotFound";

export default function DetailCorrection() {

  const location = useLocation();
  let navigate = useNavigate();
  const lotName:string = location.pathname.split('/')[1];

  const [searchTaxId, setSearchTaxId] = useState({
    partyTaxRegistration: ""
  });

  const [data, setData] = useState<responseModel>({
    message: "",
    status: "",
    lot: {
      lotId: "",
      lotName: "",
      sendRdStatus: "",
      rdResponseMessage: "",
      transactionDate: "",
      totalDuty: "",
      totalDupDutyAmount: "",
      totalPayment: "",
      totalDoc: "",
    },
    detail: [{
      instId: "",
      partyTaxRegistrationId: "",
      name: "",
      surname: "",
      dutyAmount: "",
      dupDutyAmount: "",
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

  const [onSearch, setOnSearch] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTaxId({...searchTaxId, [e.target.name]: e.target.value})
  }

  const handleSearch = (e:React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement>, pageNo: string) => {
    e.preventDefault();
    console.log("Search Function!");
    if (searchTaxId.partyTaxRegistration === "") {
      return handleDisplay(currentPage);
    }
    search(lotName, searchTaxId.partyTaxRegistration, pageNo).then((res) => {
      setCurrentPage(pageNo);
      setData(res);
      setOnSearch(true);
    });
  }

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
    setOnSearch(false);
    display(lotName, pageNo).then((res) => {
      setData(res);
    });
  };

  return (
    <div className="w-full mx-auto px-5 my-[70px]">
      <div className="md:flex md:justify-between md:items-center">
        <span className="font-[600] text-lg">Detail Correction</span>
        <div className="flex items-center">
          <div className="w-60 mx-3 flex items-center">
            <Input
              name="partyTaxRegistration"
              label="Party Tax ID"
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
              }} nonce={undefined} onResize={undefined} onResizeCapture={undefined}            />
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
      <div className="flex items-center">
        <Breadcrumbs
          className=" p-0 mb-5 bg-white"
          separator={<Icon icon="iconamoon:arrow-right-2-light" />} 
          nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
          <Link to="/" className="opacity-60">
            Batch Data Result
          </Link>
          <Link to={`/${data.lot.lotName}/detail`} className="opacity-60">
            Detail Correction
          </Link>
        </Breadcrumbs>
      </div>
      <div className="w-full p-5 border-[#F9F9F9] border-2 rounded">
        <HeaderSection lot={data.lot}/>
        {data.status === "02" ? <DataNotFound /> : 
          <TableSection onSearch={onSearch} detail={data.detail} paging={data.paging} handleSearch={handleSearch} handleDisplay={handleDisplay} setHidden={setHidden} setInstId={setInstId}/>
        }
      </div>
      {data.status !== "02" && <div className="flex justify-end mt-5">
        <Button className="ml-2 rounded bg-[#B0B0B0] shadow-none hover:shadow-none font-Montserrat normal-case" nonce={undefined} onResize={undefined} onResizeCapture={undefined}
          onClick={(e) => {
            e.preventDefault();
            deny(data.lot.lotId);
            navigate(`/home`);
          }}
        >
          Denied
        </Button>
        <Button className="ml-2 rounded bg-[#000000] shadow-none hover:shadow-none font-Montserrat normal-case" nonce={undefined} onResize={undefined} onResizeCapture={undefined}
          onClick={(e) => {
            e.preventDefault();
            submitToRd(data.lot.lotId);
            navigate(`/home`);
          }}        
        >
          Submit
        </Button>
      </div>}
      {isOpen && <EditDetail setHidden={setHidden} instId={instId} lotId={data.lot.lotId}/>}
    </div>
  );
}
