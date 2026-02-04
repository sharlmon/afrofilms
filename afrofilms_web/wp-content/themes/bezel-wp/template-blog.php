<?php

/*
Template Name: Blog Page
*/

get_header();

global $wp_query;
$post_id = bezel_blog_page_id();
$options = bezel_blog_page_opts($post_id);

$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$args = array('post_type' => 'post', 'posts_per_page' => $wp_query->max_num_pages, 'paged' => $paged);
$the_query = new WP_Query($args);

$blog_col_class = 'inner-row';

if ($options['blog_sidebar'] != 'off') {
  $blog_col_class = 'col-md-9';
}

if (get_query_var('s') || is_search()) {
  $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
  $searchquery = new WP_Query(array(
    's' => esc_attr(get_query_var('s')),
    'paged' => $paged,
    'post_type' => array('post', 'product', 'portfolio')
  ));
  wp_reset_postdata();
}

$page_title = (is_search()) ? get_query_var('s') : $options['page_title'];
$title_class = (has_post_thumbnail($post_id)) ? 'parallax-section' : '';
$container_class = (!isset($options['blog_sidebar']) || $options['blog_sidebar'] == 'off') ? 'container': 'container-fluid';

?>
<article class="page-single">
  <section class="page-title <?php echo esc_attr($title_class); ?>">

    <?php if (has_post_thumbnail($post_id)): ?>
    <div class="row-parallax-bg">
      <div class="parallax-wrapper">
        <div class="parallax-bg" style="background-image: url(<?php echo esc_url(get_the_post_thumbnail_url($post_id)); ?>);"></div>
      </div>
      <div class="parallax-overlay"></div>
    </div>
    <?php endif ?>

     <div class="centrize">
       <div class="v-center">
         <div class="container">
           <div class="title text-center">
             <?php if (is_search()): ?>
               <h1>
                 "<?php echo esc_attr(get_query_var('s')); ?>"
               </h1>
               <h4>
                 <?php esc_html_e('Found', 'bezel-wp'); ?>
                 <?php echo $searchquery->found_posts ?>
                 <?php if ($searchquery->found_posts == 1): ?>
                   <?php esc_html_e('Item', 'bezel-wp'); ?>.
                 <?php else: ?>
                   <?php esc_html_e('Items', 'bezel-wp'); ?>.
                 <?php endif ?>
               </h4>
             <?php elseif (is_category()): ?>
               <h4><?php esc_html_e('Browsing category', 'bezel-wp'); ?>:</h4>
               <h1><?php echo esc_attr(single_cat_title()); ?></h1>
             <?php elseif ( is_tag() ): ?>
               <h4><?php esc_html_e('Browsing tag', 'bezel-wp'); ?>:</h4>
               <h1><?php echo esc_attr(single_tag_title()); ?></h1>
             <?php elseif ( is_author() ): ?>
               <h4><?php esc_html_e('Posts by', 'bezel-wp'); ?>:</h4>
               <h1><?php echo esc_attr(get_the_author()); ?></h1>
             <?php elseif (is_archive()): ?>
               <?php if (is_month()): ?>
                 <h1><?php echo esc_attr(single_month_title(' ')); ?></h1>
               <?php else: ?>
                  <h1><?php echo esc_attr(single_term_title()); ?></h1>
               <?php endif ?>
             <?php else: ?>
               <h1>
                 <?php echo esc_attr($page_title); ?><span class="red-dot"></span>
               </h1>
               <h4><?php echo esc_attr($options['page_subtitle']); ?></h4>
             <?php endif ?>
           </div>
         </div>
       </div>
     </div>

  </section>

  <?php if ($options['blog_layout'] == 'grid'): ?>
    <?php get_template_part('partials/blog/grid'); ?>
  <?php else: ?>
    <section class="grey-bg">
      <div class="posts-row">
        <div class="<?php echo esc_attr($container_class); ?>">

          <?php if ($options['blog_sidebar'] == 'left'): ?>
            <div class="col-md-3 hidden-sm hidden-xs">
              <div id="sidebar">
                <?php dynamic_sidebar('blog_sidebar'); ?>
              </div>
            </div>
          <?php endif ?>

          <div class="<?php echo esc_attr($blog_col_class); ?>">

            <?php if ($the_query->have_posts()): ?>
              <div class="blog-articles">
                <?php while($the_query->have_posts()): $the_query->the_post();
                  get_template_part('partials/blog/loop-single');
                endwhile ?>
              </div>
              <?php
                echo paginate_links( array(
                  'base' => str_replace( 999999999, '%#%', esc_url( get_pagenum_link( 999999999 ) ) ),
                  'format' => '?paged=%#%',
                  'current' => max( 1, get_query_var('paged') ),
                  'total' => $the_query->max_num_pages,
                  'type'  => 'list',
                  'prev_next'   => true,
                  'prev_text'    => '<i class="hc-arrow-round-back"></i>',
                  'next_text'    => '<i class="hc-arrow-round-forward"></i>',
                ));
              ?>
              <?php wp_reset_postdata(); ?>
            <?php else: ?>
              <div class="no-posts">
                <p class="lead-text black-text"><?php esc_html_e('No results have been found.', 'bezel-wp'); ?></p>
                <p class="mt-15 mb-25"><?php esc_html_e('Want to try another search?', 'bezel-wp'); ?></p>
                <?php get_search_form(); ?>
              </div>
            <?php endif; ?>
          </div>

          <?php if ($options['blog_sidebar'] == 'right'): ?>
            <div class="col-md-3 hidden-sm hidden-xs">
              <div id="sidebar">
                <?php dynamic_sidebar('blog_sidebar'); ?>
              </div>
            </div>
          <?php endif ?>

        </div>
      </div>
    </section>
  <?php endif ?>
</article>

<?php get_footer(); ?>
