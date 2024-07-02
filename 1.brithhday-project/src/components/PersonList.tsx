import React from "react";

interface PersonProps {
    item: {
        id: number;
        name: string;
        age: number;
        image: string;
    };
    deleteItem: (id:number) => void;
}

const PersonList: React.FC<PersonProps> = ({item,deleteItem}) => {
    const {id,name,age,image} = item;
  return (
    <div>
        <h2>{name}</h2>
        <p>{age}</p>
        <img width={100} height={100} src={image} alt={name} />
        <button onClick={() => deleteItem(id)}>delete</button>
    </div>
  )
}
export default PersonList