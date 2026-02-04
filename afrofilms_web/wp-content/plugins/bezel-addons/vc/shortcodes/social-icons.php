<?php

/* Social Icons */
vc_map(
  array(
    'name' => __('Social Icons', 'bezel-addons'),
    'base' => 'bezel_social_icons',
    'icon' => 'ti-facebook',
    'description' => __('Social media icons.', 'bezel-addons'),
    'category' => __('Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'dropdown',
        'heading' => __('Size', 'bezel-addons'),
        'param_name' => 'size',
        'value' => array(
          'Default' => '',
          'Big' => 'size--big'
        ),
        'std' => '',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Left'    => 'left',
          'Center'  => 'center',
          'Right'   => 'right'
        ),
        'heading' => __('Align', 'bezel-addons'),
        'param_name' => 'icons_align',
        'std' => 'center',
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
              '' => '',
              'Facebook' => 'facebook',
              'Twitter' => 'twitter',
              'Instagram' => 'instagram',
              'Stackoverflow' => 'stackoverflow',
              'Linkedin' => 'linkedin',
              'Pinterest' => 'pinterest',
              'Dribbble' => 'dribbble',
              'Behance' => 'behance',
              'Tripadvisor' => 'tripadvisor',
              'Vk' => 'vk',
              'Blogger' => 'blogger',
              'Envato' => 'envato',
              'Github' => 'github',
              'Meetup' => 'meetup',
              'Snapchat' => 'snapchat',
              'Google Plus' => 'google-plus',
              'Patreon' => 'patreon',
              'Foursquare' => 'foursquare',
              'Airbnb' => 'airbnb',
              'Yahoo' => 'yahoo',
              'Skype' => 'skype',
              'Xing' => 'xing',
              'Myspace' => 'myspace',
              'Soundcloud' => 'soundcloud',
              'Spotify' => 'spotify',
              'Youtube' => 'youtube',
              'Vimeo' => 'vimeo',
              'Flickr' => 'flickr',
              '500px' => '500px',
              'Wordpress' => 'wordpress',
              'Tumblr' => 'tumblr',
              'Twitch' => 'twitch',
              'Angellist' => 'angellist',
              'Medium' => 'medium',
              'Quora' => 'quora',
            )
          ),
          array(
            'type' => 'textfield',
            'value' => '',
            'heading' => __('URL', 'bezel-addons'),
            'param_name' => 'url',
          ),
        )
      )
    )
  )
);

add_shortcode('bezel_social_icons', 'bezel_social_icons');

function bezel_social_icons($atts){
  extract( shortcode_atts( array(
    'socials' => '',
    'size' => '',
    'icons_align' => 'center'
  ), $atts ) );

  $links = vc_param_group_parse_atts($socials);

  $output = '<ul class="social-list text-'.$icons_align.' '.$size.'">';
  foreach ($links as $link) {
    if (isset($link['social'])) {
      $output .= '<li class="social-item-'.$link['social'].'">';
      $output .= '<a href="'.esc_url($link['url']).'" target="_blank">';
      $output .= '<i class="hc-'.$link['social'].'"></i>';
      $output .= '</a>';
      $output .= '</li>';
    }
  }
  $output .= '</ul>';

  return $output;

}
