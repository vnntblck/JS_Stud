Figure.prototype.ellips = (x = 14, y = 10, z = 14, count = 30) => {
    const edges = [];
    const points = [];
    const deltaT = Math.PI / count;
    const deltaF =  2 * Math.PI / count; 

    for(let i = 0; i <= Math.PI; i += deltaT) {
        for(let j = 0; j < 2 * Math.PI; j += deltaF) {
            points.push(new Point(
                x * Math.sin(i) * Math.sin(j),
                y * Math.cos(i),
                z * Math.sin(i) * Math.cos(j)
            ));
        }
    }

    for(let i = 0; i < points.length; i++) {
        if(points[i + 1]) {
            if((i + 1) % count === 0) {
                edges.push(new Edge(i, i + 1 - count));
            } else {
                edges.push(new Edge(i, i + 1));
            }
        }
        if(points[i + count]) {
            edges.push(new Edge(i, i + count));
        }
    }
    edges.push(new Edge(points.length - count, points.length - 1));

	return new FigureBody(points, edges, 'ellips');
}