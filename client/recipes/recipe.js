Template.Recipe.onCreated(function() {
   this.editMode = ReactiveVar(false);
});
Template.Recipe.events({
    'click .toggle-menu': function() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu)
    },

    'click .fa-trash' : function() {
        Meteor.call('delete', this._id);
    },

    'click .fa-pencil': function(editMode, template) {
        template.editMode.set(!template.editMode.get())
    } 

});

Template.Recipe.helpers({
    updateRecipeId: function() {
        return this._id;
    },
    editMode: function() {
        return Template.instance().editMode.get();
    }
});