import { CGFobject } from '../lib/CGF.js';

/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
        this.vertices = [
            -0.5, 0.5, 0,   // esquerda cima  0
            -0.5, -0.5, 0,  // esquerda baixo 1
            0.5, 0.5, 0,    // direita cima   2
            0.5, -0.5, 0,   // direita baixo  3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
            1, 3, 2,
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

