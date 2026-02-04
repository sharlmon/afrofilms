<?php

/* Features Boxes */
vc_map(
  array(
    'name' => __('Feature Box', 'bezel-addons'),
    'base' => 'bezel_icon_box',
    'category' => __('Bezel', 'bezel-addons'),
    'icon' => 'ti-star',
    'description' => __('Styled icon with text.', 'bezel-addons'),
    'admin_enqueue_css' => array(get_template_directory_uri().'/core/admin/css/hody-icons-animated.css'),
    'params' => array(
      array(
        'type' => 'dropdown',
        'heading' => __( 'Style', 'bezel-addons'),
        'value' => array(
          'Default Icon Box' => 'default',
          'Side Icon Box' => 'side',
          'Simple Icon Box' => 'simple',
          'Text Box' => 'text_box',
          'Number Box' => 'number_box',
          'Counter' => 'counter',
        ),
        'admin_label' => true,
        'param_name' => 'box_style',
        'description' => __( 'Select icon box style.', 'bezel-addons'),
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'icon_type',
        'heading' => __( 'Icon Type', 'bezel-addons'),
        'value' => array(
          'Default' => 'default',
          'Animated' => 'animated',
        ),
        'dependency' => array(
          'element' => 'box_style',
          'value' => array('default', 'side', 'simple', 'counter')
        )
      ),
      array(
        'type' => 'iconpicker',
        'heading' => __('Icon', 'bezel-addons'),
        'param_name' => 'icon',
        'settings' => array(
          'type' => 'hodyicons',
          'emptyIcon' => true,
          'iconsPerPage' => 100
        ),
        'dependency' => array(
          'element' => 'icon_type',
          'value' => array('default')
        )
      ),
      array(
        'type' => 'iconpicker',
        'heading' => __('Animated Icon', 'bezel-addons'),
        'param_name' => 'animated_icon',
        'settings' => array(
          'type' => 'hodyicons-animated',
          'emptyIcon' => true,
          'iconsPerPage' => 100
        ),
        'dependency' => array(
          'element' => 'icon_type',
          'value' => array('animated')
        )
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Number', 'bezel-addons'),
        'param_name' => 'number',
        'dependency' => array(
          'element' => 'box_style',
          'value' => array('number_box', 'counter')
        )
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Title', 'bezel-addons'),
        'param_name' => 'title',
      ),
      array(
        'type' => 'textarea_html',
        'value' => '',
        'heading' => __('Content', 'bezel-addons'),
        'param_name' => 'content',
        'dependency' => array(
          'element' => 'box_style',
          'value' => array('default', 'side', 'number_box', 'text_box')
        )
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'icon_size',
        'heading' => __( 'Icon Size', 'bezel-addons'),
        'value' => array(
          'Default' => '',
          'Small' => 'icon--small',
          'Big' => 'icon--big',
        ),
        'dependency' => array(
          'element' => 'box_style',
          'value' => array('default', 'side', 'simple', 'counter')
        ),
        'group' => __('Style', 'bezel-addons'),
        'std' => '',
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'icon_color_style',
        'heading' => __( 'Icon Color Style', 'bezel-addons'),
        'value' => array(
          'Default' => '',
          'Gradient' => 'gradient-icon',
        ),
        'dependency' => array(
          'element' => 'icon_type',
          'value' => array('animated')
        ),
        'group' => __('Style', 'bezel-addons')
      ),
      array(
        'type' => 'colorpicker',
        'heading' => __( 'Icon Color', 'bezel-addons'),
        'value' => '',
        'param_name' => 'icon_color',
        'dependency' => array(
          'element' => 'box_style',
          'value' => array('default', 'side', 'simple', 'counter')
        ),
        'group' => __('Style', 'bezel-addons'),
        'edit_field_class' => 'vc_col-xs-6',
      ),
      array(
        'type' => 'colorpicker',
        'heading' => __( 'Second Icon Color', 'bezel-addons'),
        'value' => '',
        'param_name' => 'icon_color_2',
        'description' => __( 'Note: If both colors are not specified, default gradient colors will be used.', 'domain' ),
        'dependency' => array(
          'element' => 'icon_color_style',
          'value' => array('gradient-icon')
        ),
        'group' => __('Style', 'bezel-addons'),
        'edit_field_class' => 'vc_col-xs-6',
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'text_box_style',
        'heading' => __( 'Style', 'bezel-addons'),
        'value' => array(
          'Default' => '',
          'Boxed' => 'boxed',
          'Outlined' => 'outlined'
        ),
        'dependency' => array(
          'element' => 'box_style',
          'value' => array('text_box'),
        ),
        'group' => __('Style', 'bezel-addons')
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'icon_position',
        'heading' => __( 'Icon Position', 'bezel-addons'),
        'value' => array(
          'Left' => '',
          'Right' => 'icon-right',
        ),
        'dependency' => array(
          'element' => 'box_style',
          'value' => array('side'),
        ),
        'group' => __('Style', 'bezel-addons')
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'icon_boxed_style',
        'heading' => __( 'Boxed Style', 'bezel-addons'),
        'value' => array(
          'No' => '',
          'Yes' => 'boxed-style',
        ),
        'dependency' => array(
          'element' => 'box_style',
          'value' => array('default'),
        ),
        'group' => __('Style', 'bezel-addons')
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'No'    => '',
          'Yes'  => 'yes',
        ),
        'heading' => __('Enable icon background?', 'bezel-addons'),
        'param_name' => 'icon_background',
        'std' => 'center',
        'dependency' => array(
          'element' => 'box_style',
          'value' => array('default'),
        ),
        'group' => __('Style', 'bezel-addons')
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Left'    => 'align-left',
          'Center'  => 'align-center',
          'Right'   => 'align-right'
        ),
        'heading' => __('Alignment', 'bezel-addons'),
        'param_name' => 'alignment',
        'std' => 'center',
        'dependency' => array(
          'element' => 'box_style',
          'value' => array('default', 'counter'),
        ),
        'group' => __('Style', 'bezel-addons')
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'None'    => '',
          'Uppercase'  => 'upper',
        ),
        'heading' => __('Title text transform', 'bezel-addons'),
        'param_name' => 'text_transform',
        'std' => '',
        'group' => __('Style', 'bezel-addons')
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Default'    => '',
          'Serif'  => 'serif-font',
          'Bold Serif'  => 'alt-serif-font',
          'Cursive'   => 'cursive-font'
        ),
        'heading' => __('Title Font Style', 'bezel-addons'),
        'param_name' => 'title_style',
        'std' => '',
        'group' => __('Style', 'bezel-addons'),
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Yes'    => '',
          'No'  => 'b-0',
        ),
        'heading' => __('Add counter border?', 'bezel-addons'),
        'param_name' => 'counter_border',
        'std' => '',
        'group' => __('Style', 'bezel-addons'),
        'dependency' => array(
          'element' => 'box_style',
          'value' => array('counter'),
        ),
      ),
      bezel_css_animation(),
      bezel_css_animation_delay(),
    )
  )
);

