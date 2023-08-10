import { api } from "../axios";
import { responseModel } from "../../models/DetailCorrection/DetailCorrectionModel";

const pageSize = 5;
export const display = async (lotName: string, pageNo: string) => {
  let { data } = await api.get<responseModel>(`/document/detail/${lotName}/display`, {
      params: {
        pageNo: pageNo,
        pageSize: pageSize,
      },
    });
    console.log(data);
  return data;
}