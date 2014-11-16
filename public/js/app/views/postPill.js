
define(["jquery", "backbone", "models/postModel", "text!templates/postPill.html"],

    function($, Backbone, model, template){


        var View = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".examplePostPill",
            
            // View constructor
            initialize: function(opts) {
                this.model= opts.model;
                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {
                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {model: this.model});

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