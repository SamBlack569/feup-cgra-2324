import {CGFobject} from '../lib/CGF.js';
import { MyPetal } from './MyPetal.js';
import { MyReceptacle } from './MyReceptacle.js';
import { MyStem } from './MyStem.js';

/**
 * MyFlower
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene, n_petals, color_petals, radius_recep, color_recep, radius_stem, n_stem, color_stem, color_leaf) {
		super(scene);
        this.petal = new MyPetal(this.scene);
        this.receptacle = new MyReceptacle(this.scene);
        this.stem = new MyStem(this.scene);
	}

    display() {

    }
}