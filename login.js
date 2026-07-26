const PASSWORD = "130956";

const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginBtn");
const errorText = document.getElementById("error");
const toggle = document.getElementById("toggle");


// แสดง / ซ่อน รหัสผ่าน

toggle.addEventListener("click", function(){

    if(passwordInput.type === "password"){

        passwordInput.type = "text";

        toggle.innerHTML =
        '<i class="fa-solid fa-eye-slash"></i>';

    }else{

        passwordInput.type = "password";

        toggle.innerHTML =
        '<i class="fa-solid fa-eye"></i>';

    }

});


// เข้าสู่ระบบ

function login(){

    let password =
    passwordInput.value.trim();


    if(password === PASSWORD){


        errorText.style.color="#86efac";

        errorText.innerHTML =
        "✅ สำเร็จ กำลังเข้าสู่ระบบ...";


        loginButton.innerHTML =
        "กำลังโหลด...";


        loginButton.style.opacity="0.7";


        setTimeout(()=>{


            window.location.href =
            "https://abdulo9655.github.io/point-/";


        },1000);



    }else{


        errorText.style.color="#fca5a5";

        errorText.innerHTML =
        "❌ รหัสผ่านไม่ถูกต้อง";


        passwordInput.value="";

        passwordInput.focus();


    }

}


// ปุ่ม Login

loginButton.addEventListener(
"click",
login
);


// กด Enter

passwordInput.addEventListener(
"keydown",
function(e){

    if(e.key==="Enter"){

        login();

    }

});
