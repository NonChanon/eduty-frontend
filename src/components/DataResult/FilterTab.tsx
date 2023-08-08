import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { filterModel } from "../../services/DataResult/DataResultModel";
const filters = [
  {
    label: "All",
    value: "countAll",
  },
  {
    label: "Pending",
    value: "countPending",
  },
  {
    label: "In progress",
    value: "countInProgress",
  },
  {
    label: "Invalid Data",
    value: "countInvalidData",
  },
  {
    label: "Deny",
    value: "countDeny"
  }
];
type thisModel = {
    amount: filterModel
}
export const FilterTab = (props:thisModel) => {
  let { amount } = props
  return (
    <Tabs className="overflow-auto my-5" value="countAll">
      <TabsHeader
        className="h-12 rounded overflow-auto w-fit"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        {filters.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className="text-[13px] h-10 mx-1 w-36"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <div className="flex justify-between items-center w-32">
              {label}
              <div className="bg-black text-white px-[10px] h-6 rounded flex items-center">
                {amount[value as keyof filterModel]}
              </div>
            </div>
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
