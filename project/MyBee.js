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
    }

    display(){
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
