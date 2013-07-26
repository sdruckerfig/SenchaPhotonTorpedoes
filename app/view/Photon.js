
Ext.define('SpriteTest.view.Photon', {
	extend: 'Ext.draw.sprite.Image',
	alias: 'sprite.photontorpedo',

	inheritableStatics: {
		def: {
			processors: {
				/**
				 * @cfg {string} [photonTube=''] The torpedo tube that launched the photon
				 */
				photonTube: 'string'
			},

			defaults: {
				src: 'resources/images/photon.png',
				width: 150,
				height: 150,
				photonTube: '0'
			}
		}
	},

	constructor: function() {

		this.callParent(arguments);
		this.fire();
	},

	fire: function() {

		var surface = this.config.surface;

		var stageWidth = surface.element.getWidth(true);
		var stageHeight = surface.element.getHeight(true);
		
		var centerX = Math.floor(stageWidth / 2);
		var centerY = Math.floor(stageHeight / 2);

		switch (this.config.photonTube) {
			case 0:
				
				this.setAttributes({
					x: -150,
					y: stageHeight
				});
				break;

			case 1:
				
				this.setAttributes({
					x: stageWidth,
					y: stageHeight
				});
				break;
		}

		this.fx.setDuration(1500);
		this.fx.setEasing('easeOut');
		this.fx.on('animationend',this.onAnimationEnd, this);
			
		this.setAttributes({
			x: centerX - 20,
			y: centerY - 20,
			rotationRads: 3,
			width: 40,
			height: 40
		})

	},

	onAnimationEnd: function(animation) {
		this.destroy();
	}


});








