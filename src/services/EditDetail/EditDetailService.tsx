import { api } from "../axios";
import { responseModel } from "../../models/EditDetail/EditDetailModel";

export const display = async (instId: string) => {
  let { data } = await api.get<responseModel>(`/party/display`, {
      params: {
        instId: instId
      },
    });
    console.log(data);
  return data;
}