<?php
/*
Plugin Name: Bezel Addons
Plugin URI: https://hody.co
Description: Core Components for Bezel Theme.
Version: 1.1.6
Author: HodyLab
Author URI: https://hody.co
*/

define( 'BEZEL_ADDONS_PATH', plugin_dir_path(__FILE__) );

// don't load directly
if (!defined('ABSPATH')) die('-1');

class BezelExtendAddonClass {

  function __construct() {

    require_once(BEZEL_ADDONS_PATH . '/one-click-demo/importer.php');

    require_once(BEZEL_ADDONS_PATH . '/admin/admin.php');

    // We safely integrate with VC with this hook
    add_action( 'vc_before_init', array( $this, 'integrateWithVC' ) );

    add_action( 'vc_before_init', array( $this, 'bezelCustomParams' ) );

    add_action( 'vc_before_init', array( $this, 'bezelTtaSections' ) );

    add_action( 'vc_before_init', array( $this, 'update_elements' ) );

    add_action( 'admin_menu', array( $this, 'menu_pages' ) );

    add_action( 'plugins_loaded', array( $this, 'bezel_addons_load_textdomain') );

  }

  function bezel_addons_load_textdomain() {
    load_plugin_textdomain( 'bezel_addons', false, basename( dirname( __FILE__ ) ) . '/languages' );
  }

  public function menu_pages() {
    add_menu_page(
      'Bezel Options',
      'Bezel Options',
      'manage_options',
      'bezel_options',
      'bezel_options',
      null,
      63.5
    );

    add_submenu_page(
      'bezel_options',
      'Import Demo Data',
      'Import Demo Data',
      'import',
      'admin.php?page=bezel_import'
    );

  }

  public function integrateWithVC() {

    if ( ! defined( 'WPB_VC_VERSION' ) ) {
      add_action('admin_notices', array( $this, 'showVcVersionNotice' ));
      return;
    }

    require_once(BEZEL_ADDONS_PATH . '/vc/vc_animation.php');
    require_once(BEZEL_ADDONS_PATH . '/vc/vc_elements.php');
    require_once(BEZEL_ADDONS_PATH . '/vc/vc_shortcodes.php');
    require_once(BEZEL_ADDONS_PATH . '/vc/vc_icons.php');
    require_once(BEZEL_ADDONS_PATH . '/vc/vc_defaults.php');
    vc_add_shortcode_param( 'dropdown_multi', array($this, 'vc_dropdown_multi') );
    vc_add_shortcode_param( 'datepicker', array($this, 'vc_datepicker') );
    vc_add_shortcode_param( 'hidden_input', array($this, 'vc_hidden_input') );
    vc_add_shortcode_param( 'attach_video', array($this, 'vc_video') );

    vc_set_as_theme();
    vc_disable_frontend();

    // Hook for admin editor.
    add_action( 'vc_build_admin_page', array($this, 'remove_elements'), 11 );
    // Hook for frontend editor.
    add_action( 'vc_load_shortcode', array($this, 'remove_elements'), 11 );

  }

