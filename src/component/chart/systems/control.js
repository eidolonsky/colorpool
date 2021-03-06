import { OrbitControls } from '../../../js/three/examples/jsm/controls/OrbitControls.js';

const createControls = (camera, canvas) => {
    const controls = new OrbitControls(camera, canvas);

    controls.enableDamping = true;

    controls.tick = () => controls.update();
    // controls.maxPolarAngle = Math.PI / 2;
    // controls.minPolarAngle = Math.PI / 2;

    return controls;
}

export { createControls };