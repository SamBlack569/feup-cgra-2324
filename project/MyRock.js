import { CGFobject } from '../../lib/CGF.js';

export class MyRock extends CGFobject {

    constructor(scene, radius, slices, stacks) {
        super(scene);
        this.radius = radius;
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }

    // generate random number between -1 and 1
    generateRandom() {
        const random = Math.random();
        const negOrPos = Math.random();
        return negOrPos < 0.5 ? -random : random;
    }

    initBuffers() {

        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        let ang;
        for (let height = 0; height <= this.stacks * 2; height++) {
            ang = - Math.PI / 2 + Math.PI * height / (2 * this.stacks);
            const randX = this.generateRandom();
            const randY = this.generateRandom();
            this.vertices.push(this.radius * (Math.cos(ang) + randX/10), this.radius * (Math.sin(ang) + randY/10), 0);
            console.log(randX, randY);
            this.normals.push(Math.cos(ang), Math.sin(ang), 0);
            this.texCoords.push(0, height / (this.stacks * 2));
        }

        let angXZ, angXY, x, y, z, points, index1, index2, index3, index4;
        for (let i = 1; i <= this.slices + 1; i++) {

            angXZ = 2 * Math.PI * i / this.slices;

            this.vertices.push(0, this.radius, 0);
            this.texCoords.push(0, 1);
            this.normals.push(0, 1, 0);

            for (let j = 0; j <= this.stacks * 2; j++) {

                angXY = - Math.PI / 2 + Math.PI * j / (2 * this.stacks);

                x = Math.cos(angXZ) * Math.cos(angXY);
                z = Math.sin(angXZ) * Math.cos(angXY);
                y = Math.sin(angXY);
                
                this.vertices.push(this.radius * (x + this.generateRandom()/10), this.radius * (y + this.generateRandom()/10), this.radius * (z + this.generateRandom()/10));
                this.normals.push(x, y, z);
                this.texCoords.push(1 - i / this.slices, 1 - j / (this.stacks * 2));
                points = this.vertices.length / 3;
                index3 = points - 2;
                index4 = points - 1;
                index2 = index4 - (this.stacks*2 + 1);
                index1 = index2 - 1;

                this.indices.push(index4, index3, index1, index2, index4, index1);
            }
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}