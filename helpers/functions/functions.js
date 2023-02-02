
export function convertPathNameIntoConvenientName(name) {

    if (typeof name !== 'string') {
        alert('Please Enter String')
        return false
    } else if (name === '/') {
        name = 'Home'
        return name 
    }

    name = name.replace(/[^a-zA-Z ]/g, " ").toLowerCase();
    name = name.charAt(1).toUpperCase() + name.slice(1);
    name = name.split(" ")[0];

    return name; 
}


export function moneyFormat(value , formatType = 'en-US') {

    if (typeof value !== 'number') {
        alert('Please Enter number')
        return false
    }

    return (value).toLocaleString(formatType, {
        style: 'currency',
        currency: 'USD',
      })
}


export function sanitizeData(data , type = ''){
    return (typeof data !== '' || data != {}) ? data : (alert('data not vaild'))
}


export function convertObjectIntoQueryString(object = {}) {
   let queryString = '?';

  if (object.length != 0 && typeof object !== 'undefined')
    Object.keys(object).forEach(key => {
      if (typeof object[key] !== 'undefined' || object[key] !== '')
            queryString += `${key}=${object[key]}&`;
        
    })

    return queryString.substring(queryString.length -1) == '&' ? queryString.substring(0, queryString.length - 1) : queryString;
}


export function getArrayOfDefaultPageSizes(){
    return process.env?.PAGESIZES ? process.env.PAGESIZES.split(',') : ['1','2','3','5','10'];
}

export function getDefaultPageSize(){
    return process.env?.pageSize ?? 5;
}

export function getDefaultLoaderSetinterval(){
    return process.env?.LOADER_SETINTERVAL ?? 5000;
}

export function openModalByTypeName(name = '') {
    // make function deal with react hooks
}