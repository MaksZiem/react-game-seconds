import { useRef, useState } from "react"

export default function TimerChallange({title, targetTime}) {

    const timer = useRef()

    const [timerExpired, setTimeExpired] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimeExpired(true)
        }, targetTime*1000)

        setTimerStarted(true)
    }

    function handleStop() {
        clearTimeout(timer.current)
    }

    return (
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
    )
}