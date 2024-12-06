str=["Hello", 42, true]
add_str=""
for(let i=0;i<str.length;i++){
    if(typeof str[i] !== 'string'){
        add_str = add_str + String(str[i])
    }
    else{
        add_str = add_str + str[i]
    }
}
console.log(add_str);