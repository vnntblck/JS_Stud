class Figure {
    constructor ({points = [], edges = [], polygons = [], x = 0, y = 0, z = 0}) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.points = points;
        this.edges = edges;
        this.polygons = polygons;
    }

    createFigure() {
        this.points = [];
        this.edges = [];
        this.polygons = [];
        this.createPoints();
        this.createEdges();
        this.createPolygon();

    };

    createPoints(){};
    createEdges(){};
    createPolygon(){};
}