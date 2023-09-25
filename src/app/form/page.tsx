'use client';

import {useFieldArray, useForm} from "react-hook-form";
import {useEffect} from "react";


type FormValues = {
    name: string;
    email: string;
    phones: {
        value : string
    }[];
};

let counter = 0;
const Page = () => {
    const {register, formState,control, handleSubmit} = useForm<FormValues>({
        defaultValues : {
            name : '',
            email : '',
            phones : [{value : ''}]
        }
    });
    const {errors} = formState;
    const {fields, append, remove} = useFieldArray({
        control,
        name : 'phones',
    });
    
    const submitHandler = (data : FormValues) => {
        console.log(data);
    }

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    return (
        <div className={'flex justify-center items-center h-screen bg-gray-100 text-gray-700 font-mono'}>
            {counter}
            <form action="" onSubmit={handleSubmit(submitHandler)} className="mx-auto w-1/3 ">
                <label htmlFor="">Name</label>
                <input type="text"  {...register('name', {required : true})}/>
                <label htmlFor="">Email</label>
                <input type="text" {...register('email')}/>
                {
                    fields.map((item, index) => (
                        <>
                            <input type="text" key={index} {...register(`phones.${index}.value`)}/>
                            <button onClick={()=> remove(index)} >Remove</button>
                        </>
                    ))}
                <div>
                    <button type={'button'} onClick={()=> append({value : ''})}>Add New Phone</button>
                </div>
                <button type={'submit'}>Submit</button>
            </form>
        </div>
    );
};

export default Page;