// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Suspense } from 'react'
import './App.css'
import Comments from './Comments'
// import Count from './Count'
// import Device from './device'
// import Friend from './friends'
// import Data from "./frndData"
//import BuyDevice from './condition.jsx' 

const getComments=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/comments')
  return res.json()
}

function App() {
  // const friends =['Ayush','Fais','Fiam','Yaru']
  // const frndData =[
  //   {Name:'Ayush',Age: 27,Hobby:'Gardening'},
  //   {Name:'Fais',Age: 29,Hobby:'Fishing'},
  //   {Name:'Fiam',Age: 26,Hobby:'E-Gaming'},
  //   {Name:'Yaru',Age: 22,Hobby:'Kayaking'}
  // ]
 
  // const devices =[
  //   {id:1,Name:'Iphone 11',Price: 69990},
  //   {id:2,Name:'Walton Laptop',Price: 76000},
  //   {id:3,Name:'Argus G2',Price: 5990},
  //   {id:4,Name:'Mortorolla EarBuds',Price: 6990}
  // ]
const fetchComments= getComments()
  return (
     <> 
<Suspense fallback={<h2>Loading...</h2>}>
<Comments fetchComments={fetchComments}></Comments>
</Suspense>


{/* <Count></Count> */}

{/* <Device Devices={devices}></Device> */}


     {/* {
      friends.map(friend=><Friend friend={friend} ></Friend>)
     }
     {
      frndData.map(data=><Data data={data} ></Data> )
     } */}

     {/* <Developer name="Ashraf Galib" device="Walton"></Developer>
     <Developer name="Wasif Sayem" device="HP"></Developer>
     <Developer name="Faisal" device="Dell"></Developer>
     <Developer name="Mahtab" device="Samsung"></Developer>
     <Developer name="Farhan" device="Sony"></Developer> */}
     {/* <BuyDevice
     Person ="Galib"
     Device = "Laptop" 
     Name  ="Walton Tamarind" 
     Price ="500000" 
     Clr   ="Light Blue"
     Processor="Core i5 11GEN"
     isDamage={false} >
     </BuyDevice> */}
     {/* <BuyDevice
     Person ="Wasif"
     Device = "Laptop" 
     Name  ="HP Pavilion" 
     Price ="70000TK" 
     Clr   ="Black"
     Processor="Core i5 10GEN"
     isDamage={false} >
     </BuyDevice>
     <BuyDevice
     Person ="Galib"
     Device = "Mobile" 
     Name  ="Iphone 11" 
     Price ="69000TK" 
     Clr   ="Black"
     Storage="128GB"
     isDamage={false} >
     </BuyDevice> */}

    </>
  )
}



export default App
