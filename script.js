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
    object.setAttribute('scale', '0.5 0.5 0.5'); // Adjust the scale as needed

    document.getElementById('object-container').appendChild(object);
});

// Preload objects
document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('a-scene');
    
    // Add the first object
    const objects = {
        object1: 'https://cdn.jsdelivr.net/gh/nearcode/crating@3027978bac5a5f024704ee3c66f334021c7233ca/untitled.glb',
        object2: '', // Add link for object2 here
        object3: '', // Add link for object3 here
        object4: '', // Add link for object4 here
        object5: '', // Add link for object5 here
        object6: ''  // Add link for object6 here
    };

    for (const [id, src] of Object.entries(objects)) {
        if (src) { // Add only objects with valid links
            const asset = document.createElement('a-asset-item');
            asset.setAttribute('id', id);
            asset.setAttribute('src', src);
            scene.appendChild(asset);
        }
    }
});
