import { useState } from "react";
import {v4 as uuid} from "uuid"

function makeEmoji () {
    const randEmojis = [
        "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "😊", "😇",
        "😍", "😘", "😋", "😎", "🥰", "🤩", "😌", "😏", "😬", "😷"
      ];
    return randEmojis[Math.floor(Math.random() * randEmojis.length)]     
}

export default function EmojiClicker () {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: makeEmoji()}]);
    const addEmoji = () => {
        setEmojis(oldEmojis => [...oldEmojis, {id: uuid(), emoji: makeEmoji()}]);
    }
    const deleteEmoji = (id) => {
        setEmojis(previousEmojis => {
            return emojis.filter(emo => emo.id !== id);
        })
    }
    const makeHearts = () => {
        setEmojis(previousEmojis => {
            return previousEmojis.map(e => {
                return {...e, emoji: "😍"}
            })
        })
    }

    return (
        <div>
            {
                emojis.map(e => <h1 onClick={() => deleteEmoji(e.id)} key={e.id} style={{display: "inline-block"}}>{e.emoji}</h1>)
            }
            <button onClick={addEmoji}>Add</button>
            <button onClick={makeHearts}>Make hearts</button>
        </div>
    )
}