<?php

/* Function to get theme options */
if ( ! function_exists('bezel_options') ) {
  function bezel_options($value){
    global $bezel_options;
    if (isset($bezel_options[$value])) {
      return $bezel_options[$value];
    } else{
      return false;
    }
  }
}

/* Access post meta easily */
if ( ! function_exists('bezel_meta') ) {
  function bezel_meta($id, $key){
    if (get_post_meta( $id, 'bezel_'.$key, true)) {
      return get_post_meta( $id, 'bezel_'.$key, true);
    } else{
      return false;
    }
  }
}

/* Multiple excerpt lenghts */
if ( ! function_exists('bezel_excerpt')) {
  function bezel_excerpt($limit) {
    $excerpt = explode(' ', get_the_excerpt(), $limit);
    if (count($excerpt)>=$limit) {
      array_pop($excerpt);
      $excerpt = implode(" ",$excerpt).' ... ';
    } else {
      $excerpt = implode(" ",$excerpt);
    }
    $excerpt = preg_replace('`\[[^\]]*\]`','',$excerpt);
    return $excerpt;
  }
}

// Enable font size & font family selects in the editor
add_filter( 'mce_buttons_2', 'bezel_wpex_mce_buttons' );
if ( ! function_exists( 'bezel_wpex_mce_buttons' ) ) {
  function bezel_wpex_mce_buttons( $buttons ) {
    array_unshift( $buttons, 'fontsizeselect' ); // Add Font Size Select
    return $buttons;
  }
}

// Customize mce editor font sizes
add_filter( 'tiny_mce_before_init', 'bezel_wpex_mce_text_sizes' );
if ( ! function_exists( 'bezel_wpex_mce_text_sizes' ) ) {
  function bezel_wpex_mce_text_sizes( $initArray ){
    $initArray['fontsize_formats'] = "9px 10px 12px 13px 14px 15px 16px 18px 20px 21px 24px 28px 32px 36px";
    return $initArray;
  }
}

// Arrow List in TinyMCE
function bezel_mce_buttons_2( $buttons ) {
  array_unshift( $buttons, 'styleselect' );
  return $buttons;
}
add_filter('mce_buttons_2', 'bezel_mce_buttons_2');

function bezel_mce_before_init_insert_formats( $init_array ) {
  $style_formats = array(
    array(
      'title' => __('Check List', 'bezel-wp'),
      'selector' => 'ul',
      'classes' => 'check-list colored-skin'
    ),
    array(
      'title' => __('Check List (black)', 'bezel-wp'),
      'selector' => 'ul',
      'classes' => 'check-list dark-skin'
    ),
    array(
      'title' => __('Check List (white)', 'bezel-wp'),
      'selector' => 'ul',
      'classes' => 'check-list white-skin'
    ),
    array(
      'title' => __('Unstyled List', 'bezel-wp'),
      'selector' => 'ul',
      'classes' => 'list-unstyled'
    ),
    array(
      'title' => __('Inline List', 'bezel-wp'),
      'selector' => 'ul',
      'classes' => 'inline-list'
    ),
    array(
      'title' => __('Project Info', 'bezel-wp'),
      'selector' => 'ul',
      'classes' => 'project-info'
    ),
    array(
      'title' => __('Arrow Link', 'bezel-wp'),
      'selector' => 'a',
      'classes' => 'arrow-link'
    ),
  );
  $init_array['style_formats'] = json_encode( $style_formats );
  return $init_array;
}
add_filter( 'tiny_mce_before_init', 'bezel_mce_before_init_insert_formats' );

// Search Filter
add_filter('pre_get_posts','bezel_search_filter');
if ( ! function_exists('bezel_search_filter') ) {
  function bezel_search_filter($query) {
    if (!is_admin() && !is_post_type_archive('product')) {
      if ($query->is_search) {
        $query->set('post_type', array('post', 'product', 'portfolio'));
      }
      return $query;
    }
  }
}


/* WooCommerce Ajax Cart */
add_filter( 'woocommerce_add_to_cart_fragments', 'bezel_header_add_to_cart_fragment' );
if ( ! function_exists('bezel_header_add_to_cart_fragment') ) {
  function bezel_header_add_to_cart_fragment( $fragments ) {
    ob_start();
    ?>
    <div class="cart-open">
      <a href="<?php echo esc_url( wc_get_cart_url() ); ?>">
        <i class="hc-shopping-bag"></i><span class="cart-number"><?php echo WC()->cart->get_cart_contents_count(); ?></span>
      </a>
      <div class="shopping-cart">
        <?php woocommerce_mini_cart(); ?>
      </div>
    </div>

    <?php

    $fragments['#navbar .cart-open'] = ob_get_clean();

    return $fragments;
  }
}

