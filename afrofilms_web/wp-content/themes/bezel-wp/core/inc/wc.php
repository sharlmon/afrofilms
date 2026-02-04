<?php

if ( ! defined( 'ABSPATH' ) ) {
  exit; // Exit if accessed directly
}

add_filter( 'loop_shop_per_page', 'bezel_loop_shop_per_page', 20 );

if (!function_exists('bezel_loop_shop_per_page')) {
  function bezel_loop_shop_per_page($cols){
    $cols = (bezel_options('products_per_page')) ? bezel_options('products_per_page') : 6;
    return $cols;
  }
}

remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10 );
remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10 );
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10 );
remove_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10 );
remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );

add_action( 'woocommerce_shop_loop_item_thumb_open', 'woocommerce_template_loop_product_thumb', 10 );
add_action( 'woocommerce_shop_loop_item_thumb_close', 'woocommerce_template_loop_product_thumb_close', 5 );
add_action( 'woocommerce_before_single_product', 'woocommerce_breadcrumb', 20 );

add_action( 'woocommerce_shop_loop_item_thumb_cart', 'woocommerce_template_loop_add_to_cart', 10 );
add_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10 );
add_action( 'woocommerce_shop_loop_item_title_close', 'woocommerce_template_loop_product_title_close', 10 );

if ( ! function_exists( 'woocommerce_template_loop_product_thumb' ) ) {
  function woocommerce_template_loop_product_thumb() {
    global $product;
    $alt_thumb = $product->get_gallery_image_ids();
    $output = '<div class="product-thumb">';
    $output .= '<a href="' . get_the_permalink() . '">';
    $output .= wc_get_template( 'loop/sale-flash.php' );
    $output .= woocommerce_get_product_thumbnail('shop_single');
    if (!empty($alt_thumb)) {
      $output .= '<figure class="image-switcher">';
      $output .= wp_get_attachment_image($alt_thumb[0], 'shop_single');
      $output .= '</figure>';
    }
    $output .= '</a>';

    echo $output;
  }
}

if ( ! function_exists( 'woocommerce_template_loop_product_thumb_close' ) ) {
  function woocommerce_template_loop_product_thumb_close() {
    $output = '</div>';
    echo $output;
  }
}


if (  ! function_exists( 'woocommerce_template_loop_product_title' ) ) {

  function woocommerce_template_loop_product_title() {
    global $product;
    $rating_count = $product->get_rating_count();
    $review_count = $product->get_review_count();
    $average      = $product->get_average_rating();

    $output = '<div class="product-info">';
    $output .= '<h3>';
    $output .= '<a href="' . get_the_permalink() . '">';
    $output .= get_the_title();
    $output .= '</a>';
    $output .= '</h3>';
    if ( $price_html = $product->get_price_html() ){
      $output .= '<span class="product-price">'.$price_html.'</span>';
    }
    if ($rating_count > 0) {
      $output .= '<div class="product-rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">';
      $output .= '<span class="product-stars">';
      $output .= '<span class="product-rating-stars" style="width: '. ( ( $average / 5 ) * 100 ).'%"></span>';
      $output .= '</span>';
      $output .= '</div>';
    }
    $output .= '<div class="add-to-cart-btn">';

    echo $output;
  }
}

if ( ! function_exists( 'woocommerce_template_loop_product_title_close' ) ) {
  function woocommerce_template_loop_product_title_close() {
    $output = '</div>';
    $output .= '</div>';
    echo $output;
  }
}
