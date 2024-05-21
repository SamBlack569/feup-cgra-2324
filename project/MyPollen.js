import { CGFobject } from "../lib/CGF.js";
import { MySphere } from "./MySphere.js";

export class MyPollen extends CGFobject {
    constructor(scene) {
        super(scene);
        this.radius = 0.7;
        this.slices = 6;
        this.stacks = 4;
        this.sphere = new MySphere(scene, this.radius, this.slices, this.stacks, false);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(1, 0.5, 0.5);
        this.sphere.display();
        this.scene.popMatrix();
    }
}
