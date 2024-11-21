let activeObject = null;

// Set the active object to place
function setActiveObject(objectId) {
    activeObject = objectId;
    alert("Object 1 is selected! Click anywhere to place it.");
}

// Function to place an object at the clicked position
document.querySelector('a-scene').addEventListener('click', (event) => {
    if (!activeObject) return;

    // Get click position
    const position = event.detail.intersection ? event.detail.intersection.point : { x: 0, y: 0, z: -1 };

    // Add a new object to the scene
    const object = document.createElement('a-entity');
    object.setAttribute('gltf-model', `#${activeObject}`);
    object.setAttribute('position', `${position.x} ${position.y} ${position.z}`);
    object.setAttribute('scale', '2 2 2'); // Adjust the scale for better visibility
    object.setAttribute('rotation', '0 0 0'); // Default rotation

    document.getElementById('object-container').appendChild(object);
});

// Preload objects
document.addEventListener('DOMContentLoaded', () => {
    console.log("Scene is loaded and ready.");
});
