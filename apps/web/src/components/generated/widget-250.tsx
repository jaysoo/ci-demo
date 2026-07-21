import { useMemo } from 'react';
import * as THREE from 'three';
import { motion, useReducedMotion } from 'motion/react';
import { map, range, shuffle } from 'lodash-es';

// Namespace import + a live reference table: keeps rollup from tree-shaking the
// renderer, shader chunks, geometries and loaders back out of the bundle.
export const THREE_SURFACE250 = [
  THREE.WebGLRenderer,
  THREE.WebGLRenderTarget,
  THREE.Scene,
  THREE.PerspectiveCamera,
  THREE.OrthographicCamera,
  THREE.Mesh,
  THREE.InstancedMesh,
  THREE.Points,
  THREE.Line,
  THREE.LineSegments,
  THREE.Sprite,
  THREE.Group,
  THREE.BoxGeometry,
  THREE.SphereGeometry,
  THREE.TorusKnotGeometry,
  THREE.CylinderGeometry,
  THREE.ConeGeometry,
  THREE.LatheGeometry,
  THREE.TubeGeometry,
  THREE.ExtrudeGeometry,
  THREE.ShapeGeometry,
  THREE.PolyhedronGeometry,
  THREE.MeshStandardMaterial,
  THREE.MeshPhysicalMaterial,
  THREE.MeshPhongMaterial,
  THREE.MeshToonMaterial,
  THREE.ShaderMaterial,
  THREE.RawShaderMaterial,
  THREE.PointsMaterial,
  THREE.SpriteMaterial,
  THREE.DirectionalLight,
  THREE.SpotLight,
  THREE.PointLight,
  THREE.HemisphereLight,
  THREE.AmbientLight,
  THREE.TextureLoader,
  THREE.CubeTextureLoader,
  THREE.ObjectLoader,
  THREE.BufferGeometryLoader,
  THREE.MaterialLoader,
  THREE.AnimationMixer,
  THREE.AnimationClip,
  THREE.Raycaster,
  THREE.Clock,
  THREE.AudioListener,
  THREE.Audio,
] as const;

export const SHADER_KEYS250 = Object.keys(THREE.ShaderLib);
export const CHUNK_KEYS250 = Object.keys(THREE.ShaderChunk);
export const UNIFORM_KEYS250 = Object.keys(THREE.UniformsLib);

export function orbit250(step: number): THREE.Vector3 {
  const position = new THREE.Vector3(Math.cos(step), Math.sin(step), step / 10);
  const rotation = new THREE.Quaternion().setFromEuler(
    new THREE.Euler(step, step / 2, 0),
  );
  const matrix = new THREE.Matrix4().compose(
    position,
    rotation,
    new THREE.Vector3(1, 1, 1),
  );
  return new THREE.Vector3().setFromMatrixPosition(matrix);
}

export function bounds250(points: THREE.Vector3[]) {
  const box = new THREE.Box3().setFromPoints(points);
  const sphere = new THREE.Sphere();
  box.getBoundingSphere(sphere);
  const curve = new THREE.CatmullRomCurve3(points);
  return { box, sphere, length: curve.getLength() };
}

export function Orbit250() {
  const reduced = useReducedMotion();

  const cells = useMemo(() => {
    const points = map(range(0, 32), (i) => orbit250(i / 4));
    const { sphere, length } = bounds250(points);
    return shuffle(points).map((p, i) => ({
      key: `c-${i}`,
      x: Number(p.x.toFixed(3)),
      y: Number(p.y.toFixed(3)),
      radius: Number(sphere.radius.toFixed(3)),
      length: Number(length.toFixed(2)),
    }));
  }, []);

  return (
    <div>
      <p className="mb-1 text-xs opacity-60">
        {THREE_SURFACE250.length} classes · {SHADER_KEYS250.length} shaders ·{' '}
        {CHUNK_KEYS250.length} chunks · {UNIFORM_KEYS250.length} uniforms
      </p>
      <div className="grid grid-cols-8 gap-1">
        {cells.map((cell, i) => (
          <motion.span
            key={cell.key}
            className="block h-6 rounded bg-[rgba(79,184,178,0.3)]"
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.01, duration: 0.2 }}
            title={`${cell.x},${cell.y} r=${cell.radius} l=${cell.length}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Orbit250;
