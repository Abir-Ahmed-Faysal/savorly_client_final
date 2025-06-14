export const orderedData=(email)=>{
    return fetch(`http://localhost:3000/purchaseData?email=${email}`)
}