function selectionSort(arr){
    let min;

    for (let i = 0; i < arr.length; i++){

        min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]){
                min = j;
            }
        }

        if (min !== i){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

let myBoy = [29, 72, 98, 14, 87, 66, 52, 51, 36];

console.log(selectionSort(myBoy));