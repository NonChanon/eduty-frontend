import { pagingModel } from "../commons/GlobalModels"

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
    apiRefNo: string,
    paymentDatetime: string,
    totalDoc: string,
    totalPayment: string,
}

export type responseModel = {
    message: string,
    status: string,
    data: {
        [date:string]: {
            data: dataModel[],
            paging: pagingModel
        }
    }
}