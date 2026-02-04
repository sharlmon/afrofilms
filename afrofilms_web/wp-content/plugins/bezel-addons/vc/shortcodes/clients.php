<?php

/* Clients */
vc_map(
  array(
    'name' => __('Clients', 'bezel-addons'),
    'base' => 'bezel_clients',
    'icon' => 'ti-id-badge',
    'description' => __('Clients logos.', 'bezel-addons'),
    'category' => __('Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'dropdown',
        'param_name' => 'column_width',
        'heading' => __('Columns Width', 'bezel-addons'),
        'value' => array(
          '3 Column Desktop / 6 Columns Tablet' => 'col-md-3 col-sm-6',
          '4 Column Desktop / 6 Columns Tablet' => 'col-md-4 col-sm-6',
          '6 Columns' => 'col-xs-6',
        ),
        'std' => 'col-sm-4 col-xs-6'
      ),
      array(
        'type' => 'attach_images',
        'value' => '',
        'heading' => __('Client Logos', 'bezel-addons'),
        'param_name' => 'images',
      ),
    )
  )
);

add_shortcode( 'bezel_clients', 'bezel_clients' );

function bezel_clients( $atts ) {
  extract( shortcode_atts( array(
    'column_width' => 'col-md-4 col-sm-6',
    'images' => ''
  ), $atts ) );

  $clients = explode(',', $images);

  $output = '<div class="row row-flex clients-box">';
  if ($clients) {
    foreach ($clients as $client) {

      $column_class = $column_width;

      $output .= '<div class="'.$column_class.'">';
      $output .= '<figure class="client-image">';
      $output .= '<img src="'.esc_url(wp_get_attachment_url($client)).'" alt="">';
      $output .= '</figure>';
      $output .= '</div>';

    }
  }
  $output .= '</div>';

  return $output;

}
