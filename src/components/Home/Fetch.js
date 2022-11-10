import React,{useEffect,useState} from "react";

const Trial= ()=>{
    const [user,setUser]=useState();
    const[loading,setLoading]= useState(false);


useEffect (()=>{
    userData()
},[]);
const userData =()=>{
    fetch(" https://dummyjson.com/users")
    .then(res=>res.json())
    .then(data=>{
        setUser(data.users);
        setLoading(true);
        console.log("data fetched ------>",user);
     })
    .catch(error=>console.log(error));

};
if(!loading){
    return <div>Loading ....</div>;
}
 return (
        <div>
           {user.map((item)=>(
            <div>
                <img src={item.image} alt="Fuits/image"/>   
                <p>{item.fruitName} {item.fruitPrice} {item.Quantity}</p> 
                <h4>Details</h4>
                <p>fruitName: {item.fruitName}</p>
                <p>fruitPrice: {item.fruitPrice}</p>
                <p>Quantity: {item.Quantity}</p>
            </div>
           ))} 
        </div>
    )
}
export default Trial;
