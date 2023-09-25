'use client';

import {useFieldArray, useForm} from "react-hook-form";
import {useEffect} from "react";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object({
    name : yup.string().required(),
    email : yup.string().email().required(),
    age : yup.number().required(),
    birthday : yup.date().required(),
    phones : yup.array().of(yup.object({}))
});

type FormValues = {
    name: string;
    email: string;
    age : number,
    birthday : Date,
    phones: {
        value : string
    }[];
};

const Page = () => {
    const {register, formState, getValues ,watch,control, handleSubmit} = useForm<FormValues>({
        defaultValues : {
            name : '',
            email : '',
            phones : [{value : ''}]
        },
        resolver : yupResolver(schema),
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

    useEffect(() => {
        const subscription = watch((data)=> {
           console.log(data);
        });
        return () => {
            subscription.unsubscribe();
        }
    }, [watch]);

    return (
        <div className={'flex justify-center items-center h-screen bg-gray-100 text-gray-700 font-mono'}>
            <form action="" onSubmit={handleSubmit(submitHandler)} className="mx-auto w-1/3 ">
                <button onClick={()=> console.log(getValues())}>Get Values</button>
                <label htmlFor="">Name</label>
                <input type="text"  {...register('name', {required : true})}/>
                <label htmlFor="">Email</label>
                <input type="text" {...register('email')}/>
                <label htmlFor="">Age</label>
                <input type="number" {...register('age', {
                    valueAsNumber : true,
                })}/>
                <label htmlFor="">Birthday</label>
                <input type="date" {...register('birthday', {
                    valueAsDate: true,
                })}/>
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