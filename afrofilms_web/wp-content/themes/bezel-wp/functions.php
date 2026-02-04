<?php

/*-----------------------------------------------------------------------------------*/
/*  Define variables
/*-----------------------------------------------------------------------------------*/

define('BEZEL_THEME_URI', get_template_directory_uri());
define('BEZEL_THEME_DIR', get_template_directory());
define('BEZEL_CSS_URI', BEZEL_THEME_URI . '/assets/css');
define('BEZEL_JS_URI', BEZEL_THEME_URI . '/assets/js');
define('BEZEL_CORE_DIR', BEZEL_THEME_DIR . '/core');

/*-----------------------------------------------------------------------------------*/
/*  Theme Setup
/*-----------------------------------------------------------------------------------*/

add_action('after_setup_theme', 'bezel_theme_setup');

if ( ! function_exists('bezel_theme_setup') ) {
  function bezel_theme_setup(){

    /* Load scripts and styles */
    add_action('wp_enqueue_scripts', 'bezel_enqueue_assets');

    /* Load admin scripts and styles */
    add_action('admin_enqueue_scripts', 'bezel_admin_assets');

    /* Load Text Domain*/
    load_theme_textdomain('bezel-wp', get_template_directory() . '/languages');

    // add_editor_style( LIB_DIR . '/admin/css/admin-style.css' );

    /* Set the content width */
    if ( !isset($content_width) ) { $content_width = 1170; }

    /* Register menu */
    add_action('init', 'bezel_menu_init');

    /* Add thumbnails support */
    add_theme_support( 'post-thumbnails' );

    /* Add WooCommerce Support */
    add_theme_support( 'woocommerce' );

    /* Add images sizes*/
    add_image_size('bezel_medium', 960);
    add_image_size('bezel_small', 600);
    add_image_size('bezel_gallery_thumb', 9999, 640, false);
    add_image_size('bezel_blog_thumb', 550, 360, true);
    add_image_size('bezel_square_thumb', 800, 800, true);
    add_image_size('bezel_portfolio_thumb', 800);

    // Post formats
    add_theme_support('post-formats', array('audio', 'video', 'quote', 'image', 'gallery', 'link'));

    add_theme_support( 'custom-background', array('default-color' => 'ffffff') );
    add_theme_support( 'automatic-feed-links' );

    if ( function_exists( '_wp_render_title_tag' ) ) {
      add_theme_support( 'title-tag' );
    }
  }
}

/* Register Fonts */

function bezel_fonts_url() {
  $font_url = '';

  $primary_font = bezel_options('primary_font');
  $heading_font = bezel_options('heading_font');
  $serif_font   = bezel_options('serif_font');
  $cursive_font = bezel_options('cursive_font');

  /* Translators: If there are characters in your language that are not
  * supported by Source Sans Pro, translate this to 'off'. Do not translate
  * into your own language.
  */
  $source_sans_pro = _x( 'on', 'Source Sans Pro font: on or off', 'bezel-wp' );

  /* Translators: If there are characters in your language that are not
  * supported by Poppins, translate this to 'off'. Do not translate
  * into your own language.
  */
  $poppins = _x( 'on', 'Poppins font: on or off', 'bezel-wp' );

  /* Translators: If there are characters in your language that are not
  * supported by Lora, translate this to 'off'. Do not translate
  * into your own language.
  */
  $lora = _x( 'on', 'Lora font: on or off', 'bezel-wp' );

  /* Translators: If there are characters in your language that are not
  * supported by Playfair Display, translate this to 'off'. Do not translate
  * into your own language.
  */
  $playfair_display = _x( 'on', 'Playfair Display font: on or off', 'bezel-wp' );

  /* Translators: If there are characters in your language that are not
  * supported by Kaushan Script, translate this to 'off'. Do not translate
  * into your own language.
  */
  $kaushan_script = _x( 'on', 'Kaushan Script font: on or off', 'bezel-wp' );

  if ( 'off' !== $source_sans_pro || 'off' !== $poppins || 'off' !== $lora || 'off' !== $playfair_display || 'off' !== $kaushan_script ) {
    $font_families = array();
  }

  if ('off' !== $source_sans_pro && empty($primary_font['font-family']) || $primary_font['font-family'] == 'Source Sans Pro') {
    $font_families[] = 'Source Sans Pro:300,400';
  }
  if ('off' !== $poppins && empty($heading_font['font-family']) || $heading_font['font-family'] == 'Poppins') {
    $font_families[] = 'Poppins:400,500,600,700';
  }
  if ('off' !== $lora && empty($serif_font['font-family']) || $serif_font['font-family'] == 'Lora') {
    $font_families[] = 'Lora';
  }
  if ('off' !== $playfair_display && empty($serif_font['font-family']) || $serif_font['font-family'] == 'Playfair Display') {
    $font_families[] = 'Playfair Display:700';
  }
  if ('off' !== $kaushan_script && empty($cursive_font['font-family']) || $cursive_font['font-family'] == 'Kaushan Script') {
    $font_families[] = 'Kaushan Script';
  }

  $font_url = add_query_arg( 'family', urlencode( implode($font_families, '|') ), "//fonts.googleapis.com/css" );

  return esc_url_raw($font_url);

}

