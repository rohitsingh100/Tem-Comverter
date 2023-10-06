// Table
// function Table(num){
//     // let num=2;
//     document.write("This is a Table...<br>");
// for(i=1;i<=10;i++){
//                  // 2      X      1      =       2
//     document.write(num + " X " +  i  + " = " + num*i + "<br>");
//     }
// }
// Table(2);
// Table(3);


function Add(){
    if(arguments.length == 0){
        console.log("No Value pass... !");
    }
    else{
        let = sum=0;
        for(i=0; i<arguments.length; i++){
            sum = sum + arguments[i];
        }
        console.log(sum);
    }
}
Add(2,8);