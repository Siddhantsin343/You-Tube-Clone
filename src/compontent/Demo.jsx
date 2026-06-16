import { useMemo, useState } from "react"
import { nthPrime } from "./utils/helper"

const Demo = ()=>{
    const [text, setText] = useState("")
    const [darkTheme, setDarkTheme] = useState(false)

    const prime = useMemo(()=> nthPrime(text), [text])
    return(
        <div className={""+ (
            darkTheme &&  "bg-gray-900 text-white"
        )}>
            <div>
                <button onClick={()=>{
                    setDarkTheme(!darkTheme)
                }}>🌗</button>
            </div>
            
            <input type="number" value={text} onChange={(e)=>{
                setText(e.target.value)
            }}/>
            <div>
                <h1>Nth PRime : {prime}</h1>
            </div>
        </div>
    )
}

export default Demo