/*-----------------------------------------------------------------------------------*/
/* Enqueue scripts and styles */
/*-----------------------------------------------------------------------------------*/
if ( ! function_exists('bezel_enqueue_assets') ) {
  function bezel_enqueue_assets(){

    // Styles
    wp_register_style('bundle-css', BEZEL_CSS_URI . '/bundle.css');
    wp_enqueue_style('bundle-css');

    wp_register_style('hody_icons', BEZEL_CSS_URI . '/hody-icons.css');
    wp_enqueue_style('hody_icons');

    wp_enqueue_style('style', get_stylesheet_uri(), '');

    if (!class_exists('wp_less')) {
      wp_enqueue_style('theme', BEZEL_CSS_URI . '/theme.css', '');
    }

    wp_enqueue_style( 'bezel-fonts', bezel_fonts_url(), array(), '1.0.0' );

    // Scripts
    if (bezel_options('google_maps_api_key')) {
      wp_enqueue_script('google-maps', 'https://maps.google.com/maps/api/js?key='.bezel_options('google_maps_api_key'), '', false, true);
    }
    wp_enqueue_script( 'bundle', BEZEL_JS_URI . '/bundle.js', array('jquery'), false, true );

    wp_enqueue_script('main', BEZEL_JS_URI . '/main.js', array('jquery'), false, true);

    if (bezel_options('smooth_scroll')) {
      wp_enqueue_script('smooth-scroll', BEZEL_JS_URI . '/SmoothScroll.js', array('jquery'), false, true);
    }

    $script_variables = array(
      'ajax_url' => admin_url( 'admin-ajax.php' ),
      'template_dir' => get_stylesheet_directory_uri(),
      'primary_color' => bezel_options('primary_color')
    );

    wp_localize_script('main', 'bezel_var', $script_variables );

    if (is_single()) {
      wp_enqueue_script('comment-reply');
    }

  }
}

/*-----------------------------------------------------------------------------------*/
/* Enqueue admin scripts and styles */
/*-----------------------------------------------------------------------------------*/
if ( ! function_exists('bezel_admin_assets') ) {
  function bezel_admin_assets(){

    wp_enqueue_media();
    wp_enqueue_style( 'wp-color-picker' );

    wp_enqueue_style('hody_icons', BEZEL_CSS_URI . '/hody-icons.css');

    wp_enqueue_style('bezel_admin_style', BEZEL_THEME_URI.'/core/admin/css/admin.css');
    wp_enqueue_style('bezel_admin_icons', BEZEL_THEME_URI.'/core/admin/css/themify-icons.css');

    wp_enqueue_script('bezel_bs_js', BEZEL_JS_URI.'/lib/bootstrap.min.js');
    wp_enqueue_script('bezel_admin_script', BEZEL_THEME_URI.'/core/admin/js/admin.js', array( 'wp-color-picker' ));

  }
}

/*-----------------------------------------------------------------------------------*/
/* Register nav menus */
/*-----------------------------------------------------------------------------------*/
if (! function_exists('bezel_menu_init') ) {
  function bezel_menu_init(){
    register_nav_menus(
      array(
        'primary'   =>  esc_html__('Header Navigation', 'bezel-wp'),
      )
    );
  }
}

/*-----------------------------------------------------------------------------------*/
/*  Call the framework
/*-----------------------------------------------------------------------------------*/

require_once BEZEL_CORE_DIR . '/init.php';
