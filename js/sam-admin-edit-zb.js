/**
 * Created by minimus on 31.10.13.
 * Javascript for Ads Zone Editor amd Ads Block Editor
 */
(function($) {
  $(document).ready(function() {
    var sPointer, title = $('#title'), editorMode = $('#editor_mode');

    title.tooltip({
      track: true
    });

    if (editorMode.val() == 'zone') {
      sPointer = samPointer.zones;
      sPointer.pointer = 'zones';
    }
    if (editorMode.val() == 'block') {
      sPointer = samPointer.blocks;
      sPointer.pointer = 'blocks';
    }

    if(sPointer.enabled || '' == title.val()) {
      title.pointer({
        content: '<h3>' + sPointer.title + '</h3><p>' + sPointer.content + '</p>',
        position: 'top',
        close: function() {
          $.ajax({
            url: ajaxurl,
            data: {
              action: 'close_sam_pointer',
              pointer: sPointer.pointer
            },
            async: true
          });
        }
      }).pointer('open');
    }
  });
})(jQuery);