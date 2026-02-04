<?php
/* Photo Gallery */
vc_map(
  array(
    'name' => __('Photo Gallery', 'bezel-addons'),
    'base' => 'bezel_photo_gallery',
    'icon' => 'ti-gallery',
    'description' => __('Modal photo gallery.', 'bezel-addons'),
    'category' => __( 'Bezel', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'dropdown',
        'param_name' => 'layout',
        'heading' => __('Layout', 'bezel-addons'),
        'value' => array(
          'Masonry' => 'masonry-style',
          'Simple Grid' => 'grid-style'
        ),
      ),
      array(
        'type' => 'attach_images',
        'param_name' => 'pics',
        'admin_label' => true,
        'heading' => __('Images', 'bezel-addons'),
        'value' => ''
      ),
    )
  )
);

add_shortcode( 'bezel_photo_gallery', 'bezel_photo_gallery' );

function bezel_photo_gallery( $atts ) {
  extract( shortcode_atts( array(
    'layout' => 'masonry-style',
    'pics' => ''
  ), $atts ) );

  $images = explode(',', $pics);
  $image_size = ($layout == 'grid-style') ? 'bezel_blog_thumb' : 'bezel_gallery_thumb' ;

  $output = '<div class="photo-gallery '.$layout.'">';
  foreach ($images as $pic) {
    $output .= '<div class="gallery-item">';
    $output .= '<a href="'.wp_get_attachment_url($pic).'">';
    $output .= wp_get_attachment_image($pic, $image_size);
    $output .= '<div class="gallery-overlay">';
    $output .= '</div>';
    $output .= '</a>';
    $output .= '</div>';
  }
  $output .= '</div>';

  return $output;

}
