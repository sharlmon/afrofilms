<?php

/* Carousel */
vc_map(
  array(
    'name' => __('Carousel', 'bezel-addons'),
    'base' => 'bezel_carousel',
    'icon' => 'ti-layout-slider-alt',
    'description' => __('Animated carousel.', 'bezel-addons'),
    'category' => __( 'Bezel', 'bezel-addons'),
    'is_container' => true,
    'params' => array(
      array(
        'type' => 'dropdown',
        'heading' => __('Carousel Type', 'bezel-addons'),
        'param_name' => 'type',
        'value' => array(
          'Standard' => '',
          'Clients Carousel'  => 'client-carousel',
        )
      ),
      array(
        'type' => 'textfield',
        'value' => '4',
        'heading' => __('Items', 'bezel-addons'),
        'description' => __('Set the maximum amount of items displayed at a time.', 'bezel-addons'),
        'param_name' => 'items',
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Direction', 'bezel-addons'),
        'param_name' => 'direction',
        'value' => array(
          'Horizontal' => '',
          'Vertical'  => 'vertical',
        ),
        'std' => '',
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Loop', 'bezel-addons'),
        'param_name' => 'loop',
        'value' => array(
          'On' => '1',
          'Off'  => '',
        )
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Autoplay', 'bezel-addons'),
        'param_name' => 'autoplay',
        'value' => array(
          'Off'  => '',
          'On' => '1',
        )
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'autoplay_speed',
        'heading' => __('Autoplay Speed', 'bezel-addons'),
        'description' => __( 'Default: 3 seconds', 'bezel-addons' ),
        'value' => array(
          'Default' => '',
          '1 Second' => 1000,
          '2 Seconds' => 2000,
          '3 Seconds' => 3000,
          '4 Seconds' => 4000,
          '5 Seconds' => 5000,
          '6 Seconds' => 6000,
          '7 Seconds' => 7000,
          '8 Seconds' => 8000,
          '9 Seconds' => 9000,
          '10 Seconds' => 10000,
          '11 Seconds' => 11000,
          '12 Seconds' => 12000,
          '13 Seconds' => 13000,
          '14 Seconds' => 14000,
          '15 Seconds' => 15000,
        ),
        'dependency' => array(
          'element' => 'autoplay',
          'not_empty' => true,
        )
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Controls', 'bezel-addons'),
        'param_name' => 'controls',
        'value' => array(
          'Off'  => '',
          'On' => '1',
        ),
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Controls Color', 'bezel-addons'),
        'param_name' => 'dots_color',
        'value' => array(
          'Default' => '',
          'Light'  => 'white-dots',
          'Dark'  => 'dark-dots',
        ),
        'dependency' => array(
          'element' => 'controls',
          'not_empty' => true,
        )
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Items (medium devices)', 'bezel-addons'),
        'description' => __('Set the maximum amount of items displayed at a time on medium devices.', 'bezel-addons'),
        'param_name' => 'md_items',
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Items (small devices)', 'bezel-addons'),
        'description' => __('Set the maximum amount of items displayed at a time on small devices.', 'bezel-addons'),
        'param_name' => 'sm_items',
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Items (extra small devices)', 'bezel-addons'),
        'description' => __('Set the maximum amount of items displayed at a time on extra small devices.', 'bezel-addons'),
        'param_name' => 'xs_items',
      ),
      array(
        'type' => 'css_editor',
        'heading' => __( 'CSS box', 'js_composer' ),
        'param_name' => 'css',
        'group' => __( 'Design Options', 'js_composer' ),
      ),
    ),
    'js_view' => 'VcColumnView'
  )
);

add_shortcode('bezel_carousel', 'bezel_carousel');

function bezel_carousel($atts, $content = null){
  extract( shortcode_atts( array(
    'items' => '4',
    'type' => '',
    'loop' => '1',
    'autoplay' => '1',
    'autoplay_speed' => '',
    'direction' => '',
    'controls' => '',
    'dots_color' => '',
    'md_items' => '',
    'sm_items' => '',
    'xs_items' => '',
    'css' => ''
  ), $atts ) );

  $css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class( $css, ' ' ), 'bezel_carousel', $atts );

  $options =  array();
  $options[] = '"slidesToShow": ' . $items;
  if (empty($loop)) {
    $options[] = '"loop": false';
  }
  if (empty($autoplay)) {
    $options[] = '"autoplay": false';
  }
  if (!empty($autoplay_speed)) {
    $options[] = '"autoplaySpeed": '.$autoplay_speed;
  }
  if (empty($controls)) {
    $options[] = '"dots": false';
  }
  if (!empty($direction) && $direction == 'vertical') {
    $options[] = '"vertical": true';
  }
  if (!empty($md_items)) {
    $options[] = '"mdItems": ' . $md_items;
  }
  if (!empty($sm_items)) {
    $options[] = '"smItems": ' . $sm_items;
  }
  if (!empty($xs_items)) {
    $options[] = '"xsItems": ' . $xs_items;
  }

  $output = '';
  if (!empty($css)) {
    $output .= '<div class="'.$css_class.'">';
  }
  $output .= '<div class="carousel '.$type.' '.$dots_color.'" data-slick="{'.htmlentities(implode(', ', $options)).'}">'.wpb_js_remove_wpautop($content).'</div>';
  if (!empty($css)) {
    $output .= '</div>';
  }

  return $output;
}