add_shortcode( 'bezel_icon_box', 'bezel_icon_box' );

function bezel_icon_box( $atts, $content = null ) {
  extract( shortcode_atts( array(
    'number' => '',
    'title' => '',
    'box_style' => 'default',
    'icon_type' => 'default',
    'icon'  => '',
    'animated_icon'  => '',
    'text_box_style' => '',
    'small_style' => '',
    'icon_size' => '',
    'icon_color' => '',
    'icon_color_2' => '',
    'icon_position' => '',
    'alignment' => 'align-left',
    'icon_background' => '',
    'css_animation' => '',
    'animation_delay' => '',
    'text_transform' => '',
    'title_style' => '',
    'icon_color_style' => '',
    'counter_border' => '',
    'icon_boxed_style' => '',
  ), $atts ) );

  $icon_clr = (!empty($icon_color)) ? 'style="color: '.$icon_color.'"': '';

  $icon_element = '';

  switch ($icon_type) {
    case 'animated':
      if ($animated_icon) {
        $icon_url = get_template_directory_uri() . '/assets/images/icons/' . str_replace('hca-', '', $animated_icon);
        $animated_icon_color = (!empty($icon_color) && !$icon_color_style) ? 'data-custom-color="'.$icon_color.'"': '';
        $icon_gradients = (!empty($icon_color) && !empty($icon_color_2)) ? 'data-gradients="'.$icon_color.','.$icon_color_2.'"': '';
        $icon_element = '<div class="animated-icon '.$icon_color_style.'" data-icon="'.$icon_url.'.svg" '.$animated_icon_color.' '.$icon_gradients.'>';
        $icon_element .= '</div>';
      }
      break;

    default:
      if ($icon) {
        if ($icon_background == 'yes') {
          $icon_clr = '';
        }
        $icon_element = '<i class="'.$icon.'" '.$icon_clr.'></i>';
      }
      break;
  }

  $div_class = array(
    'text_box' => 'text-box',
    'number_box' => 'number-box',
    'side' => 'icon-box-side ' . $icon_position . ' ' . $icon_size,
    'counter' => 'counter ' . $alignment,
    'simple' => 'icon-box-simple',
    'default' => 'icon-box ' . $alignment . ' ' . $icon_size . ' ' . $icon_boxed_style
  );

  $title_element = '<h4 class="'.$text_transform.' '.$title_style.'">' . esc_attr($title) . '</h4>';

  $output = '<div class="' . $div_class[$box_style] . '" ' . bezel_get_animation($css_animation, $animation_delay) . '>';

  switch ($box_style) {
    case 'text_box':
      $output .= $title_element;
      $output .= '<div class="text-box-content"><p>'. wpb_js_remove_wpautop($content) . '</p></div>';
      break;

    case 'number_box':
      $output .= '<div class="number-box">';
      $output .= '<div class="number-wrap">';
      $output .= '<h2>' . esc_attr($number) . '</h2>';
      $output .= '</div>';
      $output .= '<div class="number-box-content">';
      $output .= str_replace('h4', 'h3', $title_element);
      $output .= '<p>' . wpb_js_remove_wpautop($content) . '</p>';
      $output .= '</div>';
      $output .= '</div>';
      break;

    case 'side':
      $output .= $icon_element;
      $output .= $title_element;
      if ($content) {
        $output .= '<p>' . wpb_js_remove_wpautop($content) . '</p>';
      }
      break;
    case 'counter':
      if ($icon || $animated_icon) {
        $output .= '<div class="counter-icon">' . $icon_element . '</div>';
      }
      $output .= '<div class="counter-content '.$counter_border.'">';
      $output .= '<h5><span class="number-count" data-count="'.esc_attr(filter_var($number, FILTER_SANITIZE_NUMBER_INT)).'">' . esc_attr($number) . '</span>'.preg_replace("/[^A-Z]+/", "", $number).'</h5>';
      $output .= '<span>' . esc_attr($title) . '</span>';
      $output .= '</div>';
      break;
    case 'simple':
      $output .= '<div class="ib-icon-holder">';
      $output .= '<i class="'.$icon.' mb-15"></i>';
      $output .= '</div>';
      $output .= '<div class="ib-text-holder">';
      $output .= $title_element;
      $output .= '</div>';
      break;
    default:
      if ($icon_background == 'yes') {
        $ib_icon_clr = (!empty($icon_color)) ? 'data-custom-bg="'.$icon_color.'"': '';
        $output .= '<div class="ib-icon" '.$ib_icon_clr.'>';
      }
      $output .= $icon_element;
      if ($icon_background == 'yes') {
        $output .= '</div>';
      }
      $output .= '<div class="ib-content">';
      $output .= $title_element;
      $output .= '<p>' . wpb_js_remove_wpautop($content) . '</p>';
      $output .= '</div>';
      break;
  }

  $output .= '</div>';

  return $output;

}
