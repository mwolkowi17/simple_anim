import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'
import { GUI } from 'dat.gui'
import { Camera1 } from './camera1'
import { Light1 } from './light1'
import { Light2 } from './light2'
import { Controls1 } from './controls1'
import { Loader1, mixer } from './loader1'

export const scene = new THREE.Scene()

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

const loader1= new Loader1();


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