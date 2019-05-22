<<<<<<< HEAD
<<<<<<< HEAD
function validarForm() {
    if (!validarTelefono()) {
        return false;
    }
    if (!validarNombre()) {
        return false;
    }
    if (!validarEdad()) {
        return false;
    }
    if (!validarCuidad()) {
        return false;
    }
    if (!validarTelefono()) {
        return false;
    }
    return true;

}
=======
=======









>>>>>>> 0b1a394f906bb668364b3eef092ff8500d7aec0d
function validarTelefono() {
	var campoTelefono = document.getElementById('campoTelefono');
	if (/^\d{9}$/.test(campoTelefono.value)) {
		return true;
	} else {
		return false;
	}
}

function validarNombre() {
	var campoNombre = document.getElementById('campoNombre');
	if (/^[a-zA-Z ]{2,30}$/.test(campoNombre.value)) {
		return true;
	} else {
		return false;
	}
}

function validarCiudad() {
	var campoCiudad = document.getElementById('campoCiudad');
	if (/^[a-zA-Z ]{2,30}$/.test(campoCiudad.value)) {
		return true;
	} else {
		return false;
	}
}
>>>>>>> 654cdbc041d1aa651b6977e0b06676c9324abba8
