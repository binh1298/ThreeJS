import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

const sizes = { 
  width: window.innerWidth,
  height: window.innerHeight
}
THREE.ColorManagement.enabled = false

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45)
const renderer = new THREE.WebGLRenderer()

renderer.render()
