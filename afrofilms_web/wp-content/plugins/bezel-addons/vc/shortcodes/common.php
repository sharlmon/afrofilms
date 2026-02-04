<?php

/* Map */
vc_map(
  array(
    'name' => __('Google Maps', 'bezel-addons'),
    'base' => 'bezel_map',
    'icon' => 'ti-location-pin',
    'description' => __('Map block.', 'bezel-addons'),
    'category' => __('Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'textfield',
        'value' => '40.773328',
        'heading' => __('Map Latitude', 'bezel-addons'),
        'param_name' => 'lat',
        'edit_field_class' => 'vc_col-xs-6',
        'description' => __('Find your Latitude and Longitude <a target="blank" href="http://www.latlong.net/">here</a>', 'bezel-addons'),
      ),
      array(
        'type' => 'textfield',
        'value' => '-73.960088',
        'heading' => __('Map Longitude', 'bezel-addons'),
        'param_name' => 'lng',
        'edit_field_class' => 'vc_col-xs-6 pt-0',
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Title', 'bezel-addons'),
        'param_name' => 'title',
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Style', 'bezel-addons'),
        'param_name' => 'style',
        'value' => array(
          'Default' => '',
          'Greyscale' => 'grey'
        ),
        'std' => '',
      ),
      array(
        'type' => 'textfield',
        'value' => '12',
        'heading' => __('Map Zoom', 'bezel-addons'),
        'param_name' => 'zoom',
      ),
    )
  )
);

add_shortcode( 'bezel_map', 'bezel_map' );
function bezel_map( $atts ) {
  extract( shortcode_atts( array(
    'lat'  => '40.773328',
    'lng'  => '-73.960088',
    'zoom' => '12',
    'title' => '',
    'style' => '',
  ), $atts ) );

  return '<div class="map-container"><div id="map" data-style="'.$style.'" class="full-width" data-title="'.esc_attr($title).'" data-lat="'.esc_attr($lat).'" data-long="'.esc_attr($lng).'" data-zoom="'.esc_attr($zoom).'"></div></div>';
}

/* Alerts */
vc_map(
  array(
    'name' => __('Alert', 'bezel-addons'),
    'base' => 'bezel_alert',
    'icon' => 'ti-info-alt',
    'description' => __('Notification element.', 'bezel-addons'),
    'category' => __('Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'dropdown',
        'param_name' => 'color',
        'heading' => __('Color', 'bezel-addons'),
        'admin_label' => true,
        'value' => array(
          'Green' => 'alert-success',
          'Blue' => 'alert-info',
          'Yellow' => 'alert-warning',
          'Red' => 'alert-danger',
        )
      ),
      array(
        'type' => 'textarea',
        'param_name' => 'text',
        'heading' => __('Text', 'bezel-addons'),
        'value' => ''
      ),
    )
  )
);

add_shortcode( 'bezel_alert', 'bezel_alert' );
function bezel_alert( $atts ) {
  extract( shortcode_atts( array(
    'color'   => 'alert-success',
    'text'    => ''
  ), $atts ) );

  $icon_classes = array(
    'alert-success' => 'hc-checkmark-circle',
    'alert-info' => 'hc-informatcircle',
    'alert-warning' => 'hc-warning',
    'alert-danger' => 'hc-exclamation',
  );

  $output = '<div role="alert" class="alert '.$color.' alert-dismissible">';
  $output .= '<div class="alert-icon"><i class="'.$icon_classes[$color].'"></i></div>';
  $output .= '<button type="button" data-dismiss="alert" aria-label="Close" class="close"><i class="hc-close"></i></button>';
  $output .= esc_attr( $text );
  $output .= '</div>';

  return $output;
}

/* Newsletter Form */
add_shortcode( 'bezel_newsletter_form', 'bezel_newsletter_form' );
function bezel_newsletter_form( $atts ) {
  extract( shortcode_atts( array(
    'url'  => '',
  ), $atts ) );


  $output = '<form data-mailchimp="true" class="newsletter-form" data-url="'.esc_url($url).'">';
  $output .= '<div class="input-group">';
  $output .= '<input type="email" name="email" placeholder="'.__('Email', 'bezel-addons').'" class="form-control">';
  $output .= '<span class="input-group-btn">';
  $output .= '<button type="submit" class="btn btn-color">'.__('Sign Up', 'bezel-addons').'</button>';
  $output .= '</span>';
  $output .= '</div>';
  $output .= '</form>';

  return $output;
}
