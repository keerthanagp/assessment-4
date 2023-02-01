 //comparing two Json having same properties without order

 let obj1={name:"Person 1", age:5};
 let obj2={age:5, name:"Person 1"};
 
 document.write(JSON.stringify(obj1)==JSON.stringify(obj2))
  