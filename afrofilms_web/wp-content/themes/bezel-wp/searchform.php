<!-- Search Form -->
<form class="search-form" action="<?php echo esc_url(home_url('/')); ?>" method="get">
  <input type="search" required="required" name="s" placeholder="<?php esc_html_e('Search and hit enter', 'bezel-wp'); ?>" class="form-control" value="<?php echo get_search_query(); ?>">
</form>
<!-- End Search Form -->
