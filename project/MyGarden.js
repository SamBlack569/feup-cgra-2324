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
		this.nStacks = [];
		this.initFlowers();
	}

	generateRandom(max) {
        return Math.random() * max;
	}

	generateInteger(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
	
	initFlowers() {
		for (let i = 0; i < this.nOfLines ** 2; i++) {
			const radius_recep = this.generateRandom(1) / 2 + 0.7;
			const stem_n_stacks = this.generateInteger(4, 8);
			this.flowers.push(new MyFlower(this.scene, this.generateInteger(4, 10), radius_recep, radius_recep * 1.8, stem_n_stacks));
			this.nStacks.push(stem_n_stacks);
		}
	}
	
	display() {
		const spacing = 15;
		let curr = 0;
		for (let line = 0; line < this.nOfLines; line++) {
			for (let column = 0; column < this.nOfLines; column++) {
				this.scene.pushMatrix();
				this.scene.translate(line * spacing, -(4 - this.nStacks[curr]) * 2, column * spacing);
				this.flowers[curr].display();
				this.scene.popMatrix();
				curr++;
			}
		}
		
	}
}