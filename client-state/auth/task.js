const signin = document.getElementById('signin');
const signinForm = document.forms.signin__form;
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

const localUserId = localStorage.getItem('user_id');
console.log(localUserId);

if (localUserId) {
    userId.textContent = localUserId;
    welcome.classList.add('welcome_active');
} else {
    signin.classList.add('signin_active');
    
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const xhr = new XMLHttpRequest();
    
        xhr.addEventListener('load', () => {
            const responseParsed = JSON.parse(xhr.response);
            if (responseParsed.success) {
                localStorage.setItem('user_id', responseParsed.user_id);
                userId.textContent = responseParsed.user_id;
    
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
            }
            else {
                alert('Неверный логин/пароль');
                signinForm.reset();
            }
        })
    
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    
        const formData = new FormData(document.forms.signin__form);
        xhr.send(formData);
    });
}

