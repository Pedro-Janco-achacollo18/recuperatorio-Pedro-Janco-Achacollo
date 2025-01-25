document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        alert("No has iniciado sesión.");
        window.location.href = 'perfil.html';
        return;
    }

    document.getElementById('userInfo').innerHTML = `
        <p><strong>Nombre:</strong> ${currentUser.name}</p>
        <p><strong>Email:</strong> ${currentUser.email}</p>
        <p><strong>Rol:</strong> ${currentUser.role}</p>
    `;

    document.getElementById('name').value = currentUser.name;
    document.getElementById('email').value = currentUser.email;

    document.getElementById('editForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        currentUser.name = document.getElementById('name').value;
        currentUser.email = document.getElementById('email').value;

        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        alert("Datos actualizados correctamente.");
    });
});

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}
