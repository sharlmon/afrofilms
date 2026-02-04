<?php

$portfolio_array = array();
$portfolio_posts = get_posts(array('posts_per_page' => '-1', 'post_type' => 'portfolio', 'orderby' => 'menu_order'));
foreach ($portfolio_posts as $post) {
  $portfolio_array[$post->post_title] = $post->ID;
}

/* Portfolio Section */
vc_map(
  array(
    'name' => __('Portfolio Filters', 'bezel-addons'),
    'base' => 'bezel_portfolio_filters',
    'icon' => 'ti-filter',
    'category' => __('Bezel', 'bezel-addons'),
    'description' => __('Filters for portfolio.', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'dropdown',
        'param_name' => 'style',
        'heading' => __('Style', 'bezel-addons'),
        'value' => array(
          'Default' => '',
          'Dark' => 'dark-skin'
        ),
      ),
    )
  )
);

vc_map(
  array(
    'name' => __('Portfolio Section', 'bezel-addons'),
    'base' => 'bezel_portfolio',
    'icon' => 'ti-briefcase',
    'category' => __('Bezel', 'bezel-addons'),
    'description' => __('A section with your portfolio items.', 'bezel-addons'),
    'params' => array(
      array(
        'type' => 'dropdown',
        'param_name' => 'items',
        'heading' => __('Items to show', 'bezel-addons'),
        'value' => array(
          'Latest' => 'latest',
          'Select Manually' => 'manual'
        ),
      ),
      array(
        'type' => 'textfield',
        'param_name' => 'items_to_show',
        'heading' => __('Number of items to show', 'bezel-addons'),
        'value' => '8',
        'admin_label' => true,
        'dependency' => array(
          'element' => 'items',
          'value' => 'latest'
        )
      ),
      array(
        'type' => 'dropdown_multi',
        'param_name' => 'items_ids',
        'heading' => __('Select Items', 'bezel-addons'),
        'description' => __('Ctrl+click or Cmd+click to select multiple items.', 'bezel-addons'),
        'value' => $portfolio_array,
        'dependency' => array(
          'element' => 'items',
          'value' => 'manual'
        )
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'style',
        'heading' => __('Style', 'bezel-addons'),
        'value' => array(
          'Overlay' => 'overlay',
          'Titles Outside' => 'outside',
        ),
        'std' => ''
      ),
      array(
        'type' => 'dropdown',
        'param_name' => 'columns',
        'heading' => __('How many columns?', 'bezel-addons'),
        'value' => array(
          'Two' => 'two-col',
          'Three' => 'three-col',
          'Four' => 'four-col',
        ),
        'std' => 'two-col'
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'No' => '',
          'Yes'     => 'yes',
        ),
        'heading' => __('Enable entrance animation?', 'bezel-addons'),
        'param_name' => 'enable_animation',
        'std' => 'yes',
      ),
      array(
        'type' => 'dropdown',
        'value' => array(
          'No' => '',
          'Yes'     => 'yes',
        ),
        'heading' => __('Enable spacing', 'bezel-addons'),
        'param_name' => 'enable_spacing',
        'std' => '',
      ),
    )
  )
);

add_shortcode( 'bezel_portfolio_filters', 'bezel_portfolio_filters' );

function bezel_portfolio_filters( $atts ) {

  extract( shortcode_atts( array(
    'style' => '',
  ), $atts ) );

  $categories = get_terms('portfolio_category', array( 'hide_empty' => 0 ));

  $filter_class = ($style == 'dark-skin') ? 'class="dark-skin"' : '';

  $output = '<ul id="filters" '.$filter_class.'>';
  $output .= '<li data-filter="*" class="active">'.__('All', 'bezel-addons').'</li>';
  foreach ($categories as $category) {
    $output .= '<li data-filter=".'.$category->slug.'">'.$category->name.'</li> ';
  }
  $output .= '</ul>';

  return $output;
}

add_shortcode( 'bezel_portfolio', 'bezel_portfolio' );

