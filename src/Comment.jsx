export default function ({comment}){
    const{name,email,body}=comment
return(
    <div className="developer">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Body: {body}</p>
    </div>
)
}