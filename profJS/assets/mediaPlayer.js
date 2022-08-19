// paradigma de objetos
//creo instancia con configuracion
function MediaPlayer(config) {
    this.onPlay = false;
    this.onMute = false;
    this.media = config.el
    this.plugins = config.plugins || [];

    this._initPlugins();
}


MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
}

// defino metodos
MediaPlayer.prototype.play = function () {
    this.media.play();
    this.onPlay = !this.onPlay;
};

MediaPlayer.prototype.pause = function () {
    this.media.pause();
    this.onPlay = !this.onPlay;
};

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
    this.onMute = !this.onMute;
}

MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
    this.onMute = !this.onMute;
}

export default MediaPlayer;