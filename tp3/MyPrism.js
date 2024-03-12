import { CGFobject } from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';

/**
 * MyPrism
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPrism extends CGFobject {
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

        let index = 0;
        let sos = 2 * Math.PI / this.slices;

        for(let l = 0; l < this.slices; l++) {

            let x1 = Math.cos(l*sos);
            let y1 = Math.sin(l*sos);
            let x2 = Math.cos((l+1)*sos);
            let y2 = Math.sin((l+1)*sos);

            for(let b = 0; b < this.stacks; b++) {
                let x  = Math.cos((l + 0.5)* sos);
                let y  = Math.sin((l + 0.5)* sos);
                let sz = Math.sqrt(x*x + y*y);

                this.vertices.push(x1, y1, b / this.stacks, x2, y2, b / this.stacks, x1, y1, (b + 1) / this.stacks, x2, y2, (b + 1) / this.stacks);
                this.indices.push(index+2, index, index+1, index+1, index+3, index+2);
                this.normals.push(x/sz, y/sz, 0, x/sz, y/sz, 0, x/sz, y/sz, 0, x/sz, y/sz, 0);
                index+=4;
            }
        
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
        
    }

    /*
    display() {
        this.scene.pushMatrix();

        for(let b = 0; b <= this.stacks; b += 1){
            for (let i = 0; i < Math.PI * 2; i += Math.PI * 2 / this.slices) {
                this.scene.pushMatrix();
                this.scene.rotate(i, 0, 0, 1);
                this.scene.translate(0, 0.866, b);
                this.scene.rotate(-Math.PI / 2, 1, 0, 0);
                this.quad.display();
                this.scene.popMatrix();
            }
        }

        this.scene.popMatrix();
    }

    enableNormalViz() {
        this.quad.enableNormalViz();
    }

    disableNormalViz() {
        this.quad.disableNormalViz();
    }
    */
}

