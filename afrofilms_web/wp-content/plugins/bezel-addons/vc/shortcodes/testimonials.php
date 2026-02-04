<?php

/* Testimonials */
vc_map(
  array(
    'name' => __('Testimonials', 'bezel-addons'),
    'base' => 'bezel_testimonials',
    'icon' => 'ti-book',
    'description' => __('Testimonials slider.', 'bezel-addons'),
    'category' => __('Bezel', 'bezel-addons'),
    'params' => array(
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
        'value' => array(
          'Left'    => 'left',
          'Center'  => 'center',
          'Right'   => 'right'
        ),
        'heading' => __('Alignment', 'bezel-addons'),
        'param_name' => 'alignment',
        'std' => 'center',
      ),
      array(
        'type' => 'param_group',
        'value' => '',
        'param_name' => 'clients',
        'heading' => __('Testimonials', 'bezel-addons'),
        'params' => array(
          array(
            'type' => 'attach_image',
            'value' => '',
            'heading' => __('Testimonial Image', 'bezel-addons'),
            'param_name' => 'image',
          ),
          array(
            'type' => 'textfield',
            'value' => '',
            'heading' => __('Testimonial name', 'bezel-addons'),
            'param_name' => 'name',
            'admin_label' => true
          ),
          array(
            'type' => 'textfield',
            'value' => '',
            'heading' => __('Testimonial info', 'bezel-addons'),
            'param_name' => 'info',
          ),
          array(
            'type' => 'textarea',
            'value' => '',
            'heading' => __('Comment', 'bezel-addons'),
            'param_name' => 'comment',
          ),
        )
      )
    )
  )
);

add_shortcode( 'bezel_testimonials', 'bezel_testimonials' );

function bezel_testimonials( $atts ) {
  extract( shortcode_atts( array(
    'autoplay' => '',
    'clients' => '',
    'alignment' => 'center',
  ), $atts ) );

  $opts = array();

  if (!empty($autoplay)) {
    $opts[] = '"autoplaySpeed": '.$autoplay;
  }

  $clients = vc_param_group_parse_atts($clients);

  $align = ($alignment != 'center') ? 'align-'.$alignment : '';

  $output = '<div class="testimonials-slider" data-slick="{'.htmlentities(implode(', ', $opts)).'}">';
  if ($clients) {
    foreach ($clients as $client) {

      $output .= '<div class="testimonial">';
      $output .= '<div class="testimonial-content">';

      if (isset($client['image'])) {
        $image_src = wp_get_attachment_image_src($client['image'], 'thumb');
        $output .= '<img src="'.esc_url($image_src[0]).'" alt="'.esc_attr($client['name']).'">';
      }
      $output .= '<div class="testimonial-comment">';
      if (isset($client['name'])) {
        $output .= '<h4>'.esc_attr($client['name']).'</h4>';
      }
      if (isset($client['info'])) {
        $output .= '<span class="testimonial-info">'.esc_attr($client['info']).'</span>';
      }
      if (isset($client['comment'])) {
        $output .= '<p>'.esc_attr($client['comment']).'</p>';
      }
      $output .= '</div>';

      $output .= '</div>';
      $output .= '</div>';

    }
  }
  $output .= '</div>';

  return $output;

}
