import { CGFobject, CGFappearance } from '../lib/CGF.js';
import { MySphere } from "./MySphere.js";
import { MyStem } from "./MyStem.js";
import { MySemiSphere } from "./MySemiSphere.js";

/**
 * MyBee
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyBee extends CGFobject {
    constructor(scene) {
        super(scene);
        this.head = new MyBeeHead(this.scene);
        this.torax = new MySphere(this.scene, 0.7, 9, 9, false);
        this.semi = new MySemiSphere(this.scene, 0.7, 9, 9);
        this.band = new MyStem(this.scene, 9, 1);
        this.leg = new MyBeeLeg(this.scene);
        this.wing = new MyBeeWing(this.scene);
        this.initMaterials();
	}

    initMaterials() {
        //Torax Texture
        this.toraxTex = new CGFappearance(this.scene);
        this.toraxTex.setColor(1, 0.74, 0, 1)
        this.toraxTex.setAmbient(1, 0.74, 0, 1);
        this.toraxTex.setDiffuse(1, 0.74, 0, 1);
        this.toraxTex.setSpecular(1, 0.74, 0, 1);

        //Black Texture
        this.blackTex = new CGFappearance(this.scene);
        this.blackTex.setColor(0, 0, 0, 0);
        this.blackTex.setDiffuse(0, 0, 0, 0);
        this.blackTex.setAmbient(0, 0, 0, 0);

        //Wing Texture
        this.wingTex = new CGFappearance(this.scene);
        this.wingTex.setAmbient(244/255, 1, 1, 0.15);
        this.wingTex.setEmission(1, 1, 1, 0);
    }

    display() {
        this.scene.pushMatrix();

        this.scene.pushMatrix();

        //Display Head
        this.head.display();

        this.scene.popMatrix();

        //Display Torax
        this.scene.pushMatrix();

        this.toraxTex.apply();
        this.scene.translate(0, 0, -0.9);
        this.torax.display();

        this.scene.popMatrix();

        //Display Abdomen
        this.scene.pushMatrix();

        this.scene.translate(0, 0, -1.6);
        this.blackTex.apply();
        this.semi.display();
        this.scene.translate(0, 0, -0.3)
        this.scene.scale(0.7, 0.7, 0.3);
        this.toraxTex.apply();
        this.band.display();
        this.scene.translate(0, 0, -1);
        this.blackTex.apply();
        this.band.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();
        
        this.scene.translate(0, 0, -2.2);
        this.scene.rotate(Math.PI, 0, 1, 0);
        
        this.scene.rotate(Math.PI/9, 0, 0, 1);
        this.toraxTex.apply();
        this.semi.display();

        this.scene.popMatrix();

        //Display Left Leg 1
        this.scene.pushMatrix();

        this.blackTex.apply();

        this.scene.translate(0.45, -0.2, -0.5);
        this.scene.rotate(Math.PI/6, 0, 1, 0);
        this.scene.rotate(Math.PI/3, 1, 0, 0);
        this.leg.display();

        this.scene.popMatrix();

        //Display Right Leg 1
        this.scene.pushMatrix();

        this.scene.translate(-0.45, -0.2, -0.5);
        this.scene.rotate(-Math.PI/6, 0, 1, 0);
        this.scene.rotate(Math.PI/3, 1, 0, 0);
        this.leg.display();

        this.scene.popMatrix();

        //Display Left Leg 2
        this.scene.pushMatrix();

        this.scene.translate(0.45, -0.2, -1.2);
        this.scene.rotate(Math.PI/6, 0, 0, 1);
        this.scene.rotate(Math.PI/3, 1, 0, 0);
        this.leg.display();

        this.scene.popMatrix();

        //Display Right Leg 2
        this.scene.pushMatrix();

        this.scene.translate(-0.45, -0.2, -1.2);
        this.scene.rotate(-Math.PI/6, 0, 1, 1);
        this.scene.rotate(Math.PI/3, 1, 0, 0);
        this.leg.display();

        this.scene.popMatrix();

        //Display Left Leg 3
        this.scene.pushMatrix();

        this.scene.translate(0.45, -0.2, -1.4);
        this.scene.rotate(Math.PI/6, 0, 0, 1);
        this.scene.rotate(Math.PI*0.6, 1, 0, 0);
        this.leg.display();

        this.scene.popMatrix();

        //Display Right Leg 3
        this.scene.pushMatrix();

        this.scene.translate(-0.45, -0.2, -1.4);
        this.scene.rotate(-Math.PI/6, 0, 0, 1);
        this.scene.rotate(Math.PI*0.6, 1, 0, 0);
        this.leg.display();

        this.scene.popMatrix();

        //Display Wings
        this.scene.pushMatrix();

        this.wingTex.apply();

        this.scene.translate(0, 0.5, -0.4);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.wing.display();

        this.scene.translate(0, 0, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.wing.display();

        this.scene.popMatrix();

        this.scene.popMatrix();

    }
}

class MyBeeHead extends CGFobject {
    constructor(scene) {
		super(scene);
        this.skull = new MySphere(this.scene, 0.5, 9, 9, false);
        this.eye = new MySphere(this.scene, 0.3, 9, 9, false);
        this.antenna = new MyBeeAntenna(this.scene);
        this.initMaterials();
	}

    initMaterials() {
        //Skull Texture
        this.skullTex = new CGFappearance(this.scene);
        this.skullTex.setColor(0, 0, 0, 0);
        this.skullTex.setDiffuse(0, 0, 0, 0);
        this.skullTex.setAmbient(0, 0, 0, 0);

        //Eye Texture
        this.eyeTex = new CGFappearance(this.scene);
        this.eyeTex.setDiffuse(1, 1, 1, 1);
        this.eyeTex.setSpecular(1, 1, 1, 1);
        this.eyeTex.loadTexture("images/beeEyeTex.jpg");

    }

    display() {
        
        //Display Skull
        this.scene.pushMatrix();

        this.skullTex.apply();
        this.skull.display();

        this.scene.popMatrix();

        //Display Left Antenna
        this.scene.pushMatrix();

        this.scene.translate(0.2, 0.4, 0.2);
        this.scene.rotate(Math.PI * 0.2, -1, 1, 0)
        this.antenna.display();

        this.scene.popMatrix();

        //Display Right Antenna
        this.scene.pushMatrix();

        this.scene.translate(-0.2, 0.4, 0.2);
        this.scene.rotate(-Math.PI * 0.2, 1, 1, 0)
        this.antenna.display();

        this.scene.popMatrix();

        //Display Left Eye
        this.scene.pushMatrix();

        this.eyeTex.apply();
        this.scene.rotate(Math.PI * 0.60, 0, 1, 0)
        this.scene.translate(-0.2, 0.1, 0.25);
        this.eye.display();

        this.scene.popMatrix();

        //Display Right Eye
        this.scene.pushMatrix();

        this.scene.translate(-0.35, 0.1, 0.1);
        this.eye.display();

        this.scene.popMatrix();
        
    }
}

class MyBeeAntenna extends CGFobject {
    constructor(scene) {
        super(scene);
        this.semiAntenna = new MyStem(this.scene, 5, 1);
    }
    
    display(){
        this.scene.pushMatrix();

        this.scene.scale(0.05, 0.05, 0.5);
        this.semiAntenna.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(0, 0, 0.47);
        this.scene.rotate(Math.PI/4, 1, 0, 0);
        this.scene.scale(0.05, 0.05, 0.5);
        this.semiAntenna.display();

        this.scene.popMatrix();
    }
}

class MyBeeLeg extends CGFobject {
    constructor(scene) {
        super(scene);
        this.semiLeg = new MyStem(this.scene, 5, 1);
    }

    display(){
        this.scene.pushMatrix();

        this.scene.scale(0.1, 0.1, 0.8);
        this.semiLeg.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(0, 0.05, 0.72);
        this.scene.rotate(Math.PI/3, 1, 0, 0);
        this.scene.scale(0.1, 0.1, 0.8);
        this.semiLeg.display();


        this.scene.popMatrix();
    }
}

class MyBeeWing extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
		this.vertices = [
			0, 0, 0,	    //0
			0, 0.25, 0.5,	    //1
			0, 0.75, 0.75,	//2
            0, 1.25, 0.5,      //3
            0, 1.5, 0,        //4
            0, 1.25, -0.75,   //5
            0, 0.75, -1,     //6
            0, 1, -1.5,       //7
            0, 0.75, -2,     //8
            0, 0.25, -2.25,   //9
            0, 0, -1.75,     //10
		];

		this.indices = [
			0, 1, 2,
            2, 3, 4,
            4, 5, 6,
            6, 7, 8,
            8, 9, 10,
            10, 0, 6,
            0, 2, 6,
            6, 8, 10,
            2, 4, 6,

            2, 1, 0,
            4, 3, 2,
            6, 5, 4,
            8, 7, 6,
            10, 9, 8,
            6, 0, 10,
            6, 2, 0,
            10, 8, 6,
            6, 4, 2
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
