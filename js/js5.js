    let eshe;
    let check;
    num1 = Math.floor(Math.random()*100%9+2);   
    num2 = Math.floor(Math.random()*100%9+2);   
    document.querySelector(".primer").innerHTML=num1 + "*"+  num2 + "=?";

    document.getElementById("proverka").onclick=function(){
        if (isNaN(document.getElementById("otvet1").value)) {
            document.querySelector(".message").innerHTML="Вы ввели не число, обновите страницу и попробуйте по новой"
            check=0;
        }
        else check=1;

        if(check!=0){
        if (document.getElementById("otvet1").value==num1*num2) document.getElementById("otvet2").textContent="Правильно"
        else document.getElementById("otvet2").textContent="Неправильно"

        setTimeout(() => {            
            eshe = prompt ("Продолжить? Введите \"y\" если хотите продолжить");    
            if (eshe!="y") {
                document.getElementById("proverka").disabled=true;
            }
            else {
                num1 = Math.floor(Math.random()*100%9+2);   
                num2 = Math.floor(Math.random()*100%9+2);   
                document.querySelector(".primer").innerHTML=num1 + "*"+  num2 + "=?";
                document.getElementById("otvet1").value="";
                document.getElementById("otvet2").textContent="";
            }            
            }, 0); 
        }
        else document.getElementById("proverka").disabled=true;
    }