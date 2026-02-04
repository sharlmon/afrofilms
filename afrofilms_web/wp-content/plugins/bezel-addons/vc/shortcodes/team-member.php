<?php

/* Team Member */
vc_map(
  array(
    'name' => __( 'Team Member', 'bezel-addons'),
    'base' => 'bezel_team_member',
    'icon' => 'ti-user',
    'description' => __('Add a team member.', 'bezel-addons'),
    'category' => __( 'Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'dropdown',
        'heading' => __('Style', 'bezel-addons'),
        'param_name' => 'style',
        'value' => array(
          'Overlay' => 'overlay',
          'Simple' => 'simple',
          'Round Thumbnail' => 'round-thumb',
        )
      ),
      array(
        'type' => 'colorpicker',
        'heading' => __( 'Overlay Color', 'bezel-addons'),
        'value' => '',
        'param_name' => 'overlay_color',
        'dependency' => array(
          'element' => 'style',
          'value' => array('overlay')
        ),
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Thumb Size', 'bezel-addons'),
        'param_name' => 'thumb_size',
        'value' => array(
          'Small' => '',
          'Big' => 'big-thumb',
        ),
        'dependency' => array(
          'element' => 'style',
          'value' => array('round-thumb'),
        ),
      ),
      array(
        'type' => 'attach_image',
        'value' => '',
        'heading' => __('Image', 'bezel-addons'),
        'param_name' => 'image',
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Name', 'bezel-addons'),
        'param_name' => 'name',
        'admin_label' => true
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Role', 'bezel-addons'),
        'param_name' => 'role',
      ),
      array(
        'type' => 'textarea',
        'value' => '',
        'heading' => __('Description', 'bezel-addons'),
        'param_name' => 'description',
      ),
      array(
        'type' => 'param_group',
        'heading' => __('Social Links', 'bezel-addons'),
        'param_name' => 'socials',
        'params' => array(
          array(
            'type' => 'dropdown',
            'heading' => __('Social', 'bezel-addons'),
            'param_name' => 'social',
            'admin_label' => true,
            'value' => array(
              'Facebook' => 'facebook',
              'Twitter' => 'twitter',
              'Linkedin' => 'linkedin',
              'Instagram' => 'instagram',
              'Dribbble' => 'dribbble',
              'Github' => 'github',
              'Flickr' => 'flickr',
              'Pinterest' => 'pinterest',
              'YouTube' => 'youtube',
              'Tumblr' => 'tumblr'
            )
          ),
          array(
            'type' => 'textfield',
            'value' => '',
            'heading' => __('URL', 'bezel-addons'),
            'param_name' => 'url',
          ),
        )
      ),
      bezel_css_animation(),
      bezel_css_animation_delay(),
    )
  )
);

add_shortcode('bezel_team_member', 'bezel_team_member');

function bezel_team_member($atts){
  extract( shortcode_atts( array(
    'style' => 'overlay',
    'overlay_color' => '',
    'thumb_size' => '',
    'image' => '',
    'name' => '',
    'role' => '',
    'description' => '',
    'socials' => '',
    'css_animation' => '',
    'animation_delay' => '',
  ), $atts ) );

  $links = vc_param_group_parse_atts($socials);

  $icon_classes = array(
    'facebook' => 'hc-facebook',
    'twitter' => 'hc-twitter',
    'linkedin' => 'hc-linkedin',
    'instagram' => 'hc-instagram',
    'dribbble' => 'hc-dribbble',
    'github' => 'hc-github',
    'flickr' => 'hc-flickr',
    'pinterest' => 'hc-pinterest',
    'youtube' => 'hc-youtube',
    'tumblr' => 'hc-tumblr',
  );

  $output = '';
  $additional_classes = ($style == 'round-thumb') ? 'round-thumb ' . $thumb_size : '';

  $output = '<div class="team-member '.$additional_classes.'" ' . bezel_get_animation($css_animation, $animation_delay) . '>';
  if ($image) {
    $output .= '<div class="team-image">';
    $img_size = ($style == 'round-thumb') ? array(500,500, true) : 'bezel_small';
    $image_src = wp_get_attachment_image_src($image, $img_size);
    $output .= '<img src="'.esc_url($image_src[0]).'" alt="'.esc_attr($name).'">';
    $output .= '</div>';
  }
  if ($style == 'overlay') {
    $overlay_clr = (!empty($overlay_color)) ? 'data-custom-bg="'.$overlay_color.'"': '';
    $output .= '<div class="team-overlay" '.$overlay_clr.'>';
  }
    $output .= '<div class="team-info">';
    $output .= '<h4>'.esc_attr($name).'</h4>';
    $output .= '<span>'.esc_attr($role).'</span>';
    if ($description) {
      $output .= '<p>'.esc_attr($description).'</p>';
    }
    $output .= '<ul class="team-social">';
    foreach ($links as $link) {
      if (isset($link['url'])) {
        $output .= '<li class="social-item-'.$link['social'].'">';
        $output .= '<a href="'.esc_url($link['url']).'" target="_blank">';
        $output .= '<i class="'.$icon_classes[$link['social']].'"></i>';
        $output .= '</a>';
        $output .= '</li>';
      }
    }
    $output .= '</ul>';
    $output .= '</div>';
  if ($style == 'overlay') {
    $output .= '</div>';
  }

  $output .= '</div>';

  return $output;

}
