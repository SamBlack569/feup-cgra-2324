import {CGFobject} from '../lib/CGF.js';

/**
 * MyStem
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyStem extends CGFobject {
	constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
	}
	
    initBuffers() {
        // Arrays to store vertices, indices, and normals
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        // Loop to create vertices, indices, and normals for each slice and stack
        for (let slice = 0; slice <= this.slices; slice++) {
            // Calculate angle for current slice
            const angle = (2 * Math.PI * slice) / this.slices;
            // Calculate x and y coordinates for the current slice
            const x = Math.cos(angle);
            const y = Math.sin(angle);

            // Loop through each stack for the current slice
            for (let stack = 0; stack <= this.stacks; stack++) {
                // Calculate z coordinate for the current stack
                const z = stack;

                // Add vertex and normal for the current stack
                this.vertices.push(x, y, z);
                this.normals.push(x, y, 0);

                // Calculate indices for the current quad
                if (slice < this.slices && stack < this.stacks) {
                    const vertexCount = (this.stacks + 1) * slice + stack;
                    const nextVertexCount = vertexCount + this.stacks + 1;
                    this.indices.push(vertexCount, nextVertexCount, vertexCount + 1);
                    this.indices.push(nextVertexCount, nextVertexCount + 1, vertexCount + 1);
                }
            }
        }

        // Set primitive type and initialize WebGL buffers
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

}