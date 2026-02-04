<?php

/* Accordion */

vc_map(
  array(
    'name' => __('Accordion', 'bezel-addons'),
    'base' => 'bezel_accordion',
    'icon' => 'ti-layout-accordion-merged',
    'description' => __('Collapsible panels.', 'bezel-addons'),
    'category' => __('Bezel', 'bezel-addons'),
    'is_container' => true,
  	'show_settings_on_create' => false,
  	'as_parent' => array(
  		'only' => 'vc_tta_section',
  	),
    'params' => array(
      array(
        'type' => 'dropdown',
        'heading' => __('Behavior', 'bezel-addons'),
        'param_name' => 'behavior',
        'value' => array(
          'Open One at Time' => '',
          'Multiple Open' => 'multiple'
        ),
        'std' => '',
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Open First Item Automatically?', 'bezel-addons'),
        'param_name' => 'open_first',
        'value' => array(
          'Yes' => 'yes',
          'No' => 'no'
        ),
        'std' => 'yes',
      ),
      array(
        'type' => 'dropdown',
        'heading' => __('Color Skin', 'bezel-addons'),
        'param_name' => 'color',
        'value' => array(
          'Default' => '',
          'Black' => 'dark-skin',
          'Blue' => 'dark-blue-skin',
        ),
        'std' => 'yes',
      ),
      array(
        'type' => 'css_editor',
        'heading' => __( 'Css', 'bezel-addons' ),
        'param_name' => 'css',
        'group' => __( 'Design options', 'bezel-addons' ),
      ),
    ),
    'js_view' => 'VcBackendTtaAccordionView',
    'custom_markup' => '
<div class="vc_tta-container" data-vc-action="collapseAll">
	<div class="vc_general vc_tta vc_tta-accordion vc_tta-color-backend-accordion-white vc_tta-style-flat vc_tta-shape-rounded vc_tta-o-shape-group vc_tta-controls-align-left vc_tta-gap-2">
	   <div class="vc_tta-panels vc_clearfix {{container-class}}">
	      {{ content }}
	      <div class="vc_tta-panel vc_tta-section-append">
	         <div class="vc_tta-panel-heading">
	            <h4 class="vc_tta-panel-title vc_tta-controls-icon-position-left">
	              <a href="javascript:;" aria-expanded="false" class="vc_tta-backend-add-control">
	                   <span class="vc_tta-title-text">' . __( 'Add Section', 'js_composer' ) . '</span>
	                    <i class="vc_tta-controls-icon vc_tta-controls-icon-plus"></i>
					      </a>
	            </h4>
	         </div>
	      </div>
	   </div>
	</div>
</div>',
	'default_content' => '[vc_tta_section title="' . sprintf( '%s %d', __( 'Section', 'js_composer' ), 1 ) . '"][/vc_tta_section][vc_tta_section title="' . sprintf( '%s %d', __( 'Section', 'js_composer' ), 2 ) . '"][/vc_tta_section]',
  )
);

add_shortcode( 'bezel_accordion', 'bezel_accordion' );

function bezel_accordion( $atts, $content = null ) {
  extract( shortcode_atts( array(
    'behavior' => '',
    'items' => '',
    'open_first' => 'yes',
    'css' => '',
    'color' => ''
  ), $atts ) );

  $accordions = vc_param_group_parse_atts($items);
  $multiple = (isset($behavior) && $behavior == 'multiple') ? 'data-multiple="true"' : '' ;
  $open = ($open_first == 'yes') ? 'data-open-first="true"' : '' ;
  $css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class( $css, ' ' ), 'bezel_accordion', $atts );

  $output = '<div '.$multiple.' '.$open.' class="accordion '.$css_class.' '.$color.'">';
  $output .= wpb_js_remove_wpautop(str_replace('vc_tta_section', 'bezel_accordion_section', $content));
  $output .= '</div>';

  return $output;
}

// Accordion Section
add_shortcode( 'bezel_accordion_section', 'bezel_accordion_section' );

function bezel_accordion_section( $atts, $content = null ) {
  extract( shortcode_atts( array(
    'title' => '',
    'tab_id' => '',
  ), $atts ) );

  $output = '<div class="accordion-item">';
  $output .= '<div class="accordion-title"><h4>' . esc_attr($title) . '</h4></div>';
  $output .= '<div class="accordion-content">' . wpb_js_remove_wpautop($content) . '</div>';
  $output .= '</div>';

  return $output;
}


VcShortcodeAutoloader::getInstance()->includeClass( 'WPBakeryShortCode_VC_Tta_Accordion' );

if (class_exists('WPBakeryShortCode_VC_Tta_Accordion')) {
  class WPBakeryShortCode_Bezel_Accordion extends WPBakeryShortCode_VC_Tta_Accordion {}
}
