Figure.prototype.cube = (lenght = 10, color = '#ee8844') => {
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
} 
