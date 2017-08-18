Ext.define("SampleApp.Application", {
    extend: "Ext.app.Application",
    mainView: "SampleApp.view.main.Main"
});

Ext.define("SampleApp.Test", {
    config: {
        title: "",
        desc: ""
    },
    constructor: function(config){
        this.initConfig(config);
    }
});

var test = Ext.create("SampleApp.Test");
test.setTitle("Title1");
console.log(test.getTitle());