import { api } from "../axios";
import { responseModel } from "../../models/ReceiptAS9Detail/ReceiptAS9DetailModel";

const pageSize = 5;
export const display = async (lotId: string, pageNo: string) => {
  let { data } = await api.get<responseModel>(`/receipt-as9/detail/display`, {
      params: {
        lotId: lotId,
        pageNo: pageNo,
        pageSize: pageSize,
      },
    });
    console.log(data);
  return data;
}

export const search = async (lotId: string, taxId: string, pageNo: string) => {
  let { data } = await api.get<responseModel>(`/receipt-as9/detail/${lotId}/search`, {
    params: {
      taxId: taxId,
      pageNo: pageNo,
      pageSize:pageSize
    }
  });
  console.log(data);
  return data;
}