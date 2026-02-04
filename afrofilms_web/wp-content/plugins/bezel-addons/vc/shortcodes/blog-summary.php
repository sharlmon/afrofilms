<?php

/* Blog Summary */
vc_map(
  array(
    'name' => __('Blog Summary', 'bezel-addons'),
    'base' => 'bezel_blog_summary',
    'icon' => 'ti-notepad',
    'category' => __('Bezel', 'bezel-addons'),
    'description' => __('A section with your latest posts.', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'dropdown',
        'heading' => __('Style', 'bezel-addons'),
        'param_name' => 'style',
        'value' => array(
          'Grid'      => 'grid',
          'Carousel'  => 'carousel',
        ),
        'std' => 'yes',
      ),
      array(
        'type' => 'textfield',
        'param_name' => 'posts_to_show',
        'heading' => __('Number of posts to show', 'bezel-addons'),
        'value' => '5'
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'Yes'     => 'yes',
          'No'      => 'no',
        ),
        'heading' => __('Show "View All Posts" link?', 'bezel-addons'),
        'param_name' => 'show_all',
        'std' => 'yes',
        'dependency' => array(
          'element' => 'style',
          'value' => array('grid')
        ),
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'No'    => 'no',
          'Yes'   => 'yes',
        ),
        'heading' => __('Enable entrance animation?', 'bezel-addons'),
        'param_name' => 'enable_animation',
        'std' => 'yes',
        'dependency' => array(
          'element' => 'style',
          'value' => array('grid')
        ),
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
        'std' => 'serif-font',
      ),
      array(
        'type' => 'dropdown',
        'heading' => __( 'Column Width', 'bezel-addons'),
        'param_name' => 'column_width',
        'group' => __( 'Design Options', 'bezel-addons'),
        'value' => array(
          '1 column - 1/12' => 'vc_col-md-1',
          '2 columns - 1/6' => 'vc_col-md-2',
          '3 columns - 1/4' => 'vc_col-md-3',
          '4 columns - 1/3' => 'vc_col-md-4',
          '5 columns - 5/12' => 'vc_col-md-5',
          '6 columns - 1/2' => 'vc_col-md-6',
          '7 columns - 7/12' => 'vc_col-md-7',
          '8 columns - 2/3' => 'vc_col-md-8',
          '9 columns - 3/4' => 'vc_col-md-9',
          '10 columns - 5/6' => 'vc_col-md-10',
          '11 columns - 11/12' => 'vc_col-md-11',
          '12 columns - 1/1' => 'vc_col-md-12',
        ),
        'std' => 'vc_col-md-4',
        'dependency' => array(
          'element' => 'style',
          'value' => array('grid')
        ),
      ),
      array(
        'type' => 'dropdown',
        'heading' => __( 'Column Width (Tablet)', 'bezel-addons'),
        'param_name' => 'column_width_sm',
        'group' => __( 'Design Options', 'bezel-addons'),
        'value' => array(
          '1 column - 1/12' => 'vc_col-sm-1',
          '2 columns - 1/6' => 'vc_col-sm-2',
          '3 columns - 1/4' => 'vc_col-sm-3',
          '4 columns - 1/3' => 'vc_col-sm-4',
          '5 columns - 5/12' => 'vc_col-sm-5',
          '6 columns - 1/2' => 'vc_col-sm-6',
          '7 columns - 7/12' => 'vc_col-sm-7',
          '8 columns - 2/3' => 'vc_col-sm-8',
          '9 columns - 3/4' => 'vc_col-sm-9',
          '10 columns - 5/6' => 'vc_col-sm-10',
          '11 columns - 11/12' => 'vc_col-sm-11',
          '12 columns - 1/1' => 'vc_col-sm-12',
        ),
        'std' => 'vc_col-sm-6',
        'dependency' => array(
          'element' => 'style',
          'value' => array('grid')
        ),
      ),
      array(
        'type' => 'dropdown',
        'heading' => __( 'Column Width (Smartphone)', 'bezel-addons'),
        'param_name' => 'column_width_xs',
        'group' => __( 'Design Options', 'bezel-addons'),
        'value' => array(
          '1 column - 1/12' => 'vc_col-xs-1',
          '2 columns - 1/6' => 'vc_col-xs-2',
          '3 columns - 1/4' => 'vc_col-xs-3',
          '4 columns - 1/3' => 'vc_col-xs-4',
          '5 columns - 5/12' => 'vc_col-xs-5',
          '6 columns - 1/2' => 'vc_col-xs-6',
          '7 columns - 7/12' => 'vc_col-xs-7',
          '8 columns - 2/3' => 'vc_col-xs-8',
          '9 columns - 3/4' => 'vc_col-xs-9',
          '10 columns - 5/6' => 'vc_col-xs-10',
          '11 columns - 11/12' => 'vc_col-xs-11',
          '12 columns - 1/1' => 'vc_col-xs-12',
        ),
        'std' => 'vc_col-xs-12',
        'dependency' => array(
          'element' => 'style',
          'value' => array('grid')
        ),
      ),
      array(
        'type' => 'textfield',
        'value' => '3',
        'heading' => __('Items', 'bezel-addons'),
        'description' => __('Set the maximum amount of items displayed at a time.', 'bezel-addons'),
        'param_name' => 'items',
        'group' => __( 'Carousel Options', 'bezel-addons'),
        'dependency' => array(
          'element' => 'style',
          'value' => array('carousel')
        ),
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Items (medium devices)', 'bezel-addons'),
        'description' => __('Set the maximum amount of items displayed at a time on medium devices.', 'bezel-addons'),
        'param_name' => 'md_items',
        'group' => __( 'Carousel Options', 'bezel-addons'),
        'dependency' => array(
          'element' => 'style',
          'value' => array('carousel')
        ),
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Items (small devices)', 'bezel-addons'),
        'description' => __('Set the maximum amount of items displayed at a time on small devices.', 'bezel-addons'),
        'param_name' => 'sm_items',
        'group' => __( 'Carousel Options', 'bezel-addons'),
        'dependency' => array(
          'element' => 'style',
          'value' => array('carousel')
        ),
      ),
      array(
        'type' => 'textfield',
        'value' => '',
        'heading' => __('Items (extra small devices)', 'bezel-addons'),
        'description' => __('Set the maximum amount of items displayed at a time on extra small devices.', 'bezel-addons'),
        'param_name' => 'xs_items',
        'group' => __( 'Carousel Options', 'bezel-addons'),
        'dependency' => array(
          'element' => 'style',
          'value' => array('carousel')
        ),
      ),
    )
  )
);

