<article id="post-<?php echo esc_attr(get_the_id()); ?>" <?php post_class('side-post'); ?>>
  <?php if (has_post_thumbnail(get_the_id())): ?>
    <div class="side-post-image">
      <div class="post-category">
        <?php
          $cat = get_the_category(get_the_id());
          if ($cat) {
            echo '<a href="'.get_category_link($cat[0]->term_id ).'" rel="category">'.$cat[0]->cat_name.'</a>';
          }
        ?>
      </div>
      <a href="<?php echo esc_url(get_the_permalink($post->ID)) ?>">
        <figure>
          <img class="thumb-placeholder" src="<?php echo esc_url(get_the_post_thumbnail_url($post->ID)); ?>" alt="<?php echo esc_attr(get_the_title()) ?>">
        </figure>
      </a>
    </div>
  <?php endif; ?>
  <div class="side-post-content">
    <div class="post-content-wrapper">
      <div class="post-info">
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
      </div>
      <div class="post-title">
        <h3><a href="<?php esc_url(the_permalink()); ?>"><?php echo esc_attr( get_the_title() ); ?></a></h3>
      </div>
      <div class="post-body">
        <?php if (get_post_format() == 'quote'): ?>
          <blockquote>
        <?php endif ?>
            <?php
              if (has_post_thumbnail(get_the_id())) {
                echo bezel_excerpt(25);
              } else {
                the_excerpt();
              }
            ?>
        <?php if (get_post_format() == 'quote'): ?>
          </blockquote>
        <?php endif ?>
      </div>
      <div class="post-author">
        <?php echo get_avatar( get_the_author_meta('user_email'), $size = '50'); ?>
        <a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' )) ?>"><?php _e( 'by', 'bezel-wp' ) ?> <?php echo get_the_author(); ?></a>
      </div>
    </div>
  </div>
</article>
