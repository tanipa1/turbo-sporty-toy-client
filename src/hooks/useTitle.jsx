import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Turbo Sporty`;
    },[title])
};

export default useTitle;