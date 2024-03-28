import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal = forwardRef(function ResultModal({ result, targetTime}, ref) {
    const dialog = useRef()

    useImperativeHandle(ref, () => {  //jesli zmienie <dialog> na <div> to nie bede mogl uzywac funkcji showModal() i to wlasnie zabezpiecza przed takim czyms
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} seconds</strong></p>
            <p>You stopped the timer with <strong>X seconds left</strong></p>
            <form action="" method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal