function add7(number){
    return number+7;
}
console.log(add7(4));
function multiply(n1,n2){
    return n1*n2;
}
console.log(multiply(2,4));
function capitalize(st){
    return st.charAt(0).toUpperCase()+st.slice(1);
}
// console.log(capitalize(prompt("Please enter a string")));
function lastletter(string){
    return string.charAt(string.length-1);
}
console.log(lastletter('abcd'))