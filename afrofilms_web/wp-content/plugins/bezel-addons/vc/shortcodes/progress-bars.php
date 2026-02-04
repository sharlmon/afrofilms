<?php

/* Progress Bars */
vc_map(
  array(
    'name' => __( 'Progress Bar', 'bezel-addons'),
    'base' => 'bezel_progress_bar',
    'icon' => 'ti-align-left',
    'description' => __('Animated Progress Bar.', 'bezel-addons'),
    'category' => __( 'Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'dropdown',
        'param_name' => 'bg_color',
        'heading' => __('Progress Bar Color', 'bezel-addons'),
        'value' => array(
          'Black' => 'black',
          'Colored' => 'colored',
          'White' => 'white'
        )
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Name', 'bezel-addons'),
        'param_name' => 'name',
        'admin_label' => true,
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Percentage', 'bezel-addons'),
        'param_name' => 'percentage',
      )
    )
  )
);

add_shortcode( 'bezel_progress_bar', 'bezel_progress_bar' );

function bezel_progress_bar( $atts ) {
  extract( shortcode_atts( array(
    'bg_color' => 'black',
    'name'  => '',
    'icon'  => '',
    'percentage' => ''
  ), $atts ) );

  $output = '<div class="skill">';
  $output .= '<h5 class="skill-name">'.esc_attr($name);
  $output .= '<span class="skill-perc">'.esc_attr($percentage).'%</span></h5>';
  $output .= '<div class="progress">';
  $output .= '<div role="progressbar" class="progress-bar '.$bg_color.'" data-progress="'.esc_attr($percentage).'"></div>';
  $output .= '</div>';
  $output .= '</div>';

  return $output;
}
