export const addUniqueKeyToOptions = (data) => {
    return data.map((obj, idx) => {
         obj["key"] = idx;
         return obj;
    })
}

export const filterOrignalData =(searchArray, value) =>{
    return searchArray.filter(row => {
        return row.label.toString().toLowerCase().includes(value.toLowerCase())
    });
}
export const generateOptions = (size = 0, orignalOptions, i = 0, options = []) => {
    if (i >= size) return options;
    const option = orignalOptions[i];
    return generateOptions(size, orignalOptions, i + 1, [ ...options, option ]);
  }