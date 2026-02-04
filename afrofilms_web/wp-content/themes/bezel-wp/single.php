<?php

get_header();

if(have_posts()): the_post();

$sidebar = (bezel_meta($post->ID, 'post_sidebar') != '') ? bezel_meta($post->ID, 'post_sidebar') : 'off';
$blog_col_class = 'col-md-8';

if ($sidebar == 'off') {
  $blog_col_class = 'col-md-8 col-md-offset-2';
} if ($sidebar == 'left') {
  $blog_col_class = 'col-md-8 col-md-offset-1';
}

$title_class = (has_post_thumbnail()) ? 'parallax-section' : 'grey-bg';

?>

<article class="page-single">

  <section class="page-title <?php echo $title_class; ?>">
    <?php if (has_post_thumbnail()): ?>
    <div class="row-parallax-bg">
      <div class="parallax-wrapper">
        <div class="parallax-bg" style="background-image: url(<?php echo esc_url(the_post_thumbnail_url()); ?>);"></div>
      </div>
      <div class="parallax-overlay"></div>
    </div>
    <?php endif ?>
    <div class="centrize">
      <div class="v-center">
        <div class="container">
          <div class="single-post-info">
            <h6>
              <span>
                <i class="hc-clock"></i>
                <?php _e('Posted on', 'bezel-wp' ); ?>
              </span>
              <span class="post-date"><a href="<?php esc_url(the_permalink()); ?>"><?php the_time('M d, Y'); ?></a></span>
              <?php if (has_category()): ?>
                <span><?php _e( 'In', 'bezel-wp' ) ?> <?php the_category(', '); ?></span>
              <?php endif ?>
            </h6>
            <div class="title text-center">
              <h1><?php esc_attr(the_title()); ?></h1>
            </div>
            <div class="post-author">
              <?php echo get_avatar( get_the_author_meta('user_email'), $size = '50'); ?>
              <a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' )) ?>"><?php _e( 'by', 'bezel-wp' ) ?> <?php echo get_the_author(); ?></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>

  <section>
    <div class="container">

      <?php if ($sidebar == 'left'): ?>
        <div class="col-md-3 hidden-sm hidden-xs">
          <div id="sidebar">
            <?php dynamic_sidebar('blog_sidebar'); ?>
          </div>
        </div>
      <?php endif ?>

      <div class="<?php echo esc_attr($blog_col_class); ?>">
        <article <?php post_class('post-single b-0'); ?>>

          <div class="post-body">
            <?php the_content(); ?>
            <?php wp_link_pages(array('before' => '<div class="post-pages">' .  esc_html__('Pages:','bezel-wp'), 'after' => '</div>')); ?>
          </div>

          <div class="post-tags">
            <?php the_tags('','',''); ?>
          </div>

        </article>
      </div>

      <?php if ($sidebar == 'right'): ?>
        <div class="col-md-3 col-md-offset-1 hidden-sm hidden-xs">
          <div id="sidebar">
              <?php dynamic_sidebar('blog_sidebar'); ?>
            </div>
        </div>
      <?php endif ?>

    </div>
  </section>

  <?php if (comments_open(get_the_id())): ?>
    <section class="grey-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <?php comments_template(); ?>
          </div>
        </div>
      </div>
    </section>
  <?php endif; ?>

</article>



<?php

endif;
wp_reset_postdata();
get_footer();
