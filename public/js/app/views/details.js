
define(["jquery", "backbone", "models/postModel", "text!templates/details.html"],

    function($, Backbone, model, template, DetailView){


        var View = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".dialog",
            
            // View constructor
            initialize: function(opts) {
                this.model= opts.model
                this.dealForm = $("#dealForm");
                this.readForm  = $("#postDetails");
                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {
                "click #makeDeal": "makeDeal",
                "click #closeModal": "backToHome"
            },
            backToHome: function() {
                //this.unbind();
                this.$el.find("modal").hide();
            },
            makeDeal: function() {
                this.readForm.hide;
                this.dealFrom.addClass("open");

            },
            // Renders the view's template to the UI
            render: function() {
                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {model: this.model});

                // Dynamically updates the UI with the view's template
                this.$el.append(this.template);
                this.$el.modal("show");
                

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return View;

    }

);