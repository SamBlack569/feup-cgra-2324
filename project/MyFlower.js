import { CGFobject, CGFappearance } from '../lib/CGF.js';
import { MyPetal } from './MyPetal.js';
import { MyReceptacle } from './MyReceptacle.js';
import { MyStem } from './MyStem.js';

/**
 * MyFlower
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyFlower extends CGFobject {
	constructor(scene, n_petals, radius_recep, radius_stem, n_stem) {
        super(scene);
        this.radius_recep = radius_recep;
        this.n_petals = n_petals;
        this.radius_stem = radius_stem;
        this.petal = new MyPetal(this.scene, Math.PI / this.generateInteger(4, 15), this.generateInteger(0, 3));
        this.receptacle = new MyReceptacle(this.scene, radius_recep);
        this.stem = new MyStem(this.scene, 5, n_stem);
        this.initMaterials();
    }

    initMaterials() {
        this.stemTex = new CGFappearance(this.scene);
        this.stemTex.setDiffuse(1, 1, 1, 1);
        this.stemTex.setShininess(50.0);
        this.stemTex.loadTexture("images/stem_tex.jpg");
    }

    generateRandom(max) {
        return Math.random() * max;
	}

	generateInteger(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

    display() {
        this.scene.pushMatrix();

        this.scene.translate(5, 3, 0);
        
        this.scene.pushMatrix();

        this.scene.translate(0, -this.radius_recep, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.2 * this.radius_stem, 0.2 * this.radius_stem, 2);

        this.stemTex.apply();
        this.stem.display();

        this.scene.popMatrix();

        this.scene.rotate(-Math.PI / 10, 1, 0, 0);

        this.receptacle.display();

        const angle = 2*Math.PI / this.n_petals;

        for (let i = 0; i < this.n_petals; i++) {
            this.scene.pushMatrix();
            this.scene.rotate(angle * i, 0, 0, 1);
            this.scene.translate(0, this.radius_recep, 0);
            this.petal.display();
            this.scene.popMatrix();
        }

        this.scene.popMatrix();
    }
}