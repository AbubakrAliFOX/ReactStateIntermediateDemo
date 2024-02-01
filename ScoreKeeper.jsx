import { useState } from "react";



export default function ScoreKeeper({numPlayer=5, target=5}) {
    const [scores, setScores] = useState(new Array(numPlayer).fill(0));
    const [someoneWon, setSomeoneWon] = useState(false);
    const addScore = (idx) => {
        setScores(previousScores => {
            if(!someoneWon) {
                const copy = [...previousScores];
                copy[idx] +=1;
                if (copy[idx] >= target) {
                    setSomeoneWon(true);
                }
                console.log(someoneWon);
                return copy
            } else {
                return previousScores;
            }
        });
        
    }
    const reset = () => {
        setScores(new Array(numPlayer).fill(0));
        setSomeoneWon(false);
    }
    return (
        <div>
            <ul>
                {
                    scores.map((score, idx) => {
                        return <li key={idx} >Player {idx + 1}: {score} <button disabled={someoneWon? true: false} onClick={() => addScore(idx)}>+1</button> {score >= target? 'Won!': null}</li>
                    })
                }
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
