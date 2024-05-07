import {CGFobject, CGFappearance} from '../lib/CGF.js';

/**
 * MyGarden
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyGarden extends CGFobject {
	constructor(scene, nOfLines) {
		super(scene);
		this.nOfLines = nOfLines;
		this.flowers = [];
	}

	generateRandom(max) {
        return Math.random() * max;
	}

	generateInteger(min, max) {
		return Math.floor(Math.random() * max - 1 + min);
	}
	
	init() {
		for (let i = 0; i < this.nOfLines ^ 2; i++) {
			this.flowers.push(new MyFlower(this.scene, this.generateInteger(4, 10), this.generateInteger(5, 10), this.generateInteger(3,6)));
		}
	}
	
	display() {

	}
}