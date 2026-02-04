<?php

function bezel_iconpicker_hodyicons($icons){
  $hody_icons = array();

  $file = BEZEL_ADDONS_PATH . '/vc/hody-icons.json';
  $icons_array = json_decode(file_get_contents($file), true);
  foreach ($icons_array as $key => $value) {
    $hody_icons[] = array($value => $value);
  }

  return array_merge( $icons, $hody_icons );
}

add_filter('vc_iconpicker-type-hodyicons', 'bezel_iconpicker_hodyicons');

function bezel_iconpicker_hodyicons_animated($icons){
  $hody_icons_animated = array();

  $file = BEZEL_ADDONS_PATH . '/vc/hody-icons-animated.json';
  $icons_array = json_decode(file_get_contents($file), true);
  foreach ($icons_array as $key => $value) {
    $hody_icons_animated[] = array('hca-' . $value => $value);
  }

  return array_merge( $icons, $hody_icons_animated );
}

add_filter('vc_iconpicker-type-hodyicons-animated', 'bezel_iconpicker_hodyicons_animated');
