<?php

get_header();

if (have_posts()) : the_post();

$show_title = bezel_meta($post->ID, 'show_portfolio_title');
$style = (bezel_meta($post->ID, 'portfolio_title_bg') != '') ? 'parallax-section' : 'grey-bg' ;

$project_category  = '';
$cats = get_the_terms(get_the_id(), 'portfolio_category');
if($cats){
  foreach($cats as $cat) {
    $project_category  .= $cat->name . ', ';
  }
  $project_category = rtrim($project_category, ', ');
}
?>

<article id="<?php echo esc_html($post->post_name); ?>" class="page-single">
  <?php if (!empty($show_title) && $show_title != 'no'): ?>
  <section class="page-title <?php echo esc_attr($style); ?>">

    <?php if ($style == 'parallax-section'): ?>
      <div class="row-parallax-bg">
        <div class="parallax-wrapper">
          <div class="parallax-bg" style="background-image: url(<?php echo esc_url(bezel_meta($post->ID, 'portfolio_title_bg')); ?>);"></div>
        </div>
        <div class="parallax-overlay"></div>
      </div>
    <?php endif ?>

      <div class="centrize">
        <div class="v-center">
          <div class="container">
            <div class="title text-center">
              <h4 class="upper"><?php echo esc_attr($project_category); ?></h4>
              <h1><?php the_title(); ?></h1>
            </div>
          </div>
        </div>
      </div>

    <div class="section-scrolling">
      <a href="#" id="scroll-section">
        <i class="hc-angle-down"></i>
      </a>
    </div>

  </section>
  <?php endif ?>

  <?php the_content(); ?>

  <section class="grey-bg p-0">
    <div class="container">
      <div class="projects-controller">
        <?php if (get_next_post()): ?>
          <?php $next_post = get_next_post(); ?>
          <a class="prev" href="<?php echo esc_url(get_permalink($next_post->ID)); ?>">
            <span>
              <i class="hc-arrow-round-back"></i>
              <?php esc_html_e('Previous Project', 'bezel-wp'); ?>
            </span>
          </a>
        <?php else: ?>
          <a class="prev disabled" href="#">
            <span>
              <i class="hc-arrow-round-back"></i>
              <?php esc_html_e('Previous Project', 'bezel-wp'); ?>
            </span>
          </a>
        <?php endif; ?>


        <?php if (get_previous_post()): ?>
          <?php $prev_post = get_previous_post(); ?>
          <a class="next" href="<?php echo esc_url(get_permalink($prev_post->ID)); ?>">
            <span>
              <?php esc_html_e('Next Project', 'bezel-wp'); ?>
              <i class="hc-arrow-round-forward"></i>
            </span>
          </a>
        <?php else: ?>
          <a class="next disabled" href="#">
            <span>
              <?php esc_html_e('Next Project', 'bezel-wp'); ?>
              <i class="hc-arrow-round-forward"></i>
            </span>
          </a>
        <?php endif; ?>

      </div>
    </div>
  </section>

</article>

<?php

endif;

get_footer();
