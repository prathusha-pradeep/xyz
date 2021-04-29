var student=[];
function sub(){
    for(var i=0;i<4;i++){
        student[i]="name:"+ document.getElementById("s"+(i+1)).value+"<br>";
        }

        

    
    document.getElementById("result").innerHTML=student.join("");
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";



}
function sor(){
    student.sort();
    document.getElementById("result").innerHTML=student.join("");
}
