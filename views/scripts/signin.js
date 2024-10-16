const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const form = document.querySelector('form');

function errorOutput(error){
    if(error === 'email'){
        let para = document.createElement('p');
        para.textContent = 'An e-mail is required'
        para.style.fontSize = '2rem';
        para.style.color = 'whitesmoke';
        para.style.fontFamily = 'monospace';
        para.style.backdropFilter = 'blur(8px)'; 
        form.appendChild(para);
    }else if(error === 'password'){
        let para = document.createElement('p');
        para.textContent = 'A password is required'
        para.style.fontSize = '2rem';
        para.style.color = 'whitesmoke';
        para.style.fontFamily = 'monospace';
        para.style.backdropFilter = 'blur(8px)'; 
        form.appendChild(para);
    }else if(error === 'verify'){
        let para = document.createElement('p');
        para.textContent = 'An e-mail has been sent to you'
        para.style.fontSize = '2rem';
        para.style.color = 'whitesmoke';
        para.style.fontFamily = 'monospace';
        para.style.backdropFilter = 'blur(8px)'; 
        form.appendChild(para);
    }else if(error === 'no user found'){
        let para = document.createElement('p');
        para.textContent = 'No such user founded'
        para.style.fontSize = '2rem';
        para.style.color = 'whitesmoke';
        para.style.fontFamily = 'monospace';
        para.style.backdropFilter = 'blur(8px)'; 
        form.append(para)
    }
}