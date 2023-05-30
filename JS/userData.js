// ****Register******
function register(event){
    event.preventDefault();

    var fName = document.getElementById("name").value;
    var fEmail = document.getElementById("email").value;
    var fPassword = document.getElementById("password").value;
    var fConfirmPassword = document.getElementById("confirmPassword").value;
    var fDate = document.getElementById("date").value;
    var fMonth = document.getElementById("month").value;
    var fYear = document.getElementById("year").value;
    var fDOB = new Date(fDate, fMonth-1, fYear);
    var fBio = "";
    var fProfileImage = "";
    var fPosts = []; 

    if(fName && fEmail && fPassword && fConfirmPassword && fDate && fMonth && fYear){
        if(fPassword.length>=8 &&fConfirmPassword.length>=8){
            if(fPassword === fConfirmPassword){
                var fbUserData = JSON.parse(localStorage.getItem("fbUsers")) || [];
                var flag = false;

                for(var i=0; i<fbUserData.length; i++){
                    if(fbUserData[i].fEmail == fEmail){
                        flag = true;
                    }
                }
                if(!flag){
                    var userInfo = {fName,fEmail,fPassword,fConfirmPassword,fDOB,fBio,fProfileImage,fPosts};
                    fbUserData.push(userInfo);
                    localStorage.setItem("fbUsers", JSON.stringify(fbUserData));
                    alert("Registered Succesfully.");
                    // console.log(fDOB);
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";
                    document.getElementById("confirmPassword").value = "";
                    document.getElementById("date").value = "";
                    document.getElementById("month").value = "";
                    document.getElementById("year").value = "";
                }else{
                    alert("User is already Registered.!");
                    window.location.href = `./Login.html`;
                }
                
            }else{
                alert("Passwords does not match");
            }
        }else{
            alert("Password character should be 8 or more than 8");
        }
    }else{
        alert("All fields are Mandatory.");
    }
}

// **Login***
function login(event){
    event.preventDefault();

    var fEmail = document.getElementById("email").value;
    var fPassword = document.getElementById("password").value;

    var fbUserData = JSON.parse(localStorage.getItem("fbUsers"));
    var currentUser;
    var flag = false;

    for(var i=0; i<fbUserData.length; i++){
        if(fbUserData[i].fEmail == fEmail && fbUserData[i].fPassword == fPassword){
            currentUser = fbUserData[i];
            flag = true;
        }
    }

    if(flag){
        localStorage.setItem("fbCurrentUser", JSON.stringify(currentUser));
        alert("You're Logged In now.");
        window.location.href = `./HomePage.html`;
    }else{
        alert("Please check your Credentials");
    }

}



// ***Redirect***
function redirectLogin(){
    window.location.href = `Login.html`;
}
function redirectRegister(){
    window.location.href = `Register.html`;
}