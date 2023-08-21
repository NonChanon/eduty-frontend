import { Input } from "@material-tailwind/react";

type InputBoxProps = {
  title: string;
  name: string;
  width: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputBox(props: InputBoxProps) {
  return (
    <div className="flex items-center justify-end">
      <label className="mr-3 text-right w-fit">{props.title}</label>
      <Input
        name={props.name}
        type="text"
        placeholder={props.placeholder}
        defaultValue={props.placeholder}
        className="!border !border-blue-gray-50 bg-white text-blue-gray-500  placeholder:text-blue-gray-200 text-xs"
        labelProps={{
          className: "hidden",
        }}
        containerProps={
          props.width === "60"
            ? { className: "!w-[60%] !min-w-0" }
            : { className: "!w-[30%] !min-w-0" }
        }
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onChange={props.onChange}
      />
    </div>
  );
}
