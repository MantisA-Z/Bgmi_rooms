const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const form = document.querySelector('form');

function errorOutput(error){
    console.log('called')
    if(error === 'name'){
        nameInput.placeholder = 'A name is required';
        nameInput.placeholder.textAlign = 'center';
        nameInput.classList.add('error');
    }else if(error === 'email'){
        emailInput.textContent = 'An email is required';
        emailInput.style.textAlign = 'center';
        emailInput.classList.add('error');;
    }else if(error === 'password'){
        passwordInput.textContent = 'A password is required';
        passwordInput.style.textAlign = 'center';
        passwordInput.classList.addz('error');
    }else if(error === 'verify'){
        let para = document.createElement('p');
        para.textContent = 'An e-mail has been sent to you'
        para.style.fontSize = '2rem';
        para.style.color = 'whitesmoke';
        para.style.fontFamily = 'monospace';
        para.style.backdropFilter = 'blur(8px)'; 
        form.appendChild(para);
    }
    else if(error === 'duplicate'){
        let para = document.createElement('p');
        para.textContent = 'Email already in use by someone'
        para.style.fontSize = '2rem';
        para.style.color = 'whitesmoke';
        para.style.fontFamily = 'monospace';
        para.style.backdropFilter = 'blur(8px)'; 
        form.appendChild(para)
    }
}