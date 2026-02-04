<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <?php wp_head(); ?>
</head>

<?php

  $nav_position_from_options = (bezel_options('nav_position')) ? bezel_options('nav_position') : 'top';
  $menu_style = (isset($post->ID)) ? bezel_meta($post->ID, 'nav_position') : '';
  $navs = array(
    'top' => 'top',
    'left' => 'aside',
    'right' => 'aside',
    'fullscreen' => 'fullscreen'
  );

  $nav_position = ( !empty( $menu_style )) ? $navs[$menu_style] : $navs[$nav_position_from_options];

?>

<body <?php body_class(); ?>>

  <?php if (bezel_options('hide_preloader')): ?>

  <div id="loader">
    <div class="centrize">
      <div class="v-center">
        <div id="mask">
          <svg class="preloader-icon" width="34" height="38" viewbox="0 0 34 38">
            <path class="preloader-path" stroke-dashoffset="0" d="M29.437 8.114L19.35 2.132c-1.473-.86-3.207-.86-4.68 0L4.153 8.114C2.68 8.974 1.5 10.56 1.5 12.28v11.964c0 1.718 1.22 3.306 2.69 4.165l10.404 5.98c1.47.86 3.362.86 4.834 0l9.97-5.98c1.472-.86 2.102-2.45 2.102-4.168V12.28c0-1.72-.59-3.306-2.063-4.166z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>

  <?php endif; ?>

  <div id="wrapper">

  <?php get_template_part('partials/header/header', $nav_position);
