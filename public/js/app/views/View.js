// View.js
// -------
define(["jquery", "backbone", "models/Model", "text!templates/heading.html", "views/auth"],

    function($, Backbone, Model, template, AuthView){

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

                var str_json = JSON.stringify({
                    title: "Brand New Scarf",
                    description: "goody",
                    condition: "New",
                    imageURL: "img/scarf.jpg",
                    size: "32",
                    category: "Accessories"
                });

                 var request= new XMLHttpRequestObject();

                    request.open("POST", "JSON_Handler.php", true);

                    request.setRequestHeader("Content-type", "application/json");

                    request.send(str_json);
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