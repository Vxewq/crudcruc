import { Input } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import { backend } from '/Web/crudcrud/src/axios.js'

export default function Framework() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://crudcrud.com/api/d4adae0c56a24a0da1973cc76a09438b", {
        method: 'POST',
        body: JSON.stringify(data)
    })
  };
// function onSubmit(){
//     console.log();
// }
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

        <input type="submit" />
      </form>
    </>
  );
}
