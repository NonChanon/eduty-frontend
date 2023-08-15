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
    partyTaxRegistrationId: string,
    titleName: string,
    name: string,
    surname: string,
    branchNo: string,
    branchType: string,
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
    payerTaxRegistrationId: string,
    branchNo: string,
    branchType: string,
    relationship: string
}

export type updatePartyModel = {
    partyTaxRegistrationId: string,
    branchType: string
}

export type responseModel = {
    message: string,
    status: string,
    party: partyModel,
    payer: payerModel
}