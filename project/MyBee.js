import { CGFobject, CGFappearance } from '../lib/CGF.js';
import { MySphere } from "./MySphere.js";

/**
 * MyBee
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyBee extends CGFobject {
    constructor(scene) {
		super(scene);
        this.head = new MyBeeHead(this.scene);
	}

    display(){
        this.scene.pushMatrix();
        this.head.display();
        this.scene.popMatrix();
    }
}

class MyBeeHead extends CGFobject {
    constructor(scene) {
		super(scene);
        this.skull = new MySphere(this.scene, 0.5, 9, 9, false);
        this.eye = new MySphere(this.scene, 0.3, 9, 9, false);
        this.initMaterials();
	}

    initMaterials() {
        //Skull Texture
        this.skullTex = new CGFappearance(this.scene);
        this.skullTex.setDiffuse(1, 1, 1, 1);
        this.skullTex.setAmbient(1, 1, 1, 1);
        this.skullTex.loadTexture("images/blackTex.jpg");

        //Eye Texture
        this.eyeTex = new CGFappearance(this.scene);
        this.eyeTex.setDiffuse(1, 1, 1, 1);
        this.eyeTex.setSpecular(1,1,1,1)
        this.eyeTex.loadTexture("images/beeEyeTex.jpg");

    }

    display() {
        //Display Skull
        this.scene.pushMatrix();

        this.skullTex.apply();
        this.skull.display();

        this.scene.popMatrix();

        //Display Left Eye
        this.scene.pushMatrix();

        this.eyeTex.apply();
        this.scene.translate(0.35, 0.1, 0.1);
        this.eye.display();

        this.scene.popMatrix();

        //Display Right Eye
        this.scene.pushMatrix();

        this.scene.translate(-0.35, 0.1, 0.1);
        this.eye.display();

        this.scene.popMatrix();
    }
}
