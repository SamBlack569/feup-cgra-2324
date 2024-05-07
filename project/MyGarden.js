import { CGFobject, CGFappearance } from '../lib/CGF.js';
import { MyFlower } from './MyFlower.js';

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
		this.initFlowers();
	}

	generateRandom(max) {
        return Math.random() * max;
	}

	generateInteger(min, max) {
		return Math.floor(Math.random() * max + 1 + min);
	}
	
	initFlowers() {
		for (let i = 0; i < this.nOfLines ^ 2; i++) {
			this.flowers.push(new MyFlower(this.scene, this.generateInteger(4, 10), this.generateInteger(5, 10), this.generateInteger(4,8)));
		}
	}
	
	display() {
		const spacing = 10;
		let curr = 0;
		for (let line = 0; line < this.nOfLines; line++) {
			for (let column = 0; column < this.nOfLines; column++) {
				this.scene.pushMatrix();
				this.scene.translate(line * spacing, column * spacing, 0);
				this.flowers[curr].display();
				this.scene.popMatrix();
				curr++;
			}
		}
		
	}
}