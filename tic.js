let initialValue = "X"

const test =(e)=>{
   if (player1.value==""|| player2.value==""){
       alert("Input Names")
   }
   else{

       if (initialValue=="X"&& e.target.innerText ==""){
           e.target.innerText = "X";
           initialValue= "O" 
   
           if((one1.innerText === "X" && one2.innerText === "X" && one3.innerText==="X")||
           (two1.innerText === "X" && two2.innerText === "X" && two3.innerText==="X")||
           (three1.innerText === "X" && three2.innerText === "X" && three3.innerText==="X")||
           (one1.innerText === "X" && two1.innerText === "X" && three1.innerText==="X")||
           (one2.innerText === "X" && two2.innerText === "X" && three2.innerText==="X")||
           (one3.innerText === "X" && two3.innerText === "X" && three3.innerText==="X")||
           (one1.innerText === "X" && two2.innerText === "X" && three3.innerText==="X")||
           (one3.innerText === "X" && two2.innerText === "X" && three1.innerText==="X")){
               disp.innerText=(player1.value + " Won !") 
               bb=parseInt(firstcount.value)
               bb++;
               firstcount.value=bb;

               // alert("X won");
               // console.log("dey work")
               initialValue=""
           }
           else if(one1.innerText!==""&&one2.innerText!==""&&one3.innerText!==""&&three1.innerText !== "" && three2.innerText !== "" && three3.innerText!==""&&two1.innerText !== "" && two2.innerText !== "" && two3.innerText!=="" ) {
               disp.innerText="Draw"
           }
           
       } else if(initialValue=="O"&& e.target.innerText ==""){
           e.target.innerText ="O"
           initialValue= "X";
           if((one1.innerText === "O" && one2.innerText === "O"&& one3.innerText==="O")||
           (two1.innerText === "O" && two2.innerText === "O" && two3.innerText==="O")||
           (three1.innerText === "O" && three2.innerText === "O" && three3.innerText==="O")||
           (one1.innerText === "O" && two1.innerText === "O" && three1.innerText==="O")||
           (one2.innerText === "O" && two2.innerText === "O" && three2.innerText==="O")||
           (one3.innerText === "O" && two3.innerText === "O" && three3.innerText==="O")||
           (one1.innerText === "O" && two2.innerText === "O" && three3.innerText==="O")||
           (one3.innerText === "O" && two2.innerText === "O" && three1.innerText==="O")){
               disp.innerText= (player2.value + " Won !")
               bb=parseInt(secondcount.value)
               bb++;
               secondcount.value=bb;
               // alert("O won");
               // console.log("see memm");;
               initialValue=""
           }
           else if(one1.innerText!==""&&one2.innerText!==""&&one3.innerText!==""&&three1.innerText !== "" && three2.innerText !== "" && three3.innerText!==""&&two1.innerText !== "" && two2.innerText !== "" && two3.innerText!=="") {
               alert("Draw")
           }
   
       }
   }
}  
function Enter(){
    // alert("working")
    if (player1.value != ""&&player2.value!="") {

      firstcount.value=0;
      firstuser.value= player1.value
      secondcount.value=0; 
      seconduser.value=player2.value 
    }
    else{
        alert("input names")
    }

}
Restart=()=>{
    one1.innerText=""
    one2.innerText=""
    one3.innerText=""
    two1.innerText=""
    two2.innerText=""
    two3.innerText=""
    three1.innerText=""
    three2.innerText=""
    three3.innerText=""
    disp.innerText=""
    initialValue = "X"
}

