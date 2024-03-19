import { CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";

/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.diamond = new MyDiamond(this.scene, [0, 0.5, 0.25, 0.75, 0.25, 0.25, 0.5, 0.5, 0, 0.5, 0.25, 0.75, 0.25, 0.25, 0.5, 0.5]);
        this.trianglePink = new MyTriangle(this.scene, [0, 0.5, 0, 1, 0.5, 1, 0, 0.5, 0, 1, 0.5, 1]);
        this.triangleBlue = new MyTriangleBig(this.scene, [1, 0, 0, 0, 0.5, 0.5, 1, 0, 0, 0, 0.5, 0.5]);
        this.triangleOrange = new MyTriangleBig(this.scene, [1, 1, 1, 0, 0.5, 0.5, 1, 1, 1, 0, 0.5, 0.5]);
        this.trianglePurple = new MyTriangleSmall(this.scene, [0, 0, 0, 0.5, 0.25, 0.25, 0, 0, 0, 0.5, 0.25, 0.25]);
        this.triangleRed = new MyTriangleSmall(this.scene, [0.25, 0.75, 0.75, 0.75, 0.5, 0.5, 0.25, 0.75, 0.75, 0.75, 0.5, 0.5]);
        this.parallelogram = new MyParallelogram(this.scene, [1, 1, 0.75, 1, 0.5, 1, 0.25, 0.75, 0.5, 0.75, 0.75, 0.75, 1, 1, 0.75, 1, 0.5, 1, 0.25, 0.75, 0.5, 0.75, 0.75, 0.75]);
        this.initMaterials();
    }

    initMaterials() {

        // Green Diamond
        this.diamondMaterial = new CGFappearance(this.scene);
        this.diamondMaterial.setAmbient(0, 0, 0, 1.0);
        this.diamondMaterial.setDiffuse(0, 1, 0, 0);
        this.diamondMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
        this.diamondMaterial.setShininess(10.0);

        // Pink Triangle
        this.trianglePinkMaterial = new CGFappearance(this.scene);
        this.trianglePinkMaterial.setAmbient(0, 0, 0, 1.0);
        this.trianglePinkMaterial.setDiffuse(1, 153 / 255, 204 / 255, 0);
        this.trianglePinkMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
        this.trianglePinkMaterial.setShininess(10.0);

        // Yellow Parallellogram
        this.parallelogramYellowMaterial = new CGFappearance(this.scene);
        this.parallelogramYellowMaterial.setAmbient(0, 0, 0, 1.0);
        this.parallelogramYellowMaterial.setDiffuse(1, 1, 0, 0);
        this.parallelogramYellowMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
        this.parallelogramYellowMaterial.setShininess(10.0);

        // Red Small Triangle
        this.TriangleSmallRedMaterial = new CGFappearance(this.scene);
        this.TriangleSmallRedMaterial.setAmbient(0, 0, 0, 1.0);
        this.TriangleSmallRedMaterial.setDiffuse(1, 0, 0, 0);
        this.TriangleSmallRedMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
        this.TriangleSmallRedMaterial.setShininess(10.0);

        // Purple Small Triangle
        this.TriangleSmallPurpleMaterial = new CGFappearance(this.scene);
        this.TriangleSmallPurpleMaterial.setAmbient(0, 0, 0, 1.0);
        this.TriangleSmallPurpleMaterial.setDiffuse(148/255, 0, 1, 0);
        this.TriangleSmallPurpleMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
        this.TriangleSmallPurpleMaterial.setShininess(10.0);

        // Orange Big Triangle
        this.triangleBigOrangeMaterial = new CGFappearance(this.scene);
        this.triangleBigOrangeMaterial.setAmbient(0, 0, 0, 1.0);
        this.triangleBigOrangeMaterial.setDiffuse(1, 128 / 255, 0, 0);
        this.triangleBigOrangeMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
        this.triangleBigOrangeMaterial.setShininess(10.0);

        // Blue Big Triangle
        this.triangleBigBlueMaterial = new CGFappearance(this.scene);
        this.triangleBigBlueMaterial.setAmbient(0, 0, 0, 1.0);
        this.triangleBigBlueMaterial.setDiffuse(0, 0, 1, 0);
        this.triangleBigBlueMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
        this.triangleBigBlueMaterial.setShininess(10.0);

        // Tangram texture
        this.texture = new CGFappearance(this.scene);
        this.texture.setAmbient(0.1, 0.1, 0.1, 1);
        this.texture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.texture.setSpecular(0.1, 0.1, 0.1, 1);
        this.texture.setShininess(10.0);
        this.texture.loadTexture('images/tangram.png');
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.translate(-2, -4, 0);

        //Diamond
        this.scene.pushMatrix();
        let translacao = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            3.0, 2.0, 0.0, 1.0,
        ];
        this.scene.multMatrix(translacao);
        this.texture.apply();
        this.diamond.display();
        this.scene.popMatrix();

        //Parallellogram
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.parallelogramYellowMaterial.apply();
        this.texture.apply();
        this.parallelogram.display();
        this.scene.popMatrix();

        //Big Triangle
        this.scene.pushMatrix();
        this.scene.translate(1, 3, 0);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.triangleBigBlueMaterial.apply();
        this.texture.apply();
        this.triangleBlue.display();
        this.scene.popMatrix();

        //Big Triangle
        this.scene.pushMatrix();
        this.scene.translate(3, 5, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.triangleBigOrangeMaterial.apply();
        this.texture.apply();
        this.triangleOrange.display();
        this.scene.popMatrix();

        //First Triangle
        this.scene.pushMatrix();
        this.scene.translate(2, 6, 0);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.trianglePinkMaterial.apply();
        this.texture.apply();
        this.trianglePink.display();
        this.scene.popMatrix();

        //Small Triangle
        this.scene.pushMatrix();
        this.scene.translate(2, 7, 0);
        this.TriangleSmallRedMaterial.apply();
        this.texture.apply();
        this.triangleRed.display();
        this.scene.popMatrix();

        //Small Triangle
        this.scene.pushMatrix();
        this.scene.translate(4, 1, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.TriangleSmallPurpleMaterial.apply();
        this.texture.apply();
        this.trianglePurple.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
      
    }

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangle.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.triangleBig.enableNormalViz();
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangle.disableNormalViz();
        this.triangleSmall.disableNormalViz();
        this.triangleBig.disableNormalViz();

    }
}