import { Input } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import { backend } from "./../../axios.js";

export default function Framework() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    backend.post("/users", data);
  };

  return (
    <>
      <h1>lolsad</h1>
      <form className="p-10 flex gap-5" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <Input label="name" {...field} />}
        />
        <Controller
          name="age"
          control={control}
          render={({ field }) => <Input label="age" {...field} />}
        />
        <button>send</button>
      </form>
    </>
  );
}
