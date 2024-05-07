import {CGFobject , CGFappearance} from '../lib/CGF.js';
import { MySphere } from "./MySphere.js";

/**
 * MyReceptacle
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyReceptacle extends CGFobject {

    constructor(scene, radius) {
        super(scene);
        this.scene = scene;
        this.recep = new MySphere(this.scene, radius, 15, 10, true);
        this.initMaterials();
    }

    initMaterials(){
        this.appearance = new CGFappearance(this.scene);
        this.appearance.setDiffuse(1, 1, 1, 1);
        this.appearance.setShininess(10.0);
        this.appearance.loadTexture("images/recep.jpg");
    }

    display(){
        this.scene.pushMatrix();
        this.appearance.apply();
        this.recep.display();
        this.scene.popMatrix();
    }

}