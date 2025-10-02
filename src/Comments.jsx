import { use } from "react"
import Comment from "./Comment"

export default function({fetchComments}){
    const comments = use(fetchComments)
    console.log(comments)
    return(
        <div>
            <h2>All Comments</h2>
            {
                comments.map(comment=><Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    )
}  