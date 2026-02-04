<?php
if ( post_password_required() ) {
  return;
}
?>
<!-- Comments -->
<div id="comments">

  <?php if ( have_comments() ) : ?>

  <h5 class="upper">
    <?php
      printf( _n( 'One comment', '%1$s comments', get_comments_number(), 'bezel-wp' ),
      number_format_i18n( get_comments_number() ), get_the_title() );
    ?>
  </h5>

  <ul class="comments-list">
    <?php wp_list_comments(array('callback'  => 'bezel_comments')); ?>
  </ul>

  <?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : ?>
  <ul id="comments-pagination" class="nav nav-pills">
    <li class="nav-prev"><?php previous_comments_link('<i class="ti-arrow-left"></i>'); ?></li>
    <li class="nav-next"><?php next_comments_link('<i class="ti-arrow-right"></i>'); ?></li>
  </ul>
  <?php endif;?>

  <?php if ( ! comments_open() ) : ?>
  <p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'bezel-wp' ); ?></p>
  <?php endif; ?>

  <?php endif;?>
</div>

<?php
  $args = array(
    'id_form' => 'form-comments',
    'id_submit' => 'submit-btn',
    'comment_notes_before' => '',
    'comment_notes_after' => '',
    'comment_field' => '<div class="form-group"><textarea name="comment" id="comment-field" class="form-control" placeholder="'. esc_html__('Comment', 'bezel-wp').'"></textarea></div>',
    'fields' => apply_filters( 'comment_form_default_fields', array(
      'author'  =>  '<div class="form-double">'.
                    '<div class="form-group">'.
                    '<input name="author" type="text" class="form-control" placeholder="'. esc_html__('Name', 'bezel-wp').'"></div>',
      'email'   =>  '<div class="form-group last">'.
                    '<input name="email" type="text" class="form-control" placeholder="'. esc_html__('Email', 'bezel-wp').'"></div>'.
                    '</div>',
      'url'     => ''
    )),
    'title_reply'       => wp_kses( __( '<h5 class="upper">Leave a comment</h5>', 'bezel-wp' ), array('h5' => array('class' => array()))),
    'title_reply_to'    => wp_kses( __( '<h5>Leave a comment to %s</h5>', 'bezel-wp' ), array('h5' => array())),
    'cancel_reply_link' =>  esc_html__( 'Cancel Reply', 'bezel-wp' ),
    'label_submit'      =>  esc_html__( 'Post Comment', 'bezel-wp' ),
  );
  comment_form($args);
?>
<!-- End Comments -->
