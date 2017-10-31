#!/bin/sh
# ---------------------------------------------------------------------------
# Copyright 2017, BuzzingPixel, LLC
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the Apache License 2.0.
# http://www.apache.org/licenses/LICENSE-2.0
# ---------------------------------------------------------------------------





#########################################
# Make sure the backups directory exists
#########################################
mkdir -p /home/vagrant/development/localStorage/;
touch /home/vagrant/development/localStorage/.gitkeep;
mkdir -p /home/vagrant/development/localStorage/dbBackups/;
touch /home/vagrant/development/localStorage/dbBackups/.gitkeep;





###################################
# Run PHP Backup Script
###################################

#!/bin/sh
sudo php /home/vagrant/development/vagrantConfig/dbBackups.php;
