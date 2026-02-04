<?php

if (class_exists('WPBakeryShortCodesContainer')) {
  class WPBakeryShortCode_Bezel_Home_Slider extends WPBakeryShortCodesContainer {}
  class WPBakeryShortCode_Bezel_Home_Slide extends WPBakeryShortCodesContainer {}
  class WPBakeryShortCode_Bezel_Image_Box extends WPBakeryShortCodesContainer {}
  class WPBakeryShortCode_Bezel_Carousel extends WPBakeryShortCodesContainer {}
}

VcShortcodeAutoloader::getInstance()->includeClass( 'WPBakeryShortCode_VC_Tta_Tabs' );

if (class_exists('WPBakeryShortCode_VC_Tta_Tabs')) {
  class WPBakeryShortCode_Bezel_Tabs extends WPBakeryShortCode_VC_Tta_Tabs {}
}
