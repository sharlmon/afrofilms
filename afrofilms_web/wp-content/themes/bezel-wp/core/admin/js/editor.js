(function($) {
  tinymce.create('tinymce.plugins.typed', {
    init: function(ed, url) {
      ed.addButton('typedbutton', {
        title: 'Typed Words',
        cmd: 'typedbutton',
        icon: 'forecolor',
      });
      ed.addCommand('typedbutton', function() {
        ed.windowManager.open({
					title: 'Add Typed Words',
					width: 400,
					height: 100,
					inline: 1,
					id: 'typed-insert-dialog',
					buttons: [{
						text: 'Add',
						id: 'typed-button-insert',
						class: 'insert',
						onclick: function(e) {
							var selected_text = ed.selection.getContent();
              var return_text = '';
              var strings = $('#typed-strings').val();
              return_text = '<span class="typed-words" data-strings="' + strings + '">' + selected_text + '</span>';
              ed.execCommand('mceInsertContent', 0, return_text);
              parent.tinyMCE.activeEditor.windowManager.close(window);
						},
					},
					{
						text: 'Cancel',
						id: 'typed-button-cancel',
						onclick: 'close'
					}],
				});

        var inputValue = $(ed.selection.getNode()).data('strings');

        appendInsertDialog(inputValue);

      });

      // Home Slider Heading
      if ( ed.id == 'wpb_tinymce_content' && jQuery( '#wpb_tinymce_content' ).parents('[data-vc-shortcode^="bezel_slide_heading"]' ).length ) {
        ed.settings.toolbar1 = 'formatselect,bezelStyle,bold,typedbutton';
        ed.settings.block_formats = 'Title=h1;Subtitle=h4;';
        ed.settings.force_br_newlines = true;
        ed.settings.force_p_newlines = false;
        ed.settings.wpautop = false;
        ed.settings.forced_root_block = '';

        ed.addButton('bezelStyle', {
          type: 'menubutton',
          text: 'Styles',
          icon: false,
          onPostRender: function () {
            var ctrl = this;

            ed.on('NodeChange', function(e) {
              ctrl.state.data.menu.forEach(function (el) {
                el.menu.forEach(function (item) {
                  item.active = item.value === (ed.getBody().firstChild.getAttribute(item.attribute) || '');
                  // item.disabled = (item.disableForSubtitle == true) && (e.element.nodeName == 'H4');
                })
              });
            });
          },
          menu: (function() {
            var menuData = [
              {
                text: 'Font Size',
                attribute: 'data-font-size',
                menu: [
                  { text: 'Default', value: '' },
                  { text: 'Small', value: 'font-small' },
                  { text: 'Medium', value: 'font-medium' },
                  { text: 'Big', value: 'font-big' },
                ],
                disableForSubtitle: true,
              },
              {
                text: 'Font Family',
                attribute: 'data-font-family',
                menu: [
                  { text: 'Default', value: '' },
                  { text: 'Serif', value: 'serif-font' },
                  { text: 'Bold Serif', value: 'alt-serif-font' },
                  { text: 'Cursive', value: 'cursive-font' },
                ],
              },
              {
                text: 'Font Weight',
                attribute: 'data-font-weight',
                menu: [
                  { text: 'Light', value: 'fw-400' },
                  { text: 'Regular', value: 'fw-500' },
                  { text: 'Semibold', value: 'fw-600' },
                  { text: 'Bold', value: '' },
                ],
              },
              {
                text: 'Text Transform',
                attribute: 'data-text-transform',
                menu: [
                  { text: 'None', value: '' },
                  { text: 'Uppercase', value: 'upper' },
                ],
              },
            ];

            return menuData.map(function(elem) {
              return {
                text: elem.text,
                menu: elem.menu.map(function(item) {
                  return {
                    text: item.text,
                    value: item.value,
                    attribute: elem.attribute,
                    disableForSubtitle: elem.disableForSubtitle || false,
                    onclick: function () {
                      ed.dom.setAttrib(ed.getBody().firstChild, elem.attribute, item.value);
                      this._parent._items.each(function(el) {
                        el.active(false);
                      });
                      this.active(true);
                    }
                  };
                })
              };
            });
          }())
        });
      }
    },
  });

  tinymce.PluginManager.add('bezeltypedbutton', tinymce.plugins.typed);

  function appendInsertDialog(inputValue) {
		var dialogBody = jQuery( '#typed-insert-dialog-body' );

		var template = '<form action="#">';
    template += '<fieldset>';
    template += '<label for="typed-strings">Words to animate <span>(separate by comma)</span></label>';
    template += '<input id="typed-strings" type="text" autocomplete="off">';
    template += '</fieldset>';
    template += '</form>';
    
    dialogBody.append( template );
    dialogBody.find('#typed-strings').val(inputValue);
	}

})(jQuery);
