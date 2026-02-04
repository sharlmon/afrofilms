<?php

/* Page Title */
vc_map(
  array(
    'name' => __('Section Title'),
    'base' => 'bezel_page_title',
    'icon' => 'ti-uppercase',
    'description' => __('Styled heading.', 'bezel-addons'),
    'category' => __('Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'textarea',
        'value' => '',
        'heading' => __('Title', 'bezel-addons'),
        'param_name' => 'title',
        'admin_label' => true
      ),
      array(
        'type' => 'textarea',
        'value' => '',
        'heading' => __('Subtitle', 'bezel-addons'),
        'param_name' => 'subtitle',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'H1'    => 'h1',
          'H2'    => 'h2',
          'H3'    => 'h3',
          'H4'    => 'h4',
          'H5'    => 'h5',
          'H6'    => 'h6',
        ),
        'heading' => __('Title Tag', 'bezel-addons'),
        'param_name' => 'tag',
        'std' => 'h2'
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
        'dependency' => array(
          'element' => 'show_icon',
          'value' => array('yes')
        ),
        'group' => __('Style', 'bezel-addons')
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'No' => '',
          'Yes'     => 'yes',
        ),
        'heading' => __('Add Letter Shadow?', 'bezel-addons'),
        'param_name' => 'title_shadow',
        'std' => '',
        'group' => __('Style', 'bezel-addons')
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Top'    => 'top',
          'Bottom'  => 'bottom',
        ),
        'heading' => __('Subtitle Position', 'bezel-addons'),
        'param_name' => 'subtitle_position',
        'std' => 'bottom',
        'group' => __('Style', 'bezel-addons')
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Default'    => '',
          'Serif'  => 'serif-font',
          'Bold Serif'  => 'alt-serif-font',
          'Cursive'   => 'cursive-font'
        ),
        'heading' => __('Title Font Style', 'bezel-addons'),
        'param_name' => 'title_style',
        'std' => '',
        'group' => __('Style', 'bezel-addons'),
        'edit_field_class' => 'vc_col-xs-6 m-15',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Default'    => '',
          'Serif'  => 'serif-font',
          'Bold Serif'  => 'alt-serif-font',
          'Cursive'   => 'cursive-font'
        ),
        'heading' => __('Subtitle Font Style', 'bezel-addons'),
        'param_name' => 'subtitle_style',
        'std' => '',
        'group' => __('Style', 'bezel-addons'),
        'edit_field_class' => 'vc_col-xs-6 m-15',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Left'    => 'text-left',
          'Center'  => 'text-center',
          'Right'   => 'text-right'
        ),
        'heading' => __('Text Align', 'bezel-addons'),
        'param_name' => 'text_align',
        'std' => 'center',
        'edit_field_class' => 'vc_col-xs-4 m-15',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          '' => '',
          'Left'    => 'left',
          'Center'  => 'center',
          'Right'   => 'right'
        ),
        'heading' => __('Text Align (Tablet)', 'bezel-addons'),
        'param_name' => 'text_align_sm',
        'std' => '',
        'edit_field_class' => 'vc_col-xs-4 m-15',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          '' => '',
          'Left'    => 'left',
          'Center'  => 'center',
          'Right'   => 'right'
        ),
        'heading' => __('Text Align (Smartphone)', 'bezel-addons'),
        'param_name' => 'text_align_xs',
        'std' => '',
        'edit_field_class' => 'vc_col-xs-4 m-15',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'No'  => '0',
          'Yes' => '1',
        ),
        'heading' => __('Show Horizontal Rule?', 'bezel-addons'),
        'param_name' => 'horizontal_rule',
        'group' => __('Style', 'bezel-addons'),
        'edit_field_class' => 'vc_col-xs-6 m-15',
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Horizontal Rule Style', 'bezel-addons'),
        'param_name' => 'hr_color',
        'value' => array(
          'Black'  => '',
          'Colored' => 'colored',
          'White' => 'white',
          'Full Width' => 'fullwidth'
        ),
        'dependency' => array(
          'element' => 'horizontal_rule',
          'value' => array('1')
        ),
        'group' => __('Style', 'bezel-addons'),
        'edit_field_class' => 'vc_col-xs-6 m-15',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'None' => 'none',
          'Uppercase'   => 'upper',
        ),
        'heading' => __('Title Text Transform', 'bezel-addons'),
        'param_name' => 'text_transform',
        'std' => 'none',
        'group' => __('Style', 'bezel-addons'),
        'edit_field_class' => 'vc_col-xs-6 m-15',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'None' => 'none',
          'Uppercase'   => 'upper',
        ),
        'heading' => __('Subtitle Text Transform', 'bezel-addons'),
        'param_name' => 'subtitle_text_transform',
        'std' => 'none',
        'group' => __('Style', 'bezel-addons'),
        'edit_field_class' => 'vc_col-xs-6 m-15',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Normal'  => '',
          'Big'    => 'font-big',
          'Extra Big'    => 'font-xl',
        ),
        'heading' => __('Font Size', 'bezel-addons'),
        'param_name' => 'font_size',
        'group' => __('Style', 'bezel-addons'),
        'edit_field_class' => 'vc_col-xs-6 m-15',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Bold'  => '',
          'Light'    => 'fw-400',
          'Medium'   => 'fw-500',
          'Semibold'     => 'fw-600',
        ),
        'heading' => __('Font Weight', 'bezel-addons'),
        'param_name' => 'font_weight',
        'group' => __('Style', 'bezel-addons'),
        'edit_field_class' => 'vc_col-xs-6 m-15',
      ),
      array(
        'type' => 'colorpicker',
        'heading' => __( 'Title Color', 'bezel-addons'),
        'value' => '',
        'param_name' => 'title_color',
        'edit_field_class' => 'vc_col-xs-6 m-15',
        'group' => __('Style', 'bezel-addons')
      ),
      array(
        'type' => 'colorpicker',
        'heading' => __( 'Subtitle Color', 'bezel-addons'),
        'value' => '',
        'param_name' => 'subtitle_color',
        'edit_field_class' => 'vc_col-xs-6 m-15',
        'group' => __('Style', 'bezel-addons')
      ),
    )
  )
);

