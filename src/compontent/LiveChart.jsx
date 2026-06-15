import { useEffect, useState } from "react"
import ChatMssg from "./CharMsg"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "./utils/chatSlice"
import store from "./utils/store"
import { generateRandomName, makeRandomMsg } from "./utils/helper"

const LiveChart= ()=>{

    const dispatch = useDispatch()
    const chatMsg = useSelector((store)=> store.chat.messages)

    const [liveMessage , setLiveMessage] = useState("")

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
<form
  className="flex items-center gap-2 p-2 border-t mt-auto"
  onSubmit={(e) => {
    e.preventDefault();

    dispatch(
      addMessage({
        name: "Siddhant",
        message: liveMessage,
      })
    );

    setLiveMessage("");
  }}
>
  <input
    type="text"
    placeholder="Type a message..."
    value={liveMessage}
    onChange={(e) => setLiveMessage(e.target.value)}
    className="flex-1 px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-500"
  />

  <button
    type="submit"
    className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition cursor-pointer"
  >
    Send
  </button>
</form>
</div>
    )
}

export default LiveChart