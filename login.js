// //here login authenacation
  
var username = document.getElementById("userName");
var password = document.getElementById("password");

async function Login(event){
  event.preventDefault();
 

  const fetched= await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
     
      body: JSON.stringify({
          username: username.value,
          password: password.value,
        
        // username:  'kminchelle',
        // password: '0lelplR',
        })

    })
      const data= await fetched.json()
        await localStorage.setItem("data", JSON.stringify(data))
              const { token } = fetched.body
  
         localStorage.setItem('token', token)
  
   
    if(!data.token){
      alert(" email or pasword is incorrect")
    }else{
        window.location.href = "../../mainpage/index.html";
      }

  }


  const data = document.querySelector('.form');
  data.addEventListener('submit', Login)
        
        



// // function logIn(){
// //     var emaill = document.getElementById("emaill").value;
// //     var passl = document.getElementById("passl").value;

// //     var email = localStorage.getItem("email");
// //     var password = localStorage.getItem("password");

// //     if(emaill == email && passl == password){
// //         window.location.href = "./home/home.html";

// //     }else{
// //         alert("email or password is incorrect")
// //     }
