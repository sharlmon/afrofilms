<?php

require_once(BEZEL_ADDONS_PATH . '/one-click-demo/one-click-demo-import.php');

function bezel_import_files() {
	return array(
		array(
			'import_file_name'             => 'Demo Import',
			'local_import_file'            => trailingslashit( get_template_directory() ) . 'core/admin/data/demo-content.xml',
			'local_import_widget_file'     => trailingslashit( get_template_directory() ) . 'core/admin/data/widgets.json',
		),
	);
}
add_filter( 'pt-ocdi/import_files', 'bezel_import_files' );

function bezel_after_import_setup() {
	// Update Reading Settings
  $onepage  = get_page_by_title('Default');
  $blogpage = get_page_by_title('Blog');
  if( isset($onepage->ID) && isset($blogpage->ID) ) {
    update_option('show_on_front', 'page');
    update_option('page_on_front',  $onepage->ID);
    update_option('page_for_posts', $blogpage->ID);
  }

  // Update Postmeta
  global $wpdb;
  $from_url = 'http://themes.hody.co/bezel';
  $to_url = home_url();
  $wpdb->query($wpdb->prepare("UPDATE {$wpdb->postmeta} SET meta_value = REPLACE(meta_value, %s, %s)", $from_url, $to_url));
  $wpdb->query($wpdb->prepare("UPDATE {$wpdb->posts} SET post_content = REPLACE(post_content, %s, %s)", 'http%3A%2F%2Fthemes.hody.co%2Fbezel%2Fblog%2F', '%23'));

  $menus = wp_get_nav_menu_items('Primary');
  if (is_array($menus)) {
    foreach ($menus as $menu_item) {
      if ($menu_item->url == '#' && in_array($menu_item->post_name, array('home', 'elements'))) {
        update_post_meta( $menu_item->ID, '_bezel_mega_menu', 1 );
      } elseif ($menu_item->url == '#' && in_array($menu_item->post_name, array('home-pages-i', 'home-pages-ii', 'home-pages-iii', 'group-i', 'group-ii', 'group-iii'))) {
        update_post_meta( $menu_item->ID, '_bezel_menu_label', 1 );
      }
    }
  }


  // Update navigation menus
  $default_menu = get_term_by('name', 'Primary', 'nav_menu');
  $locations = get_theme_mod('nav_menu_locations');
  $locations['primary'] = $default_menu->term_id;
  set_theme_mod('nav_menu_locations', $locations);

  $onepage_menus = array('Landing', 'Restaurant', 'One Page', 'Fitness');

  foreach ($onepage_menus as $pag) {
    $page_name = get_page_by_title($pag);
    $menu_id = get_term_by('name', $pag, 'nav_menu');
    update_post_meta($page_name->ID, 'bezel_menu_id', $menu_id->term_id);
  }
}

add_action( 'pt-ocdi/after_import', 'bezel_after_import_setup' );

function bezel_import_page_setup( $default_settings ) {
	$default_settings['parent_slug'] = 'settings.php';
	$default_settings['capability']  = 'import';
	$default_settings['menu_slug']   = 'bezel_import';

	return $default_settings;
}
add_filter( 'pt-ocdi/plugin_page_setup', 'bezel_import_page_setup' );


add_action( 'admin_head', 'bezel_highlight_menu_item' );

function bezel_highlight_menu_item(){
  if( isset( $_GET['page']) && 'bezel_import' === $_GET['page']){
    ?>
    <script type="text/javascript">
      jQuery(document).ready( function($) {
        $('#toplevel_page_bezel_options, #toplevel_page_bezel_options>a').removeClass('wp-not-current-submenu').addClass('wp-has-current-submenu');
        $('#toplevel_page_bezel_options .wp-submenu>li>a[href="admin.php?page=bezel_import"]').addClass('current').parent().addClass('current');
      });
    </script>
    <?php
  }
}

add_filter( 'pt-ocdi/disable_pt_branding', '__return_true' );
