"use client"

import { create } from "@/actions/create-board"
import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom"

export const Form = () => {
    const initialState: { message: string; errors: { [key: string]: string[] } } = {
        message: "",
        errors: {},
      }
    const [state, dispatch] = useFormState(create, initialState)
    return (
        <form action={dispatch}>
            <div className="flex flex-col space-y-2">
                 <input id="title" name="title" required placeholder="Enter a board title" className="border-black border"/>
                 {state?.errors?.title ? (
                    <div>
                        {state?.errors?.title.map((error: string) => (
                            <p key={error} className="text-rose-500">
                                {error}
                            </p>
                        ))}
                    </div>
                 ):null}
            </div>
         
          <Button type="submit">Submit</Button>
        </form>
    )
}