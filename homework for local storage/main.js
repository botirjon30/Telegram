var email = document.getElementById('email')
var pasword = document.getElementById('pasword')

email.addEventListener('keydown', (e) =>{
    console.log(email.value);
    for (let i = 0; i < email.value.length+1; i++) {
        if ( email.value[i] == typeof Number ) {
            console.log(false);
        }
        
    }
})

