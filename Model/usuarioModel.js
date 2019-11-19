function UsuarioModel() {
    this.usuarios = [];
}

UsuarioModel.prototype
.validarDatos = function(username, pass, passValidation, email) {
    validarEmailRegistrado(email);
    validarPassword(pass, passValidation);
}

UsuarioModel.prototype
.registrarUsuario = function(username, pass, email) {
    localStorage.setItem(new Usuario(username, pass, email));
}


function validarEmailRegistrado(email) {
    if(localStorage.getItem(email)) {
        throw new Error('Usuario registrado');
    }
}

function validarPassword(pass, passValidation) {
    if(pass != passValidation) {
        throw new Error('Las contraseñas no coinciden');
    }
}