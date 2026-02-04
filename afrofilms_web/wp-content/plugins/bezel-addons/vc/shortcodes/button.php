<?php

/* Buttons */
vc_map(
  array(
    'name' => __('Button', 'bezel-addons'),
    'base' => 'bezel_button',
    'icon' => 'ti-control-play',
    'description' => __('Button element.', 'bezel-addons'),
    'category' => __('Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'dropdown',
        'param_name' => 'type',
        'heading' => __('Type', 'bezel-addons'),
        'value' => array(
          'Default Button' => '',
          'Round Icon + Inline Text' => 'inline-icon-btn'
        ),
        'std' => 'color'
      ),
      array(
        'type' => 'vc_link',
        'param_name' => 'link',
        'heading' => __('URL (Link)', 'bezel-addons'),
        'value' => ''
      ),
      array(
        'type' => 'textfield',
        'param_name' => 'text',
        'heading' => __('Text', 'bezel-addons'),
        'admin_label' => true,
        'value' => ''
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'style',
        'heading' => __('Style', 'bezel-addons'),
        'value' => array(
          'Colored' => 'color',
          'Colored (borders only)' => 'color-out',
          'Dark' => 'dark',
          'Dark (borders only)' => 'dark-out',
          'Light' => 'light',
          'Light (borders only)' => 'light-out',
          'Simple - Bordered' => 'bordered',
          'Button With Image' => 'image',
          'Custom' => 'custom',
        ),
        'std' => 'color'
      ),
      array(
        'type' => 'attach_image',
        'heading' => __( 'Button Image', 'bezel-addons'),
        'value' => '',
        'param_name' => 'button_image',
        'dependency' => array(
          'element' => 'style',
          'value' => array('image')
        )
      ),
      array(
        'type' => 'colorpicker',
        'heading' => __( 'Custom Button Color', 'bezel-addons'),
        'value' => '',
        'param_name' => 'custom_color',
        'dependency' => array(
          'element' => 'style',
          'value' => array('custom')
        )
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'alignment',
        'heading' => __('Alignment', 'bezel-addons'),
        'value' => array(
          'Inline'  => 'inline-btn-container',
          'Center'  => 'text-center',
          'Left'    => 'text-left',
          'Right'   => 'text-right'
        ),
        'std' => 'inline-btn-container',
        'dependency' => array(
          'element' => 'type',
          'value' => array('')
        )
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'full_width',
        'heading' => __('Full Width?', 'bezel-addons'),
        'value' => array(
          'No'  => '',
          'Yes'   => 'btn-block'
        ),
        'std' => '',
        'dependency' => array(
          'element' => 'type',
          'value' => array('')
        )
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'open_modal',
        'heading' => __( 'Open Modal on click?', 'bezel-addons'),
        'description' => __( 'Specify the modal ID in the URL field. For example: "#my-modal"', 'bezel-addons' ),
        'value' => array(
          'No' => '',
          'Yes' => 'yes',
        ),
      ),
      array(
        'type' => 'checkbox',
        'param_name' => 'play_button',
        'heading' => __( 'Open Modal Video on click?', 'bezel-addons'),
        'value' => array(
          'Yes' => 'yes',
        ),
        'dependency' => array(
          'element' => 'open_modal',
          'value' => array('')
        )
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'shape',
        'heading' => __('Shape', 'bezel-addons'),
        'value' => array(
          'Default' => '',
          'Square'  => 'no-radius',
          'Rounded'  => 'btn-round',
        ),
        'std' => '',
        'group' => __('Style', 'bezel-addons'),
        'dependency' => array(
          'element' => 'type',
          'value' => array('')
        )
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'size',
        'heading' => __('Size', 'bezel-addons'),
        'value' => array(
          'Normal' => 'normal',
          'Small'  => 'btn-sm',
          'Big' => 'btn-lg'
        ),
        'std' => 'normal',
        'group' => __('Style', 'bezel-addons')
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'None' => '',
          'Upper'     => 'upper',
        ),
        'heading' => __('Text Transform', 'bezel-addons'),
        'param_name' => 'text_transform',
        'std' => '',
        'group' => __('Style', 'bezel-addons'),
        'dependency' => array(
          'element' => 'type',
          'value' => array('')
        )
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Off' => '',
          'On'     => 'btn-shadow',
        ),
        'heading' => __('Shadow', 'bezel-addons'),
        'param_name' => 'shadow',
        'std' => '',
        'group' => __('Style', 'bezel-addons'),
        'dependency' => array(
          'element' => 'type',
          'value' => array('')
        )
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'No' => '',
          'Yes'     => 'yes',
        ),
        'heading' => __('Add Icon?', 'bezel-addons'),
        'param_name' => 'show_icon',
        'std' => '',
        'group' => __('Style', 'bezel-addons')
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
        'group' => __('Style', 'bezel-addons'),
        'dependency' => array(
          'element' => 'show_icon',
          'value' => 'yes'
        )
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'icon_position',
        'heading' => __('Icon Position', 'bezel-addons'),
        'value' => array(
          'After Text' => 'after',
          'Before Text' => 'before'
        ),
        'std' => 'after',
        'group' => __('Style', 'bezel-addons'),
        'dependency' => array(
          'element' => 'show_icon',
          'value' => 'yes'
        )
      ),
      array(
        'type' => 'el_id',
        'heading' => __( 'Button ID', 'bezel-addons' ),
        'param_name' => 'el_id',
        'description' => sprintf( __( 'Enter button ID (Note: make sure it is unique and valid according to <a href="%s" target="_blank">w3c specification</a>).', 'bezel-addons' ), 'http://www.w3schools.com/tags/att_global_id.asp' ),
      ),
    )
  )
);

