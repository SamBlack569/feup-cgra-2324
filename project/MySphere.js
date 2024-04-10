import { CGFobject } from '../../lib/CGF.js';

export class MySphere extends CGFobject {

    constructor(scene, radius, slices, stacks) {
        super(scene);
        this.radius = radius;
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }

    initBuffers() {

        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        let ang;
        for (let height = 0; height <= this.stacks * 2; height++) {
            ang = - Math.PI / 2 + Math.PI * height / (2 * this.stacks);
            this.vertices.push(this.radius * Math.cos(ang), this.radius * Math.sin(ang), 0);
            this.normals.push(Math.cos(ang), Math.sin(ang), 0);
            this.texCoords.push(0, height / (this.stacks * 2));
        }

        let angXZ, angXY, x, y, z, points, index1, index2, index3, index4, y_factor;
        for (let i = 1; i <= this.slices + 1; i++) {

            angXZ = 2 * Math.PI * i / this.slices;

            this.vertices.push(0, this.radius , 0);
            this.texCoords.push(0, 1);
            this.normals.push(0, 1, 0);

            for (let j = 0; j <= this.stacks * 2; j++) {

                angXY = - Math.PI / 2 + Math.PI * j / (2 * this.stacks);
                y_factor = 1; // change to set sphere to be more or less flattened

                x = Math.cos(angXZ) * Math.cos(angXY);
                z = Math.sin(angXZ) * Math.cos(angXY);
                y = Math.sin(angXY);
                
                this.vertices.push(this.radius * x, this.radius * y * y_factor, this.radius * z);
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