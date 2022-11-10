import { useEffect } from "react"

const UseTitle = title =>{
  useEffect(()=>{
    document.title = `${title} - Make My Trip`;
  },[title])
}

export default UseTitle;