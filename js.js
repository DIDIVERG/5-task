function click1() {
    const reg = /^-+\d+$|\d+$/;
    let a = document.getElementsByName("field1");
    let b = document.getElementsByName("field2");
    if (reg.test(a[0].value) == false|| reg.test(b[0].value) == false) {
        alert("Вводите только числа ");
    }
    else {
        let c = document.getElementById("result");
        a[0] = Number.parseInt(a[0]);
        b[0] = Number.parseInt(b[0]);
        var res = a[0].value * b[0].value;
        c.innerHTML = Math.abs(res);
        return false;
    }
}
window.addEventListener("DOMContentLoaded", function name(event)  {
    console.log("DOM loaded");
    let button = document.getElementById("butt");
    button.addEventListener("Click",click1);
})
