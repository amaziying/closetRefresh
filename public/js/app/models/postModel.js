// Model.js
// --------
define(["jquery", "backbone"],

    function($, Backbone) {

        // Creates a new Backbone Model class object
        var postModel = Backbone.Model.extend({

            // Model Constructor
            initialize: function() {

            },

            // Default values for all of the Model attributes
            defaults: {
                    title: "Brand New Scarf",
                    price: "$15.00",
                    description: "goody",
                    condition: "New",
                    imageURL: "img/scarf.jpg",
                    size: "32",
                    category: "Accessories"
            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }

        });

        // Returns the Model class
        return postModel;

    }

);
