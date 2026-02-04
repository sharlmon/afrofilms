<?php

$post_id = (is_home() || is_search() || is_archive() || is_category()) ? bezel_blog_page_id() : get_the_id();

$menu_color = (isset($post_id) && bezel_meta($post_id, 'menu_color') != '') ? bezel_meta($post_id, 'menu_color') : bezel_options('menu_color') ;
$menu_alignment = (isset($post_id) && bezel_meta($post_id, 'menu_alignment') != '') ? bezel_meta($post_id, 'menu_alignment') : bezel_options('menu_alignment') ;
?>

<nav id="navbar" class="<?php echo str_replace('light-menu', '', esc_attr($menu_color)); ?>">
  <div class="navbar-wrapper">
    <div class="container">

      <div class="logo">
        <a href="<?php echo esc_url(home_url('/')); ?>">
          <?php if (class_exists('bezel_settings_Redux_Framework_config')): ?>
            <?php if (bezel_options('logo_light')): ?>
              <?php $logo_light = bezel_options('logo_light'); ?>
              <img src="<?php echo esc_url($logo_light['url']); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>" class="logo-light">
            <?php endif ?>
            <?php if (bezel_options('logo_dark')): ?>
              <?php $logo_dark = bezel_options('logo_dark'); ?>
              <img src="<?php echo esc_url($logo_dark['url']); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>" class="logo-dark">
            <?php endif ?>
          <?php else: ?>
            <span class="bezel-site-name"><?php echo esc_attr(get_bloginfo('name')); ?></span>
          <?php endif ?>
        </a>
      </div>

      <div class="menu-extras">

        <?php if (
          class_exists( 'WooCommerce' ) &&
          (
            ( isset($post_id) && bezel_meta($post_id, 'show_cart') == 'yes') ||
            ( isset($post_id) && false === bezel_meta($post_id, 'show_cart') && bezel_options('hide_cart')) ||
            ( bezel_is_woocommerce_page() ) ||
            ( !isset($post_id) && bezel_options('hide_cart') )
          )
        ): ?>
        <!-- Shopping Cart -->
        <div class="menu-item">
          <div class="cart-open">
            <a href="<?php echo esc_url( wc_get_cart_url() ); ?>">
              <i class="hc-shopping-bag"></i>
              <span class="cart-number"><?php echo WC()->cart->get_cart_contents_count(); ?></span>
            </a>
            <div class="shopping-cart">
              <?php woocommerce_mini_cart(); ?>
            </div>
          </div>
        </div>
        <?php endif ?>

        <?php if (
          ( isset($post_id) && bezel_meta($post_id, 'show_search') == 'yes') ||
          ( isset($post_id) && false === bezel_meta($post_id, 'show_search') && bezel_options('hide_search_form')) ||
          ( is_single() && bezel_options('hide_search_form') ) ||
          ( !isset($post_id) && bezel_options('hide_search_form') )
        ): ?>
        <!-- Search Form -->
        <div class="menu-item">
          <div class="open-search-form">
            <a href="#">
              <i class="hc-search"></i>
            </a>
          </div>
        </div>
        <?php endif ?>

        <?php if (
          ( isset($post_id) && bezel_meta($post_id, 'show_socials') == 'yes') ||
          ( isset($post_id) && false === bezel_meta($post_id, 'show_socials') && bezel_options('hide_socials')) ||
          ( !isset($post_id) && bezel_options('hide_socials') )
        ): ?>
        <!-- Search Form -->
        <div class="menu-item">
          <div class="header-socials">
            <ul>
              <?php
              $top_icons = bezel_options('top_menu_icons');
              if ($top_icons) {
                foreach ($top_icons as $key => $value) {
                  if ( bezel_options($value) !== '' ) {
                    echo '<li><a target="_blank" href="'.esc_url(bezel_options($value)).'"><i class="hc-'.$value.'"></i></a></li>';
                  }
                }
              }
              ?>
            </ul>
          </div>
        </div>
        <?php endif ?>

        <div class="menu-item">
          <div class="nav-toggle">
            <a class="menu-toggle" href="#">
              <div class="hamburger">
                <div class="hamburger-box">
                  <div class="hamburger-inner"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div id="navigation" class="<?php echo esc_attr($menu_alignment); ?>">
        <?php if (has_nav_menu('primary')){
            $args = array(
              'container' => false,
              'menu_id' => 'main-menu',
              'menu_class' => 'navigation-menu nav',
              'walker'    => new Bezel_Walker_Nav_Menu()
            );

            if (isset($post_id) && bezel_meta($post_id, 'menu_id')) {
              $args['menu'] = bezel_meta($post_id, 'menu_id');
            } else{
              $args['theme_location'] = 'primary';
            }

            wp_nav_menu($args);

          } elseif(current_user_can('manage_options')){ ?>
            <a class="no-menu" href="<?php echo esc_url(home_url('/wp-admin/nav-menus.php')) ?>"><?php esc_html_e('Click here to add your menu', 'bezel-wp'); ?></a>
          <?php } ?>
      </div>

    </div>
  </div>
</nav>
