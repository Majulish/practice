let arr = [1, 3, 2, 5, 4, 6, 8, 7, 10, 9]

function bubbleSort(arr) {
    let b = true, aux
    do{
        b = true
        for(let k=0;k< arr.length-1;k++){
            if (arr[k] > arr[k+1]) {
                aux = arr[k]
                arr[k] = arr[k+1]
                arr[k+1] = aux
                b = false
            }
        }
    }while(b === false)
}

bubbleSort(arr)
console.log(arr)