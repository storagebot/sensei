<?php
/**
 * Boostrap file, used by PHPUnit to load the needed files
 */

$_tests_dir = getenv('WP_TESTS_DIR');
if ( !$_tests_dir ) $_tests_dir = '/tmp/wordpress-tests-lib';
require_once $_tests_dir . '/includes/bootstrap.php';

require dirname( __FILE__ ) . '/../../woothemes-sensei.php';
require_once dirname(__FILE__).'/../factory/Sensei-Factory.php' ;