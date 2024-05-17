import { CGFobject } from '../../lib/CGF.js';

export class MySemiSphere extends CGFobject {
    constructor(scene, radius, slices, stacks) {
        super(scene);
        this.radius = radius;
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }

    initBuffers(){
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        for (let stack = 0; stack <= this.stacks; stack++) {
            const theta = stack * Math.PI / (2 * this.stacks);
            const sinTheta = Math.sin(theta);
            const cosTheta = Math.cos(theta);

            for (let slice = 0; slice <= this.slices; slice++) {
                const phi = slice * 2 * Math.PI / this.slices;
                const sinPhi = Math.sin(phi);
                const cosPhi = Math.cos(phi);

                const x = cosPhi * sinTheta;
                const y = sinPhi * sinTheta;
                const z = cosTheta;
                const u = 1 - (slice / this.slices);
                const v = 1 - (stack / this.stacks);

                this.vertices.push(this.radius * x, this.radius * y, this.radius * z);
                this.normals.push(x, y, z);
                this.texCoords.push(u, v);
            }
        }

        for (let stack = 0; stack < this.stacks; stack++) {
            for (let slice = 0; slice < this.slices; slice++) {
                const first = (stack * (this.slices + 1)) + slice;
                const second = first + this.slices + 1;

                this.indices.push(first, second, first + 1);
                this.indices.push(second, second + 1, first + 1);
            }
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}