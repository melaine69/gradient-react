import getGradientCSS from "../utils/getGradientCSS"
import {useSelector} from "react-redux"

export default function Gradient(){
    const gradientValues = useSelector(state => state.gradient)
    
    return (
        <div 
        style={{backgroundImage: getGradientCSS(gradientValues).slice(0, -1)}}
        className="w-1/2 border-4 border-slate-200"></div>
    )
}