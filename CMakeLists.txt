cmake_minimum_required(VERSION 2.8.3)
project(hydrone)

find_package(catkin REQUIRED)

###################################
## catkin specific configuration ##
###################################
catkin_package()

#############
## Install ##
#############

install(PROGRAMS
   interface/scripts/talker.js
   interface/scripts/listener.js
   interface/scripts/interface.js
   interface/main.js
   DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)

