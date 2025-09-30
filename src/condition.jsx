// ======1
// export default function BuyDevice({Person,Device, Name, Price, Clr, Processor,Storage,isDamage}) {
//     //console.log(props)
// if(isDamage){
//     return <h2>Damage!{Person}'s {Device}</h2>
// }
// return <h2>NO Damage Device!</h2>

// }

// ======2
// export default function BuyDevice({ Person, Device, Name, Price, Clr, Processor, Storage, isDamage }) {
//    const displayPrice =Price? Price: 'No Price Added'
//    let comment;
//     return isDamage ?
//         comment=<h2>Damage!{Person}'s {Device}! Device Price : {displayPrice}</h2> :
//          comment=<h2>NO Damage Device!Device Price : {displayPrice}</h2>

// }

// ======3
// export default function BuyDevice({ Person, Device, Name, Price, Clr, Processor, Storage, isDamage }) {
//     //console.log(props)
//     return isDamage &&
//         <h2>Damage!{Person}'s {Device}</h2>
// }

// ======4
// export default function BuyDevice({ Person, Device, Name, Price, Clr, Processor, Storage, isDamage }) {
//     //console.log(props)
//     return isDamage ||
//         <h2>Damage!{Person}'s {Device}</h2>
// }