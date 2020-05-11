export const arrayToObject = arr => {
    return arr.reduce((total, el, index) => {
        total[el.id] = el.name;
        return total;
    }, {});
}