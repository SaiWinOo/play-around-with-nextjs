import React from "react";
import {useForm, useFieldArray, Controller} from "react-hook-form";


type FormValues = {
    group: string;
    users: {
        email: string;
        phone: string;
    }[],
}

export default function DynamicForm() {
    const {register, control, handleSubmit, reset, trigger, setError} = useForm<FormValues>({
        defaultValues: {
            users: [{email: "", phone: ""}]
        }
    });
    const {fields, append, remove} = useFieldArray({
        control,
        name: "users",
    });

    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <ul>
                {fields.map((item, index) => (
                    <li key={item.id}>
                        <input {...register(`users.${index}.email` as const)} />
                        <input {...register(`users.${index}.phone` as const)} />
                        <button type="button" onClick={() => remove(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button
                type="button"
                onClick={() => append({email: "", phone: ""})}
            >
                append
            </button>
            <input type="submit"/>
        </form>
    );
}