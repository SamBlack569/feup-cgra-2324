import { CGFobject, CGFappearance } from '../lib/CGF.js';

/**
 * MyPetal
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyPetal extends CGFobject {
	constructor(scene, texture) {
		super(scene);
		this.texture = texture;
		this.initMaterials();
		this.initTriangle();
	}

	initMaterials() {

		this.texsArray = [];

		this.texCoordsArray = [];

		//Texture 0
        this.tex0 = new CGFappearance(this.scene);
        this.tex0.setDiffuse(1, 1, 1, 1);
        this.tex0.setShininess(10.0);
		this.tex0.loadTexture("images/petal-pink.jpg");
		
		this.texCoords0 = [0.6, 0, 0, 0.5, 0.4, 0.9];

		this.texsArray.push(this.tex0);

		this.texCoordsArray.push(this.texCoords0);

		//Texture 1
		this.tex1 = new CGFappearance(this.scene);
        this.tex1.setDiffuse(1, 1, 1, 1);
        this.tex1.setShininess(10.0);
		this.tex1.loadTexture("images/petal-yellow.jpg");
		
		this.texCoords1 = [0.5, 0.6, 0, 0.3, 0, 0.6];

		this.texsArray.push(this.tex1);

		this.texCoordsArray.push(this.texCoords1);

		
		//Texture 2
		this.tex2 = new CGFappearance(this.scene);
        this.tex2.setDiffuse(1, 1, 1, 1);
        this.tex2.setShininess(20.0);
		this.tex2.loadTexture("images/white-blue-petal.jpg");
		
		this.texCoords2 = [0.55, 0.3, 0.40, 0.35, 0.60, 0.4];

		this.texsArray.push(this.tex2);

		this.texCoordsArray.push(this.texCoords2);
		
    }

	initTriangle() {
		this.triangle = new MyTriangle(this.scene, this.texCoordsArray[this.texture])
	}
	
	display() {
		this.texsArray[this.texture].apply();

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
	constructor(scene, textureCoords) {
		super(scene);
		this.texCoords = textureCoords;
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

