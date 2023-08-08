import { api } from "../axios";
import { responseModel } from "./DataResultModel";

const pageSize = 5;
export const dataResultDisplay = async (filter: string, month: string, pageNo: string) => {
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

export const dataResultDisplayPerDate = async (filter: string, date: string, pageNo: string) => {
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
