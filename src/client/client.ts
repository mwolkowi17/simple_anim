import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'
import { Camera1 } from './camera1'
import { Light1 } from './light1'
import { Light2 } from './light2'
import { Controls1 } from './controls1'
import { Loader1 } from './loader1'


export const scene = new THREE.Scene()

const light1 = new Light1()
scene.add(light1.light)

const light2 = new Light2()
scene.add(light2.light)

const camera1 = new Camera1()
scene.add(camera1.camera)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls1 = new Controls1(camera1.camera, renderer.domElement)

const loader1 = new Loader1()

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera1.camera.aspect = window.innerWidth / window.innerHeight
    camera1.camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

//trigs

const trig1= document.createElement('div')
trig1.className='tra'
document.body.appendChild(trig1)
trig1.addEventListener('mouseover', function(){loader1.play1()})

const trig2= document.createElement('div')
trig2.className='trb'
document.body.appendChild(trig2)
trig2.addEventListener('mouseover', function(){loader1.play2()})

const trig3= document.createElement('div')
trig3.className='trc'
document.body.appendChild(trig3)
trig3.addEventListener('mouseover', function(){loader1.play3()})

const trig4= document.createElement('div')
trig4.className='trd'
document.body.appendChild(trig4)
trig4.addEventListener('mouseover', function(){loader1.play4()})

const trig5= document.createElement('div')
trig5.className='tre'
document.body.appendChild(trig5)
trig5.addEventListener('mouseover', function(){loader1.play5()})

const trig6= document.createElement('div')
trig6.className='trf'
document.body.appendChild(trig6)
trig6.addEventListener('mouseover', function(){loader1.play6()})


const stats = Stats()
document.body.appendChild(stats.dom)

const clock = new THREE.Clock()

function animate() {
    requestAnimationFrame(animate)

    controls1.main.update()

    if (loader1.mixer) loader1.mixer.update(clock.getDelta())

    render()

    stats.update()
}

function render() {
    renderer.render(scene, camera1.camera)
}

animate()
