# MobileApp
(For Windows)
 How to install Nativscript:
 
 steps: 
 1. install node.js
 2. install nativScript
 3. install an emulator (optional)
 4. cmd commands
------
1. install Node.js 
https://nodejs.org/en/

open your comandline (cmd)
check if the installation was a succes:

run the command: node -v
run the command: npm -v

----

2. install NativScript

run the command: npm install nativescript -g

for sucess chech run the command: ns doctor

---

3. install and set an Emulator: 

Bluestacks

download Bluestacks (android Emulation) https://www.bluestacks.com/de/index.html
after install run the command: ns devices

it should give you the needed information about the running emulation. the important property is the devive name. 
for build and running a NativScript Applicantion you must go with cmd to that directory where it is saved and run the command: ns build android --emulator="yourDevicename"
and after that if you want to see the application you must run the command: ns run android --emulator="yourDevicename"

your application should be displayed.

------------
4 cmd commands windows:

cd otherdir/targetdir = change to targetdirecory
dir = shows direcorys on your actuall path
mkdir = makes new directory on your current path
cd .. = goes on directory back

thanks and good luck ;)
