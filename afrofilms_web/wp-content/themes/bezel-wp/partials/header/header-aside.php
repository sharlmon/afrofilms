<?php

$menu_color = (isset($post->ID) && bezel_meta($post->ID, 'menu_color') != '') ? bezel_meta($post->ID, 'menu_color') : bezel_options('menu_color') ;
$menu_position = (isset($post->ID) && bezel_meta($post->ID, 'nav_position') != '') ? bezel_meta($post->ID, 'nav_position') : bezel_options('nav_position') ;

$aside_style = '';
if ( (bezel_options('nav_toggle') && count(get_post_meta($post->ID, 'bezel_aside_style')) === 0 ) || (isset($post->ID) && bezel_meta($post->ID, 'aside_style') === 'aside-hidden') ) {
  $aside_style = 'aside-hidden';
}

$menu_class = array(
  $menu_color,
  'aside-'.$menu_position,
  $aside_style
);
?>

<aside id="aside-nav" class="<?php echo trim(implode(' ', $menu_class)); ?>">
  <div class="toggle-nav" tabindex="0" aria-label="Menu" role="button" aria-controls="navigation">
    <div class="hamburger">
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div>
  </div>
  <div class="logo">
    <a href="<?php echo esc_url(home_url('/')); ?>">
      <?php if (class_exists('bezel_settings_Redux_Framework_config')): ?>
        <?php if ($menu_color != 'dark-menu' && bezel_options('logo_dark')): ?>
          <?php $logo_dark = bezel_options('logo_dark'); ?>
          <img src="<?php echo esc_url($logo_dark['url']); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>" class="logo-dark">
        <?php elseif (bezel_options('logo_light')): ?>
          <?php $logo_light = bezel_options('logo_light'); ?>
          <img src="<?php echo esc_url($logo_light['url']); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>" class="logo-light">
        <?php endif ?>
      <?php else: ?>
        <span class="bezel-site-name"><?php echo esc_attr(get_bloginfo('name')); ?></span>
      <?php endif ?>
    </a>
  </div>
  <div id="navigation">
    <?php if (has_nav_menu('primary')){
        $args = array(
          'container' => false,
          'menu_id' => 'main-menu',
          'menu_class' => 'navigation-menu nav',
          'walker'    => new Bezel_Walker_Nav_Menu()
        );

        if (isset($post->ID) && bezel_meta($post->ID, 'menu_id')) {
          $args['menu'] = bezel_meta($post->ID, 'menu_id');
        } else{
          $args['theme_location'] = 'primary';
        }

        wp_nav_menu($args);

      } elseif(current_user_can('manage_options')){ ?>
        <a class="no-menu" href="<?php echo esc_url(home_url('/wp-admin/nav-menus.php')) ?>"><?php esc_html_e('Click here to add your menu', 'bezel-wp'); ?></a>
      <?php } ?>
  </div>
</aside>
