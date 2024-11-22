/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"


export default function StudentForm({ groups, genders, onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
      const handleSubmitForm = (data) => {
        onSubmit(data);
        reset();
      }
  return (
    <>
    <form onSubmit={handleSubmit(handleSubmitForm)} className="max-w-2xl mx-auto capitalize p-8 rounded-xl bg-gray-950">
        <div className="flex gap-2">
            <div className="w-full">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name here" className="input input-bordered w-full" {...register("name", {required: true})}/>
                {errors.name && <span className="text-red-500">Name is required</span>}
            </div>
            <div className="w-full">
                <label className="label">
                    <span className="label-text">Gender</span>
                </label>
                <select defaultValue="" className="select select-bordered w-full" {...register("gender", {required: true})}>
                    <option value={""} disabled>Gender</option>
                    {
                    genders.map((gender) => (
                        <option key={gender} value={gender}>{gender}</option>
                    ))
                }
                </select>
                {errors.gender && <span className="text-red-500">Select Gender</span>}
            </div>
        </div>
        <div className="flex gap-2">
            <div className="w-full">
                <label className="label">
                    <span className="label-text">Group</span>
                </label>
                <select defaultValue="" className="select select-bordered w-full" {...register("group", {required: true})}>
                    <option value={""} disabled>Select Group</option>
                    {
                    groups.map((group) => (
                        <option key={group} value={group}>{group}</option>
                    ))
                    }
                </select>
                {errors.group && <span className="text-red-500">Select Group</span>}
            </div>
            <div className="w-full">
                <label className="label">
                    <span className="label-text">Mark</span>
                </label>
                <input type="number" placeholder="Add mark" className="input input-bordered w-full" {...register("mark", {required: true, max: 100})}/>
                {errors.mark?.type === "required" && <span className="text-red-500">Enter Mark</span>}
                {errors.mark?.type === "max" && <span className="text-red-500">Mark must be less than 100</span>}

            </div>
        </div>
        <button type="submit" className="btn btn-primary mt-4">Add Student</button>
    </form>
    </>
  )
}
