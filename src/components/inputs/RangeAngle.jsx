import { useDispatch, useSelector } from "react-redux"
import {updateAngle} from "../../features/gradient"


export default function RangeAngle(){
    const dispatch = useDispatch()
    const gradientvalues = useSelector(state => state.gradient)

    return (
        <input
        min="0"
        max= "360"
        value={gradientvalues.angle}
        onChange={e => dispatch(updateAngle(e.target.value))}
        className="w-full h-1 mb-10 bg-gray-200 rounded-lg cursor-pointer"
        type="range"/>
    )
}