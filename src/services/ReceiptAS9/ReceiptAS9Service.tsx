import { api } from "../axios";
import { responseModel } from "../../models/ReceiptAS9/ReceiptAS9Model";

const pageSize = 2;
export const display = async (filter: string, month: string, pageNo: string) => {
    let { data } = await api.get<responseModel>(`/receipt-as9/display`, {
        params: {
          filter: filter,
          inputMonth: month,
          pageNo: pageNo,
          pageSize: pageSize,
        },
      });
      console.log(data);
    return data;
  }

export const displayPerDate = async (filter: string, date: string, pageNo: string) => {
    let { data } = await api.get<responseModel>(`/receipt-as9/display-per-date`, {
        params: {
          filter: filter,
          inputDate: date,
          pageNo: pageNo,
          pageSize: pageSize,
        },
      });
    return data;
  }