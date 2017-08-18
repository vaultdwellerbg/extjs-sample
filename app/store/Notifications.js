Ext.define("SampleApp.store.Notifications", {
    extend: "Ext.data.Store",
    alias: "store.notifications",
    model: "SampleApp.model.Notifications",
    data: [{
        date: '2017-05-20T10:20:30Z',
        description: 'The first notification'
    }, {
        date: '2017-05-21T10:20:30Z',
        description: 'The second notification'
    }, {
        date: '2017-05-22T10:20:30Z',
        description: 'The third notification'
    }]
});