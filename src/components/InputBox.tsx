import { Input } from "@material-tailwind/react";

type InputBoxProps = {
  name: string;
  width: string;
};

export default function InputBox(props: InputBoxProps) {
  return (
    <div className="flex items-center justify-end">
      <label className="mr-3 text-right w-fit">{props.name}</label>

      <Input
        type="text"
        placeholder={props.name}
        className="!border !border-blue-gray-50 bg-white text-blue-gray-500  placeholder:text-blue-gray-200 text-xs"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: `!w-[${props.width}%] !min-w-0` }}
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      />
    </div>
  );
}
