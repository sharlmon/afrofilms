<?php
/**
 * Shortcode attributes
 * @var $atts
 * @var $el_class
 * @var $full_width
 * @var $full_height
 * @var $content_placement
 * @var $parallax
 * @var $parallax_image
 * @var $css
 * @var $el_id
 * @var $video_bg
 * @var $video_bg_url
 * @var $video_bg_parallax
 * @var $content - shortcode content
 * Shortcode class
 * @var $this WPBakeryShortCode_VC_Row
 */
$el_class = $full_height = $full_width = $content_placement = $parallax = $parallax_image = $css = $el_id = $video_bg = $video_bg_url = $video_bg_parallax = $skewed_section = $bordered_section = $row_bg_color = $row_bg_color_2 = $section_type = $row_bg_style = '';
$disable_element = '';
$output = $after_output = '';
$atts = vc_map_get_attributes( $this->getShortcode(), $atts );
extract( $atts );

wp_enqueue_script( 'wpb_composer_front_js' );

$el_class = $this->getExtraClass( $el_class );

$css_classes = array(
  'vc_row',
  'wpb_row', //deprecated
  'vc_row-fluid',
  $row_bg_style,
  $skewed_section,
  $bordered_section,
  $el_class,
  vc_shortcode_custom_css_class( $css ),
);

if ($section_type == 'page-title') {
  $css_classes[] = 'page-title';
}

if ( 'yes' === $disable_element ) {
  if ( vc_is_page_editable() ) {
    $css_classes[] = 'vc_hidden-lg vc_hidden-xs vc_hidden-sm vc_hidden-md';
  } else {
    return '';
  }
}

$wrapper_attributes = array();
// build attributes for wrapper
if ( ! empty( $el_id ) ) {
  $wrapper_attributes[] = 'id="' . esc_attr( $el_id ) . '"';
}
if ( ! empty( $full_width ) ) {
  $wrapper_attributes[] = 'data-vc-full-width="true"';
  $wrapper_attributes[] = 'data-vc-full-width-init="false"';
  if ( 'stretch_row_content' === $full_width ) {
    $wrapper_attributes[] = 'data-vc-stretch-content="true"';
  } elseif ( 'stretch_row_content_no_spaces' === $full_width ) {
    $wrapper_attributes[] = 'data-vc-stretch-content="true"';
    $css_classes[] = 'vc_row-no-padding';
  }
  $after_output .= '<div class="vc_row-full-width"></div>';
}

if ($row_bg_style == 'gradient-bg' && !empty($row_bg_color) && !empty($row_bg_color_2)) {
  $wrapper_attributes[] = 'data-gradients="'.$row_bg_color.','.$row_bg_color_2.'"';
}

if ($row_bg_style == 'colored-bg' && !empty($row_bg_color)) {
  $wrapper_attributes[] = 'data-custom-bg="'.$row_bg_color.'"';
}

if ( ! empty( $full_height ) ) {
  $css_classes[] = ' height-100';
}

$has_video_bg = ( ! empty( $video_bg ) && ! empty( $video_bg_url ) && vc_extract_youtube_id( $video_bg_url ) );
$video_output = '';

if ( $has_video_bg ) {
  $parallax = $video_bg_parallax;
  $parallax_image = $video_bg_url;
  $css_classes[] = ' vc_video-bg-container parallax-section';
  $fallback_image_src = '';

  if ($fallback_image) {
    $fallback_img = wp_get_attachment_image_src( $fallback_image, 'full' );
    $fallback_image_src = 'data-fallback-bg="'.esc_url($fallback_img[0]).'"';
  }


  if ($video_bg == 'youtube') {
    $div_id = 'video-id-'.substr(md5(vc_extract_youtube_id( $video_bg_url )), 0, 8);
    $video_output .= '<div id="'.$div_id.'" class="video-wrapper" '.$fallback_image_src.'>';
    $video_output .= '<div class="video-player" data-property="{videoURL:\''.vc_extract_youtube_id( $video_bg_url ).'\', containment:\'#'.$div_id.'\'}" class="player"></div>';
    $video_output .= '<div class="parallax-overlay"></div>';
    $video_output .= '</div>';
  } elseif ($video_bg == 'self_hosted' && $self_hosted_video) {
    $video_output .= '<div class="video-wrapper" '.$fallback_image_src.'>';
    $video_output .= '<div class="video-player">';
    $video_output .= '<video autoplay playsinline loop preload="auto">';
    $video_output .= '<source src="'.esc_url($self_hosted_video).'" type="video/mp4">';
    $video_output .= '</video>';
    $video_output .= '</div>';
    $video_output .= '<div class="parallax-overlay"></div>';
    $video_output .= '</div>';
  }
}

