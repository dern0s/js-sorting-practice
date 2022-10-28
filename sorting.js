function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){

        for (let j = 0; j < arr.length - i - 1; j++){
            console.log("value of i (outer pass) is: " + i + ", value of array[i] is: " + arr[i] + ", value of j + 1 (inner pass) is: " + Number(j + 1) + ", value of arr[j+1] is: " + arr[j+1] +".");
            if(arr[j+1] < arr[j]){
                //metodo especiico do javascipt que esqueci o nome
                //[arr[j+1], arr[j]] = [arr[j], arr[j+1]];
                //metodo raiz que funciona em c
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

let myBoy = [6, 5, 3, 7, 9, 1, 39];

//console.log(bubbleSort(myBoy));

let myBubbleBoy = bubbleSort(myBoy);

console.log(myBubbleBoy);


//nao mudou nada