import { useState } from "react"
import data from '../data/data'
import PersonList from "../components/PersonList";

interface Person {
    id: number,
    name: string,
    age: number,
    image: string
}


const Person = () => {
    const [people, setPeople] = useState<Person[]>(data);

    const deleteItem = (id: number) => {
        setPeople(people.filter((item) => item.id !== id))
    }

    const clearData = () => setPeople([]);
    const refreshData = () => setPeople(data);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {
                people?.map((item) => (
                    <PersonList key={item.id} item={item} deleteItem={deleteItem} />
                ))
            }
            {
                people.length === 0 ? (
                    <button onClick={refreshData}>refresh</button>
                ) : (
                    <button onClick={clearData}>clear</button>
                )
            }
        </div>
    )
}
export default Person