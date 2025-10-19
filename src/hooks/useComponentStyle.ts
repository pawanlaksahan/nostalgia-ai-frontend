import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { merge } from "react-merge";
import { styleDictionary } from "../../styles/styleDictionary"

export const useComponentStyle = (component: string) => {
    const { isMobile } = useSelector((state: RootState) => state.style);

    const style = styleDictionary.get(component);
    if(!style) {
        return {}
    }
    else {
        if (isMobile){
            return style.mobile;
        }
        else {
            return merge(style.mobile, style.desktop);
        }
    }
}