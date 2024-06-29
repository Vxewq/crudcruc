import React from 'react'; 
import { useForm } from 'react-hook-form'; 
 
export default function Ass() { 
  const { register, handleSubmit, formState: { errors } } = useForm(); 
   console.log(errors); 
   
  const onSubmit = (data) => { 
    fetch("https://crudcrud.com/api/d4adae0c56a24a0da1973cc76a09438b", { 
        method: 'POST', 
        body: JSON.stringify(data) 
    }) 
  }; 
  return ( 
   <div className="flex flex-col"> 
     <form onSubmit={handleSubmit(onSubmit)}> 
    <div className="flex flex-col items-center gap-10 pt-[100px]"> 
    <input className='border-solid border-[1px] border-black rounded-[20px] w-[300px] h-[50px]'  type="text" placeholder="name" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /> 
      <input className='border-solid border-[1px] border-black rounded-[20px] w-[300px] h-[50px]' type="tel" placeholder="surname" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} /> 
      <input type="submit" /> 
    </div> 
    </form> 
   </div> 
  ); 
}