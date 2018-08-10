cmake_minimum_required(VERSION 2.8.3)
project(hydrone)

find_package(catkin REQUIRED COMPONENTS roscpp)
catkin_package()
include_directories(${catkin_INCLUDE_DIRS})

add_executable(navigation_handler navigation/navigation_handler.cpp)
target_link_libraries(navigation_handler ${catkin_LIBRARIES})

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