  function update_elements(){
    $wp_el = array('vc_wp_search', 'vc_wp_meta', 'vc_wp_recentcomments', 'vc_wp_calendar', 'vc_wp_pages', 'vc_wp_tagcloud', 'vc_wp_custommenu', 'vc_wp_text', 'vc_wp_posts', 'vc_wp_categories', 'vc_wp_archives', 'vc_wp_rss');

    foreach ($wp_el as $key => $value) {
      vc_map_update($value, array('icon' => 'ti-wordpress'));
    }

    $woo_el = array('woocommerce_cart', 'woocommerce_checkout', 'woocommerce_order_tracking', 'woocommerce_my_account', 'recent_products', 'featured_products', 'product', 'products', 'add_to_cart', 'add_to_cart_url', 'product_page', 'product_category', 'product_categories', 'sale_products', 'best_selling_products', 'top_rated_products', 'product_attribute');

    if ( is_plugin_active( 'woocommerce/woocommerce.php' ) ) {
      foreach ($woo_el as $key => $value) {
        vc_map_update($value, array('icon' => 'ti-shopping-cart'));
      }
    }

    $vc_el = array(
      'contact-form-7' => 'ti-email',
      'vc_row' => 'ti-layout-tab-window',
      'vc_section' => 'ti-layout-tab-window',
      'vc_column_text' => 'ti-text',
      'vc_separator' => 'ti-arrows-horizontal',
      'vc_text_separator' => 'ti-more',
      'vc_single_image' => 'ti-image',
      'vc_custom_heading' => 'ti-uppercase',
      'vc_widget_sidebar' => 'ti-layout-sidebar-left',
      'vc_video' => 'ti-video-camera',
      'vc_raw_html' => 'ti-html5',
      'vc_flickr' => 'ti-flickr',
      'vc_line_chart' => 'ti-bar-chart',
      'vc_empty_space' => 'ti-arrows-vertical',
      'vc_tta_pageable' => 'ti-layout-slider-alt',
      'vc_round_chart' => 'ti-control-record',
      'vc_basic_grid' => 'ti-view-grid',
      'vc_media_grid' => 'ti-layout-media-center-alt',
      'vc_masonry_grid' => 'ti-layout-media-left-alt',
      'vc_masonry_media_grid' => 'ti-layout-list-large-image',
      'vc_zigzag' => 'ti-bolt-alt',
      'vc_hoverbox' => 'ti-widget',
    );

    foreach ($vc_el as $key => $value) {
      vc_map_update($key, array('icon' => $value));
    }

    $elements_to_animate = array('vc_column_text', 'vc_column', 'vc_column_inner', 'vc_single_image');

    foreach ($elements_to_animate as $element) {
      vc_remove_param($element, 'css_animation');
      vc_add_params($element, array(
        bezel_css_animation(),
        bezel_css_animation_delay(),
      ));
    }
  }

  function remove_elements() {
    $elements = array( 'icon', 'tta_tabs', 'tta_accordion', 'tta_tour', 'toggle', 'cta', 'facebook', 'tweetmeme', 'googleplus', 'pinterest', 'tabs', 'tour', 'button', 'button2', 'cta_button', 'cta_button2', 'message', 'progress_bar', 'gmaps', 'posts_slider', 'image_carousel', 'raw_js', 'images_carousel', 'pie', 'gallery');

    foreach ( $elements as $key) {
      vc_remove_element( 'vc_'.$key );
    }
  }

  function vc_datepicker( $settings, $value ) {
    $value = htmlspecialchars( $value );

    return '<input name="' . $settings['param_name']
           . '" class="wpb_vc_param_value wpb-textinput '
           . $settings['param_name'] . ' ' . $settings['type']
           . '" type="date" value="' . $value . '"/>';
  }

  function vc_hidden_input( $settings, $value ) {
    $value = htmlspecialchars( $value );

    return '<input name="' . $settings['param_name']
           . '" class="wpb_vc_param_value wpb-textinput '
           . $settings['param_name'] . ' ' . $settings['type']
           . '" type="hidden" value="' . $value . '"/>';
  }

  function vc_video( $settings, $value ) {
    $value = htmlspecialchars( $value );

    return '<input name="' . $settings['param_name']
         . '" class="wpb_vc_param_value wpb-textinput '
         . $settings['param_name'] . ' ' . $settings['type']
         . '" type="text" value="' . $value . '" style="width: 75%;">
        <button style="height: 35px;" class="button upload_video_button" type="button">'.__('Browse Videos', 'bezel-addons') .'</button>';
  }

