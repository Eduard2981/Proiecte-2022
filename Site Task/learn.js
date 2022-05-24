var taskButton = document.getElementById("taskButton");
taskButton.addEventListener("click", addTask)

function addTask() {
  var task = document.getElementById("obiectiv").value;
  var prioritate = document.getElementById("prioritate").value;
  if (task.length < 3) {
    alert("Te rog completeaza minim 3 caractere!")
    return
  } else if (parseInt(prioritate) === 0 || !prioritate) {
    alert("Te rog alege chenarul corespunzator!")
    return
  } else {
    document.getElementById("obiectiv").value = ""
    document.getElementById("prioritate").value = ""
  }
  var li = document.createElement("li");
  var text = document.createTextNode(task);
  li.appendChild(text);
  li.classList.add("list-group-item");

  switch (parseInt(prioritate)) {
    case 1: 
      lista = document.getElementById("prioritate1");
      break;
    case 2:
      lista = document.getElementById("prioritate2");
      break;
    case 3:
      lista = document.getElementById("prioritate3");
      break;
    default:
      alert("Te rog introdu o prioritate existenta!")
      return;
  }
  li.addEventListener("click", function() {
    li.remove();
  })

  lista.appendChild(li);

}
