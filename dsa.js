function fibs(num) {
    let fibon = [0,1];
    let prev = fibon[0];
    let next = fibon[1];

    if (num == 1) {
        return [0];
    }
    else if (num == 2){
        return fibon;
    }

    for(let i = 2; i < num; i++) {
        let newElm = prev + next;
        fibon.push(newElm);
        [prev, next] = [next, newElm];
    }

    return fibon;
}

function fibsRec(num) {
    if (num == 1) {
        return [0];
    }
    else if (num == 2){
        return [0, 1];
    }

    let fib = fibsRec(num - 1)
    fib.push(fib.at(-1) + fib.at(-2))
    return fib;
}


function mergeSort(array) {
    if (array.length !== 1){
        let center = (array.length / 2) - 1;
        let leftArray = array.slice(0, center + 1);
        let rightArray = array.slice(center + 1);
        let left = mergeSort(leftArray);
        let right = mergeSort(rightArray);
        return merge(left, right);
    }
    return array;
}


function merge(left, right) {
    let i = 0;
    let j = 0;
    let k = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) 
            k.push(left[i++]);
        else if (left[i] >= right[j]) 
            k.push(right[j++]);
    }

    for (; i < left.length; i++) {
        k.push(left[i]);
    }

    for(; j < right.length; j++) {
        k.push(right[j]);
    }

    return k;
}

console.log(fibs(8));
console.log(fibsRec(8));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
