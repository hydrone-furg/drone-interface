
function update_position_info(x, y, z){
	document.getElementById("current_x").innerText = x;
	document.getElementById("current_y").innerText = y;
	document.getElementById("current_z").innerText = z;
}



function update_setpoint_info(x, y, z){
	document.getElementById("setpoint_x").innerText = x;
	document.getElementById("setpoint_y").innerText = y;
	document.getElementById("setpoint_z").innerText = z;
}

function update_logging(level, message){
    var textarea = document.getElementById("logging");
    var log_level;

	switch(level){
        case -1:
            textarea.value = "";
            return;
		case 1:
			log_level = "[DEBUG] ";
			break;
		case 2:
			log_level = "[INFO] ";
			break;
		case 4:
			log_level = "[WARN] ";
			break;
		case 8:
			log_level = "[ERROR] ";
			break;
		case 16:
			log_level = "[FATAL] ";
			break;
	}
    
    textarea.value += log_level + message + "\n";
    textarea.scrollTop = textarea.scrollHeight;
}
