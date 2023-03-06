window.onload = function() {
    var num = document.getElementsByTagName("button")
    var bina = document.getElementById("binary")
    var decimal = document.getElementById("decimal")
    function bin(x){
        var binary="";
        var highest_index=0;
        for(let i=x;i>=0;i--){
            if(2**i>x){
                continue
            }else{
                highest_index=i
                break
            }
        }
        var num=x
        for(let i=highest_index;i>=0;i--){
            if(2**i>num){
                binary+="0"
            }else{
                binary+="1"
                num-=2**i
            }
        }
        return binary
    }
    decimal.oninput = function(){
        bina.value = bin(decimal.value)
    }
    function dec(arr){
        num = 0;
        for(let i=arr.length-1;i>=0;i--){
            if(arr[i]=="1"){
                num+=2**(arr.length-1-i)
            }
        }
        return num;
    }
    bina.oninput = function(){
        for(let i of bina.value){
            if(i<0 || i>1){
                bina.value = "Not a binary number"
            }else{
                decimal.value = dec(bina.value)
            }
        }
    }
    for(let i of num){
        i.onclick = function(){
            var prob = document.getElementById("prob")
            prob.innerHTML+= String(i.value)
        }
    }
    var del = document.getElementById("del")
    del.onclick = function(){
        arr = [];
        for(let i of String(prob.innerHTML)){
            arr.push(i)
        };
        var text = "";
        for(let i of arr.slice(0,arr.length-1)){
            text+=String(i);

        };
        prob.innerHTML = text;
    }
    var del_all = document.getElementById("ac")
    del_all.onclick = function(){
        prob.innerHTML = ""
        sol.innerHTML = ""
    };
    var equate = document.getElementById("equate");
    var sol = document.getElementById("sol");
    equate.onclick = function(){
        if(String(prob.innerHTML).split("").includes("^")){
            let txt = prob.innerHTML.replace("^","**")
            sol.innerHTML = eval(txt)
        }else if(prob.innerHTML.includes("ANS")){
            let p = prob.innerHTML.replace("ANS",sol.innerHTML);
            sol.innerHTML = eval(p);
        }else{
            sol.innerHTML = eval(String(prob.innerHTML));
        }
        var ans = document.getElementById("ans")
        ans.onclick = function(){
            prob.innerHTML = "ANS";
            ans.value=sol.innerHTML;
        };
    };
}
