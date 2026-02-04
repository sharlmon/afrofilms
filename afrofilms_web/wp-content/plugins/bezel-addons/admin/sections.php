<?php

$theme_uri = get_template_directory_uri();

/* General */
$this->sections[] = array(
  'icon'      => 'hc-settings',
  'title'     => __( 'General', 'bezel-addons' ),
  'fields'    => array(
    array(
      'id'  => 'logo_light',
      'title' => __( 'Light Logo', 'bezel-addons' ),
      'subtitle'  => __( 'Upload your .png or .jpg logo', 'bezel-addons' ),
      'type'  => 'media',
      'default' => array(
        'url' => $theme_uri . '/assets/images/logo-light.png'
      )
    ),
    array(
      'id'  => 'logo_dark',
      'title' => __( 'Logo', 'bezel-addons' ),
      'subtitle'  => __( 'Upload your .png or .jpg logo', 'bezel-addons' ),
      'type'  => 'media',
      'default' => array(
        'url' => $theme_uri . '/assets/images/logo-dark.png'
      )
    ),
    array(
      'id'       => 'navbar_animation',
      'type'     => 'switch',
      'title'    => __('Navbar Scrolling Animation', 'bezel-addons'),
      'subtitle' => __('Enable navbar transparent-to-color animation.', 'bezel-addons'),
      'default'  => true,
    ),
    array(
      'id'       => 'smooth_scroll',
      'type'     => 'switch',
      'title'    => __('Smooth Scroll', 'bezel-addons'),
      'subtitle' => __('Enable Smooth Scrolling, it\'s on!', 'bezel-addons'),
      'default'  => true,
    ),
    array(
      'id'       => 'hide_preloader',
      'type'     => 'switch',
      'title'    => __('Preloader', 'bezel-addons'),
      'subtitle' => __('Look, it\'s on!', 'bezel-addons'),
      'default'  => true,
    ),
    array(
      'id'       => 'hide_search_form',
      'type'     => 'switch',
      'title'    => __('Header Search Form', 'bezel-addons'),
      'subtitle' => __('Warning: if set to off, individual default page settings will be overridden.', 'bezel-addons'),
      'default'  => false,
    ),
    array(
      'id'       => 'hide_cart',
      'type'     => 'switch',
      'title'    => __('Header Shopping Cart', 'bezel-addons'),
      'subtitle' => __('Warning: if set to off, individual default page settings will be overridden.', 'bezel-addons'),
      'default'  => false,
    ),
    array(
      'id'      =>'google_maps_api_key',
      'type'    => 'text',
      'title'   => __('Google Maps Api Key', 'comet_addons'),
      'default' => '',
    ),
  )
);

