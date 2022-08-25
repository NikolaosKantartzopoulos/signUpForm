const create_account_dom = document.getElementById("create_account_button");

const passw1_dom = document.getElementById("passw1");
const passw2_dom = document.getElementById("passw2");

let p1_field_value = "";
let p2_field_value = "";

passw1_dom.addEventListener("focusout", ()=>{
 if(passw1_dom.value == passw2_dom.value && passw1_dom.value != ""){
   passw2_dom.style.backgroundColor = "rgba(144,238,144,0.5)";
   passw1_dom.style.backgroundColor = "rgba(144,238,144,0.5)";
 }
})

passw2_dom.addEventListener("focusout", ()=>{
 if(passw1_dom.value != ""){
   passw2_dom.style.backgroundColor = "rgba(144,10,10,0.2)";
   passw1_dom.style.backgroundColor = "rgba(144,10,10,0.2)";
 }
 if(passw1_dom.value == passw2_dom.value && passw1_dom.value != ""){
   passw2_dom.style.backgroundColor = "rgba(144,238,144,0.5)";
   passw1_dom.style.backgroundColor = "rgba(144,238,144,0.5)";
 }
})
