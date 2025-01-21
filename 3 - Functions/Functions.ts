function toTotal (...a:number[]):string {
    let total:number;

    if (typeof a !== `undefined`) {
        for (let i = 0; i < a.length; i++) {
            total += a[i];
        }
        return "Equals : " + total;
    }
    return `this ${a} variable is undefined, please send the int variable. `;
}

toTotal(10, 20, 30);
toTotal(10, 20);