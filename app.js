
let input = document.getElementById('inputBox');

let buttons= document.querySelectorAll('button');

let string=""; //store result in this string

//We need all buttons to execute, we used array.from function.
//array.from function used execute each element in array.

let arr= Array.from(buttons);
arr.forEach(button =>                   //use foreach loop to call a function on each elemnt in array
{
    button.addEventListener('click',(e) =>
    {
             if(e.target.innerHTML =='='){
                string= eval(string);
                input.value=string;
             }

             else if(e.target.innerHTML=='AC')
             {
                string="";
                input.value=string;
             }
             else if(e.target.innerHTML=='DEL')
             {
                string= string.substring(0,string.length-1);
                input.value=string;
             }
             else{
    string+=e.target.innerHTML;
        input.value=string;
             }
     }
    )
}
) 