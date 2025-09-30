export default function DeviceDetails({Device}){
    console.log(Device)
    const deviceStyle ={
        border : '2px solid yellow'         
    }
    return(
        <div style={deviceStyle}>
        <h3>{Device.Name}</h3>
        <h3>{Device.Price}</h3>
        </div>
 )


}