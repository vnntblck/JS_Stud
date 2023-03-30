class Graph2d{
    constructor(){
        const height = 800;
        const width = window.innerWidth;

        this.prop = width/height;
        this.win = {
            left: -10 * this.prop,
            bottom: -10,
            width: 20 * this.prop,
            height: 20
        };

        this.zoom = 1;
        this.canMove = false;
        this.funcs = [];
        this.mousePosX = 0;
        this.mousePosY = 0;
        this.canvas = new Canvas({
            id: "graph", 
            width: window.innerWidth-10, 
            height: 800, 
            win: this.win, 
            callbacks: {wheel: (event) => this.wheel(event),
                mouseUp: () => this.mouseUp(), 
                mouseDown: () => this.mouseDown(), 
                mouseMove: (event) => this.mouseMove(event), 
                mouseLeave: () => this.mouseLeave()}
        });

        setInterval(() => {this.render();}, 15);
        
    }

    mouseUp(){
        this.canMove=false;
    };

    mouseDown(){
        this.canMove=true;
    };

    mouseMove(event){
        if (this.canMove){
            this.win.left -= this.canvas.sx(event.movementX);
            this.win.bottom += this.canvas.sy(event.movementY);
        }

        this.mousePosY = this.win.bottom + this.canvas.sy(event.offsetY);
        this.mousePosX = this.win.left + this.canvas.sx(event.offsetX);
    };

    mouseLeave(){
        this.canMove = false;
    };

    wheel(event) {
        const delta = (event.wheelDelta > 0) ? -this.zoom : this.zoom;
        if (this.win.width + delta * this.prop > 0 && this.win.height + delta > 0) {
            this.win.width += delta * this.prop;
            this.win.height += delta;
            this.win.left -= this.prop * delta / 2;
            this.win.bottom -= delta / 2;
            this.render();
        }
    };

    printOXY(){
        const { left, bottom, width, height } = this.win;
        this.canvas.line(left, 0, width + left, 0);
        this.canvas.line(0, bottom, 0, bottom + height);

        for (let i = left; i <= width + left; i += 0.5) {
            this.canvas.line(i, height + bottom, i, bottom, 0.3);
        }

        for (let i = bottom; i <= bottom + height; i += 0.5) {
            this.canvas.line(left, i, width + left, i, 0.3);
        }

        for (let i = 0; i >= left; i -= 1) {
            this.canvas.line(i, -0.2, i, 0.2, 1);
        }

        for (let i = 0; i <= width + left; i += 1) {
            this.canvas.line(i, -0.1, i, 0.1, 1);
        }
        for (let i = 0; i <= bottom + height; i += 1) {
            this.canvas.line(0.1, i, -0.1, i, 1);
        }
        for (let i = 0; i >= bottom; i -= 1) {
            this.canvas.line(0.1, i, -0.1, i, 1);
        }
    }

    printFunction( f, color = "red", linewidth = 1) {
        var dx = this.win.width / 1000;
        var x = this.win.left;
        while (x < this.win.width + this.win.left) {
            this.canvas.line(x, f(x), x + dx, f(x + dx), linewidth, color);
            x += dx;
        }
    }

    printIntegral(f, a, b, color = 'rgb(195, 119, 224, 0.6)') {
        const dx = (b - a) / 1000;
        let x = a;
        const points = [];
        points.push({ x: a, y: 0 })
        while (x <= b) {
            points.push({ x, y: f(x) });
            x += dx;
        }
        points.push({ x: b, y: 0 })
        this.canvas.polygon(points, color);
        this.canvas.line(a, 0, b, 0, 2, 'orange');
    }

    printNums() {
        const { left, bottom, width, height } = this.win;
        const Length = height / (width + 30);
        const len = Length / 2;
        const shiftY = -height * 0.01 - 0.04;
        const shiftX = width * 0.001 + 0.04;

        for (let i = Math.round(left); i < left + width; i++) {
            this.canvas.line(i, len, i, -len, 2.5);
            this.canvas.printText(i, i + shiftX, shiftY);
        }
        for (let i = Math.round(bottom); i < bottom + height; i++) {
            this.canvas.line(len, i, -len, i, 2.5);
            this.canvas.printText(i, shiftX, i + shiftY);
        }
    }

    render() {
        this.canvas.clear();
        this.printOXY();
        this.printNums();
        this.funcs.forEach(func => {
            if(func){
                const {f, color, width} = func;
                if(f){
                    this.printFunction(f, color, width);
                }
            }
        });
    }


}