add_shortcode( 'bezel_button', 'bezel_button' );

function bezel_button( $atts ) {
  extract( shortcode_atts( array(
    'type' => '',
    'text'  => '',
    'link'  => '',
    'style' => 'color',
    'alignment' => 'inline-btn-container',
    'shape' => '',
    'size'  => '',
    'show_icon' => '',
    'icon'  => '',
    'custom_color' => '',
    'button_image' => '',
    'text_transform' => '',
    'play_button' => '',
    'shadow' => '',
    'icon_position' => 'after',
    'full_width' => '',
    'open_modal' => '',
    'el_id' => '',
  ), $atts ) );

  $btn_link = vc_build_link($link);
  $is_inline = $type == 'inline-icon-btn';

  $btn_class =  array(
    'btn',
    'btn-'.$style,
    $shape,
    $text_transform,
    $shadow,
    $full_width,
  );

  if ($is_inline) {
    $btn_class[] = 'btn-circle';
  }

  if ($open_modal === 'yes') {
    $btn_class[] = 'modal-btn';
  }

  if ($size != 'normal') {
    $btn_class[] = $size;
  }

  $btn_target = (!empty($btn_link['target'])) ? 'target="'.$btn_link['target'].'"' : '';
  $btn_custom_color = ($style == 'custom' && $custom_color != '') ? 'data-custom-bg="'.$custom_color.'"' : '';
  $is_play_button = ($play_button == 'yes') ? 'data-play-button="true"' : '';
  $container_class = ($is_inline) ? $type : 'btn-container ' .$alignment;
  if ($full_width === 'btn-block') {
    $container_class = 'btn-container';
  }

  $btn_id = (!empty($el_id)) ? 'id="'.$el_id.'"' : '';

  $output =  '<div class="'.$container_class.'">';

  if (isset($btn_link['url'])) {
    $output .= '<a ' . $btn_id . ' href="'.esc_url($btn_link['url']).'" class="'.trim(implode(' ', $btn_class)).'" '.$btn_target.' '.$btn_custom_color.' '.$is_play_button.'>';

    if ($style == 'image' && $button_image) {
      $output .= '<img src="'.wp_get_attachment_url($button_image).'">';
    } else{

      if ($show_icon == 'yes' && $icon_position == 'before') {
        $output .= '<i class="'.$icon.' align-left"></i>';
      }

      if (!$is_inline) {
        $output .= esc_attr($text);
      }

      if ($show_icon == 'yes' && $icon_position == 'after') {
        $output .= '<i class="'.$icon.'"></i>';
      }
    }

    $output .= '</a>';
  }

  if ($is_inline) {
    $output .= '<h5>' . esc_attr($text) . '</h5>';
  }

  $output .= '</div>';

  return $output;

}
