<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


$page_id = wc_get_page_id( 'shop' );
$title_class = (has_post_thumbnail($page_id)) ? 'parallax-section' : 'grey-bg';
$columns_layout = ( isset( $_GET['col'] ) && in_array( $_GET['col'], array( '2', '3', '4' ) ) ) ? $_GET['col'] : '';

get_header( 'shop' ); ?>
<article class="page-single">
  <section class="page-title <?php echo esc_attr($title_class); ?>">

    <?php if (has_post_thumbnail($page_id)): ?>
    <div class="row-parallax-bg">
      <div class="parallax-wrapper">
        <div class="parallax-bg" style="background-image: url(<?php echo esc_url(get_the_post_thumbnail_url($page_id)); ?>);"></div>
      </div>
    </div>
    <div class="parallax-overlay"></div>
    <?php endif ?>

      <div class="centrize">
        <div class="v-center">
          <div class="container">
            <div class="title text-center">
              <h1><?php echo esc_attr(get_the_title( $page_id )); ?></h1>
            </div>
          </div>
        </div>
      </div>
 	</section>

	<section class="grey-bg">
		<div class="container">

			<?php
				/**
				 * woocommerce_before_main_content hook.
				 *
				 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
				 * @hooked woocommerce_breadcrumb - 20
				 */
				do_action( 'woocommerce_before_main_content' );
			?>

			<?php if (bezel_options('shop_sidebar')): ?>
				<div class="row">
		  		<div class="col-md-3 hidden-sm hidden-xs">
		  			<div id="sidebar">
		  				<?php dynamic_sidebar('shop_sidebar'); ?>
		  			</div>
		  		</div>
		  		<div class="col-md-9">
	  	<?php endif ?>

			<?php
				/**
				 * woocommerce_archive_description hook.
				 *
				 * @hooked woocommerce_taxonomy_archive_description - 10
				 * @hooked woocommerce_product_archive_description - 10
				 */
				do_action( 'woocommerce_archive_description' );
			?>

			<?php if ( have_posts() ) : ?>
				<div class="shop-menu">
					<div class="row">
						<?php
							/**
							 * woocommerce_before_shop_loop hook.
							 *
							 * @hooked woocommerce_result_count - 20
							 * @hooked woocommerce_catalog_ordering - 30
							 */
							do_action( 'woocommerce_before_shop_loop' );
						?>
					</div>
				</div>

				<?php if ($columns_layout || bezel_options('shop_columns')): ?>
					<?php $col_width = ($columns_layout) ? $columns_layout : bezel_options('shop_columns') ; ?>
					<div class="columns-<?php echo esc_attr( $col_width ); ?>">
				<?php endif ?>
					<?php
						woocommerce_product_loop_start();
						if ( wc_get_loop_prop( 'total' ) ) {
							while ( have_posts() ) {
								the_post();
								/**
								 * Hook: woocommerce_shop_loop.
								 *
								 * @hooked WC_Structured_Data::generate_product_data() - 10
								 */
								do_action( 'woocommerce_shop_loop' );
								wc_get_template_part( 'content', 'product' );
							}
						}
						woocommerce_product_loop_end();
					?>
				<?php if ($columns_layout || bezel_options('shop_columns')): ?>
					</div>
				<?php endif ?>

				<?php
					/**
					 * woocommerce_after_shop_loop hook.
					 *
					 * @hooked woocommerce_pagination - 10
					 */
					do_action( 'woocommerce_after_shop_loop' );
				?>

			<?php else: ?>

				<?php do_action( 'woocommerce_no_products_found' ); ?>

			<?php endif; ?>

		<?php if (bezel_options('shop_sidebar')): ?>
				</div>
			</div>
		<?php endif ?>

		<?php
			/**
			 * woocommerce_after_main_content hook.
			 *
			 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
			 */
			do_action( 'woocommerce_after_main_content' );
		?>
		</div>
	</section>

</article>

<?php get_footer( 'shop' ); ?>
