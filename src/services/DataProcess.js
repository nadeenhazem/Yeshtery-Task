
 export const fetchdata=async()=>{
     const res=await fetch('https://yeshtry-api.onrender.com/Cart')
    const data=await res.json()
    UpdateData(data.length)
    console.log(data)
    
    return data
  }
  
  
  
  export const fetchdataCounter=async()=>{
    const res=await fetch('https://yeshtry-api.onrender.com/CartCounter')
   const data=await res.json()
  
   return data
 }
  export const AddToCart= async(items)=>{
    await fetch(`https://yeshtry-api.onrender.com/Cart`,{
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(items),
    })
    
  

  }
  export const remove=0

  export const deleteitem=async(id)=>{
    await fetch(`https://yeshtry-api.onrender.com/Cart/${id}`,
    {
      method:'DELETE'
    })
   }
  export const UpdateData=async(NewValue)=>{
     const updateData={
      
    Counter:NewValue
     }
    await fetch(`https://yeshtry-api.onrender.com/CartCounter`,
    {
      method:'PUT',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(updateData),
    })
     
   }