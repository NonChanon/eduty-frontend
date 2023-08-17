import { api } from "../axios";
import { responseModel } from "../../models/ReceiptAS9Detail/ReceiptAS9DetailModel";

const pageSize = 5;
export const display = async (lotName: string, pageNo: string) => {
  let { data } = await api.get<responseModel>(`/receipt-as9/detail/${lotName}/display`, {
      params: {
        pageNo: pageNo,
        pageSize: pageSize,
      },
    });
    console.log(data);
  return data;
}

export const search = async (lotName: string, taxId: string, pageNo: string) => {
  let { data } = await api.get<responseModel>(`/receipt-as9/detail/${lotName}/search`, {
    params: {
      taxId: taxId,
      pageNo: pageNo,
      pageSize:pageSize
    }
  });
  console.log(data);
  return data;
}