function bezel_portfolio( $atts ) {
  extract( shortcode_atts( array(
    'items' => 'latest',
    'items_to_show'  => '8',
    'items_ids' => '',
    'show_title' => '0',
    'title' => '',
    'style' => 'overlay',
    'animate_filters' => '',
    'full_width' => 'wide',
    'columns' => 'two-col',
    'enable_animation' => 'yes',
    'enable_spacing' => '',
  ), $atts ) );

  $categories = get_terms('portfolio_category', array( 'hide_empty' => 0 ));

  if ($style == 'carousel') {
    $filters_out = '';
  }

  $portfolio_classes = array($full_width, $columns);
  if ($enable_animation == 'yes') {
    $portfolio_classes[] = 'enable-animation';
  }
  if ($enable_spacing == 'yes') {
    $portfolio_classes[] = 'with-spacing';
  }

  $output = '';

  $carousel_items = 2;
  if ($columns == 'three-col') {
    $carousel_items = 3;
  }
  if ($columns == 'four-col') {
    $carousel_items = 4;
  }

  $output .= '<div id="works-grid" class="'.implode(' ', $portfolio_classes).'">';

  if ($items == 'latest') {
    $args = array('post_type' => 'portfolio', 'orderby'=> 'date', 'posts_per_page' => $items_to_show);
    $mainquery = new WP_query($args);

    if($mainquery->have_posts()) {

      while ($mainquery->have_posts()) : $mainquery->the_post();

        $project_thumb = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_id()), 'bezel_portfolio_thumb');
        $project_category  = '';
        $project_category_slug  = '';
        $cats = get_the_terms(get_the_id(), 'portfolio_category');
        if($cats){
          foreach($cats as $cat) {
            $project_category  .= $cat->name . ', ';
            $project_category_slug  .= $cat->slug . ', ';
          }
          $project_category = rtrim($project_category, ', ');
          $project_category_slug = rtrim($project_category_slug, ', ');
        }

        $output .= '<div class="work-item '.strtolower(str_replace(',', '', $project_category_slug)).'">';
        $output .= '<div class="work-detail">';
        $output .= '<a href="'.esc_url(get_the_permalink()).'">';
        if ($project_thumb) {
          $output .= '<img src="'.esc_attr($project_thumb[0]).'" alt="'.get_the_title().'">';
        }
        if ($style !== 'outside') {
          $output .= '<div class="work-info">';
          $output .= '<div class="centrize">';
          $output .= '<div class="v-center">';
          $output .= '<h3>'.esc_attr(get_the_title()).'</h3>';
          $output .= '<p>'.esc_attr($project_category).'</p>';
          $output .= '</div>';
          $output .= '</div>';
          $output .= '</div>';
        }
        $output .= '</a>';
        if ($style == 'outside') {
          $output .= '<div class="work-info-alt">';
          $output .= '<p>'.esc_attr($project_category).'</p>';
          $output .= '<h3><a href="'.esc_url(get_the_permalink()).'">'.esc_attr(get_the_title()).'</a></h3>';
          $output .= '</div>';
        }
        $output .= '</div>';
        $output .= '</div>';

      endwhile;

    }
  } elseif ($items == 'manual') {
    $postIDs = explode(',', str_replace(' ', '', $items_ids));

    foreach ($postIDs as $postID) {

      if ('publish' == get_post_status($postID)) {
        $post = get_post($postID);

        $project_thumb = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'bezel_portfolio_thumb');
        $project_category  = '';
        $project_category_slug  = '';
        $cats = get_the_terms($post->ID, 'portfolio_category');
        if($cats){
          foreach($cats as $cat) {
            $project_category  .= $cat->name . ', ';
            $project_category_slug  .= $cat->slug . ', ';
          }
          $project_category = rtrim($project_category, ', ');
          $project_category_slug = rtrim($project_category_slug, ', ');
        }

        $output .= '<div class="work-item '.strtolower(str_replace(',', '', $project_category_slug)).'">';
        $output .= '<div class="work-detail">';
        $output .= '<a href="'.esc_url(get_the_permalink($post->ID)).'">';
        if ($project_thumb) {
          $output .= '<img src="'.esc_attr($project_thumb[0]).'" alt="'.get_the_title().'">';
        }

        if ($style !== 'outside') {
          $output .= '<div class="work-info">';
          $output .= '<div class="centrize">';
          $output .= '<div class="v-center">';
          $output .= '<h3>'.esc_attr(get_the_title($post->ID)).'</h3>';
          $output .= '<p>'.esc_attr($project_category).'</p>';
          $output .= '</div>';
          $output .= '</div>';
          $output .= '</div>';
        }

        $output .= '</a>';
        if ($style == 'outside') {
          $output .= '<div class="work-info-alt">';
          $output .= '<p>'.esc_attr($project_category).'</p>';
          $output .= '<h3><a href="'.esc_url(get_the_permalink($post->ID)).'">'.esc_attr(get_the_title($post->ID)).'</a></h3>';
          $output .= '</div>';
        }
        $output .= '</div>';
        $output .= '</div>';
      }

    }
  }

  $output .= '</div>';

  wp_reset_postdata();

  return $output;
}
