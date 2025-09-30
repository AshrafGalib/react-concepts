
export default function Data ({data}){
    console.log(data)
return (
    <div className="frndData">
        <h4>Name: {data.Name}</h4>
        <h4>Age: {data.Age}</h4>
        <h4>Hobby: {data.Hobby}</h4>

    </div>
)
}