// Comments template
if ( ! function_exists('bezel_comments') ) {
  function bezel_comments( $comment, $args, $depth ) {
      $GLOBALS['comment'] = $comment; ?>
      <li id="comment-<?php comment_ID(); ?>" <?php comment_class(); ?>>
      <div class="comment">

        <div class="comment-pic">
          <?php echo get_avatar( $comment, 80 ); ?>
        </div>
        <div class="comment-text">
          <h5 class="upper"><?php echo get_comment_author_link(); ?></h5>
          <span class="comment-date"><?php esc_html_e('Posted on', 'bezel-wp'); ?> <?php echo get_comment_date(); ?> <?php esc_html_e('at', 'bezel-wp'); ?> <?php echo get_comment_time(); ?></span>
          <?php if ($comment->comment_approved == '0') : ?>
            <em><?php esc_html_e('Your comment is awaiting moderation.', 'bezel-wp') ?></em>
          <?php endif; ?>
          <p><?php comment_text(); ?></p>
          <?php
          comment_reply_link( array_merge( $args, array(
            'reply_text' =>  esc_html__('Reply', 'bezel-wp'),
            'depth' => $depth,
            'max_depth' => $args['max_depth']
          ) ) ); ?>
        </div>
      </div>
      <?php
  }
}

// Get Blog Page ID
if ( ! function_exists('bezel_blog_page_id') ) {
  function bezel_blog_page_id(){
    $home_id = get_option('page_for_posts');
    if (is_home() && $home_id || is_search() && $home_id || is_archive() && $home_id || is_category() && $home_id) {
      $id = $home_id;
    } elseif ( get_post_type(get_the_id()) == 'page' ) {
      $id = get_the_id();
    } else{
      $id = 0;
    }
    return $id;
  }
}

// Get Blog Page Options
if ( ! function_exists('bezel_blog_page_opts') ) {
  function bezel_blog_page_opts($id){
    $opts = array(
      'page_title' => (bezel_meta($id, 'page_title') != '') ? bezel_meta($id, 'page_title') : get_the_title($id),
      'page_subtitle' => (bezel_meta($id, 'page_subtitle') != '') ? bezel_meta($id, 'page_subtitle') : '',
      'blog_layout' => (bezel_meta($id, 'blog_layout') != '') ? bezel_meta($id, 'blog_layout') : 'default',
      'blog_sidebar' => (bezel_meta($id, 'blog_sidebar') != '') ? bezel_meta($id, 'blog_sidebar') : 'off',
    );

    return $opts;
  }
}

// Social Links
if ( ! function_exists('bezel_social_footer')) {
  function bezel_social_footer(){

    $socials = array(
      array('name' => 'facebook', 'icon' => 'hc-facebook'),
      array('name' => 'twitter', 'icon' => 'hc-twitter'),
      array('name' => 'google-plus', 'icon' => 'hc-google-plus'),
      array('name' => 'linkedin', 'icon' => 'hc-linkedin'),
      array('name' => 'instagram', 'icon' => 'hc-instagram'),
      array('name' => 'dribbble', 'icon' => 'hc-dribbble'),
      array('name' => 'github', 'icon' => 'hc-github'),
      array('name' => 'flickr', 'icon' => 'hc-flickr'),
      array('name' => 'pinterest', 'icon' => 'hc-pinterest'),
      array('name' => 'youtube', 'icon' => 'hc-youtube'),
      array('name' => 'tumblr', 'icon' => 'hc-tumblr-alt'),
      array('name' => 'vimeo', 'icon' => 'hc-vimeo'),
    );

    $output = '<ul class="social-list">';
    foreach ($socials as $social) {
      if ( bezel_options($social['name']) != '' ) {
        $output .= '<li class="social-item-'.$social['name'].'"><a target="_blank" href="'.esc_url(bezel_options($social['name'])).'"><i class="'.$social['icon'].'"></i></a></li>';
      }
    }
    $output .= '</ul>';

    echo $output;

  }
}