add_shortcode( 'bezel_blog_summary', 'bezel_blog_summary' );

function bezel_blog_summary( $atts ) {
  extract( shortcode_atts( array(
    'style' => 'grid',
    'posts_to_show' => '5',
    'show_all' => 'yes',
    'enable_animation' => 'yes',
    'title_style' => 'serif-font',
    'column_width' => 'vc_col-md-4',
    'column_width_sm' => 'vc_col-sm-6',
    'column_width_xs' => 'vc_col-xs-12',
    'items' => '3',
    'md_items' => '',
    'sm_items' => '',
    'xs_items' => '',
  ), $atts ) );

  $column_class = ($style == 'carousel') ? 'carousel-item with-padding' : implode(' ', array($column_width, $column_width_sm, $column_width_xs));
  $posts_animations = ($enable_animation == 'yes') ? 'enable-animation' : '';

  $args = array('post_type' => 'post', 'orderby'=> 'date', 'posts_per_page' => $posts_to_show);
  $mainquery = new WP_query($args);
  $output = '';

  if ($style == 'grid') {
    $output .= '<div class="row row-flex '.$posts_animations.'" id="blog-summary">';
  } elseif ($style == 'carousel') {
    $options =  array();
    $options[] = '"slidesToShow": ' . $items;
    if (!empty($md_items)) {
      $options[] = '"mdItems": ' . $md_items;
    }
    if (!empty($sm_items)) {
      $options[] = '"smItems": ' . $sm_items;
    }
    if (!empty($xs_items)) {
      $options[] = '"xsItems": ' . $xs_items;
    }
    $output .= '<div class="carousel dark-dots" data-slick="{'.htmlentities(implode(', ', $options)).'}">';
  }

    if( $mainquery->have_posts()) :
      while ($mainquery->have_posts()) : $mainquery->the_post();
        $post_cat = get_the_category();
        $output .= '<div class="'.$column_class.'">';
        $output .= '<article id="post-'.get_the_id().'" class="post-preview '.implode(' ', get_post_class()).'">';
        if (has_post_thumbnail(get_the_id())) {
          $image = get_post_thumbnail_id(get_the_id());
          $image_src = wp_get_attachment_image_src($image, 'bezel_medium');

          $output .= '<figure class="post-thumb">';
          $output .= '<img class="thumb-placeholder" src="'.esc_url($image_src[0]).'" alt="'.esc_attr(get_the_title()).'">';
          $output .= '</figure>';
        }
        $output .= '<div class="post-info">';

        $output .= '<span class="post-category"><a href="'.esc_url(get_category_link(get_cat_id( $post_cat[0]->name ))).'">' . $post_cat[0]->name . '</a></span>';
        $output .= '<header class="post-title"><h3 class="'.$title_style.'"><a href="'.esc_url(get_the_permalink()).'">'.esc_attr(get_the_title()).'</a></h3></header>';

        $output .= '<div class="post-body">';
        $output .= '<p class="serif-font">'.bezel_excerpt(15).'</p>';
        $output .= '</div>';

        $output .= '<div class="post-meta">';
        $output .= '<span>';
        $output .= '<a href="'.get_author_posts_url( get_the_author_meta( 'ID' )).'">'.get_the_author().'</a>';
        $output .= ' ' . __( 'on', 'bezel-addons' ) . '<a class="post-link" href="'.esc_url(get_the_permalink()).'"> ' . get_the_time('F d, Y') . '</a>';
        $output .= '</span>';
        $output .= '</div>';

        $output .= '</div>';

        $output .= '</article>';
        $output .= '</div>';
      endwhile;

    endif;
  wp_reset_postdata();

  if ($show_all == 'yes' && $style == 'grid') {
    $blog_url = (get_option( 'page_for_posts' )) ? get_permalink( get_option( 'page_for_posts' ) ) : '#';
    $output .= '<div class="'.$column_class.'">';
    $output .= '<article class="post-preview show-all-posts">';
    $output .= '<a href="'.esc_url($blog_url).'">';
    $output .= '<div class="centrize">';
    $output .= '<div class="v-center">';
    $output .= '<div class="icon-box align-center"><i class="hc-add"></i>';
    $output .= '<h4 class="serif-font">'.__( 'View All Posts', 'bezel-addons' ) .'</h4>';
    $output .= '</div>';
    $output .= '</div>';
    $output .= '</div>';
    $output .= '</a>';
    $output .= '</article>';
    $output .= '</div>';
  }

  $output .= '</div>';

  return $output;

}
