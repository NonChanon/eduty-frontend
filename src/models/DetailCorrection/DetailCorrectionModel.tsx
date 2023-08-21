import { pagingModel } from "../commons/GlobalModels"

export type lotModel = {
    lotId: string,
    lotName: string,
    sendRdStatus: string,
    rdResponseMessage: string,
    transactionDate: string,
    totalDuty: string,
    totalSurcharge: string,
    totalFine: string,
    totalPayment: string,
    totalDoc: string,
}

export type detailModel = {
    instId: string,
    partyTaxRegistrationId: string,
    name: string,
    surname: string,
    dutyAmount: string,
    surchargeAmount: string,
    fineAmount: string,
    totalAmount: string,
}

export type responseModel = {
    message: string,
    status: string,
    lot: lotModel,
    detail: detailModel[],
    paging: pagingModel
}