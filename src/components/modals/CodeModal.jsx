import { useEffect } from "react"
import { useSelector } from "react-redux"
import getGradientCSS from "../../utils/getGradientCSS"



export default function CodeModal({closeModal}) {
      
    const gradientValues = useSelector(state => state.gradient)

    let runningAnim = false

    function handleCopy(e){
        if(!runningAnim){
            runningAnim = true
            e.target.textContent = "Copied ! "

            navigator.clipboard.writeText(`background-image : ${getGradientCSS(gradientValues)}`) // permet de copier quelque chose dans le navigateur
                setTimeout(() => {
                    e.target.textContent = "Copy"
                    runningAnim = false
                }, 500)
        }
    }
    useEffect(() => {
        document.body.style.overflowY = "hidden" // pour empêcher le scroll
        
        return () => document.body.style.overflowY = "visible"// puis on le remet
    }, [])

    return (
        <div onClick={closeModal}
        className="fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center item-center">
            <div 
            onClick={e => e.stopPropagation()}
            className="max-w[500px] rounded p-7 bg-gray-50">
                <div className="flex items-center mb-5">
                    <p className="font-semi-bold text-gray-950 mr-6">Here is your code</p>
                    <button 
                    onClick={handleCopy}
                    className="ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded"> Copy </button>
                    <button onClick={closeModal} className="text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">Close</button>
                </div>
                <p className="rounded font-semi-bold text-gray-200 bg-gray-900">
                    {`background-image : ${getGradientCSS(gradientValues)}`}
                </p>
            </div>
        </div>
    )
}