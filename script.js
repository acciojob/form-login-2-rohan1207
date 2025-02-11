//your JS code here. If required.
let button=document.querySelector("#button");

button.addEventListener("click",()=>{
	let name=document.querySelector("#name").value;
	let lastName=document.querySelector("#lastname").value;
	let phone=document.querySelector("#phone").value;
	let email=document.querySelector("#email").value;

	alert(`First Name: ${name} Last Name: ${ lastName} Phone Number: ${phone} ID: ${email}`)
	
})