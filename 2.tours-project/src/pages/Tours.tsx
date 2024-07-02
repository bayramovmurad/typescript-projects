import axios from "axios"
import { useEffect, useState } from "react";
import TourList from "../components/TourList";

interface Tour {
    id:number,
    name:string,
    info:string,
    image:string,
    price:number
}

const Tours = () => {
    const [tours,setTours] = useState<Tour[]>([]);

    const deleteItem  = (id:number) => {
        setTours(tours.filter(item =>  item.id !== id))
    };
    
    useEffect(() => {
        getToursData();
    }, []);
    

    const getToursData = async () =>{
        const response = await axios.get("https://www.course-api.com/react-tours-project");
        const data = await response.data
        setTours(data)        
    };


  return (
    <div>
        <h1>Tours</h1>
        {
            tours?.map((item) => (
                <TourList key={item.id} item={item} deleteItem={deleteItem} />
            ))
        }
    </div>
  )
}
export default Tours