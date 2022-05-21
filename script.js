const hide_eye = document.getElementById("hide_eye");
const eye = document.getElementById(
    "eye"
)
const inputEl = document.getElementById("showPassword")

hide_eye.addEventListener('click',(()=>{
            inputEl.type="text"
            hide_eye.style.visibility='hidden'
            eye.style.visibility='visible'
}));


eye.addEventListener('click',(()=>{
    inputEl.type="password"
    eye.style.visibility='hidden'
    hide_eye.style.visibility='visible'
}));