// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"Load3D.js":[function(require,module,exports) {
//threejs - demo - https://threejs.org/examples/webgl_particles_random.html
var container = document.createElement('div');
document.body.appendChild(container);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
camera.position.z = 1000; //pull this back to 2000 to see what is actually going on

var scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0000F0, 0.0009); //color of fog - objects are all white

var geometry = new THREE.Geometry();

for (i = 0; i < 20000; i++) //total objects within each particle object
{
  //-1000 is for centering on screen, span would be -1000 to 1000
  var vertex = new THREE.Vector3();
  vertex.x = Math.random() * 2000 - 1000;
  vertex.y = Math.random() * 2000 - 1000;
  vertex.z = Math.random() * 2000 - 1000;
  geometry.vertices.push(vertex);
} //repeating similar code for each "Particle object" I want --- can add for loop


var material = new THREE.ParticleBasicMaterial({
  size: 4
});
var particles = new THREE.ParticleSystem(geometry, material);
particles.rotation.x = Math.random() * 6;
particles.rotation.y = Math.random() * 6;
particles.rotation.z = Math.random() * 6;
scene.add(particles);
material = new THREE.ParticleBasicMaterial({
  size: 3
});
var particles = new THREE.ParticleSystem(geometry, material);
particles.rotation.x = Math.random() * 6;
particles.rotation.y = Math.random() * 6;
particles.rotation.z = Math.random() * 6;
scene.add(particles);
material = new THREE.ParticleBasicMaterial({
  size: 5
});
var particles = new THREE.ParticleSystem(geometry, material);
particles.rotation.x = Math.random() * 6;
particles.rotation.y = Math.random() * 6;
particles.rotation.z = Math.random() * 6;
scene.add(particles);
material = new THREE.ParticleBasicMaterial({
  size: 5
});
var particles = new THREE.ParticleSystem(geometry, material);
particles.rotation.x = Math.random() * 6;
particles.rotation.y = Math.random() * 6;
particles.rotation.z = Math.random() * 6;
scene.add(particles);
material = new THREE.ParticleBasicMaterial({
  size: 5
});
var particles = new THREE.ParticleSystem(geometry, material);
particles.rotation.x = Math.random() * 6;
particles.rotation.y = Math.random() * 6;
particles.rotation.z = Math.random() * 6;
scene.add(particles);
material = new THREE.ParticleBasicMaterial({
  size: 5
});
var particles = new THREE.ParticleSystem(geometry, material);
particles.rotation.x = Math.random() * 6;
particles.rotation.y = Math.random() * 6;
particles.rotation.z = Math.random() * 6;
scene.add(particles); ////////////////////////////////////////////////////////////////

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);
renderer.render(scene, camera);
render();

function render() {
  requestAnimationFrame(render);

  for (i = 0; i < scene.children.length; i++) {
    var object = scene.children[i];

    if (object instanceof THREE.ParticleSystem) {
      object.rotation.y += .0035;
    }
  }

  renderer.render(scene, camera);
}

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
},{}]},{},["Load3D.js"], null)
//# sourceMappingURL=/Load3D.9aa08ac5.map