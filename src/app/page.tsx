'use client';
import {useEffect, useState} from "react";
import {addDoc, collection, getDocs} from "@firebase/firestore";
import {auth, db} from "../../config/firebase";

type Todo = {
    id: string;
    title: string;
    completed: boolean;
    user_id : string
}
const Page = () => {

    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const todosRef = collection(db, 'todos');


    const getTodos = async () => {
        try {
            const data = await getDocs(todosRef);

            const filteredData = data.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }))
            setTodos(filteredData as Todo[]);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await addDoc(todosRef, {
                title: todo,
                completed: false,
                user_id: auth?.currentUser?.uid
            });
            getTodos();
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={'h-screen w-screen flex flex-col justify-center items-center'}>
            <div className={'max-w-[500px] mx-auto'}>
                <form onSubmit={handleSubmit} className={'gap-2 grid grid-cols-4'}>
                    <input type="text" value={todo} onChange={e => setTodo(e.target.value)} className={'my-0 col-span-3'}/>
                    <button type={'submit'} className={'col-span-1'}>Add</button>
                </form>

                <div>
                    {
                        todos.map(todo=> (
                            <div key={todo.id} className={'my-4 text-start flex justify-start items-center'}>
                                <input type="checkbox" className={'mr-3'} checked={todo.completed} />
                                <h4>{todo.title}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Page;