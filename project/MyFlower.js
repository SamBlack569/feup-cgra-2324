import {CGFobject} from '../lib/CGF.js';
import { MyPetal } from './MyPetal.js';
import { MyReceptacle } from './MyReceptacle.js';
import { MyStem } from './MyStem.js';

/**
 * MyFlower
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyFlower extends CGFobject {
	constructor(scene, n_petals, color_petals, radius_recep, color_recep, radius_stem, n_stem, color_stem, color_leaf) {
		super(scene);
        this.petal = new MyPetal(this.scene);
        this.receptacle = new MyReceptacle(this.scene, radius_recep);
        this.stem = new MyStem(this.scene, 16, 2);
	}

    display() {
        this.scene.pushMatrix();

        this.scene.scale(0.1, 0.1, 0.1);

        this.stem.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(5,3,0);

        this.receptacle.display();

        this.scene.popMatrix();
    }
}