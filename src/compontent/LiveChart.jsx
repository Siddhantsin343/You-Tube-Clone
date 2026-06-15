import { useEffect } from "react"
import ChatMssg from "./CharMsg"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "./utils/chatSlice"
import store from "./utils/store"
import { generateRandomName, makeRandomMsg } from "./utils/helper"

const LiveChart= ()=>{

    const dispatch = useDispatch()

    const chatMsg = useSelector((store)=> store.chat.messages)
    useEffect(()=>{
       
        const i = setInterval(()=>{
            console.log("Api Call");

            dispatch(addMessage({
                name : generateRandomName(),
                message : makeRandomMsg(20) + "💓"
            }))

        }, 1000)

        return ()=>{
            clearInterval(i)
        }
    },[])

    return (
        <div className="w-[350px] border rounded-lg p-3 h-[600px] shadow flex flex-col">
  <h1 className="font-bold text-lg mb-3">
    Live Chat
  </h1>

  <div className="flex-1 overflow-y-auto">
    {chatMsg.map((c, i) => (
      <ChatMssg
        key={i}
        name={c.name}
        message={c.message}
      />
    ))}
  </div>
</div>
    )
}

export default LiveChart