if ( ! empty( $parallax ) ) {
  $css_classes[] = 'parallax-section';
  if ($overlay_style == 'light-overlay' || $overlay_style == 'no-overlay') {
    $css_classes[] = 'text-dark';
  }
}

if (!empty($split_row)) {
  $css_classes[] = 'split-section';
}

if ($row_bg_style == 'particles-bg') {
  $css_classes[] = ' dark-bg';
}

$parallax_output = '';

if ( ! empty ( $parallax_image ) ) {
  if ( $has_video_bg ) {
    $parallax_image_src = $parallax_image;
  } else {
    $parallax_image_id = preg_replace( '/[^\d]/', '', $parallax_image );
    $parallax_image_src = wp_get_attachment_image_src( $parallax_image_id, 'full' );
    if ( ! empty( $parallax_image_src[0] ) ) {
      $parallax_image_src = $parallax_image_src[0];
    }
  }
  $parallax_gradients = ($overlay_style == 'gradient-overlay' && !empty($overlay_color) && !empty($overlay_color_2)) ? 'data-gradients="'.$overlay_color.','.$overlay_color_2.'"': '';
  $parallax_color = ($overlay_style == 'colored-overlay' && !empty($overlay_color)) ? 'data-custom-bg="'.$overlay_color.'"': '';
  $parallax_output .= '<div class="row-parallax-bg">
  <div class="parallax-wrapper">
    <div class="parallax-bg" style="background-image: url('.$parallax_image_src.');"></div>
    <div class="'.trim('parallax-overlay '. $overlay_style).'" '.$parallax_gradients.' '.$parallax_color.'></div>
  </div>
  </div>';
}


$css_class = preg_replace( '/\s+/', ' ', apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, implode( ' ', array_filter( $css_classes ) ), $this->settings['base'], $atts ) );

$wrapper_attributes[] = 'class="' . esc_attr( trim( $css_class ) ) . '"';

if ($section_type == 'footer') {
  $output .= '<div id="footer">';
}

$output .= '<section ' . implode( ' ', $wrapper_attributes ) . '>';
if ($row_bg_style == 'particles-bg') {
  $output .= '<div id="particle-canvas" data-dot-color="'.bezel_options('primary_color').'" data-line-color="#2f2f2f"></div>';
}

if ($parallax) {
  $output .= $parallax_output;
}

$output .= $video_output;

if (!empty($content_placement) && $content_placement == 'middle') {
  $output .= '<div class="centrize">';
  $output .= '<div class="v-center">';
}

if (!$parallax && !empty($split_row)) {
  $output .= '<div class="container-fluid">';
  $output .= '<div class="row">';
  $row_width = ( isset($split_row_width) ) ? $split_row_width : 'col-md-6';
  $row_width .= ' ';
  $row_width .= ( isset($split_row_width_sm) ) ? $split_row_width_sm : 'col-sm-4';

  if($split_row_bg_type == 'image') {
    $output .= '<div class="'.$row_width.' img-side img-'.$split_bg_position.'">';
    $output .= '<div class="img-holder">';
    $output .= '<img src="'.wp_get_attachment_url( $split_row_bg ).'" alt="" class="bg-img">';
    $output .= '</div>';
    $output .= '</div>';
  } elseif ($split_row_bg_type == 'map') {
    $lat = ($split_map_lat) ? $split_map_lat : '40.773328';
    $lng = ($split_map_lng) ? $split_map_lng : '-73.960088';
    $zoom = ($split_map_zoom) ? $split_map_zoom : '12';
    $map_text = ($split_map_text) ? $split_map_text : '';
    $map_side = ($map_alignment == 'right') ? 'map-side-right' : '';

    $output .= '<div class="col-md-6 map-side '.$map_side.'">';
    $output .= '<div id="map" data-title="'.$map_text.'" data-style="'.$map_style.'" data-lat="'.$lat.'" data-long="'.$lng.'" data-zoom="'.$zoom.'"></div>';
    $output .= '</div>';
  }

  $output .= '</div>';
  $output .= '</div>';
}

if (!$full_width) {
  $output .= '<div class="container">';
}

$output .= wpb_js_remove_wpautop( $content );

if (!$full_width) {
  $output .= '</div>';
}

if (!empty($content_placement) && $content_placement == 'middle') {
  $output .= '</div>';
  $output .= '</div>';
}

$output .= '</section>';
if ($section_type == 'footer') {
  $output .= '</div>';
}
$output .= $after_output;

echo $output;
