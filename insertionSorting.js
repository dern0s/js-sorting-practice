function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){

        for(let j = i - 1; j > -1; j--){
            if(arr[j+1] < arr[j]){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
            }
        }
    }

    return arr;
}

let myBoy = [2, 4, 1, 10, 9, 7, 5];

console.log(insertionSort(myBoy));