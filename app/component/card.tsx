import { headers } from "next/headers"

//component ke defination
// first letter of component is always capital
// component is a function
// component htmlka parent element return karta
// component re usable headers
// component mn java k andar html css likh sakte hn 
// component mn html k andar java likh sakte hn

const Card =()=>{
    let a="waqas ahmed"
    return(        
        <div>            
        <h3>we create variable a and show in this h3 heading<br/>
            {a}
        </h3>
        </div>
    )
}
export default Card

export const Card2 =()=>{
    return(
        <p>we are practice component</p>
    )
}

//name function
export function Card3 (){
    return(
        <p>now we practice simple name function</p>
    )
}
