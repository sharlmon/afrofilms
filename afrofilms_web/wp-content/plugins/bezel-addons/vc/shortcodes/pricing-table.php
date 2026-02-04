<?php

/* Pricing Tables */
vc_map(
  array(
    'name' => __('Pricing Table', 'bezel-addons'),
    'base' => 'bezel_pricing_table',
    'icon' => 'ti-money',
    'description' => __('Pricing Table.', 'bezel-addons'),
    'category' => __( 'Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'dropdown',
        'value' => array(
          'No' => '',
          'Yes'     => 'yes',
        ),
        'heading' => __('Add Icon?', 'bezel-addons'),
        'param_name' => 'show_icon',
        'std' => '',
      ),
      array(
        'type' => 'iconpicker',
        'heading' => __('Icon', 'bezel-addons'),
        'param_name' => 'icon',
        'settings' => array(
          'type' => 'hodyicons',
          'emptyIcon' => false,
          'iconsPerPage' => 100
        ),
        'dependency' => array(
          'element' => 'show_icon',
          'value' => array('yes')
        )
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Title', 'bezel-addons'),
        'param_name' => 'title',
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Price', 'bezel-addons'),
        'param_name' => 'price',
      ),
      array(
        'type' => 'textfield',
        'value' => '$',
        'heading' => __('Currency', 'bezel-addons'),
        'param_name' => 'currency',
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Style', 'bezel-addons'),
        'param_name' => 'style',
        'value' => array(
          'Default' => '',
          'Featured' => 'featured'
        ),
        'std' => ''
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Featured Label Text', 'bezel-addons'),
        'param_name' => 'label_text',
        'dependency' => array(
          'element' => 'style',
          'value' => array('featured')
        )
      ),
      array(
        'type' => 'colorpicker',
        'value' => '',
        'heading' => __('Featured Color', 'bezel-addons'),
        'param_name' => 'featured_color',
        'dependency' => array(
          'element' => 'style',
          'value' => array('featured')
        )
      ),
      array(
        'type' => 'param_group',
        'heading' => __('Features', 'bezel-addons'),
        'param_name' => 'features',
        'params' => array(
          array(
            'type' => 'textfield',
            'heading' => __('Text', 'bezel-addons'),
            'param_name' => 'text',
            'value' => ''
          )
        )
      ),
      array(
        'type' => 'vc_link',
        'value' => '',
        'heading' => __('Button', 'bezel-addons'),
        'param_name' => 'button',
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Button Color', 'bezel-addons'),
        'param_name' => 'button_color',
        'value' => array(
          'Colored' => 'color',
          'Colored (borders only)' => 'color-out',
          'Dark' => 'dark',
          'Dark (borders only)' => 'dark-out',
          'Light' => 'light',
          'Light (borders only)' => 'light-out',
        )
      ),
    )
  )
);

add_shortcode('bezel_pricing_table', 'bezel_pricing_table');

function bezel_pricing_table($atts){
  extract( shortcode_atts( array(
    'show_icon' => '',
    'icon'  => '',
    'title' => '',
    'price' => '',
    'currency' => '$',
    'style' => '',
    'features' => '',
    'button' => '',
    'button_color' => 'color',
    'label_text' => '',
    'featured_color' => '',
  ), $atts ) );

  $lines = vc_param_group_parse_atts($features);

  $output = '<div class="pricing-table '.$style.'">';
  if ($style == 'featured' && $label_text) {
    $label_clr = ($featured_color) ? 'data-custom-bg="'.$featured_color.'"': '';
    $output .= '<span class="featured-label" '.$label_clr.'>'.esc_attr($label_text).'</span>';
  }

  $output .= '<div class="pricing-head">';
  if ($show_icon == 'yes') {
    $output .= '<i class="'.esc_attr($icon).'"></i>';
  }
  $output .= '<h4>'.esc_attr($title).'</h4>';
  $output .= '</div>';

  $price_clr = ($style == 'featured' && $featured_color) ? 'data-custom-color="'.$featured_color.'"': '';

  $output .= '<div class="price">';
  $output .= '<h2 '.$price_clr.'>';
  $output .= '<span>'.esc_attr($currency).'</span>';
  $output .= esc_attr($price);
  $output .= '</h2>';
  $output .= '</div>';

  if ($lines) {
    $output .= '<ul class="features nav">';
    foreach ($lines as $line) {
      if (isset($line['text'])) {
        $output .= '<li><span>'.$line['text'].'</span></li>';
      }
    }
    $output .= '</ul>';
  }

  if ($button){
    $link = vc_build_link($button);
    $target = (!empty($link['target'])) ? 'target="'.$link['target'].'"' : '';
    $btn_clr = ($style == 'featured' && $featured_color) ? 'data-custom-bg="'.$featured_color.'"': '';

    $output .= '<div class="pricing-footer">';
    $output .= '<a class="btn btn-sm btn-'.$button_color.'" '.$target.' href="'.esc_url($link['url']).'" '.$btn_clr.'>'.esc_attr($link['title']).'</a>';
    $output .= '</div>';
  }

  $output .= '</div>';

  return $output;
}
