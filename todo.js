var addBtn=document.getElementById('addBtn');
var List=document.getElementById('tasks');
var listItem=document.getElementById('addText');

addBtn.addEventListener("click",function(){
  var Text=listItem.value;

  if(Text!==""){
    listItem.value="";
    var todo=document.createElement("LI");
    var text=document.createElement("SPAN");
    todo.classList.add("todo");
    var deleteTask=document.createElement("BUTTON");
    deleteTask.classList.add("remove-btn");
    deleteTask.innerHTML="REMOVE";
    deleteTask.addEventListener("click",function(){
      todo.parentNode.removeChild(todo);
    });
    text.append(Text);
    todo.append(text);
    todo.append(deleteTask);
    List.append(todo);
  }
});