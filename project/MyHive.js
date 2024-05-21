import { CGFappearance, CGFobject, CGFtexture } from '../lib/CGF.js';

/**
 * MyHive
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyHive extends CGFobject {
    constructor(scene) {
        super(scene);
        this.slices = 10;
        this.stacks = 7;
        this.initMaterials();
        this.initSegments();
    }

    initMaterials() {
        this.texture = new CGFtexture(this.scene, 'images/hive.jpg');
        this.app = new CGFappearance(this.scene);
        this.app.setTexture(this.texture);
    }

    initSegments() {
        this.segments = [];
        this.height = 2;
        const maxRadius = 7; // Maximum radius of the middle segment

        const middleIndex = Math.floor(this.stacks / 2);

        for (let i = 0; i < this.stacks; i++) {
            // Calculate the radius for the current segment
            const distanceFromMiddle = Math.abs(i - middleIndex);
            const radius = maxRadius * (1 - (distanceFromMiddle / middleIndex) * 0.3); // Decrease radius as we move away from the middle
            this.segments.push(new MyHiveSegment(this.scene, this.slices, this.height, radius));
        }
    }

    display() {
        this.scene.pushMatrix();
        this.app.apply();
        this.scene.translate(0, -35, -40);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        for (const segment of this.segments) {
            this.scene.translate(0, 0, this.height); // Translate each segment up by its height
            segment.display();
        }
        this.scene.popMatrix();
    }
}

/**
 * MyHiveSegment
 * @constructor
 * @param scene - Reference to MyScene object
 * @param slices - Number of slices (segments around the circumference)
 * @param height - Height of the segment
 * @param radius - Radius of the segment
 */
class MyHiveSegment extends CGFobject {
    constructor(scene, slices, height, radius) {
        super(scene);
        this.slices = slices;
        this.height = height;
        this.radius = radius;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        // Vertices, normals, and texCoords for the side surface
        for (let slice = 0; slice <= this.slices; slice++) {
            const angle = (2 * Math.PI * slice) / this.slices;
            const x = Math.cos(angle) * this.radius;
            const y = Math.sin(angle) * this.radius;

            const s = slice / this.slices; // Texture coordinate s

            this.vertices.push(x, y, 0); // Bottom vertex
            this.vertices.push(x, y, this.height); // Top vertex
            this.normals.push(x, y, 0); // Normal for bottom vertex
            this.normals.push(x, y, 0); // Normal for top vertex

            this.texCoords.push(s, 1); // Texture coordinate for bottom vertex
            this.texCoords.push(s, 0); // Texture coordinate for top vertex

            if (slice < this.slices) {
                const current = 2 * slice;
                const next = current + 2;

                // First triangle of the quad
                this.indices.push(current, next, current + 1);
                this.indices.push(current + 1, next, next + 1);

                // Second triangle of the quad (back face)
                this.indices.push(next, current, current + 1);
                this.indices.push(next + 1, current + 1, next);
            }
        }

        // Vertices, indices, normals, and texCoords for the bottom face
        const bottomCenterIndex = this.vertices.length / 3;
        this.vertices.push(0, 0, 0); // Center vertex for the bottom face
        this.normals.push(0, 0, -1); // Normal for the center of the bottom face
        this.texCoords.push(0.5, 0.5); // Texture coordinate for the center of the bottom face

        for (let slice = 0; slice <= this.slices; slice++) {
            const angle = (2 * Math.PI * slice) / this.slices;
            const x = Math.cos(angle) * this.radius;
            const y = Math.sin(angle) * this.radius;

            const s = (x / this.radius) * 0.5 + 0.5; // Normalize x to [0,1]
            const t = (y / this.radius) * 0.5 + 0.5; // Normalize y to [0,1]

            this.vertices.push(x, y, 0); // Outer vertices of the bottom face
            this.normals.push(0, 0, -1); // Normals for the outer vertices of the bottom face
            this.texCoords.push(s, t); // Texture coordinates for the outer vertices of the bottom face

            if (slice < this.slices) {
                const current = bottomCenterIndex + 1 + slice;
                const next = bottomCenterIndex + 1 + slice + 1;
                this.indices.push(bottomCenterIndex, current, next);
                this.indices.push(current, bottomCenterIndex, next); // For the back face
            }
        }

        // Vertices, indices, normals, and texCoords for the top face
        const topCenterIndex = this.vertices.length / 3;
        this.vertices.push(0, 0, this.height); // Center vertex for the top face
        this.normals.push(0, 0, 1); // Normal for the center of the top face
        this.texCoords.push(0.5, 0.5); // Texture coordinate for the center of the top face

        for (let slice = 0; slice <= this.slices; slice++) {
            const angle = (2 * Math.PI * slice) / this.slices;
            const x = Math.cos(angle) * this.radius;
            const y = Math.sin(angle) * this.radius;

            const s = (x / this.radius) * 0.5 + 0.5; // Normalize x to [0,1]
            const t = (y / this.radius) * 0.5 + 0.5; // Normalize y to [0,1]

            this.vertices.push(x, y, this.height); // Outer vertices of the top face
            this.normals.push(0, 0, 1); // Normals for the outer vertices of the top face
            this.texCoords.push(s, t); // Texture coordinates for the outer vertices of the top face

            if (slice < this.slices) {
                const current = topCenterIndex + 1 + slice;
                const next = topCenterIndex + 1 + slice + 1;
                this.indices.push(topCenterIndex, next, current);
                this.indices.push(next, topCenterIndex, current); // For the back face
            }
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}
