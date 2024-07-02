import { FC, useState } from "react"

interface TourList {
    item: {
        id: number,
        name: string,
        image: string,
        info: string,
        price: number
    }
    deleteItem: (id:number) => void;
}


const TourList: FC<TourList> = ({ item,deleteItem }) => {
    const [show,setShow] = useState(true);
    const { id, name, image, info, price } = item;

    return (
        <div>
            <img width={200} src={image} alt="image" />
            <h2>{name}</h2>
            <p>{show ? (info.substring(0,100)) : info}</p>
            <button onClick={() => setShow(!show)}>{show ? "readmore" : "showless"}</button>
            <h3>{price}</h3>
            <button onClick={() => deleteItem(id)}>
                not interested
            </button>
        </div>
    )
}
export default TourList