<header class="fs-menu-wrapper">
  <div class="container">
    <div class="fs-header-wrapper">
      <div class="logo">
        <a href="<?php echo esc_url(home_url('/')); ?>">
          <?php if (class_exists('bezel_settings_Redux_Framework_config')): ?>
            <?php if (bezel_options('logo_dark')): ?>
              <?php $logo_dark = bezel_options('logo_dark'); ?>
              <img src="<?php echo esc_url($logo_dark['url']); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>">
            <?php endif ?>
          <?php else: ?>
            <span class="bezel-site-name"><?php echo esc_attr(get_bloginfo('name')); ?></span>
          <?php endif ?>
        </a>
      </div>
      <div class="toggle-fs-menu" tabindex="0" aria-label="Menu" role="button" aria-controls="navigation">
        <div class="hamburger">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="fullscreen-menu">
      <div class="centrize">
        <div class="v-center">
          <div class="container">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
