define( [ 'Backbone' ], function ( Backbone  ) {
  "use strict"; 

  return Backbone.Model.extend({
    idAttribute: "_id",
    schema: {
      url: {
        dataType:   'Text',
        validators: ['required']
      },
      note: {
        dataType:            'Text',
        validators:          ['required'],
        autocomplete_source: '/autocomplete/link_note'
      }
    }
  });


});
