import axios from "axios"
export const fetchdata = async () => {
  const res = await fetch('https://yes-api-vercel.vercel.app/Cart')
  const data = await res.json()

  return data
}



export const fetchdataCounter = async () => {
  const res = await fetch('https://yes-api-vercel.vercel.app/CartCounter')
  const data = await res.json()

  return data
}
export const AddToCart = async (items) => {
  await fetch(`https://yes-api-vercel.vercel.app/Cart`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(items),
  })



}

export const deleteitem = (id) => {
  axios
    .delete(`https://yes-api-vercel.vercel.app/Cart/${id}`)
    .then(response => {
      console.log("deleted successfully!")
    })
}
