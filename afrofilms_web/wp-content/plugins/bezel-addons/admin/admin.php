<?php

// Load Redux and config
if ( !class_exists( 'ReduxFramework' ) && file_exists( dirname( __FILE__ ) . '//ReduxCore/framework.php' ) ) {
  require_once( dirname( __FILE__ ) . '//ReduxCore/framework.php' );
}
if ( !isset( $redux_demo ) && file_exists( dirname( __FILE__ ) . '/config.php' ) ) {
  require_once( dirname( __FILE__ ) . '/config.php' );
}

// Call Less compiler
require_once( dirname( __FILE__ ) . '/wp-less.php' );

// Enqueue theme less file
add_action('wp_enqueue_scripts', 'bezel_enqueue_less', 12);
if ( ! function_exists('bezel_enqueue_less') ) {
  function bezel_enqueue_less(){
    wp_enqueue_style( 'theme-less', get_template_directory_uri() . '/assets/css/less/theme.less' );
  }
}

// pass variables into all .less files
add_filter( 'less_vars', 'bezel_less_vars', 10, 2 );
function bezel_less_vars( $vars, $handle ) {

  $primary = (bezel_options('primary_color') != '') ? bezel_options('primary_color') : '#00c3da';
  $black_bg = $black = (bezel_options('dark_color') != '') ? bezel_options('dark_color') : '#1f1f1f';
  $text = (bezel_options('_text_color') != '') ? bezel_options('_text_color') : '#787878';

  $op_primary_font  = bezel_options('primary_font');
  $op_heading_font  = bezel_options('heading_font');
  $op_serif_font    = bezel_options('serif_font');
  $op_alt_serif_font    = bezel_options('alt_serif_font');
  $op_cursive_font  = bezel_options('cursive_font');

  $primary_font = (isset($op_primary_font['font-family']) && ($op_primary_font['font-family']) != '') ? $op_primary_font['font-family']  : 'Source Sans Pro';
  $heading_font = (isset($op_heading_font['font-family']) && ($op_heading_font['font-family']) != '') ? $op_heading_font['font-family']  : 'Poppins';
  $serif_font   = (isset($op_serif_font['font-family']) && ($op_serif_font['font-family']) != '') ? $op_serif_font['font-family'] : 'Lora';
  $alt_serif_font   = (isset($op_alt_serif_font['font-family']) && ($op_alt_serif_font['font-family']) != '') ? $op_alt_serif_font['font-family'] : 'Playfair Display';
  $cursive_font = (isset($op_cursive_font['font-family']) && ($op_cursive_font['font-family']) != '')  ? $op_cursive_font['font-family']  : 'Kaushan Script';

  $vars[ 'primary' ] = esc_attr($primary);
  $vars[ 'black_bg' ] = esc_attr($black_bg);
  $vars[ 'black' ] = esc_attr($black);
  $vars[ 'text' ] = esc_attr($text);
  $vars[ 'primary_font' ] = '"'.esc_attr($primary_font).'"';
  $vars[ 'heading_font' ] = '"'.esc_attr($heading_font).'"';
  $vars[ 'serif_font' ] = '"'.esc_attr($serif_font).'"';
  $vars[ 'alt_serif_font' ] = '"'.esc_attr($alt_serif_font).'"';
  $vars[ 'cursive_font' ] = '"'.esc_attr($cursive_font).'"';
  return $vars;
}
