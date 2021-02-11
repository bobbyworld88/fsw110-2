  
function submitForm() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let Age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let location = document.getElementById("location").value;
    let restrict = document.getElementsByClassName("checkBox1").checked;
    
    
    alert("First Name : "+firstName+"\nLast Name : "+lastName+"\nAge : "+Age+"\nGender : "+gender+"\nLocation : "+location+"\nDietary Restriction : "+restrict)
  
    }