add_shortcode( 'bezel_page_title', 'bezel_page_title' );

function bezel_page_title( $atts ) {
  extract( shortcode_atts( array(
    'title' => '',
    'subtitle' => '',
    'tag' => 'h2',
    'border' => '',
    'text_align' => 'text-center',
    'text_align_sm' => '',
    'text_align_xs' => '',
    'text_transform' => '',
    'subtitle_text_transform' => '',
    'title_shadow'  => '',
    'title_style' => '',
    'subtitle_style' => '',
    'horizontal_rule' => '',
    'show_icon' => '',
    'icon'  => '',
    'hr_color' => '',
    'font_variant' => '',
    'font_weight' => '',
    'font_size' => '',
    'subtitle_position' => 'bottom',
    'title_color' => '',
    'subtitle_color' => '',
  ), $atts ) );

  $class_array = array('title');

  if (empty($text_align_sm) && empty($text_align_xs) && $text_align != 'text-left') {
    $class_array[] = $text_align;
  } elseif ($text_align != 'text-left') {
    $class_array[] = 'txt-md-'.$text_align;
  }

  if (!empty($text_align_xs)) {
    $class_array[] = 'txt-xs-'.$text_align_xs;
  }

  if (!empty($text_align_sm)) {
    $class_array[] = 'txt-sm-'.$text_align_sm;
  }

  $text_class = ($text_transform != 'none') ? $text_transform : '';

  if ($title_style) {
    $text_class .= ' '.$title_style;
  }
  if ($font_variant) {
    $text_class .= ' '.$font_variant;
  }

  if ($font_weight) {
    $text_class .= ' '.$font_weight;
  }

  if ($font_size) {
    $text_class .= ' '.$font_size;
  }

  $title_color_attr = ($title_color != '') ? ' style="color: '.$title_color.'!important"' : '';
  $subtitle_color_attr = ($subtitle_color != '') ? ' style="color: '.$subtitle_color.'!important"' : '';
  $shadow_letter = ($title_shadow == 'yes') ? ' data-bigletter="'.$title[0].'"' : '';

  $output = '<div class="'.implode(' ', $class_array).'">';
  if ($show_icon == 'yes') {
    $output .= '<i class="'.$icon.'"></i>';
  }

  if ($subtitle && $subtitle_position == 'top') {
    $output .= '<h4 class="'.trim($subtitle_style . ' ' . $subtitle_text_transform).'" '.$subtitle_color_attr.'>'.wp_kses( $subtitle, array('br' => array())) .'</h4>';
  }

  $output .= '<'.$tag . ' class="'.trim($text_class) .'" '.$title_color_attr.' '.$shadow_letter.'>' . wp_kses( $title, array('br' => array(), 'b' => array()));

  $output .= '</'.$tag.'>';

  if ($subtitle && $subtitle_position == 'bottom') {
    $output .= '<h4 class="'.trim($subtitle_style . ' ' . $subtitle_text_transform).'" '.$subtitle_color_attr.'>'.wp_kses( $subtitle, array('br' => array())) .'</h4>';
  }

  if ($horizontal_rule == '1') {
    $hr_class = (!empty($hr_color)) ? ' class="'.$hr_color.'"': '';
    $output .= '<hr'.$hr_class.'>';
  }
  $output .= '</div>';

  return $output;
}
