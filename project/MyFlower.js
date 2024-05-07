import { CGFobject } from '../lib/CGF.js';
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
        this.petal = new MyPetal(this.scene);
        this.receptacle = new MyReceptacle(this.scene, radius_recep);
        this.stem = new MyStem(this.scene, 10, n_stem);
    }

    generateInteger(max) {
        return Math.random() * max;
    }

    initMaterials() {
        
    }

    display() {
        this.scene.pushMatrix();

        this.scene.translate(5, 3, 0);
        
        this.scene.pushMatrix();

        this.scene.translate(0, -this.radius_recep, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.3, 0.3, 2);

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