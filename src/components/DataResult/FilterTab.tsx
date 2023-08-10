import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { filterTabModel } from "../../models/DataResult/DataResultModel";
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
    label: "Approve",
    value: "countApprove",
    asParam: "approve"
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
  }
];
type thisModel = {
  updateFilter: (arg:string) => void,
  amount: filterTabModel
}
export const FilterTab = (props:thisModel) => {
  function twClassName(type:string, arg: string){
    switch (type) {
      case 'label':
        switch (arg) {
          case 'pending':
            return "text-[13px] h-10 mx-1 w-36 text-[#EE9B00]"
          case 'approve':
            return "text-[13px] h-10 mx-1 w-36 text-[#39876D]"
          case 'wait_for_approve':
            return "text-[13px] h-10 mx-1 w-36 text-[#005F73]"
          case 'invalid_data':
            return "text-[13px] h-10 mx-1 w-36 text-[#AE2012]"
          default:
            return "text-[13px] h-10 mx-1 w-36";
        }
      case 'value':
        switch (arg) {
          case 'pending':
            return "bg-[#EE9B00] text-white px-[10px] h-6 rounded flex items-center"
          case 'approve':
            return "bg-[#39876D] text-white px-[10px] h-6 rounded flex items-center"
          case 'wait_for_approve':
            return "bg-[#005F73] text-white px-[10px] h-6 rounded flex items-center"
          case 'invalid_data':
            return "bg-[#AE2012] text-white px-[10px] h-6 rounded flex items-center"
          default:
            return "bg-black text-white px-[10px] h-6 rounded flex items-center";
        }
      default:
        break;
    }
  }
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
            className={twClassName("label", asParam)}
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onClick={() => {
              props.updateFilter(asParam);
            }}
          >
            <div className="flex justify-between items-center w-32">
              {label}
              <div className={twClassName("value", asParam)}>
                {props.amount[value as keyof filterTabModel]}
              </div>
            </div>
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
