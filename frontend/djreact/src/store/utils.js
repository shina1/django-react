export const updateObj = (oldObj, updatedObj)=>{
    return{
        ...oldObj,
        ...updatedObj
    }
}