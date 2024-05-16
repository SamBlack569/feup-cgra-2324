import { CGFobject, CGFappearance } from '../lib/CGF.js';
import { MySphere } from "./MySphere.js";
import { MyStem } from "./MyStem.js";

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
        this.antenna = new MyBeeAntenna(this.scene);
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