  function vc_dropdown_multi( $settings, $value ) {
    $output = '';
    $css_option = str_replace( '#', 'hash-', vc_get_dropdown_option( $settings, $value ) );
    $output .= '<select name="'
               . $settings['param_name']
               . '" multiple="true" class="wpb_vc_param_value wpb-input wpb-select '
               . $settings['param_name']
               . ' ' . $settings['type']
               . ' ' . $css_option
               . '" data-option="' . $css_option . '">';
    if ( is_array( $value ) ) {
      $value = isset( $value['value'] ) ? $value['value'] : array_shift( $value );
    }
    if ( ! empty( $settings['value'] ) ) {
      foreach ( $settings['value'] as $index => $data ) {
        if ( is_numeric( $index ) && ( is_string( $data ) || is_numeric( $data ) ) ) {
          $option_label = $data;
          $option_value = $data;
        } elseif ( is_numeric( $index ) && is_array( $data ) ) {
          $option_label = isset( $data['label'] ) ? $data['label'] : array_pop( $data );
          $option_value = isset( $data['value'] ) ? $data['value'] : array_pop( $data );
        } else {
          $option_value = $data;
          $option_label = $index;
        }
        $selected = '';
        $option_value_string = (string) $option_value;
        $current_value = strlen( $value ) > 0 ? explode( ',', $value ) : array();
        if ( count( $current_value ) > 0 && in_array( $option_value_string, $current_value ) ) {
          $selected = ' selected="selected"';
        }
        $option_class = str_replace( '#', 'hash-', $option_value );
        $output .= '<option class="' . esc_attr( $option_class ) . '" value="' . esc_attr( $option_value ) . '"' . $selected . '>'
                   . htmlspecialchars( $option_label ) . '</option>';
      }
    }
    $output .= '</select>';

    return $output;
  }

  /*
  Show notice if your plugin is activated but Visual Composer is not
  */
  public function showVcVersionNotice() {
    $plugin_data = get_plugin_data(__FILE__);
    echo '
    <div class="updated">
      <p>'.sprintf(__('<strong>%s</strong> requires <strong><a href="http://bit.ly/vcomposer" target="_blank">Visual Composer</a></strong> plugin to be installed and activated on your site.', 'vc_extend'), $plugin_data['Name']).'</p>
    </div>';
  }

  public function bezelTtaSections(){

    $params_to_remove = array('add_icon', 'i_type', 'i_position', 'i_icon_fontawesome', 'i_icon_openiconic', 'i_icon_typicons', 'i_icon_entypo', 'i_icon_linecons', 'i_icon_monosocial', 'el_class', 'i_icon_material');

    foreach ($params_to_remove as $par) {
      vc_remove_param('vc_tta_section', $par);
    }

    $parent_tag = vc_post_param( 'parent_tag', '' );
    $include_icon_params = ( 'vc_tta_pageable' !== $parent_tag && 'bezel_accordion' !== $parent_tag );

    if ($include_icon_params) {
      vc_add_params('vc_tta_section', array(
        array(
          'type' => 'iconpicker',
          'heading' => __('Icon', 'bezel-addons'),
          'param_name' => 'icon',
          'weight' => 10,
          'settings' => array(
            'type' => 'hodyicons',
            'emptyIcon' => true,
            'iconsPerPage' => 100
          )
        ),
        array(
          'type' => 'hidden_input',
          'param_name' => 'i_position',
          'value' => 'left'
        ),
      ));
    }

  }

  public function bezelCustomParams(){

    vc_remove_param('vc_row', 'columns_placement');
    vc_remove_param('vc_row', 'gap');
    vc_remove_param('vc_row', 'equal_height');
    vc_remove_param('vc_row', 'video_bg_parallax');
    vc_remove_param('vc_row', 'video_bg_url');
    vc_remove_param('vc_row', 'el_id');
    vc_remove_param('vc_row', 'el_class');
    vc_remove_param('vc_row', 'parallax_speed_video');
    vc_remove_param('vc_row', 'parallax_speed_bg');
    vc_remove_param('vc_row', 'css_animation');
    vc_remove_param('vc_row', 'background_color');

    vc_remove_param('vc_single_image', 'onclick');
    vc_remove_param('vc_single_image', 'link');
    vc_remove_param('vc_single_image', 'el_id');
    vc_remove_param('vc_single_image', 'el_class');

    vc_add_params('vc_column_text', array(
      array(
        'type' => 'dropdown',
        'value' => array(
          'Default'    => '',
          'Serif'  => 'serif-font',
          'Bold Serif'  => 'alt-serif-font',
          'Cursive'   => 'cursive-font'
        ),
        'heading' => __('Font Style', 'bezel-addons'),
        'param_name' => 'font_style',
        'std' => '',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Default'  => '',
          'Light'    => 'fw-300',
          'Regular'    => 'fw-400',
          'Medium'   => 'fw-500',
          'Bold'     => 'fw-600',
        ),
        'heading' => __('Font Weight', 'bezel-addons'),
        'param_name' => 'font_weight',
        'std' => '',
      ),
    ));

