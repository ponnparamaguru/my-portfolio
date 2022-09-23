function validateForm() 
{
  let x = document.forms["myForm"]["fname"].value;
  let y = document.forms["myForm"]["email"].value;
  if (x == "") 
  {
    alert("Please Enter your Name");
    return false;
  }
  if(y == "")
  {
    alert("Please Enter your Mail ID");
    return false;
  }
}