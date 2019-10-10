
let matches = [];
let str = "aabcdcb";

let x = str.length;
x+=1;
for(let j=0 ;j<7; j++)
   
   for(let i=j;i<x;i++){

    if(i==j)
        continue;
   //console.log('j ='+j+'i ='+i + ' ' +str.substring(j,i));
    matches.push(check(str.substring(j,i)));
    } 

  matches.sort();
  let length = [];
  
//   console.log(matches);
  
  matches.forEach(element =>{
      length.push(element.length);     
  });

length.sort();
let c = length.pop();
matches.forEach(element =>{
    if(element.length == c)
        alert(`The longest polyndrome in ${str} is ${element}`);
});


function check(test){

    let temp = [...test ];
    temp.reverse();
    test  = [...test];

    temp = temp.join('');
    test = test.join('');
  
   if(temp == test)
       // alert('Match found\n reversed : '+temp+ '  normal : '+test);
        return temp;
    else 
        return '';

}