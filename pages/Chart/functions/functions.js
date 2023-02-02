
export function getLableOriginalStatus(label = null, arrayOfOrderStatusNameWithOriginalOrderStatus) {

   if(label !== null)
    for (let key in arrayOfOrderStatusNameWithOriginalOrderStatus) 
        if (arrayOfOrderStatusNameWithOriginalOrderStatus.hasOwnProperty(key))
        if (key === label)
        return arrayOfOrderStatusNameWithOriginalOrderStatus[key];
    
    

    return false;
}