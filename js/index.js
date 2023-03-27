var form = document.querySelector(".form");
var inputone = document.querySelector(".input-job");
var inputtwo = document.querySelector(".input-companiy");
var inputthere = document.querySelector(".input-salary");
var formlist =document.querySelector('.list-itme')


var allform = [

];

function renderallform() {
  formlist.innerHTML = null;
  for (var i = 0; i < allform.length; i++) {
    var elli= document.createElement('div');
    elli.innerHTML = `<div class="border border-secondary rounded-2 ms-5 mt-3"> <h3 class="border border-secondary rounded-2 bg-secondary">   ${allform[i++].text} </h3><p>company name: <span class="text-primary">${allform[i++].text}</span></p><p>salary: <span class="text-primary"> ${allform[i].text} </span></p></div>`; 
    
    formlist.appendChild(elli);
  
  
    
  }
}


function onSubmit(evt) {
  evt.preventDefault();

  var newformone = {
    id: 1,
    text: inputone.value.trim(),
    isCompleted: false,
  };

  var newformtwo = {
    id: 2,
    text: inputtwo.value.trim(),
    isCompleted: false,
  };
  var newformthere = {
   id:allform.length +1,
   text: inputthere.value.trim(),
   isCompleted: false,
  };
  
  
  
  allform.push(newformone,newformtwo,newformthere);
  
  

  inputone.value  = null;
  inputtwo.value = null;
  inputthere.value =null;
  renderallform(allform);
  console.log(allform);
}

form.addEventListener("submit", onSubmit);


 