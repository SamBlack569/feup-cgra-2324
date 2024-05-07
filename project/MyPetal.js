import { CGFobject } from '../lib/CGF.js';

/**
 * MyPetal
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyPetal extends CGFobject {
	constructor(scene) {
		super(scene);
		this.triangle = new MyTriangle(this.scene);
	}
	
	display() {
		this.triangle.display();

		this.scene.pushMatrix();

		this.scene.scale(1, -1 , 1);
		
		this.scene.translate(0, -2, 0);
		this.scene.rotate(Math.PI / 10, 1, 0, 0);
		this.scene.translate(0, -2, 0);

		this.triangle.display();

		this.scene.popMatrix();
	}
}

class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			-1, 2, 0,	//1
			1, 2, 0,	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,

			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
		]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

