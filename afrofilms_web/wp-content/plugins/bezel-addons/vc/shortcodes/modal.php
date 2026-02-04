<?php

vc_map(
  array(
    'name' => __('Modal Popup', 'bezel-addons'),
    'base' => 'bezel_modal',
    'icon' => 'ti-layers',
    'description' => __('Simple modal popup box.', 'bezel-addons'),
    'category' => __('Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'textfield',
        'param_name' => 'title',
        'heading' => __('Modal Title', 'bezel-addons'),
        'value' => '',
        'admin_label' => true,
      ),
      array(
        'type' => 'textarea_html',
        'param_name' => 'content',
        'heading' => __('Modal Content', 'bezel-addons'),
        'value' => '',
      ),
      array(
  			'type' => 'el_id',
  			'heading' => __( 'Modal ID', 'bezel-addons' ),
  			'param_name' => 'el_id',
  			'description' => __( 'Enter modal ID. You need to use it in the href of a button element to trigger the modal.', 'bezel-addons' )
  		),
    )
  )
);

add_shortcode( 'bezel_modal', 'bezel_modal' );

function bezel_modal( $atts, $content = null ) {
  extract( shortcode_atts( array(
    'el_id' => '',
    'title' => '',
  ), $atts ) );

  $modal_id = ($el_id) ? $el_id : 'modal-' . substr(md5($title), 0, 8);

  $output = '<div class="modal-popup modal fade" id="'.$modal_id.'" tabindex="-1" role="dialog">';
  $output .= '<div class="centrize">';
  $output .= '<div class="v-center">';
  $output .= '<div class="modal-dialog">';
  $output .= '<div class="modal-content">';
  $output .= '<div class="modal-header">';
  $output .= '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="hc-close"></i></span></button>';
  $output .= '<h4 class="modal-title">'.esc_attr($title).'</h2>';
  $output .= '</div>';
  $output .= '<div class="modal-body">';
  $output .= wpb_js_remove_wpautop($content);
  $output .= '</div>';
  $output .= '</div>';
  $output .= '</div>';
  $output .= '</div>';
  $output .= '</div>';
  $output .= '</div>';

  return $output;
}
