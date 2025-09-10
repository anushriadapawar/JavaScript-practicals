function validateForm() {
  const rollno = document.getElementById("rollno").value;
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;

  console.log("Validating form...");


  if (isNaN(rollno) || rollno === "") {
    console.log("Invalid Roll No");
    alert("Please enter a valid numeric Roll No.");
    return false;
  }


   if (isNaN(mobile) || mobile.length !== 10) {
    console.log("Invalid Mobile No");
    alert("Please enter a valid 10-digit mobile number.");
    return false;
  } 


  if (password.length < 6) {
    console.log("Weak Password");
    alert("Password must be at least 6 characters long.");
    return false;
  }


  console.log("Form submitted successfully!");
  return true;
}
