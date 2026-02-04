<?php

/* Timeline */
vc_map(
  array(
    'name' => __('Timeline', 'bezel-addons'),
    'base' => 'bezel_timeline',
    'icon' => 'ti-layout-list-thumb-alt',
    'description' => __('Timeline with your resume details.', 'bezel-addons'),
    'category' => __('Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'param_group',
        'param_name' => 'items',
        'heading' => __('Items', 'bezel-addons'),
        'params' => array(
          array(
            'type' => 'textfield',
            'param_name' => 'title',
            'heading' => __('Title', 'bezel-addons'),
            'value' => '',
            'admin_label' => true,
          ),
          array(
            'type' => 'textarea',
            'param_name' => 'text',
            'heading' => __('Text', 'bezel-addons'),
            'value' => ''
          ),
          array(
            'type' => 'textfield',
            'param_name' => 'place',
            'heading' => __('Job Place/University', 'bezel-addons'),
            'value' => ''
          ),
          array(
            'type' => 'textfield',
            'param_name' => 'date',
            'heading' => __('Date', 'bezel-addons'),
            'description' => __('I.E: February 2010 - April 2012', 'bezel-addons'),
            'value' => ''
          )
        )
      )
    )
  )
);

add_shortcode( 'bezel_timeline', 'bezel_timeline' );

function bezel_timeline( $atts ) {
  extract( shortcode_atts( array(
    'items' => ''
  ), $atts ) );

  $timeline_items = vc_param_group_parse_atts($items);

  $output = '<ul class="timeline">';
  if ($timeline_items) {
    foreach ($timeline_items as $item) {
      $output .= '<li>';

      $output .= '<div class="timeline-content">';
      if (isset($item['date'])) {
        $output .= '<span class="timeline-date">'. esc_attr($item['date']) . '</span>';
      }
      if (isset($item['title'])) {
        $output .= '<h4>'.esc_attr($item['title']).'</h4>';
      }
      if (isset($item['place'])) {
        $output .= '<h5>'.esc_attr($item['place']). '</h5>';
      }
      if (isset($item['text'])) {
        $output .= '<p>'.esc_attr($item['text']).'</p>';
      }
      $output .= '</div>';

      $output .= '</li>';
    }
  }
  $output .= '</ul>';

  return $output;

}
