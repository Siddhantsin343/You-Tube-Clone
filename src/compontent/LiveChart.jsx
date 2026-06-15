import { useEffect } from "react"
import ChatMssg from "./CharMsg"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "./utils/chatSlice"
import store from "./utils/store"

const LiveChart= ()=>{

    const dispatch = useDispatch()

    const chatMsg = useSelector((store)=> store.chat.messages)
    useEffect(()=>{
        //api Polling
        const i = setInterval(()=>{
            console.log("Api Call");

            dispatch(addMessage({
                name : "siddhant",
                message : "Hi"
            }))

        }, 2000)

        return ()=>{
            clearInterval(i)
        }
    },[])

    return (
          <div className="w-[350px] border rounded-lg p-3 h-[600px] overflow-y-scroll shadow">

    <h1 className="font-bold text-lg mb-3">
      Live Chat
    </h1>

    <div className="flex flex-col gap-2">
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