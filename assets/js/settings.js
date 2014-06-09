jQuery(document).ready(function($) {

    /***** Settings Tabs *****/

    // Make sure each heading has a unique ID.
    jQuery( 'ul#settings-sections.subsubsub' ).find( 'a' ).each( function ( i ) {
        var id_value = jQuery( this ).attr( 'href' ).replace( '#', '' );
        jQuery( 'h3:contains("' + jQuery( this ).text() + '")' ).attr( 'id', id_value ).addClass( 'section-heading' );
    });

    jQuery( '#woothemes-sensei .subsubsub a.tab' ).click( function ( e ) {
        // Move the "current" CSS class.
        jQuery( this ).parents( '.subsubsub' ).find( '.current' ).removeClass( 'current' );
        jQuery( this ).addClass( 'current' );

        // If "All" is clicked, show all.
        if ( jQuery( this ).hasClass( 'all' ) ) {
            jQuery( '#woothemes-sensei h3, #woothemes-sensei form p, #woothemes-sensei table.form-table, p.submit' ).show();
            return false;
        }

        // If the link is a tab, show only the specified tab.
        var toShow = jQuery( this ).attr( 'href' );
        // Remove the first occurance of # from the selected string (will be added manually below).
        toShow = toShow.replace( '#', '', toShow );
        jQuery( '#woothemes-sensei h3, #woothemes-sensei form > p:not(".submit"), #woothemes-sensei table' ).hide(); // Hide all sections.
        jQuery( 'h3#' + toShow ).show().nextUntil( 'h3.section-heading', 'p, table, table p' ).show(); // Show the appropriate section.

        return false;
    });

    /***** Colour pickers *****/

    jQuery('.colorpicker').hide();
    jQuery('.colorpicker').each( function() {
        jQuery(this).farbtastic( jQuery(this).prev('.color') );
    });

    jQuery('.color').click(function() {
        jQuery(this).next('.colorpicker').fadeIn();
    });

    jQuery(document).mousedown(function() {
        jQuery('.colorpicker').each(function() {
            var display = jQuery(this).css('display');
            if ( display == 'block' ) {
                jQuery(this).fadeOut();
            }
        });
    });

    /***** Course reordering *****/

    jQuery( '.sortable-course-list' ).sortable();
    jQuery( '.sortable-tab-list' ).disableSelection();

    jQuery( '.sortable-course-list' ).bind( 'sortstop', function ( e, ui ) {
        var orderString = '';

        jQuery( this ).find( '.course' ).each( function ( i, e ) {
            if ( i > 0 ) { orderString += ','; }
            orderString += jQuery( this ).find( 'span' ).attr( 'rel' );
        });

        jQuery( 'input[name="course-order"]' ).attr( 'value', orderString );
    });

    /***** Lesson reordering *****/

    jQuery( '.sortable-lesson-list' ).sortable();
    jQuery( '.sortable-tab-list' ).disableSelection();

    jQuery( '.sortable-lesson-list' ).bind( 'sortstop', function ( e, ui ) {
        var orderString = '';

        var module_id = jQuery( this ).attr( 'data-module_id' );
        var order_input = 'lesson-order';
        if( 0 != module_id ) {
            order_input = 'lesson-order-module-' + module_id;
        }


        jQuery( this ).find( '.lesson' ).each( function ( i, e ) {
            if ( i > 0 ) { orderString += ','; }
            orderString += jQuery( this ).find( 'span' ).attr( 'rel' );
        });

        jQuery( 'input[name="' + order_input + '"]' ).attr( 'value', orderString );
    });

});