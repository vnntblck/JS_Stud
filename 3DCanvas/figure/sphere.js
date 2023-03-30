Figure.prototype.sphere = (r = 10, crcs = 30, x = 0, y = 0, z = 0, color = '#0000ff') => {
	const points = [];
	const edges = [];
	const polygones = [];
	const deltaT = Math.PI / crcs;
	const deltaF = 2 * Math.PI / crcs;

	for (let i = 0; i <= Math.PI; i += deltaT) {
		for (let j = 0; j < 2 * Math.PI; j += deltaF) {
			points.push(new Point(
				r * Math.sin(i) * Math.sin(j) + x,
				r * Math.cos(i) + y,
				r * Math.sin(i) * Math.cos(j) + z
			));
		}
	}

	for (let i = 0; i < points.length; i++) {
		if (points[i + 1]) {
			if ((i + 1) % crcs === 0) {
				edges.push(new Edge(i, i + 1 - crcs));
			} else {
				edges.push(new Edge(i, i + 1));
			}
		}
		if (points[i + crcs]) {
			edges.push(new Edge(i, i + crcs));
		}
	}

	

	edges.push(new Edge(points.length - crcs, points.length - 1));

	return new FigureBody(points, edges, polygones, 'sphere');
}