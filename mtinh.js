const Addition = () =>{
    let a = +document.getElementById("variable1").value;
    // dùng let a = parseFloat(document.getElementById("variable1")) để a là số cũng được
    //value là để lấy giá trị trong ô input
    let b = +document.getElementById("variable2").value;
    let result = a + b;
    //lấy h3 là tên thông báo ra gán id bằng result
    const h3 = document.getElementById("result");
    h3.innerHTML ="Result Addition ="+ result;
}
const Subtraction=() => {
    let a= parseFloat(document.getElementById("variable1").value);
    let b= parseFloat(document.getElementById("variable2").value);
    let result = a - b
    // dùng const h3 = hoặc function h3 đều được
    const h3 = document.getElementById('result');
    h3.innerHTML ="Result Subtraction =" + result;
}
const Multiplication=() => {
    let a= parseFloat(document.getElementById("variable1").value);
    let b= parseFloat(document.getElementById("variable2").value);
    let result = a * b
    const h3 = document.getElementById('result');
    h3.innerHTML ="Result Multiplication =" + result;
}
const Division=() => {
    let a= parseFloat(document.getElementById("variable1").value);
    let b= parseFloat(document.getElementById("variable2").value);
    let result = a / b
    const h3 = document.getElementById('result');
    h3.innerHTML ="Result Division =" + result;
}