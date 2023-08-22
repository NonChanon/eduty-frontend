import { api } from "../axios";
import { responseModel, updatePayerModel } from "../../models/EditDetail/EditDetailModel";

export const display = async (instId: string) => {
  let { data } = await api.get<responseModel>(`/party/display`, {
      params: {
        instId: instId
      },
    });
  console.log(data);
  return data;
}

export const update = async (lotId: string, body: updatePayerModel) => {
  let { data } = await api.put(`/payer/update`, body, {
    params: {
      lotId: lotId
    }
  });
  console.log(data);
  return data;
}