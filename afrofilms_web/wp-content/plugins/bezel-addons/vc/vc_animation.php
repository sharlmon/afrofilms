<?php

function bezel_css_animation() {
  $data = array(
  	'type' => 'dropdown',
  	'heading' => esc_html__('Animation', 'bezel-addons') ,
  	'param_name' => 'css_animation',
  	'value' => array(
  		esc_html__('None', 'bezel-addons') => '',
      esc_html__('Opacity', 'bezel-addons') => 'fadeIn',
      esc_html__('Top to bottom', 'bezel-addons') => 'fadeInDown',
      esc_html__('Left to right', 'bezel-addons') => 'fadeInLeft',
      esc_html__('Right to left', 'bezel-addons') => 'fadeInRight',
      esc_html__('Bottom to top', 'bezel-addons') => 'fadeInUp',
      esc_html__('Zoom In', 'bezel-addons') => 'zoomIn',
      esc_html__('Zoom Out', 'bezel-addons') => 'zoomOut',
  	),
  	'group' => esc_html__('Animation', 'bezel-addons') ,
  	'description' => esc_html__('Select type of animation for element to be animated when it "enters" the browsers viewport (Note: works only in modern browsers).', 'bezel-addons')
  );

	return $data;
}

function bezel_css_animation_delay(){
  $data = array(
    'type' => 'dropdown',
    'heading' => esc_html__('Animation delay', 'bezel-addons') ,
    'param_name' => 'animation_delay',
    'value' => array(
      esc_html__('None', 'bezel-addons') => '',
      esc_html__('100', 'bezel-addons') => 100,
      esc_html__('200', 'bezel-addons') => 200,
      esc_html__('300', 'bezel-addons') => 300,
      esc_html__('400', 'bezel-addons') => 400,
      esc_html__('500', 'bezel-addons') => 500,
      esc_html__('600', 'bezel-addons') => 600,
      esc_html__('700', 'bezel-addons') => 700,
      esc_html__('800', 'bezel-addons') => 800,
      esc_html__('900', 'bezel-addons') => 900,
      esc_html__('1000', 'bezel-addons') => 1000,
      esc_html__('1100', 'bezel-addons') => 1100,
      esc_html__('1200', 'bezel-addons') => 1200,
      esc_html__('1300', 'bezel-addons') => 1300,
      esc_html__('1400', 'bezel-addons') => 1400,
      esc_html__('1500', 'bezel-addons') => 1500,
      esc_html__('1600', 'bezel-addons') => 1600,
      esc_html__('1700', 'bezel-addons') => 1700,
      esc_html__('1800', 'bezel-addons') => 1800,
      esc_html__('1900', 'bezel-addons') => 1900,
      esc_html__('2000', 'bezel-addons') => 2000,
    ) ,
    'group' => esc_html__('Animation', 'bezel-addons') ,
    'description' => esc_html__('Specify the entrance animation delay in milliseconds.', 'bezel-addons') ,
    'dependency' => array(
      'element' => 'css_animation',
      'not_empty' => true
    )
  );
  return $data;
}
