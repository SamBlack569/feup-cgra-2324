import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";

/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene, textureTop, textureFront, textureRight, textureBack, textureLeft, textureBottom) {
        super(scene);
        this.quad = new MyQuad(this.scene);
        this.texTop = textureTop;
        this.texFront = textureFront;
        this.texRight = textureRight;
        this.texBack = textureBack;
        this.texLeft = textureLeft;
        this.texBottom = textureBottom;
    }
	
    display() {

        // cima
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.translate(0, 0, 0.5);
        this.texTop.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        // frente
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.texFront.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        // direita
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.texRight.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        // tras
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.texBack.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        // esquerda
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.scene.translate(0, 0, 0.5);
        this.texLeft.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        // baixo
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.translate(0, 0, 0.5);
        this.texBottom.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

    }
}

