import { useRef, useState } from "react"
import ResultModal from "./ResultModal"

export default function TimerChallange({ title, targetTime }) {

    const timer = useRef()
    const dialog = useRef()

    const [timerExpired, setTimeExpired] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimeExpired(true)
            dialog.current.open()
        }, targetTime * 1000)

        setTimerStarted(true)
    }

    function handleStop() {
        clearTimeout(timer.current)
    }

    return (
        <>
            <ResultModal ref={dialog}  targetTime={targetTime} result='lost' /> 
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>You lost</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'stop' : 'Start'} challange
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'timer inactive'}
                </p>
            </section>
        </>
    )
}