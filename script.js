function validateForm() {
    
    const tagline = document.getElementById('tagline').value;
    if (tagline.length > 50) {
        alert("Tagline must not exceed 50 characters!");
        return false;
    }
    
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits!");
        return false;
    }
    return true;
}


class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    
    static displayName = (person) => {
        return `Name: ${person.name}, Email: ${person.email}`;
    }

    
    printDetails() {
        return `Person: ${this.name}, Email: ${this.email}`;
    }
}


class Student extends Person {
    constructor(name, email) {
        super(name, email); 
        
    }

    
    printDetails() {
        return `Student: ${this.name}, Email: ${this.email}`;
    }
}


function processOrder(event) {
    event.preventDefault(); 
    if (!validateForm()) return;

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tagline = document.getElementById('tagline').value;
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryDate = document.getElementById('delivery-date').value;

    
    let person;
    let student;
    try {
        person = new Person(name, email);
        student = new Student(name, email);
    } catch (error) {
        alert(error.message);
        return;
    }

    
    const receiptDate = new Date().toLocaleDateString();

    
    const receiptHTML = `
        <h2>Order Receipt</h2>
        <p><strong>Order Date:</strong> ${receiptDate}</p>
        <p><strong>Recipient:</strong> ${person.printDetails()}</p>
        <p><strong>Tagline:</strong> ${tagline}</p>
        <p><strong>Color:</strong> ${color}</p>
        <p><strong>Size:</strong> ${size}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Delivery Date:</strong> ${deliveryDate}</p>
        <p>${student.printDetails()}</p>
    `;

    
    document.getElementById('receipt').innerHTML = receiptHTML;
}