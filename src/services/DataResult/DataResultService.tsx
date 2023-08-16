import { api } from "../axios";
import { responseModel } from "../../models/DataResult/DataResultModel";

const pageSize = 2;
export const display = async (filter: string, month: string, pageNo: string) => {
  let { data } = await api.get<responseModel>(`/document/display`, {
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
  let { data } = await api.get<responseModel>(`/document/display-per-date`, {
      params: {
        filter: filter,
        inputDate: date,
        pageNo: pageNo,
        pageSize: pageSize,
      },
    });
  return data;
}

export const search = async (lotName: string, pageNo: string) => {
  let { data } = await api.get<responseModel>(`/document/search`, {
    params: {
      lotName: lotName,
      pageNo: pageNo,
      pageSize: pageSize
    }
  });
  return data;
}
