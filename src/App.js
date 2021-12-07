import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";
export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (event) => setText(event.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = () => setOpen(false);

  return (
    <div>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