if ( ! function_exists('bezel_check_social_icons') ) {
  function bezel_check_social_icons(){
    $socials = array(
      'facebook',
      'twitter',
      'google-plus',
      'linkedin',
      'instagram',
      'dribbble',
      'github',
      'flickr',
      'pinterest',
      'youtube',
      'tumblr',
    );

    $social_string = '';

    foreach ($socials as $social) {
      $social_string .= bezel_options($social);
    }

    return !empty($social_string);
  }
}

// Custom CSS
if ( ! function_exists('bezel_custom_css') ) {
  function bezel_custom_css(){
    if (bezel_options('custom_css') != '') {
      $custom_css = bezel_options('custom_css');
      echo '<style type="text/css">'.$custom_css."</style>\r\n";
    }
  }
}
add_action('wp_head', 'bezel_custom_css');

// Site Icon
if ( ! function_exists('bezel_site_icon')) {
  function bezel_site_icon(){
    if ( ! function_exists( 'wp_site_icon' ) ){
      echo '<link rel="shortcut icon" href="'.BEZEL_THEME_URI . '/assets/images/favicon.png' .'">';
    }
  }
}
add_action('wp_head', 'bezel_site_icon');

if ( ! function_exists('bezel_body_class')) {
  function bezel_body_class($classes){
    $nav_position_from_options = (bezel_options('nav_position')) ? bezel_options('nav_position') : 'top';
    $menu_style = (get_the_id()) ? bezel_meta(get_the_id(), 'nav_position') : '';

    $nav_position = ( !empty( $menu_style )) ? $menu_style : $nav_position_from_options;

    $extra_body_class = (($nav_position == 'left' || $nav_position == 'right') && bezel_meta(get_the_id(), 'aside_style') != 'aside-hidden') ? $nav_position . '-navbar': '';

    if ( bezel_options('nav_toggle') && count(get_post_meta(get_the_id(), 'bezel_aside_style')) === 0 ) {
      $extra_body_class = '';
    }

    $boxed_layout = (get_the_id() && bezel_meta(get_the_id(), 'page_layout') == 'boxed') ? 'boxed-layout' : '';

    $nav_animation = (bezel_options('navbar_animation') == 0) ? 'disable-navbar-animation' : '';

    return array_merge( $classes, array( $extra_body_class, $boxed_layout, $nav_animation ) );
  }
}
add_filter('body_class', 'bezel_body_class');

// TinyMCE Button
add_action( 'admin_init', 'bezel_mark_button' );
function bezel_mark_button() {
  add_filter( 'mce_external_plugins', 'bezel_add_typed_button' );
  add_filter( 'mce_buttons', 'bezel_register_typed_button' );
}

function bezel_add_typed_button( $plugin_array ) {
  $plugin_array['bezeltypedbutton'] = $dir = BEZEL_THEME_URI . '/core/admin/js/editor.js';
  return $plugin_array;
}

function bezel_register_typed_button( $buttons ) {
  array_push( $buttons, 'typedbutton' );
  return $buttons;
}

// Check if it's woocommerce page
if ( ! function_exists('bezel_is_woocommerce_page') ){
  function bezel_is_woocommerce_page(){
    if( function_exists ( "is_woocommerce" ) && is_woocommerce()){
      return true;
    }
    $woocommerce_keys = array(
      "woocommerce_shop_page_id" ,
      "woocommerce_terms_page_id" ,
      "woocommerce_cart_page_id" ,
      "woocommerce_checkout_page_id" ,
      "woocommerce_pay_page_id" ,
      "woocommerce_thanks_page_id" ,
      "woocommerce_myaccount_page_id" ,
      "woocommerce_edit_address_page_id" ,
      "woocommerce_view_order_page_id" ,
      "woocommerce_change_password_page_id" ,
      "woocommerce_logout_page_id" ,
      "woocommerce_lost_password_page_id"
    );
    foreach ( $woocommerce_keys as $wc_page_id ) {
      if ( get_the_ID () == get_option ( $wc_page_id , 0 ) ) {
        return true;
      }
    }
    return false;
  }
}

if ( ! function_exists('bezel_get_animation')) {
  function bezel_get_animation($animation, $delay){
    $output = '';
    if ($animation && $animation != 'none') {
      $output .= ' data-animation="'.$animation.'"';
    }
    if ($delay) {
      $output .= ' data-delay="'.$delay.'"';
    }
    return $output;
  }
}
