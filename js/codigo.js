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
		document.getElementById("error")
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
