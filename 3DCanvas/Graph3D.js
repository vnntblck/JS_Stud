class Graph3D  {
    constructor(param) {
        this.WIN = {
            LEFT: -5,
            BOTTOM: -5,
            HEIGHT: 10,
            WIDTH: 10,
            DISPLAY: new Point(0,0,30),
            CAMERA: new Point(0,0,50), 
        };
        const height = 1000;
        const width = 1000;
        this.figureNumber = 0;
        this.figures = [(new Figure).cube(5)];
        this.canMove = false;

        this.dx = 0;
        this.dy = 0;
        this.math3D = new Math3D ({WIN: this.WIN});
        this.canvas = new Canvas ({
            id: "canvas3d", 
            WIN: this.WIN,
            height,
            width,
            callbacks: {
                wheel: event => this.wheel(event),
                mouseMove: event => this.mouseMove(event),
                mouseDown: event => this.mouseDown(event),
                mouseUp: () => this.mouseUp(),
                mouseLeave: () => this.mouseLeave()
            }});
    }

    wheel(event) {
        event.preventDefault();
        const delta = (event.wheelDeltaY > 0) ? 1.1 : 0.9;
        const matrix = this.math3D.zoom(delta);
        this.figures.forEach(figure => {
            figure.points.forEach(point => {
                this.math3D.transform(matrix, point)
            });
        });
        this.renderScene();
    };

    mouseMove(event) {
        if (this.canMove) {
            const gradus = Math.PI / 180;
            const matrixY = this.math3D.rotateOy((this.dy - event.offsetY) * gradus);
            const matrixX = this.math3D.rotateOx((this.dx - event.offsetX) * gradus);
            this.figures.forEach(figure => {
                figure.points.forEach(point => {
                    this.math3D.transform(matrixY, point);
                    this.math3D.transform(matrixX, point);
                });
            });
            this.dx = event.offsetX;
            this.dy = event.offsetY;
            this.renderScene();
        }
    };

    mouseDown(event) {
        this.canMove = true;
        this.dx = event.offsetX
        this.dy = event.offsetY
    };

    mouseLeave() {
        this.canMove = false;
    };

    mouseUp() {
        this.canMove = false;
    };
    renderScene() {
        this.canvas.clear()
        this.figures.forEach(figure => {
            figure.points.forEach(point => {
                this.canvas.point(this.math3D.xs(point), this.math3D.ys(point), 'black');
            });
            ;
        })

            this.figures.forEach(figure => {
                figure.edges.forEach(edge => {
                    const point1 = figure.points[edge.p1];
                    const point2 = figure.points[edge.p2];
                    this.canvas.line(
                        this.math3D.xs(point1),
                        this.math3D.ys(point1),
                        this.math3D.xs(point2),
                        this.math3D.ys(point2),
                        2, 'green'
                    );
                });
            });
        

    }

    
}