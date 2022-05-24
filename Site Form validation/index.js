var submitBtn= document.querySelector("#submitBtn")

function hehe (){
    alert("functioneaza boss")
}

function checkFormData(){
 var message=""

    var tName= document.getElementById("txt_name").value;
var tEmail= document.getElementById("txt_email").value;
var tAge= document.getElementById("txt_age").value;

  var tGender1= document.getElementById("radio1").checked;
    var tGender2= document.getElementById("radio2").checked;

    var tCheckbox= document.getElementById("chkbox").checked;
var firstNameChar= tName.slice(0,1);
var restOfName= tName.slice(1,tName.length)
var firstChar= firstNameChar.toUpperCase();
var capitalisedName = firstChar+restOfName

message+= "Name: "+ capitalisedName + "<br>";

message+= "Email: "+ tEmail + "<br>";
message+= "Age: "+ tAge + "<br>";
message+= "Male: "+ tGender1 + "<br>";
message+= "Female: "+ tGender2 + "<br>";
message+= "Agreed to Terms: "+ tCheckbox + "<br>";

document.getElementById("tMessage").innerHTML=message

}
submitBtn.addEventListener("click", checkFormData);



