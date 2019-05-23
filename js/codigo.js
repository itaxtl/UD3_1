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

function validarEdad() {
	var campoEdad = document.getElementById('campoEdad');
	if (/^([1-9]?\d|100)$/.test(campoEdad.value)) {
		return true;
	} else {
		return false;
	}
}

