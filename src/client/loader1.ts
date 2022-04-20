import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { scene } from './client'

export class Loader1 {
    main: GLTFLoader
    mixer: any
    action: any
    action1: any
    action2: any
    action3: any
    action4: any
    action5: any
    ifplayed: boolean
    ifplayed1: boolean
    ifplayed2: boolean
    ifplayed3: boolean
    ifplayed4: boolean
    ifplayed5: boolean


    constructor() {
        this.main = new GLTFLoader()
        this.ifplayed = false;
        this.ifplayed1 = false;
        this.ifplayed2 = false;
        this.ifplayed3 = false;
        this.ifplayed4 = false;
        this.ifplayed5 = false;
        this.main.load('models/deform1.gltf', (gltf) => {
            gltf.scene.position.set(0, 1, 0)
            gltf.scene.rotation.set(Math.PI / 2.2, 0, 0)
            this.mixer = new THREE.AnimationMixer(gltf.scene)
            this.action = this.mixer.clipAction(gltf.animations[0])
            this.action1 = this.mixer.clipAction(gltf.animations[1])
            this.action2 = this.mixer.clipAction(gltf.animations[2])
            this.action3 = this.mixer.clipAction(gltf.animations[3])
            this.action4 = this.mixer.clipAction(gltf.animations[4])
            this.action5 = this.mixer.clipAction(gltf.animations[5])
            console.log(this.action)
            scene.add(gltf.scene)
        })
    }

    play1() {
        if (!this.ifplayed) {
            this.action.play()
            this.ifplayed=true
            setTimeout(() => {
                this.action.stop();
                this.ifplayed=false
            }, 4000);
        }

    }

    play2() {

        if (!this.ifplayed1) {
            this.action1.play()
            this.ifplayed1=true
            setTimeout(() => {
                this.action1.stop();
                this.ifplayed1=false
            }, 4000);
        }
    }

    play3() {

        if (!this.ifplayed2) {
            this.action2.play()
            this.ifplayed2=true
            setTimeout(() => {
                this.action2.stop();
                this.ifplayed2=false
            }, 4000);
        }
    }

    play4() {
        if (!this.ifplayed3) {
            this.action3.play()
            this.ifplayed3=true
            setTimeout(() => {
                this.action3.stop();
                this.ifplayed3=false
            }, 4000);
        }
    }

    play5() {
        if (!this.ifplayed4) {
            this.action4.play()
            this.ifplayed4=true
            setTimeout(() => {
                this.action4.stop();
                this.ifplayed4=false
            }, 4000);
        }
    }

    play6() {
        if (!this.ifplayed5) {
            this.action5.play()
            this.ifplayed5=true
            setTimeout(() => {
                this.action5.stop();
                this.ifplayed5=false
            }, 4000);
        }
    }

}
