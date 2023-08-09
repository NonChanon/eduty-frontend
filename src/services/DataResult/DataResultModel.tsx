export type dataModel = {
    lotId: string,
    lotName: string,
    sendRdStatus: string,
    rdResponseMessage: string,
    transactionDate: string,
    totalDuty: string,
    totalSurcharge: string,
    totalPayment: string,
    totalDoc: string,
    approveBy: string,
}

export type pagingModel = {
    pageNo: string,
    pageSize: string,
    rowsPerPageOption: string[],
    totalPage: string,
    totalRow: string,
    pageSizeStr: string,
    pageNoStr: string,
    totalPageStr: string,
    totalRowStr: string
}

export type filterTabModel = {
    countAll: string,
    countPending: string,
    countInProgress: string,
    countInvalidData: string,
    countApprove: string,
    countDeny: string,
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
    amount: filterTabModel
}