/* Styling */
$this->sections[] = array(
  'icon'      => 'hc-brush',
  'title'     => __( 'Styling', 'bezel-addons' ),
  'fields'    => array(
    array(
      'id'    => 'primary_color',
      'type'  => 'color',
      'title' => __('Primary Color', 'bezel-addons'),
      'subtitle'  => __('Pick the primary color for the theme', 'bezel-addons'),
      'transparent' => false,
      'default' => '#00c3da'
    ),
    array(
      'id'    => 'dark_color',
      'type'  => 'color',
      'title' => __('Dark Color', 'bezel-addons'),
      'subtitle'  => __('Pick the dark color for the theme', 'bezel-addons'),
      'description' => __("It's used for dark sections, buttons, headings and navbars.", 'bezel-addons'),
      'transparent' => false,
      'default' => '#1f1f1f'
    ),
    array(
      'id'    => '_text_color',
      'type'  => 'color',
      'title' => __('Text Color', 'bezel-addons'),
      'subtitle'  => __('Pick the text color for the theme', 'bezel-addons'),
      'transparent' => false,
      'default' => '#787878'
    ),
    array(
      'id' => 'nav_position',
      'title' => __('Navbar Position', 'bezel-addons'),
      'type' => 'select',
      'options' => array(
        'top' => 'Top',
        'left' => 'Left',
        'right' => 'Right',
        'fullscreen' => 'Full Screen',
      ),
      'default' => 'top'
    ),
    array(
      'id'       => 'nav_toggle',
      'type'     => 'switch',
      'title'    => __('Navbar Toggle', 'bezel-addons'),
      'required' => array(
        array('nav_position', 'not', ''),
        array('nav_position', 'not', 'top'),
        array('nav_position', 'not', 'fullscreen'),
      ),
      'default'  => false,
    ),
    array(
      'id' => 'menu_color',
      'title' => __('Navbar Color', 'bezel-addons'),
      'type' => 'select',
      'options' => array(
        'light-menu' => 'Light',
        'dark-menu'  => 'Dark',
      ),
      'default' => 'light'
    ),
    array(
      'id'          => 'primary_font',
      'type'        => 'typography',
      'title'       => __('Primary Font', 'bezel-addons'),
      'subtitle'    => __('Select the primary font for the theme', 'bezel-addons'),
      'description' => __('Leave blank to use default theme fonts.', 'bezel-addons'),
      'google'      => true,
      'fonts'       => array('Helvetica' => 'Helvetica Neue, Helvetica'),
      'font-backup' => false,
      'color'       => false,
      'text-align'  => false,
      'subsets'     => false,
      'line-height' => false,
      'font-size'   => false,
      'output'      => '',
      'units'       =>'px',
    ),
    array(
      'id'          => 'heading_font',
      'type'        => 'typography',
      'title'       => __('Heading Font', 'bezel-addons'),
      'subtitle'    => __('Select the font for the heading tags (H1, H2, H1, H4, H5, H6)', 'bezel-addons'),
      'description' => __('Leave blank to use default theme fonts.', 'bezel-addons'),
      'google'      => true,
      'fonts'       => array('Helvetica' => 'Helvetica Neue, Helvetica'),
      'font-backup' => false,
      'color'       => false,
      'text-align'  => false,
      'subsets'     => false,
      'font-weight' => false,
      'line-height' => false,
      'font-size'   => false,
      'output'      => '',
      'units'       =>'px',
    ),
    array(
      'id'          => 'serif_font',
      'type'        => 'typography',
      'title'       => __('Serif Font', 'bezel-addons'),
      'subtitle'    => __('Select the serif font family.', 'bezel-addons'),
      'description' => __('Leave blank to use default theme fonts.', 'bezel-addons'),
      'google'      => true,
      'fonts'       => array('Helvetica' => 'Helvetica Neue, Helvetica'),
      'font-backup' => false,
      'color'       => false,
      'text-align'  => false,
      'subsets'     => false,
      'line-height' => false,
      'font-size'   => false,
      'output'      => '',
      'units'       =>'px',
    ),
    array(
      'id'          => 'cursive_font',
      'type'        => 'typography',
      'title'       => __('Cursive Font', 'bezel-addons'),
      'subtitle'    => __('Select the cursive font family.', 'bezel-addons'),
      'description' => __('Leave blank to use default theme fonts.', 'bezel-addons'),
      'google'      => true,
      'fonts'       => array('Helvetica' => 'Helvetica Neue, Helvetica'),
      'font-backup' => false,
      'color'       => false,
      'text-align'  => false,
      'subsets'     => false,
      'line-height' => false,
      'font-size'   => false,
      'output'      => '',
      'units'       =>'px',
    ),
    array(
      'id'       => 'custom_css',
      'type'     => 'ace_editor',
      'title'    => __('Custom CSS', 'bezel-addons'),
      'subtitle' => __('Paste your CSS code here.', 'bezel-addons'),
      'mode'     => 'css',
      'theme'    => 'monokai',
      'default'  => "/* Your code here */ "
    ),
  )
);

