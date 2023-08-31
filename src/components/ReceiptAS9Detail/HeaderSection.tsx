import { lotModel } from "../../models/ReceiptAS9Detail/ReceiptAS9DetailModel";

type thisModel = {
    lot: lotModel
}

export const HeaderSection = (props:thisModel) => {
    return(
        <div className="flex justify-between text-sm">
          <div className="w-[75%] grid grid-cols-4 gap-3">
            <span>Lot Name : {props.lot.lotId}</span>
            <span>API Ref No. : {props.lot.apiRefNo}</span>
            <span>Payment Datetime: {props.lot.paymentDatetime}</span>
            <span>Total Doc : {props.lot.totalDoc}</span>
            <span>Total Duty : {props.lot.totalDuty}</span>
            <span>Total Surcharge : {props.lot.totalSurcharge}</span>
            <span>Total Fine : {props.lot.totalFine}</span>
            <span>Total Payment : {props.lot.totalAmount}</span>
          </div>
        </div>
    );
}