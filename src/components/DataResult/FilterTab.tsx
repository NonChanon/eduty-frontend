import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { filterTabModel } from "../../services/DataResult/DataResultModel";
import { useState } from "react";
const filters = [
  {
    label: "All",
    value: "countAll",
    asParam: "all"
  },
  {
    label: "Pending",
    value: "countPending",
    asParam: "pending"
  },
  {
    label: "In progress",
    value: "countInProgress",
    asParam: "wait_for_approve"
  },
  {
    label: "Invalid Data",
    value: "countInvalidData",
    asParam: "invalid_data"
  },
  {
    label: "Deny",
    value: "countDeny",
    asParam: "deny"
  }
];
type thisModel = {
  updateFilter: (arg:string) => void,
  amount: filterTabModel
}
export const FilterTab = (props:thisModel) => {
  return (
    <Tabs className="overflow-auto my-5" value="countAll">
      <TabsHeader
        className="h-12 rounded overflow-auto w-fit"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        {filters.map(({ label, value, asParam }) => (
          <Tab
            key={value}
            value={value}
            className="text-[13px] h-10 mx-1 w-36"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onClick={() => props.updateFilter(asParam)}
          >
            <div className="flex justify-between items-center w-32">
              {label}
              <div className="bg-black text-white px-[10px] h-6 rounded flex items-center">
                {props.amount[value as keyof filterTabModel]}
              </div>
            </div>
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
