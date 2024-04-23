import { CGFobject, CGFappearance, CGFtexture } from "../lib/CGF.js";
import { MySphere } from "./MySphere.js";

export class MyPanorama extends CGFobject {

    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.panorama = new MySphere(this.scene, 200, 30, 20, true);
        this.initMaterials();
    }

    initMaterials() {
        this.appearance = new CGFappearance(this.scene);
        this.appearance.setAmbient(1, 1, 1, 1.0);
        this.appearance.setShininess(10.0);
        this.appearance.loadTexture("images/panorama4.jpg");
    }
    
    display() {
        this.scene.pushMatrix();
        this.appearance.apply();
        this.scene.translate(this.scene.camera.position[0], this.scene.camera.position[1], this.scene.camera.position[2])
        this.panorama.display();
        this.scene.popMatrix();
    }
}