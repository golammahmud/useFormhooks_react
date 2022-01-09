import React from 'react'
import { useForm } from "react-hook-form";
import '../../index.css';



function WatchMood() {
    const { register, watch, formState: { errors }, handleSubmit } = useForm();
  const watchShowAge = watch("showAge", false); // you can supply default value as second argument
  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  const watchFields = watch(["showAge", "number"]); // you can also target specific fields by their names

  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = data => console.log(data);
  const onError = (errors, e) => console.log(errors, e);

  console.log(errors);
  return (
    <div className="bg-blue-400">
      <p>Please check the box for entry permissions.</p> 
      <form onSubmit={handleSubmit((onSubmit, onError))}>
        <input type="checkbox" {...register("showAge")} />
        
        {/* based on yes selection to display Age Input*/}
        {watchShowAge && <input type="number" {...register("age", {required:"This field is required", min:{ value:50,message:"value can not be less than 50"}, max:{ value:100 ,message:"value can not be greater than 100"} })} />}
        <p className="text-red-500">{errors.age?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default WatchMood;
