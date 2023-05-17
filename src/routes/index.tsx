import { createSignal, onCleanup, onMount } from 'solid-js';
import {
  AmbientLight,
  BoxGeometry,
  Clock,
  lerp,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
  TorusGeometry,
  WebGLRenderer,
} from '../utils/three';
import Experience from '../components/Pages/experience';
import Projects from '../components/Pages/projects';
import Contact from '../components/Pages/contact';
import './index.css';

export default function Home() {
  const [scrollPercent, setScrollPercent] = createSignal(0);
  const clock = new Clock();

  function handleScroll() {
    setScrollPercent(
      Math.min(
        window.scrollY / (document.body.offsetHeight - window.innerHeight),
        1,
      ),
    );
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', onResize);
  });

  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  const renderer = new WebGLRenderer();
  renderer.setClearAlpha(0);

  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshPhongMaterial({ color: 'slateblue' });
  const cube = new Mesh(geometry, material);
  cube.position.x = -0.5 - window.innerWidth / 600;

  scene.add(cube);
  camera.position.z = 5;

  const torusGeoFive = new TorusGeometry(1, 0.1, 16, 5);
  const torusFive = new Mesh(torusGeoFive, material);
  torusFive.position.x = window.innerWidth / 400;
  torusFive.rotation.y = Math.PI / 3;

  scene.add(torusFive);

  const torusGeoFour = new TorusGeometry(1, 0.1, 16, 4);
  const torusFour = new Mesh(torusGeoFour, material);
  torusFour.position.x = window.innerWidth / 400;
  torusFour.scale.set(0.5, 0.5, 0.5);
  torusFour.rotation.y = Math.PI / 2;
  torusFour.rotation.x = Math.PI / 3;

  scene.add(torusFour);

  const torusGeoThree = new TorusGeometry(1, 0.1, 16, 3);
  const torusThree = new Mesh(torusGeoThree, material);
  torusThree.position.x = window.innerWidth / 400;
  torusThree.scale.set(0.25, 0.25, 0.25);
  torusThree.rotation.x = 2 * Math.PI / 3;

  scene.add(torusThree);

  const ambient = new AmbientLight(0xffffff, 0.5);
  const spot = new SpotLight(0xffffff, 0.5, 0, 0.15, 1);
  spot.position.set(10, 10, 10);
  const point = new PointLight(0xffffff, 0.5);
  point.position.set(5, 10, 10);

  scene.add(ambient);
  scene.add(spot);
  scene.add(point);

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  function onResize() {
    cube.position.x = -0.5 - window.innerWidth / 600;
    torusFive.position.x = window.innerWidth / 400;
    torusFour.position.x = window.innerWidth / 400;
    torusThree.position.x = window.innerWidth / 400;
    camera.aspect = window.innerWidth / Math.max(900, window.innerHeight);
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, Math.max(900, window.innerHeight));
  }
  onResize();

  let frame = requestAnimationFrame(function loop() {
    frame = requestAnimationFrame(loop);

    const ROTATION_FACTOR = clock.getDelta() * 20;

    cube.rotation.x += 0.01 * ROTATION_FACTOR;
    cube.position.y = lerp(-2.5, 0.5, scrollPercent());
    cube.position.z = lerp(6, 1, scrollPercent());

    torusFive.rotation.y += 0.008 * ROTATION_FACTOR;
    torusFive.rotation.z += 0.01 * ROTATION_FACTOR;
    torusFour.rotation.y += 0.008 * ROTATION_FACTOR;
    torusFour.rotation.z += 0.01 * ROTATION_FACTOR;
    torusThree.rotation.y += 0.008 * ROTATION_FACTOR;
    torusThree.rotation.z += 0.01 * ROTATION_FACTOR;

    torusFive.position.y = lerp(0.25, 2, scrollPercent());
    torusFive.position.z = lerp(0, 5, scrollPercent());
    torusFour.position.y = lerp(0.25, 2, scrollPercent());
    torusFour.position.z = lerp(0, 5, scrollPercent());
    torusThree.position.y = lerp(0.25, 2, scrollPercent());
    torusThree.position.z = lerp(0, 5, scrollPercent());

    renderer.render(scene, camera);
  });

  onCleanup(() => {
    cancelAnimationFrame(frame);
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', onResize);
    document.body.removeChild(renderer.domElement);
  });

  return (
    <main class='active'>
      <h1>Riley Bruins</h1>
      <h2 class='subHeader'>Driven and passionate full stack developer.</h2>
      <div id='aboutMeCont'>
        <div class='aboutMe'>
          <h2>About Me</h2>
          <p>
            I am a full stack developer with 4+ years of experience writing
            code. I love programming and I have worked on countless projects,
            both in teams and by myself.
          </p>
        </div>
        <div class='aboutMe'>
          <h2>My Priorities</h2>
          <p>
            When building an application, I always make sure that it is
            performant and simple to navigate. Nobody wants to wait forever for
            a site to load, or get lost in it once it does!
          </p>
        </div>
      </div>
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
