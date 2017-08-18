Ext.define("SampleApp.view.main.Main", {
    extend: "Ext.tab.Panel",
    controller: "main",
    requires: [
        "Ext.Button",
        "Ext.field.Text"
    ],
    viewModel: {
        data: {
            userName: ""
        }
    },
    cls: "main",
    items: [{
        title: "Home",
        cls: "home",
        html: "<h1 class='banner'>Hello World</h1>",
        items: [{
            xtype: "textfield",
            label: "User name",
            bind: "{userName}",
            listeners: {
                action: "onGo"
            }
        }, {
            xtype: "button",
            handler: "onGo",
            bind: {
                disabled: "{!userName}",
                text: "{userName ? 'Save: ' + userName : 'Save'}"
            }
        }]
    }, {
        title: "Notifications",
        xtype: "notifications"
    },{
        title: "Settings"
    }]
})