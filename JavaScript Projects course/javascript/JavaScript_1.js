// Switch statement with vehicle types
let vehicleType = "motorcycle";
let description = "";

switch (vehicleType) {
    case "car":
        description = "🚗 Practical for daily commuting";
        break;
    case "motorcycle":
        description = "🏍️ Fun and fuel-efficient!";
        break;
    case "bicycle":
        description = "🚴 Eco-friendly and healthy";
        break;
    case "truck":
        description = "🚚 Perfect for hauling cargo";
        break;
    case "scooter":
        description = "🛵 Great for short city trips";
        break;
    default:
        description = "Vehicle type not recognized";
}

console.log(`${vehicleType}: ${description}`);


// utilizing the document.getElementsByClassName() method.//



<!DOCTYPE html>
<html>
<head>
    <title>Vehicle Information</title>
    <style>
        .vehicle-type { 
            padding: 12px; 
            margin: 8px; 
            border: 2px solid #ddd; 
            cursor: pointer;
            text-align: center;
        }
        .selected { 
            border-color: #2196f3; 
            background-color: #bbdefb;
        }
        .info-box { 
            padding: 15px; 
            margin: 10px; 
            background-color: #f0f0f0; 
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h2>Select a Vehicle Type</h2>
    
    <div class="vehicle-type" data-vehicle="car">Car 🚗</div>
    <div class="vehicle-type" data-vehicle="motorcycle">Motorcycle 🏍️</div>
    <div class="vehicle-type" data-vehicle="bicycle">Bicycle 🚴</div>
    <div class="vehicle-type" data-vehicle="truck">Truck 🚚</div>
    <div class="vehicle-type" data-vehicle="scooter">Scooter 🛵</div>
    
    <div class="info-box" id="vehicle-info">Click a vehicle to see details</div>

    <script>
        const vehicleTypes = document.getElementsByClassName('vehicle-type');
        const infoBox = document.getElementById('vehicle-info');

        for (let i = 0; i < vehicleTypes.length; i++) {
            vehicleTypes[i].addEventListener('click', function() {
                const vehicle = this.getAttribute('data-vehicle');
                let info = '';
                
                // Switch statement for vehicle information
                switch (vehicle) {
                    case "car":
                        info = "Perfect for families and daily commuting. Offers comfort and storage space.";
                        break;
                    case "motorcycle":
                        info = "Great fuel efficiency and fun to ride. Ideal for solo travel and city navigation.";
                        break;
                    case "bicycle":
                        info = "Eco-friendly, promotes health, and perfect for short distances. Zero emissions!";
                        break;
                    case "truck":
                        info = "Excellent for hauling cargo and towing. Powerful engine for heavy-duty work.";
                        break;
                    case "scooter":
                        info = "Compact and efficient for city travel. Easy to park and very economical.";
                        break;
                    default:
                        info = "Information not available for this vehicle type.";
                }
                
                // Update selection styling
                const allVehicles = document.getElementsByClassName('vehicle-type');
                for (let j = 0; j < allVehicles.length; j++) {
                    allVehicles[j].classList.remove('selected');
                }
                this.classList.add('selected');
                
                infoBox.innerHTML = `
                    <h3>${vehicle.charAt(0).toUpperCase() + vehicle.slice(1)}</h3>
                    <p>${info}</p>
                `;
            });
        }
    </script>
</body>
</html>