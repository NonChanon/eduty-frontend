import { filterCountModel, pagingModel } from "../commons/GlobalModels"

export type displayReqModel = {
    filter: string,
    month: string,
    pageNo: string
}

export type displayPerDateReqModel = {
    filter: string,
    date: string,
    pageNo: string
}

export type dataModel = {
    lotName: string,
    ref1: string,
    ref2: string,
    expireDate: string,
    totalDuty: string,
    totalFine: string,
    totalSurcharge: string,
    totalAmount: string,
    paymentStatus: string,
    paymentDatetime: string,
    qrPayment: string,
    payInSlipFile: string
}

export type responseModel = {
    message: string,
    status: string,
    data: {
        [date:string]: {
            data: dataModel[],
            paging: pagingModel
        }
    },
    amount: filterCountModel
}