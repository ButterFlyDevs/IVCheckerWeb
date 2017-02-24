from fabric.api import local

######################################################################
#  FABRIC Fabfile.  <http://www.fabfile.org/>
# This is the file to configure Fabric Python Library to admin tasks

# Use:
# fab <command>

# How to know the commands? :
# fab -l

# Info about command:
# fab -d <command>

#######################################################################

# Butterfly Devs  @ Granada 2017


def requirements(domain=None):
    """
    Run task about provisioning of requirements of the app.
    Example of use: fab requirements:system  requirements:webapp
    :param domain: The key to know how requirements file execute.
    :return: None
    """

    # Execute the requirements bash file to provisioning to the system of all necesary to run this app.
    if domain == 'system':
        local('. ./requirements.sh', shell='/bin/bash')


def clean(domain=None):
    """
    Delete all requirements files to reload after (maybe).
    :param domain: The key to know what to do.
    :return:
    """

    if domain == 'system':
        print ('Cleaning project requirements files.')
        local('rm -rf google_appengine')  # -f optin to avoid erros if the file doesn't exists.


def run():
    """
    Running Web Server
    """

    default_port = '8080'
    default_admin_port = '8082'

    print ('### Running IVChecker Web app in localhost in background. ###')

    local('google_appengine/dev_appserver.py --port={} --admin_port={} '
          'app/app.yaml &'.format(default_port, default_admin_port))


def kill():
    """
    Kill all processes that is related with google dev servers.
    """
    print ("Kill all processes that are related with google dev_server.")
    local("kill -9 $(ps -aux | grep google | awk '{ print $2 }' | head -n -1)")