Ext.define('SpriteTest.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
            'Ext.TitleBar',
            'Ext.Toolbar',
            'Ext.draw.Component',
            'SpriteTest.view.Photon'
    ],

    config: {
        style: 'background-color: black',
        layout: 'fit'
    },

    photonTube: 0,

    initialize: function() {
        this.setItems(
        [{
                xtype: 'titlebar',
                title: 'Boldly Go...',
                docked: 'top'
            }, {
                xtype: 'draw',
                itemId: 'space'
            }, {
                xtype: 'toolbar',
                docked: 'bottom',
                layout: {
                    pack: 'center'
                },
                items: [{
                        xtype: 'button',
                        text: 'Fire!',
                        scope: this,
                        handler: function(b, e) {
                            var surface = this.down('#space').getSurface();

                            surface.add({
                                type: 'photontorpedo',
                                surface: surface,
                                photonTube: this.photonTube
                            });

                            if (this.photonTube == 0)
                                this.photonTube = 1;
                            else
                                this.photonTube = 0;

                        }
                    }
                ]
            }
        ])
    }
});