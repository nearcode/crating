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
    
    // Add the first object (you can add more later)
    const objects = {
        object1: 'https://cdn.jsdelivr.net/gh/nearcode/crating@3027978bac5a5f024704ee3c66f334021c7233ca/untitled.glb',
        object2: '', // ใส่ลิงก์ของ object2 ที่นี่
        object3: '', // ใส่ลิงก์ของ object3 ที่นี่
        object4: '', // ใส่ลิงก์ของ object4 ที่นี่
        object5: '', // ใส่ลิงก์ของ object5 ที่นี่
        object6: ''  // ใส่ลิงก์ของ object6 ที่นี่
    };

    for (const [id, src] of Object.entries(objects)) {
        if (src) { // เพิ่มเฉพาะวัตถุที่มีลิงก์
            const asset = document.createElement('a-asset-item');
            asset.setAttribute('id', id);
            asset.setAttribute('src', src);
            scene.appendChild(asset);
        }
    }
});
