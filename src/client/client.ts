import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Stats from 'three/examples/jsm/libs/stats.module'
import { GUI } from 'dat.gui'
import { Camera1 } from './camera1'
import { Light1 } from './light1'
import { Light2 } from './light2'
import { Controls1 } from './controls1'

const scene = new THREE.Scene()

const light1 = new Light1()
scene.add(light1.light)

const light2 = new Light2()
scene.add(light2.light)

const camera1 = new Camera1();
scene.add(camera1.camera)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls1 = new Controls1(camera1.camera, renderer.domElement)
controls1.main.enableDamping = true
controls1.main.target.set(0, 1, 0)

let mixer: THREE.AnimationMixer
// const animationActions: THREE.AnimationAction[] = []
// let activeAction: THREE.AnimationAction
// let lastAction: THREE.AnimationAction
const gltfLoader = new GLTFLoader()

gltfLoader.load(
    'models/deform1.gltf',
    (gltf) => {
        gltf.scene.position.set(0,1,0)
        gltf.scene.rotation.set(Math.PI/2.2,0,0)

        mixer = new THREE.AnimationMixer(gltf.scene)
        const action = mixer.clipAction(gltf.animations[0])
        console.log(action);
        action.play()
       
        scene.add(gltf.scene)
    }
)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera1.camera.aspect = window.innerWidth / window.innerHeight
    camera1.camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

const stats = Stats()
document.body.appendChild(stats.dom)


const clock = new THREE.Clock()

function animate() {
    requestAnimationFrame(animate)

    controls1.main.update()

    if (mixer) mixer.update(clock.getDelta())

    render()

    stats.update()
}

function render() {
    renderer.render(scene, camera1.camera)
}

animate()