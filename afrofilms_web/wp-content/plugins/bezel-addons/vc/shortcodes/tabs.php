<?php

/* Tabs */
vc_map(
  array(
    'name' => __( 'Tabs', 'bezel-addons'),
    'base' => 'bezel_tabs',
    'icon' => 'ti-layout-tab',
    'allowed_container_element' => 'vc_row',
    'is_container' => true,
    'as_parent' => array(
      'only' => 'vc_tta_section',
    ),
    'description' => __('Tabbed contents.', 'bezel-addons'),
    'category' => __('Bezel', 'bezel-addons'),
    'description' => __( 'Tabbed content', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'dropdown',
        'param_name' => 'style',
        'value' => array(
          __( 'Boxed', 'bezel-addons') => 'boxed-tabs',
          __( 'Minimal', 'bezel-addons') => 'minimal-tabs',
          __( 'With Icon', 'bezel-addons') => 'icon-tabs',
        ),
        'heading' => __( 'Style', 'bezel-addons'),
        'description' => __( 'Select tabs display style.', 'bezel-addons'),
      ),
      array(
        'type' => 'colorpicker',
        'heading' => __( 'Active Icon Color', 'bezel-addons'),
        'value' => '',
        'param_name' => 'icon_color',
        'dependency' => array(
          'element' => 'style',
          'value' => array('icon-tabs')
        )
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'alignment',
        'value' => array(
          __( 'Left', 'bezel-addons') => 'left',
          __( 'Center', 'bezel-addons') => 'center',
          __( 'Right', 'bezel-addons') => 'right',
        ),
        'heading' => __( 'Alignment', 'bezel-addons'),
        'description' => __( 'Select tabs section title alignment.', 'bezel-addons'),
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'color_skin',
        'value' => array(
          'Default' => '',
          'Black' => 'black-skin',
          'Red' => 'red-skin',
          'Blue' => 'blue-skin',
        ),
        'heading' => __( 'Color Skin', 'bezel-addons'),
        'dependency' => array(
          'element' => 'style',
          'value' => array('boxed-tabs')
        )
      ),
      array(
        'type' => 'css_editor',
        'heading' => __( 'Css', 'bezel-addons' ),
        'param_name' => 'css',
        'group' => __( 'Design options', 'bezel-addons' ),
      ),
    ),
    'default_content' => '',
    'js_view' => 'VcBackendTtaTabsView',
    'custom_markup' => '
<div class="vc_tta-container" data-vc-action="collapse">
  <div class="vc_general vc_tta vc_tta-tabs vc_tta-color-backend-tabs-white vc_tta-style-flat vc_tta-shape-rounded vc_tta-spacing-1 vc_tta-tabs-position-top vc_tta-controls-align-left">
    <div class="vc_tta-tabs-container">'
                     . '<ul class="vc_tta-tabs-list">'
                     . '<li class="vc_tta-tab" data-vc-tab data-vc-target-model-id="{{ model_id }}" data-element_type="bezel_single_tab"><a href="javascript:;" data-vc-tabs data-vc-container=".vc_tta" data-vc-target="[data-model-id=\'{{ model_id }}\']" data-vc-target-model-id="{{ model_id }}"><span class="vc_tta-title-text">{{ section_title }}</span></a></li>'
                     . '</ul>
    </div>
    <div class="vc_tta-panels vc_clearfix {{container-class}}">
      {{ content }}
    </div>
  </div>
</div>',
    'default_content' => '
[vc_tta_section title="' . sprintf( '%s %d', __( 'Tab', 'js_composer' ), 1 ) . '"][/vc_tta_section]
[vc_tta_section title="' . sprintf( '%s %d', __( 'Tab', 'js_composer' ), 2 ) . '"][/vc_tta_section]
  ',
    'admin_enqueue_js' => array(
      vc_asset_url( 'lib/vc_tabs/vc-tabs.min.js' ),
    ),
  )
);

function bezel_bs_attribute_map($str, $att = null) {
  $res = array();
  $return = array();
  $reg = get_shortcode_regex();
  preg_match_all('~'.$reg.'~',$str, $matches);
  foreach($matches[2] as $key => $name) {
    $parsed = shortcode_parse_atts($matches[3][$key]);
    $parsed = is_array($parsed) ? $parsed : array();
      $res[$name] = $parsed;
      $return[] = $res;
    }
  return $return;
}

/**
* Bootstrap Tabs
*/

class BezelTabs{

  function __construct(){
    add_shortcode( 'bezel_tabs', array($this, 'bezel_tabs'));
  }

  function bezel_tabs($atts, $content = null){
    if( isset( $GLOBALS['tabs_count'] ) )
      $GLOBALS['tabs_count']++;
    else
      $GLOBALS['tabs_count'] = 0;

    $GLOBALS['tabs_default_count'] = 0;

    $atts = shortcode_atts( array(
      'style'   => 'boxed-tabs',
      'alignment' => '',
      'css' => '',
      'color_skin' => '',
    ), $atts );

    $atts_map = bezel_bs_attribute_map( $content );

    $ul_class  = 'nav nav-tabs';
    $ul_class .= ' '.$atts['style'];
    $ul_class .= ( isset($atts['alignment']) && $atts['alignment'] != 'left' ) ? ' '. $atts['alignment'].'-tabs' : '';
    if (count($atts_map) <= 6) {
      $ul_class .= ' cols-'.count($atts_map);
    }
    if ($atts['style'] == 'boxed-tabs') {
      $ul_class .= ' '.$atts['color_skin'];
    }

    $div_class = 'tab-content';
    $div_class .= ( isset($atts['alignment']) && $atts['alignment'] != 'left' ) ? ' text-'. $atts['alignment'] : '';


    // Extract the tab titles for use in the tab widget.
    if ( $atts_map ) {
      $tabs = array();
      $GLOBALS['tabs_default_active'] = true;
      foreach( $atts_map as $check ) {
        if( !empty($check["vc_tta_section"]["active"]) ) {
          $GLOBALS['tabs_default_active'] = false;
        }
      }
      $i = 0;
      foreach( $atts_map as $tab ) {

        $class  ='';
        $class .= ( !empty($tab["vc_tta_section"]["active"]) || ($GLOBALS['tabs_default_active'] && $i == 0) ) ? 'active' : '';
        $class .= ( !empty($tab["vc_tta_section"]["xclass"]) ) ? ' ' . $tab["vc_tta_section"]["xclass"] : '';

        $tabs[] = sprintf(
          '<li%s><a href="#%s" data-toggle="tab">%s<span>%s</span></a></li>',
          ( !empty($class) ) ? ' class="' . $class . '"' : '',
          $tab["vc_tta_section"]["tab_id"],
          ( !empty($tab["vc_tta_section"]["icon"]) && $atts['style'] == 'icon-tabs' ) ? '<i class="'.$tab["vc_tta_section"]["icon"].'"></i>' : '',
          $tab["vc_tta_section"]["title"]
        );
        $i++;
      }
    }

    $css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class( $atts['css'], ' ' ), 'bezel_tabs', $atts );

    return sprintf(
      '<div class="bezel-tabs %s"><ul class="%s">%s</ul><div class="%s">%s</div></div>',
      esc_attr( $css_class ),
      esc_attr( $ul_class ),
      ( $tabs )  ? implode( $tabs ) : '',
      esc_attr( $div_class ),
      wpb_js_remove_wpautop( $content )
    );
  }
}

new BezelTabs();
