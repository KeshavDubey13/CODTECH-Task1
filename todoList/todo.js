const myInput = document.getElementById("myInput")
const myUL = document.getElementById("myUL")

//Function for add todo 
const addTask=()=>{
  const todo = myInput.value.trim();
   if(!todo){
        alert("sorry")
        return;
   }
  //add time in todo list
   const currentTime =new Date();
   const hour =currentTime.getHours();
   const mintue = currentTime.getMinutes();

   const h6 = document.createElement('h6')
  const timeCreated = h6.innerHTML = `time : ${JSON.stringify(hour)}:${mintue}`
  const li = document.createElement('li')
  li.innerHTML = `${todo }, </br> ${timeCreated}`
  
  const data = myUL.appendChild(li) 
  myInput.value =""

  const listNode = document.getElementsByTagName('li')
  const span = document.createElement('span')
  var txt = document.createTextNode('\u00D7');
  span.className = 'close'
  span.appendChild(txt)
  const input = document.createElement('input')
  input.type="checkbox"
  input.checked =false
  input.className ="checkbox"

  

  //to add X to all the Li tags 
  for (let index = 0; index < listNode.length; index++) {
    listNode[index].appendChild(span);
    listNode[index].appendChild(input);
     

  }


  const close  = document.getElementsByClassName('close')
  for (let index = 0; index < close.length; index++) {
        close[index].onclick = function(){
            var todo = this.parentElement;
            todo.style.display = "none"
        }
  }
}

const list = document.querySelector("ul")

// to check if the todo task is completed or not if yes color will be green and if not then its maroon 
list.addEventListener("click",(e)=>{
  const chekbox  = document.getElementsByClassName("checkbox")
  console.log(chekbox);
  console.log(e.target.children[1]);
 
if (e.target.children[1].checked === false) {
    e.target.style.background ="rgb(37, 124, 37)"
    e.target.style.textDecoration ="line-through"
    e.target.children[1].checked = true
}
else{
  e.target.style.background ="rgb(171, 64, 64)"
  e.target.style.textDecoration ="none"
  e.target.children[1].checked = false
}
})