<?php

class BezelMetaboxes{

  function __construct(){
    $this->bezel_metaboxes();
  }

  function bezel_metaboxes(){
    add_action('add_meta_boxes', array($this, 'bezel_add_meta_boxes'));
    add_action('save_post', array($this, 'save_meta_boxes'));
  }

  public function bezel_add_meta_boxes(){
    $this->bezel_add_meta_box('blog_options', 'Blog Options', array('page'));
    $this->bezel_add_meta_box('page_options', 'Page Options', array('page'));
    $this->bezel_add_meta_box('post_options', 'Post Options', array('post'));
    $this->bezel_add_meta_box('post_featured', 'Featured Post', array('post'), 'side');
    $this->bezel_add_meta_box('portfolio_options', 'Portfolio Options', array('portfolio'));
  }

  public function bezel_add_meta_box($id, $label, $post_type, $context = 'normal'){
    add_meta_box('bezel_' . $id, $label, array(&$this, $id), $post_type, $context);
  }

  public function save_meta_boxes($post_id){
    if( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
    foreach($_POST as $key => $value) {
      if(strstr($key, 'bezel_')) {
        update_post_meta($post_id, $key, $value);
      }
    }
  }

  public function blog_options(){
    $output = '<div id="bezel_metabox">';

    $output .= '<div id="bezel_metabox_tabs">';
    $output .= '<ul class="nav nav-pills nav-stacked nav-tabs" role="tablist">';
    $output .= '<li class="active"><a data-toggle="tab" href="#bezel-options-general"><i class="ti-settings"></i>'. esc_html__('General', 'bezel-wp').'</a></li>';
    $output .= '</ul>';
    $output .= '</div>';

    $output .= '<div id="bezel_metabox_content" class="tab-content">';
    $output .= '<div role="tabpanel" class="tab-pane active" id="bezel-options-general">';

    $output .= $this->select(
      'blog_layout',
      esc_html__('Blog Layout', 'bezel-wp'),
      array(
        'default'   => 'Default',
        'grid'      => 'Grid'
      )
    );

    $output .= $this->select(
      'blog_sidebar',
      esc_html__('Sidebar Position', 'bezel-wp'),
      array(
        'off'  => 'Off',
        'right'  => 'Right',
        'left'  => 'Left',
      )
    );

    $output .= $this->select(
      'grid_columns',
      esc_html__('Grid Columns', 'bezel-wp'),
      array(
        'three-col'  => '3',
        'two-col'  => '2',
        'four-col'  => '4',
      )
    );

    $output .= $this->text(
      'page_title',
      esc_html__('Page Title', 'bezel-wp'),
      esc_html__('If empty default page title will be used.', 'bezel-wp')
    );

    $output .= $this->text(
      'page_subtitle',
      esc_html__('Page Subtitle', 'bezel-wp')
    );

    $output .= '</div>';
    $output .= '</div>';
    $output .= '</div>';

    echo $output;
  }

  public function page_options(){

    $menus = get_terms( 'nav_menu', array( 'hide_empty' => true ) );
    $menus_array = array('' => 'Default');
    foreach ($menus as $menu) {
      $menus_array[$menu->term_id] = $menu->name;
    }

    $output = '<div id="bezel_metabox">';

    $output .= '<div id="bezel_metabox_tabs">';
    $output .= '<ul class="nav nav-pills nav-stacked nav-tabs" role="tablist">';
    $output .= '<li class="active"><a data-toggle="tab" href="#bezel-options-title"><i class="ti-announcement"></i>'. esc_html__('Title', 'bezel-wp').'</a></li>';
    $output .= '<li><a data-toggle="tab" href="#bezel-options-layout"><i class="ti-layout"></i>'. esc_html__('Layout', 'bezel-wp').'</a></li>';
    $output .= '<li><a data-toggle="tab" href="#bezel-options-header"><i class="ti-layout-tab-window"></i>'. esc_html__('Header', 'bezel-wp').'</a></li>';
    $output .= '<li><a data-toggle="tab" href="#bezel-options-menu"><i class="ti-menu"></i>'. esc_html__('Menu', 'bezel-wp').'</a></li>';
    $output .= '<li><a data-toggle="tab" href="#bezel-options-footer"><i class="ti-layout-media-overlay-alt"></i>'. esc_html__('Footer', 'bezel-wp').'</a></li>';
    $output .= '</ul>';
    $output .= '</div>';

    $output .= '<div id="bezel_metabox_content" class="tab-content">';

    /* Title */
    $output .= '<div role="tabpanel" class="tab-pane active" id="bezel-options-title">';
    $output .= $this->select(
      'show_page_title',
       esc_html__('Show Page Title?', 'bezel-wp'),
      array(
        'no'  => 'No',
        'yes'  => 'Yes',
      )
    );

    $output .= $this->select(
      'page_title_style',
       esc_html__('Title Area Style', 'bezel-wp'),
      array(
        ''  => 'Simple',
        'dark-bg' => 'Simple (Dark)',
        'parallax-section'  => 'Parallax',
      )
    );

    $output .= $this->upload(
      'title_bg',
       esc_html__('Background Image', 'bezel-wp')
    );

    $output .= $this->text(
      'page_title',
       esc_html__('Page Title', 'bezel-wp'),
       esc_html__('If empty default page title will be used.', 'bezel-wp')
    );

    $output .= $this->text(
      'page_subtitle',
       esc_html__('Page Subtitle', 'bezel-wp')
    );

    $output .= $this->select(
      'title_text_align',
       esc_html__('Text Align', 'bezel-wp'),
      array(
        'text-center' => 'Center',
        'text-left'  => 'Left',
        'text-right'  => 'Right'
      )
    );

    $output .= $this->select(
      'title_text_color',
       esc_html__('Text Color', 'bezel-wp'),
      array(
        ''  => 'Light',
        'dark' => 'Dark',
      )
    );
    $output .= '</div>';

    /* Layout */
    $output .= '<div role="tabpanel" class="tab-pane" id="bezel-options-layout">';
    $output .= $this->select(
      'page_layout',
      esc_html__('Page Layout', 'bezel-wp'),
      array(
        '' => 'Default',
        'boxed' => 'Boxed',
        'fixed' => 'Fixed Lateral Background',
        'fullpage' => 'Full Page Scroll',
      )
    );
    $output .= '</div>';

    /* Header */
    $output .= '<div role="tabpanel" class="tab-pane" id="bezel-options-header">';
    $output .= $this->select(
      'show_cart',
      esc_html__('Show Shopping Cart?', 'bezel-wp'),
      array(
        'no'  => 'No',
        'yes'  => 'Yes',
      )
    );

    $output .= $this->select(
      'show_search',
      esc_html__('Show Search Form?', 'bezel-wp'),
      array(
        'no'  => 'No',
        'yes'  => 'Yes',
      )
    );

    $output .= $this->select(
      'show_socials',
      esc_html__('Show Social Icons?', 'bezel-wp'),
      array(
        'yes'  => 'Yes',
        'no'  => 'No',
      )
    );
    $output .= '</div>';

    /* Menu */
    $output .= '<div role="tabpanel" class="tab-pane" id="bezel-options-menu">';

    $output .= $this->select(
      'nav_position',
      esc_html__('Nav Position', 'bezel-wp'),
      array(
        '' => 'Default',
        'top' => 'Top',
        'left' => 'Left',
        'right' => 'Right',
        'fullscreen' => 'Full Screen',
      )
    );

    $output .= $this->select(
      'aside_style',
      esc_html__('Aside Navigation Style', 'bezel-wp'),
      array(
        '' => 'Fixed',
        'aside-hidden' => 'With Toggle Button',
      )
    );

    $output .= $this->select(
      'menu_id',
      esc_html__('Menu', 'bezel-wp'),
      $menus_array
    );

    $output .= $this->select(
      'menu_alignment',
      esc_html__('Menu Alignment', 'bezel-wp'),
      array(
        '' => 'Center',
        'right-aligned-menu' => 'Right',
        'left-aligned-menu' => 'Left',
      )
    );

    $output .= $this->select(
      'menu_color',
      esc_html__('Menu Color', 'bezel-wp'),
      array(
        '' => 'Default',
        'light-menu' => 'Light',
        'dark-menu' => 'Dark'
      )
    );
    $output .= '</div>';

    /* Footer */
    $output .= '<div role="tabpanel" class="tab-pane" id="bezel-options-footer">';
    $output .= $this->select(
      'show_footer',
      esc_html__('Show Default Footer With Widgets?', 'bezel-wp'),
      array(
        'yes'  => 'Yes',
        'no'  => 'No',
      )
    );
    $output .= $this->select(
      'footer_color',
      esc_html__('Footer Color', 'bezel-wp'),
      array(
        ''  => 'Light',
        'dark-footer'  => 'Dark',
      )
    );
    $output .= '</div>';

    $output .= '</div>';
    $output .= '</div>';

    echo $output;
  }

  public function post_options(){
    $output = '<div id="bezel_metabox">';

    $output .= '<div id="bezel_metabox_tabs">';
    $output .= '<ul class="nav nav-pills nav-stacked nav-tabs" role="tablist">';
    $output .= '<li class="active"><a data-toggle="tab" href="#bezel-options-general"><i class="ti-settings"></i>'. esc_html__('General', 'bezel-wp').'</a></li>';
    $output .= '</ul>';
    $output .= '</div>';

    $output .= '<div id="bezel_metabox_content" class="tab-content">';
    $output .= '<div role="tabpanel" class="tab-pane active" id="bezel-options-general">';

    $output .= $this->select(
      'post_sidebar',
      esc_html__('Sidebar Position', 'bezel-wp'),
      array(
        'off'  => 'Off',
        'right'  => 'Right',
        'left'  => 'Left',
      )
    );

    $output .= '</div>';
    $output .= '</div>';
    $output .= '</div>';

    echo $output;
  }

  public function portfolio_options(){

    $output = '<div id="bezel_metabox">';

    $output .= '<div id="bezel_metabox_tabs">';
    $output .= '<ul class="nav nav-pills nav-stacked nav-tabs" role="tablist">';
    $output .= '<li class="active"><a data-toggle="tab" href="#bezel-options-general"><i class="ti-settings"></i>'. esc_html__('General', 'bezel-wp').'</a></li>';
    $output .= '</ul>';
    $output .= '</div>';

    $output .= '<div id="bezel_metabox_content" class="tab-content">';

    /* General */
    $output .= '<div role="tabpanel" class="tab-pane active" id="bezel-options-general">';
    $output .= $this->select(
      'show_portfolio_title',
      esc_html__('Show Page Title?', 'bezel-wp'),
      array(
        'yes'  => 'Yes',
        'no'  => 'No',
      )
    );
    $output .= $this->upload(
      'portfolio_title_bg',
      esc_html__('Header Background Image', 'bezel-wp')
    );
    $output .= '</div>';

    $output .= '</div>';
    $output .= '</div>';

    echo $output;
  }

  public function post_featured(){
    $output = $this->select(
      'featured_post',
      esc_html__('Mask this post as featured?', 'bezel-wp'),
      array(
        'no' => 'No',
        'yes' => 'Yes',
      )
    );

    echo $output;
  }

  public function text($id, $label, $help = ''){
    global $post;

    return '<div class="bezel_field" id="bezel_'.$id.'_field">
      <label for="bezel_'.$id.'">'. $label.'</label>
      <div class="field">
        <input type="text" id="bezel_'. $id .'" name="bezel_'. $id .'" value="'. esc_attr(get_post_meta($post->ID, 'bezel_' . $id, true)).'">
          <span class="help-line">'. $help.'</span>
      </div>
    </div>';
  }

  public function textarea($id, $label){
    global $post;
    return '<div class="bezel_field" id="bezel_'. $id.'_field">
        <label for="bezel_'. $id.'">'. $label .'</label>
        <div class="field">
          <textarea id="bezel_'. $id.'" name="bezel_'. $id.'">'. esc_attr(get_post_meta($post->ID, 'bezel_' . $id, true)).'</textarea>
        </div>
      </div>';
  }

  public function select($id, $label, $options){
    global $post;
    $output = '<div class="bezel_field" id="bezel_'. $id .'_field">';
    $output .= '<label for="bezel_'. $id .'">'. $label .'</label>';
    $output .= '<div class="field">';
    $output .= '<select id="bezel_'. $id.'" name="bezel_'. $id.'">';
    foreach ($options as $key => $option) {
      if(get_post_meta($post->ID, 'bezel_' . $id, true) == $key) {
        $selected = 'selected="selected"';
      } else {
        $selected = '';
      }
      $output .= '<option '.$selected.' value="'. $key.'">'. $option .'</option>';
    }
    $output .= '</select>';
    $output .= '</div>';
    $output .= '</div>';

    return $output;
  }

  public function radio($id, $label, $options){
    global $post;
    $output = '<div class="bezel_field" id="bezel_<?php echo $id; ?>_field">';
    $output .= '<div class="field">';
    foreach ($options as $key => $option) {
      if(get_post_meta($post->ID, 'bezel_' . $id, true) == $key) {
        $selected = 'checked="checked"';
      } else {
        $selected = '';
      }
      $output .= '<label for="bezel_'. $id .'_'. $key .'">';
      $output .= '<input type="radio" id="bezel_'.$id .'_'. $key.'" name="bezel_'. $id .'" '.$selected.' value="'.$key.'">';
      $output .= $option . '</label>';
    }
    $output .= '</div>';
    $output .= '</div>';
    return $output;
  }

  public function checkbox($id, $label, $options){
    global $post;
    $output = '<div class="bezel_field" id="bezel_'. $id.'_field">';
    $output .= '<div class="field">';
    foreach ($options as $key => $option) {
      if(get_post_meta($post->ID, 'bezel_' . $id, true) == $key) {
        $selected = 'checked="checked"';
      } else {
        $selected = '';
      }
      $output .= '<label for="bezel_'. $id .'_'. $key.'">';
      $output .= '<input type="checkbox" id="bezel_'.$id .'_'. $key.'" name="bezel_'. $id .'" '.$selected.' value="'.$key.'">';
      $output .= $option . '</label>';
    }
    $output .= '</div>';
    $output .= '</div>';
    return $output;
  }

  public function upload($id, $label){
    global $post;
    return '<div class="bezel_field" id="bezel_'. $id .'_field">
      <label for="bezel_'. $id.'">'. $label .'</label>
      <div class="field upload_field">
        <input type="text" id="bezel_'. $id.'" name="bezel_'. $id.'" value="'. esc_attr(get_post_meta($post->ID, 'bezel_' . $id, true)).'">
        <button class="button upload_button" type="button">'. esc_html__('Browse', 'bezel-wp') .'</button>
      </div>
    </div>';
  }

}

$metaboxes = new BezelMetaboxes;

?>
