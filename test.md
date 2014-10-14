Configure Sensei Tests
=====

1) You must have VVV
2) You should ssh into your vagrant box : `vagrant ssh`
3) Go to your root Sensei plugins directory: `cd /srv/www/wordpress-default/plugins/sense` (make sure this where your plugin is)
4) Make sure you're on the Sensei test branch
5) Run the command to setup the tests: `bash bin/install-wp-tests.sh wordpress_unit_tests root root local.wordpress.dev latest`
6) In the Sensei directory run `phpunit`