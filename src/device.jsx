import DeviceDetails from "./deviceDetails"

export default function Device({Devices}){
    console.log(Devices)
    return (
        Devices.map(Device=><DeviceDetails Device={Device}></DeviceDetails>)
 )

}           