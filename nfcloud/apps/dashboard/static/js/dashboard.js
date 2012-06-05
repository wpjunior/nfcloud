
var HelpView = Backbone.View.extend({
    id: "help-view",
    templateUrl: '/static/ejs/dashboard.help.ejs',
    render: function () {
        html = new EJS({url: this.templateUrl}).render({});
        this.$el.html(html);
        return this;
    }
});


var DashboardRouter = Backbone.Router.extend({
    container: '#dashboard',
    routes: {
        "help":                 "help",    // #help
    },
    
    help: function() {
        this.currentView = new HelpView();
        this.currentView.render();
        
        $(this.container)
            .empty()
            .append(this.currentView.$el);
    }
});

$(document).ready(function (e) {
    var dRouter = new DashboardRouter();
    var nRouter = new NfeRouter();
    Backbone.history.start()
});