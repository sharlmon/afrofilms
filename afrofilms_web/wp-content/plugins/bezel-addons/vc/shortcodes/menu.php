<?php

/* Menu */
vc_map(
  array(
    'name' => __('Menu', 'bezel-addons'),
    'base' => 'bezel_menu',
    'icon' => 'ti-menu',
    'description' => __('Menu with prices or info.', 'bezel-addons'),
    'category' => __( 'Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'dropdown',
        'value' => array(
          'Default'    => '',
          'Serif'  => 'serif-font',
        ),
        'heading' => __('Font Style', 'bezel-addons'),
        'param_name' => 'font_style',
        'std' => '',
      ),
      array(
        'type' => 'param_group',
        'heading' => __('Menu Items', 'bezel-addons'),
        'param_name' => 'menu_items',
        'params' => array(
          array(
            'type' => 'dropdown',
            'heading' => __('Add Image?', 'bezel-addons'),
            'param_name' => 'add_image',
            'value' => array(
              'No' => '',
              'Yes' => 'yes'
            ),
            'std' => '',
          ),
          array(
            'type' => 'attach_image',
            'value' => '',
            'heading' => __('Image', 'bezel-addons'),
            'param_name' => 'image',
            'dependency' => array(
              'element' => 'add_image',
              'value' => 'yes'
            ),
          ),
          array(
            'type' => 'textfield',
            'param_name' => 'title',
            'value' => '',
            'admin_label' => true,
            'heading' => __('Title', 'bezel-addons'),
          ),
          array(
            'type' => 'textfield',
            'param_name' => 'infoline',
            'value' => '',
            'heading' => __('Infoline', 'bezel-addons'),
            'description' => __('I.E: $7.99', 'bezel-addons')
          ),
          array(
            'type' => 'textarea',
            'param_name' => 'text',
            'value' => '',
            'heading' => __('Text', 'bezel-addons'),
          ),
        )
      ),
    )
  )
);

add_shortcode( 'bezel_menu', 'bezel_menu' );

function bezel_menu( $atts ) {
  extract( shortcode_atts( array(
    'menu_items' => '',
    'font_style' => '',
  ), $atts ) );

  $items = vc_param_group_parse_atts($menu_items);

  $output = '';
  $output .= '<ul class="menu-list '.$font_style.'">';

  foreach ($items as $item) {
    $output .= '<li>';
    $output .= '<div class="menu-content">';

    if ( isset($item['add_image']) && $item['add_image'] == 'yes' && $item['image'] != '') {
      $image = wp_get_attachment_image_src($item['image'], 'thumbnail');

      $output .= '<div class="menu-pic">';
      $output .= '<img src="'.$image[0].'" alt="'.$item['title'].'">';
      $output .= '</div>';
    }

    $output .= '<h4>';
    if (isset($item['title'])) {
      $output .= '<span class="menu-title">' . esc_attr($item['title']) . '</span>';
    }

    if (isset($item['infoline'])) {
      $output .= '<span class="menu-value">'.$item['infoline'].'</span>';
    }

    $output .= '</h4>';

    if (isset($item['text']) && $item['text'] != '' ) {
      $output .= '<p class="menu-text">'.esc_attr($item['text']).'</p>';
    }

    $output .= '</div>';
    $output .= '</li>';
  }

  $output .= '</ul>';

  return $output;

}
