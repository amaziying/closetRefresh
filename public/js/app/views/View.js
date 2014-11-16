// View.js
// -------

define(["jquery", "backbone", "models/Model", "text!templates/heading.html", "views/auth", "views/postPill", "models/postModel"],

    function($, Backbone, Model, template, AuthView, PostPillView, PostModel){


        var View = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".example",

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

                "click .test-button": "testFun"
            },
            testFun: function() {
                var authView= new AuthView();
                var postModel = new PostModel();
                postModel.set("title", "New Shirt");
                postModel.set("price", "$15.00");
                postModel.set("description","YO THIS IS DA BOMB");
                postModel.set("imageURL","http://www.hey-man-nice-shirt.com.au/heyman/home_products/TRILLIONAIRE_NAVY-2.jpg")
                var postPillView= new PostPillView({model:postModel});
            },
            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return View;

    }

);