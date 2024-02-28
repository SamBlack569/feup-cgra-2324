import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
        this.vertices = [
                  -0.5, 0.5, 0.5,   // esquerda cima frente  0
                  -0.5, -0.5, 0.5,  // esquerda baixo frente 1
                  0.5, 0.5, 0.5,    // direita cima frente   2
                  0.5, -0.5, 0.5,   // direita baixo frente  3
                  -0.5, 0.5, -0.5,  // esquerda cima tras    4
                  -0.5, -0.5, -0.5, // esquerda baixo tras   5
                  0.5, 0.5, -0.5,   // direita cima tras     6
                  0.5, -0.5, -0.5,  // direita baixo tras    7
                  -0.5, 0.5, 0.5,   // esquerda cima frente  8
                  -0.5, -0.5, 0.5,  // esquerda baixo frente 9
                  0.5, 0.5, 0.5,    // direita cima frente   10
                  0.5, -0.5, 0.5,   // direita baixo frente  11
                  -0.5, 0.5, -0.5,  // esquerda cima tras    12
                  -0.5, -0.5, -0.5, // esquerda baixo tras   13
                  0.5, 0.5, -0.5,   // direita cima tras     14
                  0.5, -0.5, -0.5,  // direita baixo tras    15
                  -0.5, 0.5, 0.5,   // esquerda cima frente  16
                  -0.5, -0.5, 0.5,  // esquerda baixo frente 17
                  0.5, 0.5, 0.5,    // direita cima frente   18
                  0.5, -0.5, 0.5,   // direita baixo frente  19
                  -0.5, 0.5, -0.5,  // esquerda cima tras    20
                  -0.5, -0.5, -0.5, // esquerda baixo tras   21
                  0.5, 0.5, -0.5,   // direita cima tras     22
                  0.5, -0.5, -0.5   // direita baixo tras    23
		];

		//Counter-clockwise reference of vertices
		this.indices = [
                  0, 1, 2, 1, 3, 2, // frente
                  4, 5, 0, 5, 1, 0, // esquerda
                  2, 3, 6, 3, 7, 6, // direita
                  4, 0, 6, 0, 2, 6, // cima
                  1, 5, 3, 5, 7, 3, // baixo
                  6, 7, 4, 7, 5, 4, // tras
            ];
            
            //define normals
            this.normals = [
                  0, 0, 1, // esquerda cima frente
                  0, 1, 0, // esquerda cima frente
                  1, 0, 0, // esquerda cima frente
            ];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

