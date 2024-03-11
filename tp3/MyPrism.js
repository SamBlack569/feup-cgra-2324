import { CGFobject } from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';

/**
 * MyPrism
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPrism extends CGFobject {
	constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.quad = new MyQuad(this.scene);
	}
	
    
    display() {
        this.scene.pushMatrix();

        for (let i = 0; i < Math.PI * 2; i += Math.PI * 2 / this.slices) {
            this.scene.pushMatrix();
            this.scene.rotate(i, 0, 0, 1);
            this.scene.translate(0, 1, 0);
            this.scene.rotate(-Math.PI / 2, 1, 0, 0);
            this.quad.display();
            this.scene.popMatrix();
        }

        this.scene.popMatrix();
    }

    enableNormalViz() {
        this.quad.enableNormalViz();
    }

    disableNormalViz() {
        this.quad.disableNormalViz();
    }
}

