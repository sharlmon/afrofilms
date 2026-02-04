<?php

get_header();

if (have_posts()) : the_post();

$page_layout = (bezel_meta($post->ID, 'page_layout') != '') ? bezel_meta($post->ID, 'page_layout') : '';
$title_class = (bezel_meta($post->ID, 'page_title_style') != '') ? bezel_meta($post->ID, 'page_title_style') : 'grey-bg' ;
$text_align = (bezel_meta($post->ID, 'title_text_align') != '') ? bezel_meta($post->ID, 'title_text_align') : 'text-center';
$text_transform = (bezel_meta($post->ID, 'title_text_transform') != '') ? bezel_meta($post->ID, 'title_text_transform') : '';
$text_color = (bezel_meta($post->ID, 'title_text_color') != '') ? bezel_meta($post->ID, 'title_text_color') : '';
$page_title = (bezel_meta($post->ID, 'page_title') != '') ? bezel_meta($post->ID, 'page_title') : get_the_title($post->ID);
$page_subtitle = (bezel_meta($post->ID, 'page_subtitle') != '') ? bezel_meta($post->ID, 'page_subtitle') : '';
if ($text_color == 'dark') {
  $title_class .= ' text-dark';
}

?>

<article id="<?php echo esc_html($post->post_name); ?>-<?php echo esc_attr($post->ID); ?>" class="page-single">

  <?php if (bezel_meta($post->ID, 'show_page_title') != 'no'): ?>
  <section class="page-title <?php echo esc_attr($title_class); ?>">

    <?php if (bezel_meta($post->ID, 'page_title_style') != '' && bezel_meta($post->ID, 'page_title_style') == 'parallax-section'): ?>
    <div class="row-parallax-bg">
      <div class="parallax-wrapper">
        <div class="parallax-bg" style="background-image: url(<?php echo esc_url(bezel_meta($post->ID, 'title_bg')); ?>);">
      </div>
    </div>
    <div class="parallax-overlay"></div>
    <?php endif ?>

      <div class="centrize">
        <div class="v-center">
          <div class="container">
            <div class="title <?php echo esc_attr($text_align); ?>">
              <h4 class="upper"><?php echo esc_attr($page_subtitle); ?></h4>
              <h1><?php echo esc_attr($page_title); ?></h1>
            </div>
          </div>
        </div>
      </div>
 	</section>
  <?php endif; ?>

  <?php if ($page_layout == 'fixed'): ?>
    <div class="fixed-bg-section">
      <div class="side-background hidden-xs hidden-sm">
        <div class="col-md-5 img-side img-left fixed-image">
          <div class="img-holder">
            <img class="bg-img" src="<?php echo esc_url(the_post_thumbnail_url()); ?>" alt="">
          </div>
        </div>
      </div>

      <div class="col-md-7 col-md-offset-5">
        <div class="row">
  <?php elseif ($page_layout == 'fullpage'): ?>
    <div id="fullpage">
  <?php endif; ?>

          <?php

            $the_content = get_the_content();

            if ( defined( 'WPB_VC_VERSION' ) ) {
              if(!strpos($the_content,'vc_row')){
                $the_content = '[vc_row][vc_column width="1/1"]'.$the_content.'[/vc_column][/vc_row]';
              }
            } else{
              $the_content = '<section><div class="container">'.$the_content.'</div></section>';
            }

            $the_content = apply_filters("the_content",$the_content);

            echo $the_content;

          ?>

          <?php if (comments_open() || get_comments_number()): ?>
            <section>
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-md-offset-2">
                    <?php comments_template(); ?>
                  </div>
                </div>
              </div>
            </section>
          <?php endif ?>

  <?php if ($page_layout == 'fixed'): ?>
        </div>
      </div>
    </div>
  <?php elseif ($page_layout == 'fullpage'): ?>
    </div>
  <?php endif; ?>

</article>

<?php

endif;

get_footer();
