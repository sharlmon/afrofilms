<?php

/* Box */
vc_map(
  array(
    'name' => __('Image Box', 'bezel-addons'),
    'base' => 'bezel_image_box',
    'icon' => 'ti-package',
    'description' => __('A cointainer for elements.', 'bezel-addons'),
    'category' => __('Bezel', 'bezel-addons'),
    'is_container' => true,
    'params' => array(
      array(
        'type' => 'attach_image',
        'heading' => __('Image', 'bezel-addons'),
        'param_name' => 'image',
        'value' => '',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Middle'    => 'v-center',
          'Top'       => 'v-top',
          'Bottom'    => 'v-bottom'
        ),
        'heading' => __('Vertical Align', 'bezel-addons'),
        'param_name' => 'vertical_align',
        'std' => '',
      ),
      array(
        'type' => 'colorpicker',
        'heading' => __('Overlay Color', 'bezel-addons'),
        'param_name' => 'overlay_color',
        'value' => '',
      ),
    ),
    'js_view' => 'VcColumnView'
  )
);

/* Boxes */
add_shortcode( 'bezel_image_box', 'bezel_image_box' );

function bezel_image_box( $atts, $content = null ) {
  extract( shortcode_atts( array(
    'image' => '',
    'overlay_color' => '',
    'vertical_align' => 'v-center',
  ), $atts ) );

  $overlay_clr = (!empty($overlay_color)) ? 'data-custom-bg="'.$overlay_color.'"': '';

  $output = '<div class="image-box">';
  if ($image) {
    $image_src = wp_get_attachment_image_src($image, 'full');
    $output .= '<img src="'.esc_url($image_src[0]).'" alt="">';
  }
  $output .= '<div class="image-overlay" '.$overlay_clr.'>';
  $output .= '<div class="centrize">';
  $output .= '<div class="'.$vertical_align.'">';
  $output .= wpb_js_remove_wpautop($content);
  $output .= '</div>';
  $output .= '</div>';
  $output .= '</div>';
  $output .= '</div>';

  return $output;
}
