<?php
global $wp_query;

$post_id = bezel_blog_page_id();
$options = bezel_blog_page_opts($post_id);

if (is_home() || is_archive() || is_category()) {
  $the_query = $wp_query;
} else{
  $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
  $args = array('post_type' => 'post', 'posts_per_page' => $wp_query->max_num_pages, 'paged' => $paged);
  $the_query = new WP_Query($args);
}

$blog_col_class = 'inner-row';

if ($options['blog_sidebar'] != 'off') {
  $blog_col_class = 'col-md-9';
}

if (get_query_var('s')) {
  $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
  $the_query = new WP_Query(array(
    's' => esc_attr(get_query_var('s')),
    'paged' => $paged,
    'post_type' => array('post', 'product', 'portfolio')
  ));
}

$grid_columns = bezel_meta($post_id, 'grid_columns');
$container_class = (!isset($options['blog_sidebar']) || $options['blog_sidebar'] == 'off') ? 'container': 'container-fluid';

?>
<section class="grey-bg">
  <div class="<?php echo esc_attr($container_class); ?>">
    <?php if ($options['blog_sidebar'] == 'left'): ?>
      <div class="col-md-3 hidden-sm hidden-xs">
        <div id="sidebar">
          <?php dynamic_sidebar('blog_sidebar'); ?>
        </div>
      </div>
    <?php endif ?>
    <div class="<?php echo esc_attr($blog_col_class); ?>">
      <div class="grid-posts-wrapper <?php echo esc_attr($grid_columns); ?>">
        <?php if ($the_query->have_posts()): ?>
          <?php while($the_query->have_posts()): $the_query->the_post(); ?>
            <?php
              $additional_class = (get_post_format() == 'quote') ? 'dark-bg': '';
              if (get_post_format() == 'link') {
                $additional_class = 'colored-bg';
              }
            ?>
            <article id="post-<?php echo esc_attr(get_the_id()); ?>" <?php post_class('card-post'); ?>>
              <div class="card-post-wrapper <?php echo esc_attr($additional_class); ?>">
                <?php if (get_post_format() == 'image'): ?>
                  <img src="<?php echo esc_url(get_the_post_thumbnail_url(get_the_id(), 'bezel_medium')) ?>" alt="<?php echo esc_attr(get_the_title()); ?>" class="thumb-placeholder">
                <?php endif; ?>
                <?php if (get_post_format() != 'quote' && get_post_format() != 'link'): ?>
                  <div class="card-post-image">
                    <div class="post-category">
                      <?php
                        $cat = get_the_category(get_the_id());
                        if ($cat) {
                          echo '<a href="'.get_category_link($cat[0]->term_id ).'" rel="category">'.$cat[0]->cat_name.'</a>';
                        }
                      ?>
                    </div>
                    <?php if (get_post_format() != 'image'): ?>
                      <a href="<?php echo esc_url(get_the_permalink()); ?>">
                        <?php the_post_thumbnail('bezel_small'); ?>
                      </a>
                    <?php endif; ?>
                  </div>
                <?php endif; ?>
                <div class="card-post-content">
                  <?php if (get_post_format() == 'quote' || get_post_format() == 'link'): ?>
                    <div class="card-post-icon">
                      <i class="hc-<?php echo esc_attr(get_post_format()); ?>"></i>
                    </div>
                  <?php endif ?>
                  <div class="post-body">
                    <?php if (get_post_format() != 'quote' && get_post_format() != 'link'): ?>
                      <h3><a href="<?php esc_url(the_permalink()); ?>"><?php echo esc_attr( get_the_title() ); ?></a></h3>
                    <?php endif ?>
                    <?php if (get_post_format() == 'quote' || get_post_format() == 'link'): ?>
                      <blockquote>
                        <p class="serif-font"><?php echo bezel_excerpt(20); ?></p>
                      </blockquote>
                    <?php else: ?>
                      <?php echo bezel_excerpt(25); ?>
                    <?php endif ?>
                  </div>
                  <div class="post-footer">
                    <h6>
                      <span>
                        <i class="hc-clock"></i>
                        <span class="post-date"><a href="<?php esc_url(the_permalink()); ?>"><?php the_time('M d, Y'); ?></a></span>
                      </span>
                      <?php if (has_category()): ?>
                        <span>
                          <?php _e( 'By', 'bezel-wp' ) ?>
                          <a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' )) ?>"><?php echo get_the_author(); ?></a>
                        </span>
                      <?php endif ?>
                    </h6>
                  </div>
                </div>
              </div>
            </article>
          <?php endwhile ?>
      </div>
    </div>
      <?php else: ?>
        <div class="no-posts full">
          <p class="lead-text black-text"><?php esc_html_e('No results have been found.', 'bezel-wp'); ?></p>
          <p class="mt-15 mb-25"><?php esc_html_e('Want to try another search?', 'bezel-wp'); ?></p>
          <?php get_search_form(); ?>
        </div>
      <?php endif; ?>
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
  </div>
</section>