    vc_add_params('vc_row', array(
      array(
        'type' => 'dropdown',
        'heading' => __( 'Use video background?', 'bezel-addons' ),
        'param_name' => 'video_bg',
        'description' => __( 'If checked, video will be used as row background.', 'bezel-addons' ),
        'value' => array(
          'No' => '',
          'Yes, from YouTube' => 'youtube',
          'Yes, self hosted video' => 'self_hosted'
        ),
      ),
      array(
        'type' => 'textfield',
        'heading' => __( 'YouTube link', 'bezel-addons' ),
        'param_name' => 'video_bg_url',
        'value' => 'https://www.youtube.com/watch?v=lMJXxhRFO1k',
        'description' => __( 'Add YouTube link.', 'bezel-addons' ),
        'dependency' => array(
          'element' => 'video_bg',
          'value' => 'youtube',
        ),
      ),
      array(
        'type' => 'attach_video',
        'heading' => __( 'Self Hosted Video', 'bezel-addons' ),
        'param_name' => 'self_hosted_video',
        'value' => '',
        'description' => __( 'Select or upload a video.', 'bezel-addons' ),
        'dependency' => array(
          'element' => 'video_bg',
          'value' => 'self_hosted',
        ),
      ),
      array(
        'type' => 'attach_image',
        'value' => '',
        'heading' => __('Fallback Image for mobile devices. (YouTube videos and autoplay don\'t work on mobile.)', 'bezel'),
        'param_name' => 'fallback_image',
        'dependency' => array(
          'element' => 'video_bg',
          'value' => array('youtube', 'self_hosted'),
        ),
      ),
      array(
        'type' => 'dropdown',
        'heading' => __( 'Parallax', 'bezel-addons' ),
        'param_name' => 'parallax',
        'value' => array(
          __( 'No', 'bezel-addons' ) => '',
          __( 'Yes', 'bezel-addons' ) => 'content-moving',
        ),
        'description' => __( 'Add parallax type background for row (Note: If no image is specified, parallax will use background image from Design Options).', 'bezel-addons' ),
        'dependency' => array(
          'element' => 'video_bg',
          'is_empty' => true,
        ),
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Dark'    => '',
          'Extra Dark'    => 'extra-dark-overlay',
          'Light'  => 'light-overlay',
          'Semilight'  => 'semilight-overlay',
          'Colored' => 'colored-overlay',
          'Gradient' => 'gradient-overlay',
          'No Overlay' => 'no-overlay',
        ),
        'heading' => __('Overlay Style', 'bezel-addons'),
        'param_name' => 'overlay_style',
        'std' => '',
        'dependency' => array(
          'element' => 'parallax',
          'not_empty' => true,
        ),
      ),
      array(
        'type' => 'colorpicker',
        'heading' => __( 'Overlay Color', 'bezel-addons'),
        'value' => '',
        'param_name' => 'overlay_color',
        'dependency' => array(
          'element' => 'overlay_style',
          'value' => array('colored-overlay', 'gradient-overlay')
        ),
        'edit_field_class' => 'vc_col-xs-6',
      ),
      array(
        'type' => 'colorpicker',
        'heading' => __( 'Second Overlay Color', 'bezel-addons'),
        'value' => '',
        'param_name' => 'overlay_color_2',
        'description' => __( 'Note: If both colors are not specified, default gradient colors will be used.', 'domain' ),
        'dependency' => array(
          'element' => 'overlay_style',
          'value' => array('gradient-overlay')
        ),
        'edit_field_class' => 'vc_col-xs-6',
      ),
      array(
        'type' => 'dropdown',
        'heading' => __( 'Section Type', 'bezel-addons' ),
        'param_name' => 'section_type',
        'value' => array(
          __( 'Default', 'bezel-addons' ) => '',
          __( 'Footer', 'bezel-addons' ) => 'footer',
        ),
      ),
      array(
        'type' => 'checkbox',
        'heading' => __( 'Full height row?', 'bezel-addons' ),
        'param_name' => 'full_height',
        'description' => __( 'If checked row will be set to full height.', 'bezel-addons' ),
        'value' => array( __( 'Yes', 'bezel-addons' ) => 'yes' ),
      ),
      array(
        'type' => 'dropdown',
        'heading' => __( 'Content position', 'bezel-addons' ),
        'param_name' => 'content_placement',
        'value' => array(
          __( 'Default', 'bezel-addons' ) => '',
          __( 'Middle', 'bezel-addons' ) => 'middle',
        ),
        'description' => __( 'Select content position within columns.', 'bezel-addons' ),
      ),
      array(
        'type' => 'el_id',
        'heading' => __( 'Row ID', 'bezel-addons' ),
        'param_name' => 'el_id',
        'description' => sprintf( __( 'Enter row ID (Note: make sure it is unique and valid according to <a href="%s" target="_blank">w3c specification</a>).', 'bezel-addons' ), 'http://www.w3schools.com/tags/att_global_id.asp' ),
      ),
      array(
        'type' => 'textfield',
        'heading' => __( 'Extra class name', 'bezel-addons' ),
        'param_name' => 'el_class',
        'description' => __( 'Style particular content element differently - add a class name and refer to it in custom CSS.', 'bezel-addons' ),
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Row Background Color', 'bezel-addons'),
        'param_name' => 'row_bg_style',
        'value' => array(
          'White' => '',
          'Grey' => 'grey-bg',
          'Dark' => 'dark-bg',
          'Colored' => 'colored-bg',
          'Gradient' => 'gradient-bg',
          'Animated Particles' => 'particles-bg',
        ),
        'dependency' => array(
          'element' => 'parallax',
          'value' => array('')
        ),
        'group' => __( 'Bezel Options', 'bezel-addons' ),
        'std' => ''
      ),
      array(
        'type' => 'colorpicker',
        'heading' => __( 'Background Color', 'bezel-addons'),
        'value' => '',
        'param_name' => 'row_bg_color',
        'dependency' => array(
          'element' => 'row_bg_style',
          'value' => array('colored-bg', 'gradient-bg')
        ),
        'group' => __('Bezel Options', 'bezel-addons'),
        'edit_field_class' => 'vc_col-xs-6',
      ),
      array(
        'type' => 'colorpicker',
        'heading' => __( 'Second Background Color', 'bezel-addons'),
        'value' => '',
        'param_name' => 'row_bg_color_2',
        'description' => __( 'Note: If both colors are not specified, default gradient colors will be used.', 'domain' ),
        'dependency' => array(
          'element' => 'row_bg_style',
          'value' => array('gradient-bg')
        ),
        'group' => __('Bezel Options', 'bezel-addons'),
        'edit_field_class' => 'vc_col-xs-6',
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Skewed Section', 'bezel-addons'),
        'param_name' => 'skewed_section',
        'value' => array( 'No' => '', 'Yes' => 'section-skewed' ),
        'group' => __( 'Bezel Options', 'bezel-addons' ),
        'std' => ''
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Bordered Section', 'bezel-addons'),
        'param_name' => 'bordered_section',
        'value' => array( 'No' => '', 'Yes' => 'section-bordered' ),
        'group' => __( 'Bezel Options', 'bezel-addons' ),
        'std' => ''
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Split Section', 'bezel-addons'),
        'param_name' => 'split_row',
        'value' => array( 'No' => '', 'Yes' => 'yes' ),
        'description' => __("Use as split section with background image or a map.", "bezel"),
        'group' => __( 'Bezel Options', 'bezel-addons' ),
        'std' => ''
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Split Section Background', 'bezel-addons'),
        'param_name' => 'split_row_bg_type',
        'value' => array( 'Image' => 'image', 'Map' => 'map' ),
        'group' => __( 'Bezel Options', 'bezel-addons' ),
        'dependency' => array(
          'element' => 'split_row',
          'value' => array('yes')
        ),
        'std' => ''
      ),
      array(
        'type' => 'attach_image',
        'value' => '',
        'heading' => __('Split Row Background Image', 'bezel-addons'),
        'param_name' => 'split_row_bg',
        'group' => __( 'Bezel Options', 'bezel-addons' ),
        'dependency' => array(
          'element' => 'split_row_bg_type',
          'value' => array('image')
        )
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Background Image Position', 'bezel-addons'),
        'param_name' => 'split_bg_position',
        'value' => array('Left' => 'left', 'Right' => 'right'),
        'group' => __( 'Bezel Options', 'bezel-addons' ),
        'dependency' => array(
          'element' => 'split_row_bg_type',
          'value' => array('image')
        )
      ),
      array(
        'type' => 'dropdown',
        'heading' => __( 'Split Row Width', 'bezel-addons'),
        'param_name' => 'split_row_width',
        'group' => __( 'Bezel Options', 'bezel-addons'),
        'value' => array(
          '1 column - 1/12' => 'vc_col-md-1',
          '2 columns - 1/6' => 'vc_col-md-2',
          '3 columns - 1/4' => 'vc_col-md-3',
          '4 columns - 1/3' => 'vc_col-md-4',
          '5 columns - 5/12' => 'vc_col-md-5',
          '6 columns - 1/2' => 'vc_col-md-6',
          '7 columns - 7/12' => 'vc_col-md-7',
          '8 columns - 2/3' => 'vc_col-md-8',
          '9 columns - 3/4' => 'vc_col-md-9',
          '10 columns - 5/6' => 'vc_col-md-10',
          '11 columns - 11/12' => 'vc_col-md-11',
          '12 columns - 1/1' => 'vc_col-md-12',
        ),
        'std' => 'vc_col-md-6',
        'dependency' => array(
          'element' => 'split_row_bg_type',
          'value' => array('image')
        )
      ),
      array(
        'type' => 'dropdown',
        'heading' => __( 'Split Row Width (Tablet)', 'bezel-addons'),
        'param_name' => 'split_row_width_sm',
        'group' => __( 'Bezel Options', 'bezel-addons'),
        'value' => array(
          '1 column - 1/12' => 'vc_col-sm-1',
          '2 columns - 1/6' => 'vc_col-sm-2',
          '3 columns - 1/4' => 'vc_col-sm-3',
          '4 columns - 1/3' => 'vc_col-sm-4',
          '5 columns - 5/12' => 'vc_col-sm-5',
          '6 columns - 1/2' => 'vc_col-sm-6',
          '7 columns - 7/12' => 'vc_col-sm-7',
          '8 columns - 2/3' => 'vc_col-sm-8',
          '9 columns - 3/4' => 'vc_col-sm-9',
          '10 columns - 5/6' => 'vc_col-sm-10',
          '11 columns - 11/12' => 'vc_col-sm-11',
          '12 columns - 1/1' => 'vc_col-sm-12',
        ),
        'std' => 'vc_col-sm-4',
        'dependency' => array(
          'element' => 'split_row_bg_type',
          'value' => array('image')
        )
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Map Alignment', 'bezel-addons'),
        'param_name' => 'map_alignment',
        'value' => array(
          'Left' => '',
          'Right' => 'right'
        ),
        'std' => '',
        'group' => __( 'Bezel Options', 'bezel-addons' ),
        'dependency' => array(
          'element' => 'split_row_bg_type',
          'value' => array('map')
        )
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Map Style', 'bezel-addons'),
        'param_name' => 'map_style',
        'value' => array(
          'Default' => '',
          'Greyscale' => 'grey'
        ),
        'std' => '',
        'group' => __( 'Bezel Options', 'bezel-addons' ),
        'dependency' => array(
          'element' => 'split_row_bg_type',
          'value' => array('map')
        )
      ),
      array(
        'type' => 'textfield',
        'value' => '40.773328',
        'heading' => __('Map Latitude', 'bezel-addons'),
        'param_name' => 'split_map_lat',
        'group' => __( 'Bezel Options', 'bezel-addons' ),
        'description' => __('Find your Latitude and Longitude <a target="blank" href="http://www.latlong.net/">here</a>', 'bezel-addons'),
        'dependency' => array(
          'element' => 'split_row_bg_type',
          'value' => array('map')
        )
      ),
      array(
        'type' => 'textfield',
        'value' => '-73.960088',
        'heading' => __('Map Longitude', 'bezel-addons'),
        'param_name' => 'split_map_lng',
        'group' => __( 'Bezel Options', 'bezel-addons' ),
        'description' => __('Find your Latitude and Longitude <a target="blank" href="http://www.latlong.net/">here</a>', 'bezel-addons'),
        'dependency' => array(
          'element' => 'split_row_bg_type',
          'value' => array('map')
        )
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Map Text', 'bezel-addons'),
        'param_name' => 'split_map_text',
        'group' => __( 'Bezel Options', 'bezel-addons' ),
        'dependency' => array(
          'element' => 'split_row_bg_type',
          'value' => array('map')
        )
      ),
      array(
        'type' => 'textfield',
        'value' => '12',
        'heading' => __('Map Zoom', 'bezel-addons'),
        'param_name' => 'split_map_zoom',
        'group' => __( 'Bezel Options', 'bezel-addons' ),
        'dependency' => array(
          'element' => 'split_row_bg_type',
          'value' => array('map')
        )
      ),
    ));

    vc_add_params('vc_single_image', array(
      array(
			  'type' => 'dropdown',
  			'heading' => __( 'On click action', 'bezel-addons' ),
  			'param_name' => 'onclick',
  			'value' => array(
  				__( 'None', 'bezel-addons' ) => '',
  				__( 'Link to large image', 'bezel-addons' ) => 'img_link_large',
  				__( 'Open prettyPhoto', 'bezel-addons' ) => 'link_image',
  				__( 'Open custom link', 'bezel-addons' ) => 'custom_link',
  				__( 'Modal Zoom', 'bezel-addons' ) => 'modal_zoom',
  				__( 'Zoom', 'bezel-addons' ) => 'zoom',
  			),
  			'description' => __( 'Select action for click action.', 'bezel-addons' ),
  			'std' => '',
  		),
      array(
  			'type' => 'href',
  			'heading' => __( 'Image link', 'js_composer' ),
  			'param_name' => 'link',
  			'description' => __( 'Enter URL if you want this image to have a link (Note: parameters like "mailto:" are also accepted).', 'js_composer' ),
  			'dependency' => array(
  				'element' => 'onclick',
  				'value' => 'custom_link',
  			),
  		),
  		array(
  			'type' => 'el_id',
  			'heading' => __( 'Element ID', 'js_composer' ),
  			'param_name' => 'el_id',
  			'description' => sprintf( __( 'Enter element ID (Note: make sure it is unique and valid according to <a href="%s" target="_blank">w3c specification</a>).', 'js_composer' ), 'http://www.w3schools.com/tags/att_global_id.asp' ),
  		),
  		array(
  			'type' => 'textfield',
  			'heading' => __( 'Extra class name', 'js_composer' ),
  			'param_name' => 'el_class',
  			'description' => __( 'Style particular content element differently - add a class name and refer to it in custom CSS.', 'js_composer' ),
  		),
    ));
  }
}

new BezelExtendAddonClass();

/* Register Portfolio Post Type */
function bezel_portfolio_init(){
  $portfolio_slug = (bezel_options('portfolio_slug')) ? bezel_options('portfolio_slug') : '';
  $portfolio_archive = (bezel_options('portfolio_archive')) ? true : false;
  register_post_type(
    'portfolio',
    array(
      'labels' => array(
        'name'          => 'Portfolio',
        'singular_name' => 'Portfolio'
      ),
      'public'      => true,
      'has_archive' => $portfolio_archive,
      'supports'    => array('title', 'thumbnail', 'editor', 'page-attributes'),
      'show_in_nav_menus'   => true,
      'rewrite' => array(
        'slug' => $portfolio_slug
      )
    )
  );

  register_taxonomy(
    'portfolio_category',
    'portfolio',
    array(
      'hierarchical' => true,
      'label'        => 'Categories',
      'query_var'    => true,
      'rewrite'      => true
    )
  );
}

add_action('init', 'bezel_portfolio_init');
