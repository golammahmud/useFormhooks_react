// import * as React from "react";
// import { useForm } from "react-hook-form";
// import '../../index.css';
// const Usevalue = () => {
//   const { register, handleSubmit, setValue } = useForm();

//   const onSubmit = data => {
//     console.log(data)
//   };

//   return (
//     <div className="bg-slate-400">
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName")} />
//       <input {...register("lastName")} />
//       <button onClick={() => setValue("firstName", "Bill")}>
//         Set First Name Value
//       </button>
//       <button
//         onClick={() =>
//           setValue("lastName", "Luo", {
//             shouldValidate: true,
//             shouldDirty: true
//           })
//         }
//       >
//         Set Last Name
//       </button>
//       <input type="submit" />
//     </form>
//     </div>
//   );
// };
// export default Usevalue;









import * as React from "react";
import { useForm } from "react-hook-form";



export default function Usevalue() {
  const { watch, register, handleSubmit,setFocus, setValue, formState } = useForm
   ({
    defaultValues: {
      a: "",
      b: "",
      c: ""
    }
  });
  const onSubmit = (data) => console.log(data);
  const [a, b] = watch(["a", "b"]);
React.useEffect(() => {
  setFocus("a");
}, [setFocus]);

  React.useEffect(() => {
    if (formState.touchedFields.a && formState.touchedFields.b && a && b) {
      setValue("c", `${a} ${b}`);
    }
  }, [setValue, a, b, formState]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("a")} placeholder="a" />
      <input {...register("b")} placeholder="b" />
      <input {...register("c")} placeholder="c" />
      <input type="submit" />

      <button
        type="button"
        onClick={() => {
          setValue("a", "what", { shouldTouch: true });
          setValue("b", "ever", { shouldTouch: true });
        }}
      >
        trigger value
      </button>
    </form>
  );
}
