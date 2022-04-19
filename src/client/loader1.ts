import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { scene } from './client'

export class Loader1 {
    main: GLTFLoader
    mixer2: any

    constructor() {
        this.main = new GLTFLoader()
        this.main.load('models/deform1.gltf', (gltf) => {
            gltf.scene.position.set(0, 1, 0)
            gltf.scene.rotation.set(Math.PI / 2.2, 0, 0)
            this.mixer2 = new THREE.AnimationMixer(gltf.scene)
            const action = this.mixer2.clipAction(gltf.animations[0])
            console.log(action)
            action.play()
            scene.add(gltf.scene)
        })
    }
}
