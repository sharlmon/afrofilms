<?php

add_action('wp_ajax_bezel_import_data', 'bezel_import_data');

if (!function_exists('bezel_import_data')) {

  @ini_set('max_execution_time', 600);

  function bezel_import_data($file){

    update_option('bezel_demo_data_imported', '');

    if ( ! class_exists('WP_Import') ) {
      require_once('wordpress-importer/wordpress-importer.php');
    }

    // Import Content
    $bezel_import = new WP_Import();
    $demo_file = get_template_directory() . '/core/admin/demo-data.xml';

    if (file_exists($demo_file)) {
      $bezel_import->fetch_attachments = true; ob_start();
      $bezel_import->import($demo_file); ob_end_clean();
    }

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

    update_option('bezel_demo_data_imported', '1');
    die();

  }
}


add_action('wp_ajax_bezel_check_import', 'bezel_check_import');

if (!function_exists('bezel_check_import')) {

  function bezel_check_import(){
    $imported_posts = (get_option('bezel_demo_data_imported') == '1') ? 1 : 0;

    $arr = array(
      'imported' => $imported_posts,
    );

    echo json_encode($arr, JSON_PRETTY_PRINT);
    die();
  }

}

?>
