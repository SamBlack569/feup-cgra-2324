import {CGFobject} from '../lib/CGF.js';
/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
            1, 0, 0,	//1
            2, 0, 0,    //2
            3, 1, 0,	//3
            2, 1, 0,    //4
            1, 1, 0,    //5
		];

        this.indices = [
            //Counter-clockwise reference of vertices
            0, 1, 5,
            1, 2, 4,
            4, 5, 1,
            2, 3, 4,
            //Clockwise reference of vertices
            5, 1, 0,
            4, 2, 1,
            1, 5, 4,
            4, 3, 2
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

