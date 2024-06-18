import { useState } from 'react'


interface AddTodoFormProps {
    onSubmit: (title: string) => void
}

export default function AddTodoForm({onSubmit}: AddTodoFormProps) {

    const [input, setInput] = useState("")

        function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
            e.preventDefault()
            if(!input.trim()) 
                return;
            onSubmit(input);
            setInput("");
            
        }
    return (
        <div>
            <form className="flex" onSubmit={handleSubmit}>
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                        placeholder="What needs to be done?" 
                        className="ounded-s-md grow border border-gray-400 p-2"
                />
                <button 
                type="submit"
                className="bg-emerald-500 text-white w-16 rounded-e-md hover:bg-emerald-800"
                >
                    Add
                </button>
            </form>
        </div>
    )
}