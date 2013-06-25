define( [ 'Backbone' ], function ( Backbone  ) {
  "use strict"; 

  return Backbone.Model.extend({
    urlRoot: '/api/v0.1/organizations',
    schema: {
      name: { dataType: 'Text', validators: ['required'] },
      slug: { dataType: 'Text', validators: ['required'] }
    }
  });

});
