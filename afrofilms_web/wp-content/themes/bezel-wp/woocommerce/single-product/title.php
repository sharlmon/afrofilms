<?php
/**
 * Single Product title
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/title.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you (the theme developer).
 * will need to copy the new files to your theme to maintain compatibility. We try to do this.
 * as little as possible, but it does happen. When this occurs the version of the template file will.
 * be bumped and the readme will list any important changes.
 *
 * @see 	    http://docs.woothemes.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $product;

$rating_count = $product->get_rating_count();
$review_count = $product->get_review_count();
$average      = $product->get_average_rating();

?>

<?php if ( $rating_count > 0 && get_option( 'woocommerce_enable_review_rating' ) !== 'no') : ?>

<div class="single-product-ratings" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
	<div class="product-rating">
		<span class="product-stars" title="<?php printf( esc_html__( 'Rated %s out of 5', 'bezel-wp' ), $average ); ?>">
			<span class="product-rating-stars" style="width:<?php echo ( ( $average / 5 ) * 100 ); ?>%"></span>
		</span>
		<?php if ( comments_open() ) : ?>
			<a href="#reviews" class="woocommerce-review-link" rel="nofollow">
				(<?php printf( _n( '%s review', '%s reviews', $review_count, 'bezel-wp' ), '<span itemprop="reviewCount" class="count">' . $review_count . '</span>' ); ?>)
			</a>
		<?php endif ?>
	</div>
</div>

<?php endif; ?>

<div class="title">
  <h2 itemprop="name" class="product_title entry-title">
    <?php the_title(); ?>
  </h2>
</div>
