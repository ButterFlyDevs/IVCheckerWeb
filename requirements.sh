#!/usr/bin/env bash

#####################
# Requirements file #
#####################

# Butterfly Devs  @ Granada 2017

# You can run directly this file (. ./requirements.sh) in the root dir of the project or using our preferred
# tool of automation, Fabric (http://www.fabfile.org/ - apt-get install fabric) run:

echo -e "\033[35m \n\t    ### IVChecker Web Based App \033[35m ### \033[0m"
echo -e "\033[34m \t      Butterfly Devs @ Granada 2017 \033[34m  \033[0m"
echo -e "\033[35m \n\t    Thank you for your contribution! \n \033[0m"

echo -e "It will be installed: UnZIP, Curl and Google App Engine SDK v.1.9.30\n"


read -p "Are you sure? [y/n]: " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo -e "\n\033[34m 1. Installing unzip \033[0m\n"
    sudo apt-get install -y unzip

    echo -e "\n\033[34m 2. Installing curl \033[0m\n"
    sudo apt-get install -y curl

    echo -e "\n\033[34m 3. Downloading Google App Engine SDK v.1.9.30 \033[0m\n"
    curl -O https://storage.googleapis.com/appengine-sdks/featured/google_appengine_1.9.30.zip

    echo -e "\n\033[34m 4. Unzip SDK \033[0m\n"
    unzip google_appengine_1.9.30.zip

    echo -e "\n\033[34m 5. Deleting .zip \033[0m\n"
    rm google_appengine_1.9.30.zip

else

    echo -e "\n\033[34m :( \033[0m\n"

fi




