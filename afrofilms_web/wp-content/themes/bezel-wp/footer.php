<?php
$footer_color = (isset($post->ID) && bezel_meta($post->ID, 'footer_color') != '') ? bezel_meta($post->ID, 'footer_color') : '';
$active_widgets = is_active_sidebar('footer_widget_1') || is_active_sidebar('footer_widget_2') || is_active_sidebar('footer_widget_3') || is_active_sidebar('footer_widget_4');
?>
<?php if ( (isset($post->ID) && bezel_meta($post->ID, 'show_footer') !== 'no') || !isset($post->ID) ): ?>
  <footer id="footer" class="<?php echo esc_attr($footer_color); ?>">
    <?php if ($active_widgets): ?>
      <div class="footer-widgets">
        <div class="container">
          <div class="row">
            <?php if (is_active_sidebar('footer_widget_1')): ?>
              <div class="col-md-3 col-sm-6">
                <?php dynamic_sidebar('footer_widget_1'); ?>
              </div>
            <?php endif ?>
            <?php if (is_active_sidebar('footer_widget_2')): ?>
              <div class="col-md-3 col-sm-6">
                <?php dynamic_sidebar('footer_widget_2'); ?>
              </div>
            <?php endif ?>
            <?php if (is_active_sidebar('footer_widget_3')): ?>
              <div class="col-md-3 col-sm-6">
                <?php dynamic_sidebar('footer_widget_3'); ?>
              </div>
            <?php endif ?>
            <?php if (is_active_sidebar('footer_widget_4')): ?>
              <div class="col-md-3 col-sm-6">
                <?php dynamic_sidebar('footer_widget_4'); ?>
              </div>
            <?php endif ?>
          </div>
        </div>
      </div>
    <?php endif; ?>
    <?php if (bezel_options('footer_text') || bezel_check_social_icons()): ?>
      <div class="footer-copy">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <?php bezel_social_footer(); ?>
            </div>
            <div class="col-sm-6">
              <div class="copy-text">
                <?php echo wp_kses(
                  bezel_options('footer_text'),
                  array(
                    'p' => array(),
                    'strong' => array(),
                    'em' => array(),
                    'del' => array(),
                    'span' => array(
                      'style' => array(),
                    ),
                    'a' => array(
                      'href' => array(),
                      'target' => array(),
                    ),
                  )
                ); ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    <?php endif; ?>
  </footer>
<?php endif ?>

  <div id="search-modal">
    <div class="centrize">
      <div class="v-center">
        <div class="container">
          <?php get_search_form(); ?>
        </div>
      </div>
    </div>
    <a id="close-search-modal" href="#">
      <i class="hc-close"></i>
    </a>
  </div>
</div> <!-- #wrapper -->

<?php wp_footer(); ?>
</body>
</html>