/* Social Networks */
$this->sections[] = array(
  'icon'      => 'hc-globe',
  'title'     => __( 'Social Links', 'bezel-addons' ),
  'desc'      => '',
  'fields'    => array(
    array(
      'id'       => 'hide_socials',
      'type'     => 'switch',
      'title'    => __('Show Social Icons on Navbar', 'bezel-addons'),
      'subtitle' => __('Warning: if set to off, individual default page settings will be overridden.', 'bezel-addons'),
      'default'  => true,
    ),
    array(
      'id'       => 'top_menu_icons',
      'type'     => 'select',
      'multi'    => true,
      'title'    => __('Socials on top navbar', 'bezel-addons'),
      'subtitle' => __('Select the socials that you want to show in the top navbar', 'bezel-addons'),
      'options'  => array(
        'facebook'  => __('Facebook', 'bezel-addons'),
        'twitter'   => __('Twitter', 'bezel-addons'),
        'google-plus' => __('Google Plus', 'bezel-addons'),
        'instagram' => __('Instagram', 'bezel-addons'),
        'linkedin' => __('Linkedin', 'bezel-addons'),
        'youtube' => __('Youtube', 'bezel-addons'),
        'pinterest' => __('Pinterest', 'bezel-addons'),
        'dribbble' => __('Dribbble', 'bezel-addons'),
        'github' => __('Github', 'bezel-addons'),
        'flickr' => __('Flickr', 'bezel-addons'),
        'tumblr' => __('Tumblr', 'bezel-addons'),
        'vimeo' => __('Vimeo', 'bezel-addons'),
        'vk' => __('VK', 'bezel-addons'),
      ),
      'default'  => array('facebook', 'twitter', 'instagram')
    ),
    array(
      'id'      =>'facebook',
      'type'    => 'text',
      'title'   => __('Facebook', 'bezel-addons'),
      'default' => '',
    ),
    array(
      'id'      =>'twitter',
      'type'    => 'text',
      'title'   => __('Twitter', 'bezel-addons'),
      'default' => '',
    ),
    array(
      'id'      =>'instagram',
      'type'    => 'text',
      'title'   => __('Instagram', 'bezel-addons'),
      'default' => '',
    ),
    array(
      'id'      =>'linkedin',
      'type'    => 'text',
      'title'   => __('Linkedin', 'bezel-addons'),
      'default' => '',
    ),
    array(
      'id'      =>'youtube',
      'type'    => 'text',
      'title'   => __('Youtube', 'bezel-addons'),
      'default' => '',
    ),
    array(
      'id'      =>'pinterest',
      'type'    => 'text',
      'title'   => __('Pinterest', 'bezel-addons'),
      'default' => '',
    ),
    array(
      'id'      =>'dribbble',
      'type'    => 'text',
      'title'   => __('Dribbble', 'bezel-addons'),
      'default' => '',
    ),
    array(
      'id'      =>'tumblr',
      'type'    => 'text',
      'title'   => __('Tumblr', 'bezel-addons'),
      'default' => '',
    ),
    array(
      'id'      =>'flickr',
      'type'    => 'text',
      'title'   => __('Flickr', 'bezel-addons'),
      'default' => '',
    ),
    array(
      'id'      =>'github',
      'type'    => 'text',
      'title'   => __('Github', 'bezel-addons'),
      'default' => '',
    ),
    array(
      'id'      =>'vk',
      'type'    => 'text',
      'title'   => __('VK.com', 'bezel-addons'),
      'default' => '',
    ),
    array(
      'id'      =>'google-plus',
      'type'    => 'text',
      'title'   => __('Google Plus', 'bezel-addons'),
      'default' => '',
    ),
    array(
      'id'      =>'vimeo',
      'type'    => 'text',
      'title'   => __('Vimeo', 'bezel-addons'),
      'default' => '',
    ),
  )
);

