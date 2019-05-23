function validarNombre() {
	let campoNombre = document.getElementById('campoNombre');
	if (/^[a-zA-Z ]{2,30}$/.test(campoNombre.value) || campoTelefono === null) {
		campoNombre.className = "bien";
	} else {
		campoNombre.className = "mal";
	}
}

function validarTelefono() {
	let campoTelefono = document.getElementById('campoTelefono');
	if (/^\d{9}$/.test(campoTelefono.value) || campoTelefono === null) {
		campoTelefono.className = "bien";
	} else {
		campoTelefono.className = "mal";
	}
}


function validarCiudad() {
	let campoCiudad = document.getElementById('campoCiudad');
	if (/^[a-zA-Z ]{2,30}$/.test(campoCiudad.value) || campoCiudad === null) {
		campoCiudad.className = "bien";
	} else {
		campoCiudad.className = "mal";
	}
}

function validarEdad() {
	let campoEdad = document.getElementById('campoEdad');
	if (/^([1-9]?\d|100)$/.test(campoEdad.value) || campoEdad === null) {
		campoEdad.className = "bien";
	} else {
		campoEdad.className = "mal";
	}
}