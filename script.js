let activeObject = null;

// Set the active object to place
function setActiveObject(objectId) {
    activeObject = objectId;
}

// Function to place an object at the clicked position
document.querySelector('a-scene').addEventListener('click', (event) => {
    if (!activeObject) return;

    // Get click position
    const position = event.detail.intersection.point;

    // Add a new object to the scene
    const object = document.createElement('a-entity');
    object.setAttribute('gltf-model', `#${activeObject}`);
    object.setAttribute('position', `${position.x} ${position.y} ${position.z}`);
    object.setAttribute('scale', '0.5 0.5 0.5');

    document.getElementById('object-container').appendChild(object);
});

// Preload objects
document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('a-scene');
    ['https://cdn.jsdelivr.net/gh/nearcode/crating@3027978bac5a5f024704ee3c66f334021c7233ca/untitled.glb', 'object2', 'object3', 'object4', 'object5', 'object6'].forEach((id) => {
        const asset = document.createElement('a-asset-item');
        asset.setAttribute('id', id);
        asset.setAttribute('src', `https://cdn.jsdelivr.net/gh/nearcode/crating@3027978bac5a5f024704ee3c66f334021c7233ca/untitled.glb`);
        scene.appendChild(asset);
    });
});
