let num1=prompt("Введите нижнее число из промежутка")
let num2=prompt("Введите верхнее число из промежутка")

for (let i=1; i<=100; i++){
    if (i%2==0) console.log(i);
}

if (isNaN(num1) || (isNaN(num2))) document.querySelector(".message").innerHTML="Вы ввели не числа"
else{
    if ( +num1 > +num2){
        let num3=num2;
        num2=num1;
        num1=num3;
    }

    console.log("-----------------------------------------------------")
    for (+num1; +num1 <= +num2; +num1++){
        if (num1%2 == 0) console.log(num1);
    }
}