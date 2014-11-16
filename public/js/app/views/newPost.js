// View.js
// -------
define(["jquery", "backbone", "models/postModel", "text!templates/newPost.html", "text!templates/newFormModal.html"],

    function($, Backbone, Model, newPost, newFormModal){

        var newPost = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#new-form",

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {
                "click #save-new-post": "save"
            },

            save: function() {
                Model.set({
                    title: this.newForm.find('#title').val(),
                    category: this.newForm.find('#ApparelType').val(),
                    size: this.newForm.find('#Size').val(),
                    condition: this.newForm.find('#Condition').val(),
                    description: this.newForm.find('#InputMessage').val(),
                    imageURL: this.newForm.find('#imageURL').val()
                })
            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.newForm = _.template(newFormModal, {});

                this.newForm.find('.modal-body').append(_.template(newPost, {}));

                // Maintains chainability
                return this;

            },

            destroy: function() {
                this.newForm.remove();
            }

        });

        // Returns the View class
        return newPost;

    }

);