import { CGFobject } from '../../lib/CGF.js';
import { CGFappearance } from '../lib/CGF.js';
import { MyRock } from './MyRock.js';

export class MyRockSet extends CGFobject {

    constructor(scene, number) {
        super(scene);
        this.number = number;
        this.initMaterial();
        this.initRocks();
    }

    // generate random number between 0 and max
    generateRandom(max) {
        return Math.random() * max;
    }

    initMaterial() {
        this.material = new CGFappearance(this.scene);
        this.material.loadTexture("images/gray.jpg");
    }

    initRocks() {
        this.rocks = [];
        for (let i = 0; i < this.number; i++) {
            this.rocks.push(new MyRock(this.scene, 1, 10, 10));
        }
        this.rock = new MyRock(this.scene, 1, 10, 10);
    }

    display() {
        this.scene.pushMatrix();
        this.material.apply();
        this.scene.translate(0, 0, 0);
        let i = 0;
        let x = 0;
        let y = 0;
        let z = 0;
        for (const rock of this.rocks) {
            if (i < 3) {
                x += 2;
            } else if (i < 7) {
                x = 0;
                z += 2;
            } else {
                x = 0;
                z = 0;
                y += 2;
            }
            this.scene.pushMatrix();
            this.scene.translate(x, y, z);
            this.scene.rotate(Math.PI / 2, 1, 0, 0);
            this.scene.scale(1, 1, 0.5);
            rock.display();
            this.scene.popMatrix();
            i++;
        }
        this.scene.popMatrix();
    }
}