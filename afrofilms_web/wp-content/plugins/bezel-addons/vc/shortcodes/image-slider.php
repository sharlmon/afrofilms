<?php

/* Image Slider */
vc_map(
  array(
    'name' => __('Image Slider', 'bezel-addons'),
    'base' => 'bezel_image_slider',
    'icon' => 'ti-image',
    'description' => __('Image Slider.', 'bezel-addons'),
    'category' => __( 'Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'attach_images',
        'param_name' => 'images',
        'heading' => __('Images', 'bezel-addons'),
        'value' => '',
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'autoplay',
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
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'animation',
        'heading' => __('Animation', 'bezel-addons'),
        'value' => array(
          'Slide' => 'slide',
          'Fade' => 'fade',
        ),
        'std' => 'slide'
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'control_nav',
        'heading' => __('Control Nav', 'bezel-addons'),
        'value' => array(
          'Off' => 'off',
          'On' => 'on',
        ),
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'direction_nav',
        'heading' => __('Direction Nav', 'bezel-addons'),
        'value' => array(
          'On' => 'on',
          'Off' => 'off'
        ),
      ),
    )
  )
);

add_shortcode( 'bezel_image_slider', 'bezel_image_slider' );

function bezel_image_slider( $atts ) {
  extract( shortcode_atts( array(
    'animation' => 'slide',
    'control_nav' => 'off',
    'direction_nav' => 'on',
    'autoplay' => '',
    'images' => ''
  ), $atts ) );

  $pics = explode(',', $images);
  $opts = array();

  if (!empty($autoplay)) {
    $opts[] = '"autoplaySpeed": '.$autoplay;
  }
  
  if ($animation == 'fade') {
    $opts[] = '"fade": true';
  }

  if ($control_nav == 'on') {
    $opts[] = '"dots": true';
  }
  if ($direction_nav == 'off') {
    $opts[] = '"arrows": false';
  }

  $output = '<div class="images-gallery" data-slick="{'.htmlentities(implode(', ', $opts)).'}">';
  foreach ($pics as $pic) {
    $output .= '<img src="'.esc_url(wp_get_attachment_url($pic)).'" alt="">';
  }
  $output .= '</div>';

  return $output;

}
