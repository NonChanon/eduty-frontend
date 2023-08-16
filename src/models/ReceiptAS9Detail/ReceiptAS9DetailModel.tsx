import { pagingModel } from "../commons/GlobalModels"

export type lotModel = {
    lotName: string,
    apiRefNo: string,
    paymentDatetime: string,
    totalDuty: string,
    totalSurcharge: string,
    totalFine: string,
    totalPayment: string,
    totalDoc: string,
}

export type detailModel = {
    instId: string,
    refNo: string,
    partyTaxRegistrationId: string,
    name: string,
    surname: string,
    dutyAmount: string,
    surchargeAmount: string,
    fineAmount: string,
    totalAmount: string,
    receiptNo: string,
    receiptDate: string,
    checkPayCode: string,
    checkPayQr: string,
    formFileData: string,
    dutyReceipt: string,
    fineReceipt: string
}

export type responseModel = {
    message: string,
    status: string,
    lot: lotModel,
    detail: detailModel[],
    paging: pagingModel
}