class Cube extends Figure {
    constructor({
        color = '#ee8844',
        size = 10,
        center }) {
        super({ color, center });
        this.size = size / 2;
    

        this.createFigure();
    };

    createPoints() {
        this.points = [
            new Point(this.size + this.center.x, this.size + this.center.y, this.size + this.center.z),
            new Point(-this.size + this.center.x, this.size + this.center.y, this.size + this.center.z),
            new Point(this.size + this.center.x, -this.size + this.center.y, this.size + this.center.z),
            new Point(-this.size + this.center.x, -this.size + this.center.y, this.size + this.center.z),
            new Point(this.size + this.center.x, this.size + this.center.y, -this.size + this.center.z),
            new Point(this.size + this.center.x, -this.size + this.center.y, -this.size + this.center.z),
            new Point(-this.size + this.center.x, this.size + this.center.y, -this.size + this.center.z),
            new Point(-this.size + this.center.x, -this.size + this.center.y, -this.size + this.center.z),
        ];
    }

    createEdges() {
        this.edges = [
            new Edge(0, 4),
            new Edge(0, 1),
            new Edge(0, 2),
            new Edge(6, 1),
            new Edge(6, 4),
            new Edge(6, 7),
            new Edge(5, 7),
            new Edge(5, 4),
            new Edge(5, 2),
            new Edge(3, 7),
            new Edge(3, 2),
            new Edge(3, 1),
        ];
    }

    createPolygon() {
        this.polygons = [
            new Polygon([0, 1, 3, 2], this.color),
            new Polygon([0, 1, 6, 4], this.color),
            new Polygon([0, 2, 5, 4], this.color),
            new Polygon([2, 3, 7, 5], this.color),
            new Polygon([3, 1, 6, 7], this.color),
            new Polygon([4, 5, 7, 6], this.color),
        ]
    }


}
























/**Figure.prototype.cube = (lenght = 10, color = '#ee8844') => {
    const points = [
        new Point(lenght, lenght, lenght), new Point(lenght, -lenght, lenght),
        new Point(-lenght, lenght, lenght), new Point(lenght, lenght, -lenght),
        new Point(-lenght, lenght, -lenght), new Point(-lenght, -lenght, lenght),
        new Point(-lenght, -lenght, -lenght), new Point(lenght, -lenght, -lenght)
    ];

    const edges = [
        new Edge(0, 1), new Edge(0, 2), new Edge(0, 3),
        new Edge(4, 2), new Edge(4, 3),
        new Edge(5, 1), new Edge(5, 2),
        new Edge(6, 5), new Edge(6, 4),
        new Edge(7, 6), new Edge(7, 3), new Edge(7, 1)
    ];
    const polygons = [
            new Polygon([0, 1, 3, 2], color),
            new Polygon([0, 1, 6, 4], color),
            new Polygon([0, 2, 5, 4], color),
            new Polygon([2, 3, 7, 5], color),
            new Polygon([3, 1, 6, 7], color),
            new Polygon([4, 5, 7, 6], color),
    ]
    return new FigureBody(points, edges, polygons, "cube", "#ee8844")
} **/
