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
   

    constructor() {
        this.main = new GLTFLoader()
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
            //this.action.play()
            //this.action1.play()
            scene.add(gltf.scene)
        })
    }

    play1(){
        
        this.action.play()
        setTimeout(() => {
             this.action.stop()}, 4000);
    }

    play2(){
       
        this.action1.play()
        setTimeout(() => {
             this.action1.stop()}, 4000);
    }

    play3(){
        
        this.action2.play()
        setTimeout(() => {
             this.action2.stop()}, 4000);
    }

    play4(){
        console.log('clicked')
        this.action3.play()
        setTimeout(() => {
             this.action3.stop()}, 4000);
    }

    play5(){
        console.log('clicked')
        this.action4.play()
        setTimeout(() => {
             this.action4.stop()}, 4000);
    }

    play6(){
        console.log('clicked')
        this.action5.play()
        setTimeout(() => {
             this.action5.stop()}, 4000);
    }

}
