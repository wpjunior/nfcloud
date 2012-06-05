var AddNfeView = Backbone.View.extend({
    id:" nfe-view",
    templateUrl: '/static/ejs/addnfe.view.ejs',
    render: function () {
        html = new EJS({url: this.templateUrl}).render({});
        this.$el.html(html);
        return this;
    }
});

var NfeRouter = Backbone.Router.extend({
    container: '#dashboard',
    routes: {
        "nfe/add": "add",
        "nfe/search": "search"
    },
    add: function () {
        this.currentView = new AddNfeView();
        this.currentView.render();
        
        $(this.container)
            .empty()
            .append(this.currentView.$el);
    },
    search: function () {
        console.info('todo: search');
    }
});