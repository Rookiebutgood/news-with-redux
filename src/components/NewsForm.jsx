import { useState } from "react"

export default function NewsForm() {
  let [title, setTitle] = useState('');
  let [text, setText] = useState('');

  return(
    <div className="newsForm">
      <input type="text" onChange= {e=>setTitle(e.target.value)}/>
      <texarea onChange= {e=>setText(e.target.value)} />
      <input type="submit" value="Отправить" />
    </div>
  )
}