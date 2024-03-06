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
                  20, 21, 16, 21, 17, 16, // esquerda
                  18, 19, 22, 19, 23, 22, // direita
                  12, 8, 14, 8, 10, 14, // cima
                  9, 13, 11, 15, 7, 11, // baixo
                  6, 7, 4, 7, 5, 4, // tras
            ];
            
            //define normals
            this.normals = [
                  0, 0, 1,  // esquerda cima frente  0
                  0, 0, 1,  // esquerda baixo frente 1
                  0, 0, 1,  // direita cima frente   2
                  0, 0, 1,  // direita baixo frente  3
                  0, 0, -1, // esquerda cima tras    4
                  0, 0, -1, // esquerda baixo tras   5
                  0, 0, -1, // direita cima tras     6
                  0, 0, -1, // direita baixo tras    7
                  0, 1, 0,  // esquerda cima frente 8
                  0, -1, 0, // esquerda baixo frente 9
                  0, 1, 0 , // direita cima frente   10
                  0, -1, 0, // direita baixo frente  11
                  0, 1, 0,  // esquerda cima tras    12
                  0, -1, 0, // esquerda baixo tras   13
                  0, 1, 0,  // direita cima tras     14
                  0, -1, 0, // direita baixo tras    15
                  -1, 0, 0, // esquerda cima frente 16
                  -1, 0, 0, // esquerda baixo frente 17
                  1, 0, 0,  // direita cima frente   18
                  1, 0, 0,  // direita baixo frente  19
                  -1, 0, 0, // esquerda cima tras    20
                  -1, 0, 0, // esquerda baixo tras   21
                  1, 0, 0,  // direita cima tras     22
                  1, 0, 0,  // direita baixo tras    23
            ];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

