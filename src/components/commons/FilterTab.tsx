import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { filterCountModel } from "../../models/commons/GlobalModels";
import { filterModel } from "../../models/commons/GlobalModels";
type thisModel = {
  updateFilter: (arg:string) => void,
  filters: filterModel[],
  amount: filterCountModel
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
          case 'cancel':
            return "text-[13px] h-10 mx-1 w-36 text-gray-600"
          case 'n':
            return "text-[13px] h-10 mx-1 w-36 text-[#EE9B00]"
          case 'y':
            return "text-[13px] h-10 mx-1 w-36 text-[#39876D]"
          default:
            return "text-[13px] h-10 mx-1 w-36";
        }
      case 'value':
        switch (arg) {
          case 'pending':
            return "bg-[#EE9B00] text-white px-[10px] h-6 rounded flex items-center"
          case 'n':
            return "bg-[#EE9B00] text-white px-[10px] h-6 rounded flex items-center"
          case 'y':
            return "bg-[#39876D] text-white px-[10px] h-6 rounded flex items-center"
          case 'approve':
            return "bg-[#39876D] text-white px-[10px] h-6 rounded flex items-center"
          case 'wait_for_approve':
            return "bg-[#005F73] text-white px-[10px] h-6 rounded flex items-center"
          case 'invalid_data':
            return "bg-[#AE2012] text-white px-[10px] h-6 rounded flex items-center"
          case 'cancel':
            return "bg-gray-600 text-white px-[10px] h-6 rounded flex items-center"
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
        {props.filters.map(({ label, value, asParam }) => (
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
                {props.amount[value as keyof filterCountModel]}
              </div>
            </div>
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
