'use client';

import {useState} from "react";
import {createUserWithEmailAndPassword, signInWithPopup} from "@firebase/auth";
import {auth, googleProvider} from "../../../config/firebase";

const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn =  async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        }catch (e){
            console.error(e);
        }
    }
    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
        }catch (e){
            console.error(e);
        }
    };

    return (
        <div className={'flex justify-center items-center h-screen w-screen'}>
            <div className={'h-[50%]'}>
                <h4 className={'text-2xl text-cyan-400'}>Sign In</h4>
                <div className={'mt-2'}>
                    <label htmlFor="">Email</label>
                    <input type="text" onChange={e => setEmail(e.target.value)}/>
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <button onClick={handleSignIn}>Sign in</button>
                <div className={'my-2'}>
                    <button onClick={signInWithGoogle} className={'bg-black'}>Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Page;