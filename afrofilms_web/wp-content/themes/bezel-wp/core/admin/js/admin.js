jQuery(document).ready(function($) {
  $('.bezel-color-picker').wpColorPicker();

  $('.menu-btn-field input')
    .on('change', function(event) {
      if ($(this).is(':checked')) {
        $(this)
          .closest('.menu-item-settings')
          .find('.btn-color-field')
          .slideDown(300);
      } else {
        $(this)
          .closest('.menu-item-settings')
          .find('.btn-color-field')
          .slideUp(300);
      }
    })
    .trigger('change');

  $('#bezel-import-btn').on('click', function() {
    var importConfirm = confirm(
      'Have you installed all required plugins? Before installing demo data be sure to do a full backup incase anything goes wrong with the import. Proceed if you have done this.'
    );

    if (importConfirm) {
      $('#info-info_import').slideDown(400);

      $.post(
        ajaxurl,
        {
          action: 'bezel_import_data',
          data: '',
        },
        function(data) {
        }
      );

      var updateText = true;
      var cantClosePage = true;

      var checkImport = setInterval(function() {
        $.post(ajaxurl, { action: 'bezel_check_import' }, function(
          data,
          textStatus,
          xhr
        ) {
          var res = JSON.parse(data);
          if (res.imported == 1) {
            clearInterval(checkImport);
            cantClosePage = false;
            $('#info-info_import')
              .removeClass('redux-warning')
              .addClass('redux-success');
            $('#info-info_import p').text('Import completed. Have fun!');
          }
        });
      }, 1500);

      $(window).on('beforeunload', function(){
        if (cantClosePage) {
          return 'Do you really want to close? Demo content import is running';
        }
      });
    }
  });

  $(
    '#bezel_title_bg_field, #bezel_blog_options, #bezel_masonry_columns_field, #bezel_blog_grid_width_field'
  ).hide();

  if (!$('#page_template').length) {
    $('#bezel_blog_options').show();
  }

  $('#page_template')
    .on('change', function(event) {
      var selected = $('#page_template option:selected').val();

      if (selected == 'template-blog.php') {
        $('#bezel_blog_options').fadeIn(200);
      } else {
        $('#bezel_blog_options').hide();
      }
    })
    .trigger('change');

  $('#bezel_show_page_title')
    .on('change', function(event) {
      var selected = $('#bezel_show_page_title option:selected').val();

      if (selected !== 'yes') {
        $(
          '#bezel_page_title_style_field, #bezel_page_title_field, #bezel_page_subtitle_field, #bezel_title_text_align_field, #bezel_title_text_transform_field, #bezel_title_text_color_field'
        ).hide();
      } else {
        $(
          '#bezel_page_title_style_field, #bezel_page_title_field, #bezel_page_subtitle_field, #bezel_title_text_align_field, #bezel_title_text_transform_field, #bezel_title_text_color_field'
        ).fadeIn(200);
      }

      $('#bezel_page_title_style').trigger('change');
    })
    .trigger('change');

  $('#bezel_page_title_style')
    .on('change', function(event) {
      var selected = $('#bezel_page_title_style option:selected').val();

      if (selected == 'parallax-section' && $(this).is(':visible')) {
        $('#bezel_title_bg_field').fadeIn(200);
      } else {
        $('#bezel_title_bg_field').hide();
      }
    })
    .trigger('change');

  $('#bezel_blog_layout')
    .on('change', function(event) {
      var selected = $('#bezel_blog_layout option:selected').val();

      if (selected === 'grid') {
        $('#bezel_grid_columns_field').fadeIn(200);
      } else {
        $('#bezel_grid_columns_field').hide();
      }
    })
    .trigger('change');

  $('#bezel_page_layout')
    .on('change', function(event) {
      var selected = $('#bezel_page_layout option:selected').val();

      if (selected == 'fixed') {
        $(
          '<p class="howto">Set the featured image of the post, it will be shown as fixed background.</p>'
        ).insertAfter($(this).parents('.bezel_field'));
      } else {
        $(this).parents('.bezel_field').next('p').remove();
      }
    })
    .trigger('change');

  $('#bezel_sidebar')
    .on('change', function(event) {
      var selected = $('#bezel_sidebar option:selected').val();

      if (selected != '') {
        $('#bezel_sidebar_position_field').fadeIn(200);
      } else {
        $('#bezel_sidebar_position_field').hide();
      }
    })
    .trigger('change');

  $('#bezel_nav_position')
    .on('change', function(event) {
      var selected = $('#bezel_nav_position option:selected').val();

      if (selected != 'top' && selected != '') {
        $('#bezel_menu_alignment_field, #bezel_menu_color_field').hide();
      } else {
        $('#bezel_menu_alignment_field, #bezel_menu_color_field').fadeIn(200);
      }

      if (selected != 'left' && selected != 'right') {
        $('#bezel_aside_style_field').hide();
      } else {
        $('#bezel_aside_style_field').fadeIn(200);
      }
    })
    .trigger('change');

  var custom_uploader;

  $('body').on('click', '.upload_button', function(e) {
    e.preventDefault();
    var this_btn = $(this);

    custom_uploader = wp.media.frames.file_frame = wp.media({
      title: 'Choose Image',
      button: {
        text: 'Choose Image',
      },
      multiple: false,
    });

    custom_uploader.on('select', function() {
      attachment = custom_uploader.state().get('selection').first().toJSON();
      this_btn.prev().val(attachment.url).trigger('change');
    });

    custom_uploader.open();
  });

  $('body').on('click', '.upload_video_button', function(e) {
    e.preventDefault();
    var this_btn = $(this);

    custom_uploader = wp.media.frames.file_frame = wp.media({
      title: 'Choose Video',
      button: {
        text: 'Choose Video',
      },
      multiple: false,
      library: {
        type: 'video',
      },
    });

    custom_uploader.on('select', function() {
      attachment = custom_uploader.state().get('selection').first().toJSON();
      this_btn.prev().val(attachment.url).trigger('change');
    });

    custom_uploader.open();
  });

  function renderMenuIcons(itemId) {
    var wrapper = $('.menu-icon-container[data-menu-item-id=' + itemId + ']');

    var hodyIcons = [
      'hc-add',
      'hc-add-circle',
      'hc-alarm',
      'hc-albums',
      'hc-alert',
      'hc-american-football',
      'hc-analytics',
      'hc-aperture',
      'hc-apps',
      'hc-appstore',
      'hc-archive',
      'hc-arrow-dropdown',
      'hc-arrow-dropdown-circle',
      'hc-arrow-dropleft',
      'hc-arrow-dropleft-circle',
      'hc-arrow-dropright',
      'hc-arrow-dropright-circle',
      'hc-arrow-dropup',
      'hc-arrow-dropup-circle',
      'hc-arrow-round-back',
      'hc-arrow-round-down',
      'hc-arrow-round-forward',
      'hc-arrow-round-up',
      'hc-at',
      'hc-attach',
      'hc-backspace',
      'hc-barcode',
      'hc-baseball',
      'hc-basket',
      'hc-basketball',
      'hc-battery-charging',
      'hc-battery-dead',
      'hc-battery-full',
      'hc-beaker',
      'hc-beer',
      'hc-bicycle',
      'hc-bluetooth',
      'hc-boat',
      'hc-body',
      'hc-bonfire',
      'hc-book',
      'hc-bookmark',
      'hc-bookmarks',
      'hc-bowtie',
      'hc-briefcase',
      'hc-browsers',
      'hc-brush',
      'hc-bug',
      'hc-build',
      'hc-bulb',
      'hc-bus',
      'hc-cafe',
      'hc-calculator',
      'hc-calendar',
      'hc-call',
      'hc-camera',
      'hc-car',
      'hc-card',
      'hc-cart',
      'hc-cash',
      'hc-chatboxes',
      'hc-chatbubbles',
      'hc-checkbox',
      'hc-checkmark',
      'hc-checkmark-circle',
      'hc-clipboard',
      'hc-clock',
      'hc-close',
      'hc-close-circle',
      'hc-closed-captioning',
      'hc-cloud',
      'hc-cloud-circle',
      'hc-cloud-done',
      'hc-cloud-download',
      'hc-cloud-upload',
      'hc-cloudy',
      'hc-cloudy-night',
      'hc-code',
      'hc-code-download',
      'hc-code-working',
      'hc-cog',
      'hc-color-fill',
      'hc-color-filter',
      'hc-color-palette',
      'hc-color-wand',
      'hc-compass',
      'hc-construct',
      'hc-contact',
      'hc-contacts',
      'hc-contract',
      'hc-contrast',
      'hc-copy',
      'hc-create',
      'hc-crop',
      'hc-cube',
      'hc-cut',
      'hc-desktop',
      'hc-disc',
      'hc-document',
      'hc-done-all',
      'hc-download',
      'hc-easel',
      'hc-egg',
      'hc-euro',
      'hc-exit',
      'hc-expand',
      'hc-eye',
      'hc-eye-off',
      'hc-fastforward',
      'hc-female',
      'hc-filing',
      'hc-film',
      'hc-finger-print',
      'hc-flag',
      'hc-flame',
      'hc-flash',
      'hc-flask',
      'hc-flower',
      'hc-folder',
      'hc-folder-open',
      'hc-football',
      'hc-funnel',
      'hc-game-controller-a',
      'hc-game-controller-b',
      'hc-git-branch',
      'hc-git-commit',
      'hc-git-compare',
      'hc-git-merge',
      'hc-git-network',
      'hc-git-pull-request',
      'hc-glasses',
      'hc-globe',
      'hc-grid',
      'hc-hammer',
      'hc-hand',
      'hc-happy',
      'hc-headset',
      'hc-heart',
      'hc-help',
      'hc-help-buoy',
      'hc-help-circle',
      'hc-home',
      'hc-ice-cream',
      'hc-image',
      'hc-images',
      'hc-infinite',
      'hc-informatcircle',
      'hc-information',
      'hc-ionic',
      'hc-ionitron',
      'hc-jet',
      'hc-key',
      'hc-keypad',
      'hc-laptop',
      'hc-leaf',
      'hc-link',
      'hc-list',
      'hc-list-box',
      'hc-locate',
      'hc-lock',
      'hc-log-in',
      'hc-log-out',
      'hc-magnet',
      'hc-mail',
      'hc-mail-open',
      'hc-male',
      'hc-man',
      'hc-map',
      'hc-medal',
      'hc-medical',
      'hc-medkit',
      'hc-megaphone',
      'hc-menu',
      'hc-mic',
      'hc-mic-off',
      'hc-microphone',
      'hc-moon',
      'hc-more',
      'hc-move',
      'hc-musical-note',
      'hc-musical-notes',
      'hc-navigate',
      'hc-no-smoking',
      'hc-nodejs',
      'hc-notifications',
      'hc-notifications-off',
      'hc-nuclear',
      'hc-nutrition',
      'hc-open',
      'hc-options',
      'hc-outlet',
      'hc-paper',
      'hc-paper-plane',
      'hc-partly-sunny',
      'hc-pause',
      'hc-paw',
      'hc-people',
      'hc-person',
      'hc-person-add',
      'hc-phone-landscape',
      'hc-phone-portrait',
      'hc-photos',
      'hc-pie',
      'hc-pin',
      'hc-pint',
      'hc-pizza',
      'hc-plane',
      'hc-planet',
      'hc-play-alt',
      'hc-podium',
      'hc-power',
      'hc-pricetag',
      'hc-pricetags',
      'hc-print',
      'hc-pulse',
      'hc-qr-scanner',
      'hc-quote',
      'hc-radio',
      'hc-radio-button-off',
      'hc-radio-button-on',
      'hc-rainy',
      'hc-recording',
      'hc-reddit',
      'hc-redo',
      'hc-refresh',
      'hc-refresh-circle',
      'hc-remove',
      'hc-remove-circle',
      'hc-reorder',
      'hc-repeat',
      'hc-resize',
      'hc-restaurant',
      'hc-return-left',
      'hc-return-right',
      'hc-reverse-camera',
      'hc-rewind',
      'hc-ribbon',
      'hc-rose',
      'hc-rss',
      'hc-sad',
      'hc-sass',
      'hc-school',
      'hc-search',
      'hc-send',
      'hc-settings',
      'hc-share',
      'hc-share-alt',
      'hc-shirt',
      'hc-shopping-bag',
      'hc-shuffle',
      'hc-skip-backward',
      'hc-skip-forward',
      'hc-snow',
      'hc-speedometer',
      'hc-square',
      'hc-star',
      'hc-stats',
      'hc-stopwatch',
      'hc-subway',
      'hc-sunny',
      'hc-swap',
      'hc-switch',
      'hc-sync',
      'hc-tablet-landscape',
      'hc-tablet-portrait',
      'hc-tennisball',
      'hc-text',
      'hc-thermometer',
      'hc-thumbs-down',
      'hc-thumbs-up',
      'hc-thunderstorm',
      'hc-time',
      'hc-timer',
      'hc-train',
      'hc-transgender',
      'hc-trash',
      'hc-trending-down',
      'hc-trending-up',
      'hc-trophy',
      'hc-umbrella',
      'hc-undo',
      'hc-unlock',
      'hc-usd',
      'hc-videocam',
      'hc-volume-down',
      'hc-volume-mute',
      'hc-volume-off',
      'hc-volume-up',
      'hc-walk',
      'hc-warning',
      'hc-watch',
      'hc-water',
      'hc-wifi',
      'hc-wine',
      'hc-woman',
      'hc-accelerator',
      'hc-alarm-alt',
      'hc-anchor',
      'hc-anticlockwise',
      'hc-archive-alt',
      'hc-archive-full',
      'hc-arrow-down',
      'hc-arrow-left',
      'hc-arrow-right',
      'hc-arrow-up',
      'hc-bag',
      'hc-bag-check',
      'hc-bag-cloud',
      'hc-bag-download',
      'hc-bag-minus',
      'hc-bag-plus',
      'hc-bag-refresh',
      'hc-bag-remove',
      'hc-bag-search',
      'hc-bag-upload',
      'hc-ban',
      'hc-banknote',
      'hc-banknotes',
      'hc-basket-alt',
      'hc-basket-check',
      'hc-basket-cloud',
      'hc-basket-download',
      'hc-basket-minus',
      'hc-basket-plus',
      'hc-basket-refresh',
      'hc-basket-remove',
      'hc-basket-search',
      'hc-basket-upload',
      'hc-bath',
      'hc-battery-charge',
      'hc-battery-empty',
      'hc-battery-full-alt',
      'hc-battery-half',
      'hc-beginning-button',
      'hc-bell',
      'hc-bolt',
      'hc-book-alt',
      'hc-book-pen',
      'hc-book-pencil',
      'hc-bookmark-alt',
      'hc-calculator-alt',
      'hc-calendar-alt',
      'hc-cards-diamonds',
      'hc-cards-hearts',
      'hc-cart-alt',
      'hc-cart-check',
      'hc-cart-cloud',
      'hc-cart-content',
      'hc-cart-download',
      'hc-cart-minus',
      'hc-cart-plus',
      'hc-cart-refresh',
      'hc-cart-remove',
      'hc-cart-search',
      'hc-cart-upload',
      'hc-case',
      'hc-cd',
      'hc-cent',
      'hc-chronometer',
      'hc-clessidre',
      'hc-clock-alt',
      'hc-clockwise',
      'hc-cloud-alt',
      'hc-clubs',
      'hc-colon',
      'hc-compass-alt',
      'hc-creditcard',
      'hc-cup',
      'hc-diamond',
      'hc-diamonds',
      'hc-diapason',
      'hc-display',
      'hc-dollar',
      'hc-download-alt',
      'hc-eject-button',
      'hc-end-button',
      'hc-euro-alt',
      'hc-exclamation',
      'hc-eye-alt',
      'hc-eye-closed',
      'hc-fastforward-button',
      'hc-female-alt',
      'hc-flag-alt',
      'hc-floppydisk',
      'hc-folder-alt',
      'hc-folder-multiple',
      'hc-franc',
      'hc-gear',
      'hc-geolocalize',
      'hc-geolocalize-alt',
      'hc-gift',
      'hc-globe-alt',
      'hc-graph',
      'hc-graph-2',
      'hc-graph-3',
      'hc-graph-decrease',
      'hc-graph-increase',
      'hc-guarani',
      'hc-gunsight',
      'hc-hammer-alt',
      'hc-headphones',
      'hc-headset-alt',
      'hc-heart-alt',
      'hc-heart-broken',
      'hc-helm',
      'hc-home-alt',
      'hc-info',
      'hc-ipod',
      'hc-joypad',
      'hc-key-alt',
      'hc-keyboard',
      'hc-kips',
      'hc-laptop-alt',
      'hc-layers',
      'hc-layers-alt',
      'hc-life-buoy',
      'hc-lightbulb',
      'hc-link-alt',
      'hc-lira',
      'hc-lock-alt',
      'hc-lock-open',
      'hc-loudspeaker',
      'hc-magic-mouse',
      'hc-magnifier',
      'hc-magnifier-minus',
      'hc-magnifier-plus',
      'hc-mail-alt',
      'hc-mail-multiple',
      'hc-mail-open-alt',
      'hc-mail-open-text',
      'hc-male-alt',
      'hc-map-alt',
      'hc-megaphone-alt',
      'hc-message',
      'hc-message-multiple',
      'hc-message-txt',
      'hc-microphone-alt',
      'hc-microphone-old',
      'hc-mixer-alt',
      'hc-money',
      'hc-mouse',
      'hc-mute',
      'hc-naira',
      'hc-note-multiple',
      'hc-note-single',
      'hc-notebook',
      'hc-notebook-pen',
      'hc-notebook-pencil',
      'hc-paperplane',
      'hc-pause-button',
      'hc-pencil-ruler',
      'hc-pencil-ruler-pen',
      'hc-pesos',
      'hc-photo',
      'hc-picture',
      'hc-picture-multiple',
      'hc-pin-alt-2',
      'hc-pin-alt',
      'hc-play-button',
      'hc-playlist',
      'hc-postcard',
      'hc-postcard-multiple',
      'hc-pound',
      'hc-printer',
      'hc-question',
      'hc-radio-ghettoblaster',
      'hc-radio-portable',
      'hc-receipt',
      'hc-receipt-bath',
      'hc-receipt-cent',
      'hc-receipt-dollar',
      'hc-receipt-euro',
      'hc-receipt-franc',
      'hc-receipt-guarani',
      'hc-receipt-kips',
      'hc-receipt-lira',
      'hc-receipt-naira',
      'hc-receipt-pesos',
      'hc-receipt-pound',
      'hc-receipt-rublo',
      'hc-receipt-rupee',
      'hc-receipt-tugrik',
      'hc-receipt-won',
      'hc-receipt-yen',
      'hc-receipt-yen-alt',
      'hc-recept-colon',
      'hc-record',
      'hc-recordplayer',
      'hc-repeat-button',
      'hc-rewind-button',
      'hc-rss-alt',
      'hc-rublo',
      'hc-rupee',
      'hc-safe',
      'hc-sale',
      'hc-sales',
      'hc-server',
      'hc-server-alt',
      'hc-server-cloud',
      'hc-server-download',
      'hc-server-upload',
      'hc-settings-alt',
      'hc-share-alt-2',
      'hc-sheet',
      'hc-sheet-multiple',
      'hc-sheet-pen',
      'hc-sheet-pencil',
      'hc-shuffle-button',
      'hc-signs',
      'hc-smartphone',
      'hc-spades',
      'hc-spread',
      'hc-spread-bookmark',
      'hc-spread-text',
      'hc-spread-text-bookmark',
      'hc-stop-button',
      'hc-tablet',
      'hc-tape',
      'hc-target',
      'hc-ticket',
      'hc-todo',
      'hc-todo-pen',
      'hc-todo-pencil',
      'hc-todo-txt',
      'hc-todolist-pen',
      'hc-todolist-pencil',
      'hc-trashcan',
      'hc-trashcan-full',
      'hc-trashcan-refresh',
      'hc-trashcan-remove',
      'hc-tugriks',
      'hc-upload',
      'hc-usb',
      'hc-video',
      'hc-volume-down-alt',
      'hc-wallet',
      'hc-watch-alt',
      'hc-webpage',
      'hc-webpage-img-txt',
      'hc-webpage-multiple',
      'hc-webpage-txt',
      'hc-won',
      'hc-world',
      'hc-yen',
      'hc-yen-alt',
      'hc-play',
      'hc-vine',
      'hc-paypal',
      'hc-stackoverflow',
      'hc-airbnb',
      'hc-periscope',
      'hc-tripadvisor',
      'hc-disqus',
      'hc-vk',
      'hc-whatsapp',
      'hc-patreon',
      'hc-blogger',
      'hc-dribbble',
      'hc-stumbleupon',
      'hc-digg',
      'hc-envato',
      'hc-behance',
      'hc-google-play',
      'hc-wikipedia',
      'hc-apple',
      'hc-github',
      'hc-steam',
      'hc-xbox',
      'hc-meetup',
      'hc-playstation',
      'hc-android',
      'hc-snapchat',
      'hc-twitter',
      'hc-facebook',
      'hc-google-plus',
      'hc-pinterest',
      'hc-foursquare',
      'hc-yahoo',
      'hc-skype',
      'hc-linkedin',
      'hc-xing',
      'hc-myspace',
      'hc-soundcloud',
      'hc-spotify',
      'hc-youtube',
      'hc-lastfm',
      'hc-vimeo',
      'hc-flickr',
      'hc-500px',
      'hc-wordpress',
      'hc-tumblr',
      'hc-twitch',
      'hc-amazon',
      'hc-angellist',
      'hc-ebay',
      'hc-imdb',
      'hc-google',
      'hc-medium',
      'hc-instagram',
      'hc-lyft',
      'hc-uber',
      'hc-quora',
    ];

    var iconsContainer = '';
    var cssClass = '';
    var selectedIcon = $(wrapper).find('.icon-value').val();

    if (selectedIcon) {
      iconsContainer +=
        '<div class="icon-field active"><i class="' +
        $(wrapper).find('.icon-value').val() +
        '"></i></div>';
    }

    for (var i = 0; i < hodyIcons.length; i++) {
      if (hodyIcons[i] == $(wrapper).find('.icon-value').val()) {
        cssClass = 'hidden';
      }
      iconsContainer +=
        '<div class="icon-field ' +
        cssClass +
        '" data-filter="' +
        hodyIcons[i].replace(/-/g, ' ') +
        '"><i class="' +
        hodyIcons[i] +
        '"></i></div>';
      cssClass = '';
    }

    var output =
      '<div class="icons-wrapper" data-menu="menu-item-icon[' +
      itemId +
      ']">' +
      iconsContainer +
      '</div>';

    if (!$(wrapper).find('.icons-wrapper').length) {
      $(wrapper).append(output);
    }
  }

  $(document).on('change', '.menu-icon-toggle', function() {
    menuId = $(this).data('item-id');

    if ($(this).is(':checked')) {
      $('.menu-icon-container[data-menu-item-id=' + menuId + ']').fadeIn();
      renderMenuIcons(menuId);
    } else {
      $('.menu-icon-container[data-menu-item-id=' + menuId + ']').hide();
    }
  });

  $('.menu-icon-toggle').trigger('change');

  $('body').on('click', '.icon-field i', function(event) {
    $(this).parents('.icons-wrapper').find('.icon-field').removeClass('active');
    $(this).parent('.icon-field').addClass('active');

    var iconClass = $(this).attr('class');

    var iconInput = $(this).parents('.icons-wrapper').data('menu');

    $(this).closest('.menu-icon-container').find('.icon-value').val(iconClass);
  });

  function filterIcons() {
    var icons = $(this)
      .closest('.menu-icon-container')
      .find('.icons-wrapper .icon-field');
    var vl = $(this).val();

    $(icons)
      .filter(function(index) {
        return $(this).data('filter').indexOf(vl) != -1;
      })
      .show();

    $(icons)
      .filter(function(index) {
        return $(this).data('filter').indexOf(vl) == -1;
      })
      .hide();
  }

  $(document).on('input', '.filter-icons', filterIcons);
  $('.filter-icons').on('input', filterIcons);

  $(
    'body'
  ).on(
    'click',
    '[data-vc-control="add"], [data-element_type] > .wpb_element_wrapper > .vc_empty-container',
    function(event) {
      var elementType = $(this)
        .closest('[data-element_type]')
        .data('element_type');
      if (elementType === 'vc_column_inner') {
        $('#vc_ui-panel-add-element').addClass('show-hidden-ones');
      } else {
        $('#vc_ui-panel-add-element').removeClass('show-hidden-ones');
      }
    }
  );
});
