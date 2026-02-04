<?php

vc_map(
  array(
    'name' => __('Job Offer', 'bezel-addons'),
    'base' => 'bezel_job_offer',
    'icon' => 'ti-announcement',
    'description' => __('Simple job offer.', 'bezel-addons'),
    'category' => __('Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'textfield',
        'param_name' => 'title',
        'heading' => __('Job Title', 'bezel-addons'),
        'value' => ''
      ),
      array(
        'type' => 'textfield',
        'param_name' => 'location',
        'heading' => __('Location', 'bezel-addons'),
        'value' => ''
      ),
      array(
        'type' => 'textarea_html',
        'param_name' => 'content',
        'heading' => __('Description', 'bezel-addons'),
        'value' => ''
      ),
      array(
        'type' => 'vc_link',
        'param_name' => 'link',
        'heading' => __('Link', 'bezel-addons'),
        'value' => ''
      ),
    )
  )
);

/* Job Offer */
add_shortcode( 'bezel_job_offer', 'bezel_job_offer' );

function bezel_job_offer( $atts, $content = null ) {
  extract( shortcode_atts( array(
    'title' => '',
    'location' => '',
    'link' => '',
  ), $atts ) );

  $button = vc_build_link($link);

  $output = '<div class="job-offer">';

  $output .= '<div class="job-info">';
  $output .= '<div class="row">';

  $output .= '<div class="col-sm-8">';
  $output .= '<h3>'.esc_attr($title).'</h3>';
  $output .= '<h5 class="upper">'.esc_attr($location).'</h5>';
  $output .= '</div>';

  $output.= '<div class="col-sm-4 txt-sm-right txt-md-right">';
  $output.= '<a href="'.esc_url($button['url']).'" class="btn btn-color btn-sm">'.esc_attr($button['title']).'</a>';
  $output.= '</div>';

  $output .= '</div>';
  $output .= '</div>';

  $output .= '<div class="job-content">';
  $output .= wpb_js_remove_wpautop($content);
  $output .= '</div>';

  $output .= '</div>';

  return $output;
}
