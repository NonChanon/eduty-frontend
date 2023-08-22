export type partyModel = {
    instId: string,
    contractNo: string,
    creationDate: string,
    effectiveDate: string,
    expireDate: string,
    dutyAmount: string,
    surchargeAmount: string,
    fineAmount: string,
    totalAmount: string,
    titleName: string,
    name: string,
    surname: string,
    buildingName: string,
    roomNo: string,
    floorNo: string,
    villageName: string,
    buildingNumber: string,
    moo: string,
    soiName: string,
    junctionName: string,
    streetName: string,
    citySubDivisionName: string,
    cityName: string,
    countrySubDivisionName: string,
    postCode: string,
    countryId: string
}

export type payerModel = {
    lotId: string,
    payerTaxRegistrationId: string,
    branchNo: string,
    branchType: string,
    relationship: string
}

export type updatePayerModel = {
    payerTaxRegistrationId: string,
    branchType: string
}

export type responseModel = {
    message: string,
    status: string,
    party: partyModel,
    payer: payerModel
}