import { Form } from "./form"
import { db } from "@/lib/db"
import Board from "./board"


const OrginzationIdPage = async () => {
  const boards = await db.board.findMany()
  return (
    <div>
        <Form />
        <div className="space-y-2">
          {boards.map((board) => (
            <Board key={board.id} id={board.id} title={board.title}/>
          ))}
        </div>
    </div>
  )
}

export default OrginzationIdPage