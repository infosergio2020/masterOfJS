class AutoPause{
    constructor(){
        this.threshold = 0.25;
        // necesitamos establecer el contexto de handlerIntersection ya que
        //si se llama handlerIntersection en IntersectionObserver se pierde el this de la clase
        // y se usa el this de IntersectionObserver el cual no tiene acceso
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player){
        // para que handler pueda interactuar con el player se debe guardar una instancia
        this.player = player;
        // handler es la funcion que recive el anuncion de hubo una interseccion en lo que estuvo observando
        // threshold es el umbral en el que debe avisar
        const observer = new IntersectionObserver(this.handlerIntersection,{
            threshold: this.threshold,
        })
        // observar el media-player
        observer.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }
    
    // entries son todos los objetos que estamos observando
    handlerIntersection(entries){
        const entry = entries[0];
        
        const isVisible = entry.intersectionRatio >= this.threshold

        if(isVisible){
            this.player.play();
        } else {
            this.player.pause();
        }
    }

    handleVisibilityChange(){
        const isVisible = document.visibilityState == "visible";
        if(isVisible){
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;