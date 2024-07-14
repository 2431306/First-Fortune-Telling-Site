const btn = document.getElementById("btn");
const txt = document.getElementById("txt");
btn.addEventListener("click",function(){
    const choice = window.confirm("おみくじをしますか？");
    if(choice){
        txt.textContent = "やっぱりそれでも大吉です";
        if(choice){
            
        }
    }else{
        txt.textContent = "キャンセルが選択されました";
    }
    }
)
