import { CGFobject } from '../../lib/CGF.js';
import { CGFappearance } from '../lib/CGF.js';
import { MyRock } from './MyRock.js';

export class MyRockSet extends CGFobject {

    constructor(scene) {
        super(scene);
        this.number = 49;
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
            this.rocks.push(new MyRock(this.scene, this.generateRandom(80)/100 + 0.6, 10, 10));
        }
    }

    display() {
        this.scene.pushMatrix();
        this.material.apply();
        this.scene.translate(0, 0, 0);
        for (const rock of this.rocks) {
            this.scene.pushMatrix();
            this.scene.rotate(Math.PI / 2, 1, 0, 0);
            this.scene.scale(1, 1, 0.5);
            rock.display();
            this.scene.popMatrix();
        }
        this.scene.popMatrix();
    }
    display() {
        this.scene.pushMatrix();
        this.material.apply();
        this.scene.translate(0, -75, 40);

        // Calculate number of rows in the pyramid
        const numRows = Math.ceil(Math.sqrt(this.number));

        // Loop through each row
        for (let row = 0; row < numRows; row++) {
            // Calculate number of rocks in current row
            const numRocksInRow = row + 1;

            // Calculate offset for spacing between rocks in current row
            const rowOffset = numRocksInRow * 0.5; // Adjust the spacing as needed

            // Loop through each rock in current row
            for (let col = 0; col < numRocksInRow; col++) {
                // Calculate position for current rock
                const x = col * rowOffset - (rowOffset * (numRocksInRow - 1)) / 2;
                const y = -row * rowOffset/2 - (rowOffset * (numRows - 1)) / 2;

                // Translate to the calculated position
                this.scene.pushMatrix();
                this.scene.translate(x, y, 0);
                this.scene.rotate(Math.PI / 2, 1, 0, 0);
                this.scene.scale(1, 1, 0.5);
                // Display the rock
                this.rocks[row * numRows + col].display();
                this.scene.popMatrix();
            }
        }
        this.scene.popMatrix();
    }

}