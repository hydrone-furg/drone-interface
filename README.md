# HyDrone

The HyDrone package contains the Graphical User Interface for controlling the drone.

## Interface
The interface node subscribes to all interesting topics and feeds the screen with necessary data. It also implements a simple way for the user to publish desired setpoints using xyz coordinates, and a log visualizer.

## Navigator
The navigator nodes is responsible for controlling the setpoints and current position of the drone, the desired setpoints are published by the interface an the navigator makes shure the drone gets there.













**This is currently a work in progress, it may have a lot of bugs in the current time being.**
