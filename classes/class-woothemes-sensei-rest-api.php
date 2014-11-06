<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/**
 * Sensei Rest API class
 *
 * All functionality pertaining to Sensei's integration with the WordPress Rest API
 *
 * @package WordPress
 * @subpackage Sensei
 * @category Core
 * @author WooThemes
 * @since 1.8.0
 *
 * TABLE OF CONTENTS
 *
 * - __construct()
 *
 * TODO: check for WP-API
 *
 */
class WooThemes_Sensei_Rest_API extends WP_JSON_CustomPostType {

    public function __construct () {
        //register the endpoints
        add_filter( 'json_endpoints', array( $this , 'register_routes' ) );
    }// __construct

    public function register_routes( $routes ){
            $routes['/sensei/'] = array(
                array( array( $this, 'send_plugin_data'), WP_JSON_Server::READABLE ),
                //array( array( $this, 'new_post'), WP_JSON_Server::CREATABLE | WP_JSON_Server::ACCEPT_JSON ),
            );
            $routes['/sensei/(?P<username>\w+)/courses'] = array(
                array( array( $this, 'get_user_courses'), WP_JSON_Server::READABLE ),
                //array( array( $this, 'new_post'), WP_JSON_Server::CREATABLE | WP_JSON_Server::ACCEPT_JSON ),
            );
            $routes['/sensei/courses/(?P<id>\d+)'] = array(
                array( array( $this, 'get_post'), WP_JSON_Server::READABLE ),
               // array( array( $this, 'edit_post'), WP_JSON_Server::EDITABLE | WP_JSON_Server::ACCEPT_JSON ),
               // array( array( $this, 'delete_post'), WP_JSON_Server::DELETABLE ),
            );

            // Add more custom routes here
            return $routes;
    }// end register_routes

    public function send_plugin_data( ) {
        $test = array( 'plugin'=>'Sensei', 'version' => 'API Beta' , 'success' => true );
        wp_send_json_success( $test );
    }// end send plugin data

    public function get_user_courses () {
        //
    }// end get_user_courses
}// end class