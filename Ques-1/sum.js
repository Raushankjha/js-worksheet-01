arr=["10", 20, "30"]
totalSum=0
for(let i=0;i<arr.length;i++){
    if(typeof arr[i] !== "number"){
        totalSum = totalSum + Number(arr[i])
    }else{
        totalSum = totalSum + arr[i]
    }
}
console.log(totalSum);