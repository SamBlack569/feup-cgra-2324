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
        
        this.vertices = [];

        this.indices = [];

        this.normals = [];

        for (let stack = 0 ; stack <= this.stacks ; stack += 1) {
            this.vertices.push(1, 0, stack / this.stacks);
            this.normals.push(1, 0, 0);
        }

        for (let slice = 1 ; slice <= this.slices ; slice++) {

            let angle = 2 * Math.PI * slice / this.slices;
            let x = Math.cos(angle);
            let y = Math.sin(angle);

            let vector_size = Math.sqrt(x * x + y * y);
            if (slice != this.slices) {    
                this.vertices.push(x, y, 0);
                this.normals.push(x / vector_size, y / vector_size, 0);
            }

            for (let stack = 1 ; stack <= this.stacks ; stack++) {
                
                if (slice != this.slices) {

                    let z = stack / this.stacks;
                    this.vertices.push(x, y, z);
                    this.normals.push(x / vector_size, y / vector_size, 0);
                    
                    let points = this.vertices.length / 3;
                    let index3 = points - 2;
                    let index4 = points - 1;
                    let index2 = index4 - (this.stacks + 1);
                    let index1 = index2 - 1;
                    this.indices.push(index1, index3, index4, index1, index4, index2);

                } else {

                    let points = this.vertices.length / 3;
                
                    let index3 = stack - 1;
                    let index4 = stack;
                    let index2 = points - this.stacks - 1 + stack;
                    let index1 = index2 - 1;
                    this.indices.push(index1, index3, index4, index1, index4, index2);
                }
            }
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}