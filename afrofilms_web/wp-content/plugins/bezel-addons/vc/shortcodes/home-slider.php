<?php

/* Home Slider */
vc_map(
  array(
    'name' => __('Home Slider', 'bezel-addons'),
    'base' => 'bezel_home_slider',
    'icon' => 'ti-layout-slider',
    'description' => __('Slideshow with images and texts.', 'bezel-addons'),
    'category' => __('Bezel', 'bezel-addons'),
    'as_parent' => array('only' => 'bezel_home_slide'),
    'allowed_container_element' => 'bezel_home_slide',
    'content_element' => true,
    'is_container' => true,
    'js_view' => 'VcColumnView',
    'params' => array(
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
        'param_name' => 'autoplay',
        'heading' => __('Autoplay Speed', 'bezel-addons'),
        'description' => __( 'Default: 7 seconds', 'bezel-addons' ),
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
    )
  )
);

/* Single Home Slide */
vc_map(
  array(
    'name' => __('Single Slide', 'bezel-addons'),
    'base' => 'bezel_home_slide',
    'icon' => 'ti-image',
    'description' => __('Slide with images and text.', 'bezel-addons'),
    'as_parent' => array('only' => 'bezel_slide_heading, bezel_button, vc_single_image'),
    'content_element' => true,
    'is_container' => true,
    'js_view' => 'VcColumnView',
    'params' => array(
      array(
        'type' => 'dropdown',
        'heading' => __('Background', 'bezel-addons'),
        'param_name' => 'slide_bg',
        'value' => array(
          'Image' => 'image',
          'Video' => 'video'
        ),
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Default'    => '',
          'Dark'    => 'dark-overlay',
          'White'  => 'white-overlay',
          'Light'  => 'light-overlay',
          'Colored' => 'colored-overlay',
          'Gradient' => 'gradient-overlay',
          'No Overlay' => 'no-overlay',
        ),
        'heading' => __('Overlay Style', 'bezel-addons'),
        'param_name' => 'overlay_style',
        'std' => '',
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
        'type' => 'attach_image',
        'value' => '',
        'heading' => __('Background Image', 'bezel-addons'),
        'param_name' => 'image',
        'dependency' => array(
          'element' => 'slide_bg',
          'value' => 'image'
        ),
      ),
      array(
        'type' => 'attach_video',
        'heading' => __( 'Video', 'bezel-addons' ),
        'param_name' => 'slide_video',
        'value' => '',
        'description' => __( 'Select or upload a video.', 'bezel-addons' ),
        'dependency' => array(
          'element' => 'slide_bg',
          'value' => 'video',
        ),
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Left'    => 'left',
          'Center'  => 'center',
          'Right'   => 'right'
        ),
        'heading' => __('Alignment', 'bezel-addons'),
        'param_name' => 'text_align',
        'std' => 'center',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Middle'    => '',
          'Top'       => 'v-top',
          'Bottom'    => 'v-bottom'
        ),
        'heading' => __('Vertical Align', 'bezel-addons'),
        'param_name' => 'vertical_align',
        'std' => '',
      ),
    )
  )
);

vc_map(
  array(
    'name' => __('Heading', 'bezel-addons'),
    'base' => 'bezel_slide_heading',
    'icon' => 'ti-image',
    'description' => __('Slide heading.', 'bezel-addons'),
    'as_child' => array('only' => 'bezel_home_slide'),
    'params' => array(
      array(
        'type' => 'textarea_html',
        'heading' => __('Text', 'bezel-addons'),
        'param_name' => 'content',
        'admin_label' => true,
        'value' => '',
      ),
    )
  )
);

add_shortcode( 'bezel_home_slider', 'bezel_home_slider' );

function bezel_home_slider( $atts, $content = null ) {
  extract( shortcode_atts( array(
    'autoplay' => '',
    'animation' => 'slide',
  ), $atts ) );

  $opts = array();

  if (!empty($autoplay)) {
    $opts[] = '"autoplaySpeed": '.$autoplay;
  }

  if ($animation == 'fade') {
    $opts[] = '"fade": true';
  }

  $output = '<div id="home-slider" data-slick="{'.htmlentities(implode(', ', $opts)).'}">';
  $output .= wpb_js_remove_wpautop($content);
  $output .= '</div>';

  return $output;
}

add_shortcode( 'bezel_home_slide', 'bezel_home_slide' );

function bezel_home_slide( $atts, $content = null  ) {
  extract( shortcode_atts( array(
    'slide_bg' => 'image',
    'image' => '',
    'slide_video' => '',
    'overlay_style' => '',
    'text_align' => 'center',
    'vertical_align' => '',
    'overlay_color' => '',
    'overlay_color_2' => '',
  ), $atts ) );

  $align_text = ($text_align != 'center') ? 'align-'.$text_align : '';
  $overlay_bg = ($overlay_style == 'colored-overlay' && $overlay_color) ? 'data-custom-bg="'.$overlay_color.'"': '';
  $slide_gradients = ($overlay_style == 'gradient-overlay' && !empty($overlay_color) && !empty($overlay_color_2)) ? 'data-gradients="'.$overlay_color.','.$overlay_color_2.'"': '';

  $output = '<div class="slide-item">';
  if ($slide_bg == 'image' && $image) {
    $output .= '<img src="'.wp_get_attachment_url($image).'">';
  } elseif ($slide_bg == 'video') {
    $output .= '<div class="video-wrapper">';
    $output .= '<div class="video-player">';
    $output .= '<video autoplay playsinline muted loop preload="auto">';
    $output .= '<source src="'.esc_url($slide_video).'" type="video/mp4">';
    $output .= '</video>';
    $output .= '</div>';
    $output .= '</div>';
  }
  $output .= '<div class="slide-wrap '.$overlay_style.'" '.$overlay_bg.' '.$slide_gradients.'>';
  $output .= '<div class="slide-content '.$align_text.' '.$vertical_align.'">';
  $output .= '<div class="container">';
  $output .= wpb_js_remove_wpautop($content);
  $output .= '</div>';
  $output .= '</div>';
  $output .= '</div>';
  $output .= '</div>';

  return $output;
}

add_shortcode( 'bezel_slide_heading', 'bezel_slide_heading' );

function bezel_slide_heading( $atts = null, $content = null ) {

  $output = wpb_js_remove_wpautop($content);

  return $output;
}

?>
