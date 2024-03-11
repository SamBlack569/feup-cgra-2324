import { CGFobject } from '../lib/CGF.js';
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
	constructor(scene, diamondColor, parallelogramColor, BigTriangleBottomColor, BigTriangleTopColor, TriangleColor, SmallTriangleBottomColor, SmallTriangleTopColor) {
		super(scene);
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangleSmall = new MyTriangleSmall(this.scene);
        this.triangleBig = new MyTriangleBig(this.scene);
        this.diamondColor = diamondColor;
        this.parallelogramColor = parallelogramColor;
        this.BigTriangleBottomColor = BigTriangleBottomColor;
        this.BigTriangleTopColor = BigTriangleTopColor;
        this.TriangleColor = TriangleColor;
        this.SmallTriangleBottomColor = SmallTriangleBottomColor;
        this.SmallTriangleTopColor = SmallTriangleTopColor;
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
        this.diamondColor.apply();
        this.diamond.display();
        this.scene.popMatrix();

        //Parallellogram
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.parallelogramColor.apply();
        this.parallelogram.display();
        this.scene.popMatrix();

        //Big Triangle
        this.scene.pushMatrix();
        this.scene.translate(1, 3, 0);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.BigTriangleTopColor.apply();
        this.triangleBig.display();
        this.scene.popMatrix();

        //Big Triangle
        this.scene.pushMatrix();
        this.scene.translate(3, 5, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.BigTriangleBottomColor.apply();
        this.triangleBig.display();
        this.scene.popMatrix();

        //First Triangle
        this.scene.pushMatrix();
        this.scene.translate(2, 6, 0);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.TriangleColor.apply();
        this.triangle.display();
        this.scene.popMatrix();

        //Small Triangle
        this.scene.pushMatrix();
        this.scene.translate(2, 7, 0);
        this.SmallTriangleTopColor.apply();
        this.triangleSmall.display();
        this.scene.popMatrix();

        //Small Triangle
        this.scene.pushMatrix();
        this.scene.translate(4, 1, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.SmallTriangleBottomColor.apply();
        this.triangleSmall.display();
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