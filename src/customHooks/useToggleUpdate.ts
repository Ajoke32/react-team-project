import {useState} from "react";

export default function useToggleUpdate(defaultValue){
    const [value, setValue] = useState<boolean>(defaultValue)

    function toggleValue(value){
        setValue(currentValue => typeof value === "boolean" ? value : !currentValue)
    }
    return [value, toggleValue]
}