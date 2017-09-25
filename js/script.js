	// var div = document.createElement("div");
	// var attr = document.createAttribute("class");
	// attr.value = "test-class";
	// div.setAttributeNode(attr);

	// var div = document.querySelector("#test");
	// var msg = showMessage("success","Esta funcionando!");
	// div.innerHTML = msg;

	// Accesos del usuario TopSecret
		var user = {
			"username" : "admin@admin.com",
			"password" : "123456"
		}

	// Válido minimo del campo de fecha de nacimiento
		var date = document.querySelector("#nacimiento");
		if (date) {
			date.max = todayIs();
		}

	// Llenado de paises en el Select
		var select = document.querySelector("#pais");
		if (select) {
			var country_list = [
				"Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"
				];
		    country_list.forEach(function(country){
		    	var option = document.createElement("option");
		    	var optionAttr = document.createAttribute("value");
		    	var optionText = document.createTextNode(country);
		    	optionAttr.value = country;
		    	option.setAttributeNode(optionAttr);
		    	option.appendChild(optionText);
		    	select.appendChild(option);
		    });
		}

	// Mensajes de respuesta y exito de submit
		var mensajes = document.querySelector("#mensajes");
		if ($_GET("form")) {
			window.addEventListener("load", function(){
				mensajes.innerHTML = showMessage("success", "Datos enviados exitosamente!");
				msgclose.focus();
			});
		}
		var conmensajes = document.querySelector("#conmensajes");
		if ($_GET("contactanos")) {
			window.addEventListener("load", function(){
				conmensajes.innerHTML = showMessage("success", "Datos enviados exitosamente!");
				msgclose.focus();
			});
		}
		if ($_GET("secret")) {
			window.addEventListener("load", function(){

			});
		}

	// Validacion de formulario de registro
		if(document.querySelector("#registro")) {
			document.registro.addEventListener("submit", function(event){
				var error = 0;

				// Validar correo
				if (!valEmail(username, errorUsername)) {
					error = 1;
				}

				// Validar contraseña
				if (!valPassword(password, errorPassword, password2, errorPassword2)) {
					error = 1;
				}

				// Validar nombre
				if (!valNames(nombre, errorNombre)) {
					error = 1;
				}

				// Validar fecha de nacimiento
				if (!valBirthDate(nacimiento, errorNacimiento)) {
					error = 1;
				}

				// Validar radio
				if (!valRadio(document.registro.genero, errorGenero)) {
					error = 1;
				}

				// Validar select
				if (!hasValues(pais, errorPais)) {
					error = 1;
				}

				// Verifica si hay errores
					if (error != 0) {
						event.preventDefault();
						mensajes.innerHTML = showMessage("warning", "Por favor, verifique sus datos");
						msgclose.focus();
					}

			});
		}

	// Validacion de formulario de contactanos
		if(document.querySelector("#contactanos")) {
			document.contactanos.addEventListener("submit", function(event){
				var error = 0;

				// Validar connombre
				if (!valNames(connombre, errorConnombre)) {
					error = 1;
				}	

				// Validar concorreo
				if (!valEmail(concorreo, errorConcorreo)) {
					error = 1;
				}

				// Validar coninfo
				if (!valTextArea(coninfo, errorConinfo)) {
					error = 1;
				}	

				// Verifica si hay errores
					if (error != 0) {
						event.preventDefault();
						conmensajes.innerHTML = showMessage("warning", "Por favor, verifique sus datos");
						msgclose.focus();
					}

			});
		}

	// Validacion de formulario de inicio de sesion
		if(document.querySelector("#secret")) {
			document.secret.addEventListener("submit", function(event){
				var error = 0;

				// Validar username
				if (!valEmail(username, errorUsername, 30)) {
					error = 1;
				}

				// Validar contraseña
				if (!hasValues(password, errorPassword, 30)) {
					error = 1;
				}

				// Verifica si hay errores
					if (error != 0) {
						event.preventDefault();
						conmensajes.innerHTML = showMessage("warning", "Por favor, verifique sus datos");
						msgclose.focus();
					} else {
						if (username.value == user.username && password.value == user.password) {
							event.preventDefault();
							if (confirm("Estás seguro? ENTRA BAJO TU PROPIO RIESGO")) {
								window.location = 'https://www.youtube.com/watch?v=Lmw4lzjEqD8';
							} else {
								conmensajes.innerHTML = showMessage("danger", "such a pussy");
								msgclose.focus();
							}
						} else {
							event.preventDefault();
							conmensajes.innerHTML = showMessage("info", "Usuario o Contraseña incorrecta.");
							username.style.background = '#FFFFCC';
							password.style.background = '#FFFFCC';
							msgclose.focus();
						}
					}

			});
		}

	function valEmail(param, err, isValidated = true){
		if(!hasValues(param, err, 30, "Correo")) {
			isValidated = false;
		}
		// Verificar si correo es válido
		if (param.value.indexOf("@") == -1) {
			param.style.background = '#FFFFCC';
			err.style.visibility = 'visible';
			alert("El correo requiere un arroba (@)");
			isValidated = false;
		} else if (param.value.indexOf("@") == 0) {
			param.style.background = '#FFFFCC';
			err.style.visibility = 'visible';
			alert("Es necesario texto antes del arroba");
			isValidated = false;
		} else if (param.value.indexOf("@") == (param.value.length) - 1) {
			param.style.background = '#FFFFCC';
			err.style.visibility = 'visible';
			alert("Ese necesario texto después del arroba");
			isValidated = false;
		} else {
			param.style.background = '#FFF';
			err.style.visibility = 'hidden';
		}
		// Verificar estructura
		if (!isEmail(param.value)) {
			param.style.background = '#FFFFCC';
			err.style.visibility = 'visible';
			alert("Correo no válido");
			isValidated = false;
		}
		return isValidated;
	}

	function valPassword(param1, err1, param2, err2, isValidated = true){
		if(!hasValues(param1, err1, 30, "Contraseña")) {
			isValidated = false;
		}
		if(!hasValues(param2, err2)) {
			isValidated = false;
		}
		// Verificar si las dos contraseñas son iguales
		if (param1.value != param2.value) {
			alert('Las contraseñas NO coinciden');
			param2.style.background = '#FFFFCC';
			err2.style.visibility = 'visible';
			isValidated = false;
		}
		return isValidated;
	}

	function valNames(param, err, isValidated = true){
		if(!hasValues(param, err, 30, "Campo de nombre")) {
			isValidated = false;
		}
		// Verificar longitud y si contiene numeros
		if (param.value.length < 3 || hasNumbers(param.value)) {
			param.style.background = '#FFFFCC';
			err.style.visibility = 'visible';
			alert("Ingrese un nombre válido");
			isValidated = false;
		}
		return isValidated;
	}

	function valTextArea(param, err, isValidated = true){
		if (param.value == '') {
			param.style.background = '#FFFFCC';
			err.style.visibility = 'visible';
			isValidated = false;
		} else if (param.value.length < 10) {
			alert("Ingrese más de 2 caracteres :(");
			param.style.background = '#FFFFCC';
			err.style.visibility = 'visible';
			isValidated = false;
		} else if (param.value.length > 100) {
			alert("Demasiada información!");
			param.style.background = '#FFFFCC';
			err.style.visibility = 'visible';
			isValidated = false;
		} else {
			param.style.background = '#FFF';
			err.style.visibility = 'hidden';
		}
		return isValidated;
	}

	function valBirthDate(param, err, isValidated = true){
		if(!hasValues(param, err)) {
			isValidated = false;
		}
		// Verificar si fecha ingresada excede fecha actual
		if (new Date(param.value) > new Date(todayIs())) {
			param.style.background = '#FFFFCC';
			err.style.visibility = 'visible';
			alert("Ingrese una fecha válida");
			isValidated = false;
		}
		// Verificar estructura
		if (!isDate(param.value)) {
			param.style.background = '#FFFFCC';
			err.style.visibility = 'visible';
			alert("Fecha no válida");
			isValidated = false;
		}
		return isValidated;
	}

	function valRadio(params, err, isValidated = true){
		var selected = false;
		for( var i = 0; i < 3; i++) {    
		  if (params[i].checked) {
				selected = true;	
			}
			err.style.visibility = 'hidden';
		}
		if (selected == false) {
			err.style.visibility = 'visible';
			isValidated = false;
		}
		return isValidated;
	}

	function hasValues(param, err, length = null, field = null, isValidated = true){
		if (param.value == '') {
			param.style.background = '#FFFFCC';
			err.style.visibility = 'visible';
			isValidated = false;
		} else if(length){
			if (param.value.length > length) {
				param.style.background = '#FFFFCC';
				err.style.visibility = 'visible';
				alert( field + " demasiado largo");
				isValidated = false;
			} else {
				param.style.background = '#FFF';
				err.style.visibility = 'hidden';
			}
		} else{
			param.style.background = '#FFF';
			err.style.visibility = 'hidden';
		}
		return isValidated;
	}

	function hasNumbers(param){
	  	return param.match(/\d+/g);
	}

	function isEmail(param){
		return param.match(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/g);
	}

	function isDate(param){
		return param.match(/^(\d{4})+(-)+(\d{2})+(-)+(\d{2})$/g);
	}

	function todayIs(){
		var fullDate = new Date();
		var month = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) :(fullDate.getMonth()+1);
		return fullDate.getFullYear() + "-" + ("0" + month).slice(-2) + "-" + fullDate.getDate();
	}

	function $_GET(param) {
	    var vars = {};
	    window.location.href.replace(location.hash, '').replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function(m, key, value) {
	        vars[key] = value !== undefined ? value : '';
	    });

	    if ( param ) {
	        return vars[param] ? vars[param] : null;    
	    }
	    return vars;
	}

	function showMessage(type, msg){
		switch(type) {
		    case "success":
		        return "<div class='alert alert-success'> \
							<button id='msgclose' class='close' data-dismiss='alert'><span >&times</span></button> \
							<strong>"+msg+"</strong> \
						</div>";
		        break;
		    case "info":
		        return "<div class='alert alert-info'> \
							<button id='msgclose' class='close' data-dismiss='alert'><span >&times</span></button> \
							<strong>Alerta! </strong>"+msg+
						"</div>";
		        break;
		    case "warning":
		        return "<div class='alert alert-warning'> \
							<button id='msgclose' class='close' data-dismiss='alert'><span >&times</span></button> \
							<strong>Alerta! </strong>"+msg+
						"</div>";
		        break;
		    case "danger":
		        return "<div class='alert alert-danger'> \
							<button id='msgclose' class='close' data-dismiss='alert'><span >&times</span></button> \
							<strong>Alerta! </strong>"+msg+
						"</div>";
		        break;
		    default:
		        return "<b>BAD CALLING</b>";
		        break;
		}
	}