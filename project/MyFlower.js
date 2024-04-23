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
	constructor(scene) {
		super(scene);
        this.petal = new MyPetal(this.scene);
        this.receptacle = new MyReceptacle(this.scene);
        this.stem = new MyStem(this.scene);
	}

    display() {
        
    }
}