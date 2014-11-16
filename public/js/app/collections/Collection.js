// Collection.js
// -------------
define(["jquery","backbone","models/Model"],

  function($, Backbone, Model) {

    // Creates a new Backbone Collection class object
    var Collection = Backbone.Collection.extend({

      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: Model

<<<<<<< HEAD
    }]);
=======

    });
>>>>>>> 2385cd4f3a786f288c0d757a60cff84a4e1ecdcf

    // Returns the Model class
    return Collection;

  }

);