<?php
get_header();
$bg_image = bezel_options('error_bg_image');
$section_class = (isset($bg_image['url']) && $bg_image['url'] != '') ? 'parallax-section' : 'dark-bg';

?>

  <section class="height-100 <?php echo esc_attr($section_class); ?>">
    <?php if (isset($bg_image['url']) && $bg_image['url'] != ''): ?>
      <div class="row-parallax-bg">
        <div class="parallax-wrapper">
          <div class="parallax-bg" style="background-image: url(<?php echo esc_url($bg_image['url']); ?>);"></div>
        </div>
        <div class="parallax-overlay"></div>
      </div>
    <?php else: ?>
      <div id="particle-canvas" data-dot-color="<?php echo esc_attr(bezel_options('primary_color')); ?>" data-line-color="#2f2f2f"></div>
    <?php endif ?>
      <div class="centrize">
        <div class="v-center">
          <div class="container">
            <div class="error-page">
              <div class="title">
                <h1 class="colored-text">404</h1>
                <h2><?php echo esc_attr(bezel_options('error_title')); ?></h2>
                <h4><?php echo esc_attr(bezel_options('error_text')); ?></h4>
              </div>
              <div class="inline-form mb-50">
                <?php get_search_form(); ?>
              </div>
              <a class="btn btn-color" href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Back to the home', 'bezel-wp'); ?></a>
            </div>
          </div>
        </div>
      </div>
  </section>
<?php get_footer(); ?>
