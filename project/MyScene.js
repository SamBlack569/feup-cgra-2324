import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
import { MyPlane } from "./MyPlane.js";
import { MySphere } from "./MySphere.js";
import { MyPanorama } from "./MyPanorama.js";
import { MyRockSet } from "./MyRockSet.js";
import { MyFlower } from "./MyFlower.js";
import { MyGarden } from "./MyGarden.js";
import { MyBee } from "./MyBee.js";
import { MyHive } from "./MyHive.js";

/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
  constructor() {
    super();
  }
  init(application) {
    super.init(application);
    
    this.initCameras();
    this.initLights();

    //Background color
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    this.gl.enable(this.gl.BLEND);
    this.gl.depthFunc(this.gl.LEQUAL);

    //Objects connected to MyInterface
    this.displayAxis = false;
    this.displayEarth = false;
    this.displayGarden = true;
    this.displayRockSet = true;
    this.displayBee = true;
    this.displayHive = true;
    this.scaleFactor = 1;
    this.speedFactor = 1;
    this.lastTime = 0;

    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.plane = new MyPlane(this,30);
    this.sphere = new MySphere(this, 1, 25, 15, false);
    this.panorama = new MyPanorama(this);
    this.garden = new MyGarden(this, 4);
    this.rockSet = new MyRockSet(this);
    this.bee = new MyBee(this);
    this.hive = new MyHive(this);

    this.enableTextures(true);

    this.texture = new CGFtexture(this, "images/terrain.jpg");
    this.appearance = new CGFappearance(this);
    this.appearance.setTexture(this.texture);
    this.appearance.setTextureWrap('REPEAT', 'REPEAT');

    this.grassTex = new CGFtexture(this, "images/grass.jpg");
    this.grassApp = new CGFappearance(this);
    this.grassApp.setTexture(this.grassTex);

    this.earthTex = new CGFtexture(this, "images/earth.jpg");
    this.earthApp = new CGFappearance(this);
    this.earthApp.setTexture(this.earthTex);
    this.setUpdatePeriod(50);
  }
  initLights() {
    this.lights[0].setPosition(15, 0, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
  }
  initCameras() {
    this.camera = new CGFcamera(
      1.2,
      0.1,
      1000,
      vec3.fromValues(50, 10, 15),
      vec3.fromValues(0, 0, 0)
    );
  }
  setDefaultAppearance() {
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
  }

  checkKeys() {
    var text="Keys pressed:";
    var keysPressed=false;

    // Check for key codes e.g. in https://keycode.info/
    if (this.gui.isKeyPressed("KeyW")) {
      text += " W ";
      keysPressed = true;
      this.bee.accelerate(5);
    }

    if (this.gui.isKeyPressed("KeyS")) {
      text += " S ";
      keysPressed = true;
      this.bee.accelerate(-5);
    }

    if (this.gui.isKeyPressed("KeyA")) {
      text += " A ";
      keysPressed = true;
      this.bee.turn(0.15);
    }

    if (this.gui.isKeyPressed("KeyD")) {
      text += " D ";
      keysPressed = true;
      this.bee.turn(-0.15);
    }

    if (this.gui.isKeyPressed("KeyF")) {
      text += " F ";
      keysPressed = true;
      this.bee.accelerateVertical(-5);
    }

    if (this.gui.isKeyPressed("KeyP")) {
      text += " P ";
      keysPressed = true;
      this.bee.accelerateVertical(5);
    }

    if (this.gui.isKeyPressed("KeyR")) {
      text += " R ";
      keysPressed = true;
      this.bee.reset();
    }

    if (keysPressed)
      console.log(text);
  }

  setSpeedFactor(v) {
    this.bee.setSpeedFactor(v);
  }

  setScaleFactor(v) {
    this.bee.setScaleFactor(v);
  }

  update(t) {
    this.checkKeys();
    if (this.lastTime === 0) this.lastTime = t;
    if (this.displayBee) this.bee.update((t - this.lastTime) / 1000.0);
    this.lastTime = t;
    this.bee.updateWings(t);
    this.bee.updateOsc(t);
    super.update(t);
  }

  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();
    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

    // Draw axis
    if (this.displayAxis) this.axis.display();

    // ---- BEGIN Primitive drawing section

    this.pushMatrix();
    this.grassApp.apply();
    this.translate(0,-30,0);
    this.scale(400,400,400);
    this.rotate(-Math.PI/2.0,1,0,0);
    this.plane.display();
    this.popMatrix();
    this.earthApp.apply();
    
    if (this.displayEarth) this.sphere.display();
    if (this.displayGarden) this.garden.display();
    if (this.displayRockSet) this.rockSet.display();
    if (this.displayBee) this.bee.display();
    if (this.displayHive) this.hive.display();
    
    this.panorama.display();

    // ---- END Primitive drawing section
  }
}
