'use strict';

const rosnodejs = require('rosnodejs');
const std_msgs = rosnodejs.require('std_msgs').msg;
const mavros_msgs = rosnodejs.require('mavros_msgs').msg;
const geometry_msgs = rosnodejs.require('geometry_msgs').msg;
const rosgraph_msgs = rosnodejs.require('rosgraph_msgs').msg;

var setpoint_request_pub; //declared here for scope reasons


function local_position_cb(data){
	var x = data.pose.position.x;
	var y = data.pose.position.y;
	var z = data.pose.position.z;
	update_position_info(x, y, z);
}

function setpoint_position_cb(data){
	var x = data.pose.position.x;
	var y = data.pose.position.y;
	var z = data.pose.position.z;
	update_setpoint_info(x, y, z);
}

function rosout_cb(data){
	update_logging(data.level, data.msg);
}

function listener(){
	rosnodejs.initNode('/listener_node', {rosMasterUri: "http://127.0.0.1:11311"}).then((nh) => {
		let local_position_sub = nh.subscribe('/mavros/local_position/pose', geometry_msgs.PoseStamped, local_position_cb);
		let setpoint_position_sub = nh.subscribe('/mavros/setpoint_position/local', geometry_msgs.PoseStamped, setpoint_position_cb);
		let rosout_sub = nh.subscribe('/rosout', rosgraph_msgs.Log, rosout_cb);

		setpoint_request_pub = nh.advertise('/hydrone/setpoint_request', geometry_msgs.PoseStamped);
	});
}
function publish_goal(){
	var goal_x = parseFloat(document.getElementById("goal_x").value);
	var goal_y = parseFloat(document.getElementById("goal_y").value);
	var goal_z = parseFloat(document.getElementById("goal_z").value);

	var goal_msg = new geometry_msgs.PoseStamped;
	goal_msg.pose.position.x = goal_x;
	goal_msg.pose.position.y = goal_y;
	goal_msg.pose.position.z = goal_z;

	setpoint_request_pub.publish(goal_msg);
};

listener();