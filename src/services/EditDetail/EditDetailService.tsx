import { api } from "../axios";
import { responseModel, updatePartyModel } from "../../models/EditDetail/EditDetailModel";

export const display = async (instId: string) => {
  let { data } = await api.get<responseModel>(`/party/display`, {
      params: {
        instId: instId
      },
    });
  console.log(data);
  return data;
}

export const update = async (instId: string, body: updatePartyModel) => {
  let { data } = await api.put(`/party/update`, body, {
    params: {
      instId: instId
    }
  });
  console.log(data);
  return data;
}