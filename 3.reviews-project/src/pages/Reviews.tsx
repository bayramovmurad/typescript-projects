import { FC, useState } from 'react'
import data from '../data/reviews'

interface ReviwevData {
  id:number,
  name:string,
  job:string,
  text:string,
  image:string,
}

interface DataProps {
  data:ReviwevData[]
}


const Reviews:FC<DataProps> = () => {
  const [index,setIndex] = useState<number>(0);
  const {id,name,job,text,image} = data[index];
  const checkNumber = (number:number) => {
    if(number > data.length - 1){
      return 0
    }
    if(number < 0) {
      return data.length -1
    }
    return number
  }
  const prevButton  = () => {
    setIndex((prev) => {
      const prevIndex = prev -1
      return checkNumber(prevIndex)
    })
  }
  const randomButton = () => {
    let randomIndex = Math.floor(Math.random() * data.length);
    if(randomIndex === index){
      randomIndex = index + 1
    }
    setIndex(checkNumber(randomIndex))
  }
  const nextButton = () => {
    setIndex((next) => {
      const nextIndex = next + 1
      return checkNumber(nextIndex)
    })
  }
   return (
    <div style={{width:"500px", margin:"0 auto", textAlign:"center"}} key={id}>
        <img width={500} height={500} src={image} alt="" />
        <h2>{name}</h2>
        <h3>{job}</h3>
        <p>{text}</p>
        <div>
          <button onClick={prevButton}>prev</button>
          <button onClick={randomButton}>random</button>
          <button onClick={nextButton}>next</button>
        </div>
    </div>
  )
}
export default Reviews
