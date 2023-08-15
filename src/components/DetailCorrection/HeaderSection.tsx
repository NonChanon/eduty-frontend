import { Button } from "@material-tailwind/react";
import { lotModel } from "../../models/DetailCorrection/DetailCorrectionModel";

type thisModel = {
    lot: lotModel
}

export const HeaderSection = (props:thisModel) => {
  function twClassName(type:string, arg: string){
    switch (type) {
      case 'status':
        switch (arg) {
          case 'pending':
            return "ml-2 rounded bg-[#EE9B00] shadow-none hover:shadow-none font-Montserrat capitalize cursor-default";
          case 'approve':
            return "ml-2 rounded bg-[#39876D] shadow-none hover:shadow-none font-Montserrat capitalize cursor-default";
          case 'wait_for_approve':
            return "ml-2 rounded bg-[#005F73] shadow-none hover:shadow-none font-Montserrat capitalize cursor-default";
          case 'invalid_data':
            return "ml-2 rounded bg-[#AE2012] shadow-none hover:shadow-none font-Montserrat capitalize cursor-default";
          default:
            return "ml-2 rounded bg-black shadow-none hover:shadow-none font-Montserrat capitalize cursor-default";
        }
      default:
        break;
    }
  }
    return(
        <div className="flex justify-between text-sm">
          <div className="w-[60%] grid grid-cols-4 gap-3">
            <span>Lot Name : {props.lot.lotName}</span>
            <span>Last Update: {props.lot.transactionDate}</span>
            <span>Total Doc : {props.lot.totalDoc}</span>
            <span></span>
            <span>Total Duty : {props.lot.totalDuty}</span>
            <span>Total Surcharge : {props.lot.totalSurcharge}</span>
            <span>Total Fine : {props.lot.totalFine}</span>
            <span>Total Payment : {props.lot.totalPayment}</span>
          </div>
          <div>
            Status :
            <Button
                className={twClassName('status', props.lot.sendRdStatus.toLowerCase())}
                size="sm" nonce={undefined} onResize={undefined} onResizeCapture={undefined}            >
              {props.lot.sendRdStatus.toLowerCase()}
            </Button>
          </div>
        </div>
    );
}