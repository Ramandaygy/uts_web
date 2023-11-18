document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log('Nama:', nama);
    console.log('Email:', email);
    console.log('Password:', password);
});