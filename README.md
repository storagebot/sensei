Get ready for testing
=====

- 1) You must have VVV on Mac or Linux environment
- 2) You should ssh into your vagrant box : `vagrant ssh`
- 3) Go to your root Sensei plugins directory: `cd /srv/www/wordpress-default/plugins/sense` (make sure this where your plugin is)
- 4) Make sure you're on the Sensei test branch
- 5) Run the command to setup the tests: `bash bin/install-wp-tests.sh wordpress_unit_tests root root local.wordpress.dev latest`
- 6) In the Sensei directory run `phpunit`

* If you're stuck please following tutorial: *

- [An Introduction](https://pippinsplugins.com/unit-tests-wordpress-plugins- introduction/)
- [Tests vs. Assertions](https://pippinsplugins.com/unit-tests-wordpress- plugins-tests-vs-assertions/)
- [Setting Up Our Testing Suite](https://pippinsplugins.com/unit-tests-wordpress-plugins-setting-up-testing-suite/)
- [Writing Tests](https://pippinsplugins.com/unit-tests-wordpress-plugins- writing-tests/)