import { Input, Button } from "@material-tailwind/react";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FAFAFC]">
      <form className="flex flex-col items-center w-80 h-[350px] -mt-[100px] p-10 rounded-lg shadow-xl bg-white">
        <span className="text-xl font-bold text-center">LOGIN</span>
        <div className="my-7 flex flex-col gap-6 w-full">
          <Input color="black" size="lg" label="Username" />
          <Input type="password" color="black" size="lg" label="Password" />
        </div>
        <Button
          className="h-[44px] bg-black shadow-none hover:shadow-none font-Montserrat"
          fullWidth
        >
          LOGIN
        </Button>
      </form>
    </div>
  );
}
