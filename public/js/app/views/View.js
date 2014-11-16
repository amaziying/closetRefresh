// View.js
// -------

define(["jquery", "backbone", "models/Model", "text!templates/heading.html", "views/newPost", "views/postPill", "models/postModel"],

    function($, Backbone, Model, template, newPost, PostPillView, PostModel){


        var View = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "body",

            // View constructor
            initialize: function() {
<<<<<<< HEAD
                this.model= new Model();
=======

                this.model = new Model();

>>>>>>> 2385cd4f3a786f288c0d757a60cff84a4e1ecdcf

                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {
                "click #add-new-post": "showNewForm"

            },
            addPost: function(model){
                var newPillView= new PostPillView({model:model});
            },
            testFun: function() {
                var postModel = new PostModel();
                postModel.set("title", "New Shirt");
                postModel.set("price", "$15.00");
                postModel.set("description","YO THIS IS DA BOMB");
                postModel.set("imageURL","http://www.hey-man-nice-shirt.com.au/heyman/home_products/TRILLIONAIRE_NAVY-2.jpg");
                var postPillView= new PostPillView({model:postModel});
            },

            showNewForm: function() {
                this.newForm = new newPost({mode:Model});
                this.newForm.render();
            },
/*
            _getPointsOfInterest: function() {
                var that = this;
                var pointsOfInterests = [];

                function getLocation () {
                    var deferred = $.Deferred();
                    if (Modernizr.geolocation) {
                        deferred.resolve();
                        this.model.currentLocation = navigator.geolocation.getCurrentPosition(show_map);

                    } else {
                    // no native support; maybe try a fallback?
                        deferred.reject();
                        console.log();
                    }
                }

                function show_map(position) {
                    this.model.latitude = position.coords.latitude;
                    this.model.longitude = position.coords.longitude;
                  // let's show a map or do something interesting!
                }
                this.model.POIObject = $.getJSON("http://app.kitchener.ca/opendata/Json/points_of_interest.json").then(getLocation).done(function () {
                    pointsOfInterests.push(["GREYHOUND BUS TERMINAL", "GO TRANSIT TRAIN", "QUEEN ST STONE MARKER"]);
                });
                return pointsOfInterests;
            },*/

            // Renders the view's template to the UI
            render: function() {
            //this._getPointsOfInterest();



                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                this.testFun();

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return View;

    }

);