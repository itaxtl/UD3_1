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
<<<<<<< HEAD

function validarEdad() {
	var campoEdad = document.getElementById('campoEdad');
	if (.test(campoEdad.value)) {
		return true;
	} else {
		return false;
	}
}

//    /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
=======
>>>>>>> 176a30220cb14c1f13cfa8271355d570ca0ad0b7
