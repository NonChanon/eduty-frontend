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
  import { HeaderSection } from "../components/ReceiptAS9Detail/HeaderSection";
  import { display, search } from "../services/ReceiptAS9Detail/ReceiptAS9DetailService";
  import { Link, useLocation } from "react-router-dom";
  import { responseModel } from "../models/ReceiptAS9Detail/ReceiptAS9DetailModel";
  import { TableSection } from "../components/ReceiptAS9Detail/TableSection";
  
  export default function ReceiptAS9Detail() {
  
    const location = useLocation();
    const lotId:string = location.pathname.split('/')[2];
  
    const [data, setData] = useState<responseModel>({
      message: "",
      status: "",
      lot: {
        lotId: "",
        lotName: "",
        apiRefNo: "",
        paymentDatetime: "",
        totalDuty: "",
        totalSurcharge: "",
        totalFine: "",
        totalPayment: "",
        totalDoc: "",
      },
      detail: [{
        instId: "",
        refNo: "",
        partyTaxRegistrationId: "",
        name: "",
        surname: "",
        dutyAmount: "",
        surchargeAmount: "",
        fineAmount: "",
        totalAmount: "",
        receiptNo: "",
        receiptDate: "",
        checkPayCode: "",
        checkPayQr: "",
        formFileData: "",
        dutyReceipt: "",
        fineReceipt: ""
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
    const [searchTaxId, setSearchTaxId] = useState({
      partyTaxRegistration: ""
    });

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTaxId({...searchTaxId, [e.target.name]: e.target.value})
    }
  
    const handleSearch = (e:React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement>, pageNo: string) => {
      e.preventDefault();
      console.log("Search Function!");
      if (searchTaxId.partyTaxRegistration === "") {
        return handleDisplay(currentPage);
      }
      search(lotId, searchTaxId.partyTaxRegistration, pageNo).then((res) => {
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
      display(lotId, currentPage).then((res) => {
        setData(res);
      });
    };
  
    useEffect(() => {
      console.log("useEffect Trigger");
      display(lotId, currentPage).then((res) => {
        setData(res);
      });
    }, []);
  
    const handleDisplay = (pageNo: string) => {
      console.log("Change Page");
      setCurrentPage(pageNo);
      display(lotId, pageNo).then((res) => {
        setData(res);
      });
    };
  
    return (
      <div className="w-full mx-auto px-5 my-[70px]">
        <div className="md:flex md:justify-between md:items-center">
          <span className="font-[600] text-lg">Receipt & AS9 Detail</span>
          <div className="flex items-center">
            <div className="w-60 mx-3 flex items-center">
              <Input
                name="partyTaxRegistration"
                label="Tax ID"
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
            nonce={undefined} onResize={undefined} onResizeCapture={undefined}        >
            <Link to="/receipt" className="opacity-60">
              Receipt & AS9
            </Link>
            <Link to={`/receipt/${data.lot.lotName}/detail`} className="opacity-60">
              Receipt & AS9 Detail
            </Link>
          </Breadcrumbs>
        </div>
        <div className="w-full p-5 border-[#F9F9F9] border-2 rounded">
          <HeaderSection lot={data.lot}/>
          <TableSection onSearch={onSearch} handleSearch={handleSearch} detail={data.detail} paging={data.paging} handleDisplay={handleDisplay} setHidden={setHidden} setInstId={setInstId}/>
        </div>
      </div>
    );
  }
  