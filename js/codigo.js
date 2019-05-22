








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
	if (/^[a-zA-Z ]{2,30}$/.test(campoEdad.value)) {
		return true;
	} else {
		return false;
	}
}

//    /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;