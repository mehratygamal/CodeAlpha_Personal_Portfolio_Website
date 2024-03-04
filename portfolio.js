var typed =new Typed(".auto-type",
{
    
    typeSpeed:150,
    backSpeed:150,
    looped:true
})
const form =document.getElementById('form');
const name =document.getElementById('name');
const email =document.getElementById('email');


const name_error=document.getElementById('name_error');
const email_error=document.getElementById('email_error');
form.addEventListener('submit',(e)=>{
    var email_checker=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

    if(name.value===''||name.value== null)
    {
        e.preventDefault();
        name_error.innerHTML="Name is required";
    }
    else{
        name_error.innerHTML="";
    }
    if (!email.value.match(email_checker))
    {
        e.preventDefault();
        email_error.innerHTML="Write valid E-mail";
    }
    else{
        email_error.innerHTML="";
    }
})
