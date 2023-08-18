import { api } from "../axios";
import { responseModel } from "../../models/ReceiptAS9/ReceiptAS9Model";

const pageSize = 2;
export const display = async (month: string, pageNo: string) => {
  let { data } = await api.get<responseModel>(`/receipt-as9/display`, {
      params: {
        inputMonth: month,
        pageNo: pageNo,
        pageSize: pageSize,
      },
    });
    console.log(data);
  return data;
}

export const displayPerDate = async (date: string, pageNo: string) => {
  let { data } = await api.get<responseModel>(`/receipt-as9/display-per-date`, {
      params: {
        inputDate: date,
        pageNo: pageNo,
        pageSize: pageSize,
      },
    });
  return data;
}

export const search = async (lotName: string, pageNo: string) => {
  let { data } = await api.get<responseModel>(`/receipt-as9/search`, {
    params: {
      lotName: lotName,
      pageNo: pageNo,
      pageSize: pageSize
    }
  });
  return data;
}