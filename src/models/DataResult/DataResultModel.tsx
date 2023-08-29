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
    lotId: string,
    lotName: string,
    sendRdStatus: string,
    rdResponseMessage: string,
    transactionDate: string,
    totalDuty: string,
    totalDupDutyAmount: string,
    totalPayment: string,
    totalDoc: string,
    approveBy: string,
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