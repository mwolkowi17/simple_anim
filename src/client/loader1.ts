import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { scene } from './client'

export let mixer: THREE.AnimationMixer
export class Loader1 {
    main: GLTFLoader

    constructor() {
        this.main = new GLTFLoader()
        this.main.load(
            'models/deform1.gltf',
            (gltf) => {
                gltf.scene.position.set(0, 1, 0)
                gltf.scene.rotation.set(Math.PI / 2.2, 0, 0)

                mixer = new THREE.AnimationMixer(gltf.scene)
                const action = mixer.clipAction(gltf.animations[0])
                console.log(action);
                action.play()

                scene.add(gltf.scene)
            }
        )
    }
}