import { toast } from "react-toastify";

export const getToApplyNow = ()=>{
    const applyNow = localStorage.getItem("apply");
    if(applyNow) return JSON.parse(applyNow)
    return []
}





export const addToApplyNow = (data)=>{
    const applyNow = getToApplyNow();
    const isExist = applyNow.find(d=> d.id === data.id);
    if(isExist) return toast.error("already ase");
    applyNow.push(data)
    localStorage.setItem("apply",  JSON.stringify(applyNow))

}

export const removeApplyJob = (id)=>{
    const removeApplyData = getToApplyNow();
    const removeData = removeApplyData.filter(job=> job.id !== id);
    localStorage.setItem("apply", JSON.stringify(removeData))

}


// favourite section

export const getToFavourite = ()=>{
    const favourite = localStorage.getItem("favourite");
    if(favourite) return JSON.parse(favourite)
    return []
}





export const addToFavourite = (data)=>{
    const favourite = getToFavourite();
    // const isExist = favourite.find(d=> d.id === data.id);
    // if(isExist) return toast.error("already ase");
    favourite.push(data)
    localStorage.setItem("favourite",  JSON.stringify(favourite))

}

export const removeFavourite = (id)=>{
    const removeFavouriteData= getToFavourite();
    const removeData = removeFavouriteData.filter(job=> job.id !== id);
    localStorage.setItem("favourite", JSON.stringify(removeData))

}