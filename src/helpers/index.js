export const addUniqueKeyToOptions = (data) => {
    return data.map((obj, idx) => {
         obj["key"] = idx;
         return obj;
    })
}