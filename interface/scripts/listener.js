#!/usr/bin/env node
'use strict';

const rosnodejs = require('rosnodejs');
const std_msgs = rosnodejs.require('std_msgs').msg;
const mavros_msgs = rosnodejs.require('mavros_msgs').msg;
const geometry_msgs = rosnodejs.require('geometry_msgs').msg;
const rosgraph_msgs = rosnodejs.require('rosgraph_msgs').msg;

var current_x;
var current_y;
var current_z;

function local_position_cb(data){
	current_x = data.pose.position.x;
	current_y = data.pose.position.y;
	current_z = data.pose.position.z;
	update_local_position();
}

function rosout_cb(data){
	update_logging(data.level, data.msg);
}

function listener(){
	rosnodejs.initNode('/listener_node').then((nh) => {
		let local_position_sub = nh.subscribe('/mavros/local_position/pose', geometry_msgs.PoseStamped, local_position_cb);
		let rosout_sub = nh.subscribe('/rosout_agg', rosgraph_msgs.Log, rosout_cb);
	});
}

function update_local_position(){
	document.getElementById("current_x").innerText = current_x;
	document.getElementById("current_y").innerText = current_y;
	document.getElementById("current_z").innerText = current_z;
}

function update_logging(level, message){
	var log_level;
	switch(level){
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

	document.getElementById("logging").value += log_level + message + "\n";
}

listener();