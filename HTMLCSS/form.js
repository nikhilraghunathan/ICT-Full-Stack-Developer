function Readme()
{
    // alert("clicked");
    //  console.log("clicked");
    var getName=document.getElementById('name').value;
    console.log(getName);
    var getPhno=document.getElementById('phno').value;
    console.log(getPhno);
    var getEmail=document.getElementById('email').value;
    console.log(getEmail);
    var getPlace=document.getElementById('place').value;
    console.log(getPlace);
    var getDate=document.getElementById('date').value;
    console.log(getDate);
    var getUsername=document.getElementById('username').value;
    console.log(getUsername);
    var getPassword=document.getElementById('password').value;
    console.log(getPassword);
    var getConfirmpass=document.getElementById('confirmpass').value;
    console.log(getConfirmpass);
    document.getElementById("result").innerHTML=getName;
}