/* Portfolio */
$this->sections[] = array(
  'icon'      => 'hc-grid',
  'title'     => __( 'Portfolio', 'bezel-addons' ),
  'fields'    => array(
    array(
      'id' => 'portfolio_slug_info',
      'type' => 'info',
      'style' => 'warning',
      'desc' => __( 'Please note: changing the Portfolio Slug will change all your portfolio posts URL. Proceed with caution.', 'bezel-addons' ),
    ),
    array(
      'id'    => 'portfolio_slug',
      'title' => __('Portfolio Slug', 'bezel-addons'),
      'subtitle' => __( 'The URL slug for portfolio posts.', 'bezel-addons' ),
      'description' => __( 'Remember to update the <a href="'.admin_url('options-permalink.php').'">permalinks</a> when you change this value', 'bezel-addons' ),
      'type'  => 'text',
      'placeholder' => __( 'Default is "portfolio"', 'bezel-addons' ),
      'default' => '',
    ),
    array(
      'id'    => 'portfolio_archive',
      'title' => __('Portfolio Archive', 'bezel-addons'),
      'description' => __( 'Remember to update the <a href="'.admin_url('options-permalink.php').'">permalinks</a> when you change this value', 'bezel-addons' ),
      'type'  => 'switch',
      'default' => true,
    ),
  )
);

/* Shop */
$this->sections[] = array(
  'icon'      => 'hc-basket',
  'title'     => __( 'Shop', 'bezel-addons' ),
  'fields'    => array(
    array(
      'id'    => 'shop_sidebar',
      'title' => __('Show Sidebar on Shop Page', 'bezel-addons'),
      'type'  => 'switch',
      'default' => false,
    ),
    array(
      'id' => 'shop_columns',
      'title' => __('Number of Columns', 'bezel-addons'),
      'type' => 'select',
      'options' => array(
        '2' => '2',
        '3' => '3',
        '4' => '4',
      ),
      'default' => '3'
    ),
    array(
      'id'    => 'products_per_page',
      'title' => __('Products per Page', 'bezel-addons'),
      'type' => 'select',
      'options' => array(
        '-1'  => 'All',
        '2' => '2',
        '3' => '3',
        '4' => '4',
        '5' => '5',
        '6' => '6',
        '7' => '7',
        '8' => '8',
        '9' => '9',
        '10' => '10',
        '11' => '11',
        '12' => '12',
      ),
      'default' => '6',
      'validate' => 'numeric'
    ),
  )
);

/* 404 */
$this->sections[] = array(
  'icon'      => 'hc-alert',
  'title'     => __( '404 Page', 'bezel-addons' ),
  'fields'    => array(
    array(
      'id'  => 'error_bg_image',
      'title' => __( 'Background Image', 'bezel-addons' ),
      'type'  => 'media'
    ),
    array(
      'id'    => 'error_title',
      'title' => __('Error Page Title', 'bezel-addons'),
      'type'  => 'text',
      'default' => __('Oh no! There was an error.', 'bezel-addons')
    ),
    array(
      'id'    => 'error_text',
      'title' => __('Error Page Text', 'bezel-addons'),
      'type'  => 'textarea',
      'default' => __('We couldn’t find the page you were looking for.', 'bezel-addons')
    ),
  )
);

/* Footer */
$this->sections[] = array(
  'icon'      => 'hc-photos',
  'title'     => __( 'Footer', 'bezel-addons' ),
  'fields'    => array(
    array(
      'id'  => 'footer_text',
      'title' => __( 'Copyright Text', 'bezel-addons' ),
      'type'  => 'editor',
      'default' => '&copy; '.date('Y').' '. get_bloginfo('name').'. All rights reserved.',
      'args'    => array(
        'wpautop'       => false,
        'media_buttons' => false,
        'textarea_rows' => 6,
        'teeny'         => true,
        'quicktags'     => false,
      )
    )
  )
);

/* Theme Support */
$this->sections[] = array(
  'icon'      => 'hc-help-buoy',
  'title'     => __( 'Theme Support', 'bezel-addons' ),
  'desc'      => '',
  'fields'    => array(
    array(
      'id'       => 'bezel_support',
      'type'     => 'raw',
      'desc'     => __('Here you can read the theme documentation and watch video tutorials. If you do not find an answer to your problem, submit a ticket.', 'bezel-addons'),
      'content'  => '<a target="_blank" href="http://bit.ly/BezelDocs" class="button button-primary">Get Theme Support</a>',
      'full_width' => true
    ),
  )
);

?>
