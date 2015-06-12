<?php
// This is global bootstrap for autoloading

/**
 * setting up WordPress environment
 */
$_tests_dir = getenv('WP_TESTS_DIR');
if ( !$_tests_dir ) $_tests_dir = '/tmp/wordpress-tests-lib';

// load the factory class needed for unit tests
require_once $_tests_dir . '/includes/factory.php';