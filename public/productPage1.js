const calculateReorderPoint = (demandRate, leadTime, stdDeviation, zScore) => {
    const safetyStock = zScore * stdDeviation * Math.sqrt(leadTime);
    return demandRate * leadTime + safetyStock;
};

document.addEventListener('DOMContentLoaded', () => {
    refreshProducts();
    document.getElementById('calcReorderPointBtn').addEventListener('click', () => {
        const reorderPoint = calculateReorderPoint(5, 1, 2, 1.645);
        alert(`The Reorder Point for the first product is: ${reorderPoint}`);
    });
    document.getElementById('AnalyzeSalesTrendsBtn').addEventListener('click', () => {
        const salesData = [10, 9, 6, 4, 6, 11, 14];
        const analysisResult = analyzeSalesTrends(salesData);
        alert(`
        Total Sales: ${analysisResult.totalSales}
        Average Sales: ${analysisResult.averageSales}
        Peak Sales Period: ${analysisResult.peakSalesPeriod}
        Trend: ${analysisResult.trend}
        Forecast: ${analysisResult.forecast}`);
    });
    document.getElementById('EditBtn').addEventListener('click', () => {
        editProduct();})
});

const refreshProducts = async () => {
    try {
        const response = await fetch('productDB.json');
        const productsData = await response.json();
        const product = productsData[0];
        const productDetailsContainer = document.querySelector('.product-details');

        const productHTML = `
            <h2>Product Details</h2>
            <p><strong>ID:</strong> ${product.id}</p>
            <p><strong>Name:</strong> ${product.name}</p>
            <p><strong>Color:</strong> ${product.color}</p>
            <p><strong>Size:</strong> ${product.size}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Barcode:</strong> ${product.barcode}</p>
            <p><strong>Weight:</strong> ${product.weight}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Quantity in Store:</strong> ${product.quantityinstore}</p>
            <p><strong>Quantity in Warehouse:</strong> ${product.quantityinwarehouse}</p>
            <p><strong>Safety Stock Level:</strong> ${product.safetystocklevel}</p>
            <h2>Advanced Information</h2>
            <p><strong>Demand Rate Input:</strong> ${product.demandRateInput}</p>
            <p><strong>Lead Time:</strong> ${product.leadTime}</p>
            <p><strong>Standard Deviation:</strong> ${product.stdDeviation}</p>
            <p><strong>Service Level:</strong> ${product.serviceLevel}</p>
        `;
        
        productDetailsContainer.innerHTML = productHTML;
    } catch (error) {
        console.error('Error fetching products:', error);
        document.getElementById('contentDiv').innerHTML = '<h2>Error fetching products</h2>';
    }
};

function analyzeSalesTrends(salesData) {
    // Calculate total sales
    const totalSales = salesData.reduce((acc, curr) => acc + curr, 0);

    // Calculate average sales
    const averageSales = totalSales / salesData.length;

    // Find peak sales period
    let peakSalesPeriod = '';
    let maxSales = 0;
    for (let i = 0; i < salesData.length; i++) {
        if (salesData[i] > maxSales) {
            maxSales = salesData[i];
            peakSalesPeriod = `Period ${i + 1}`;
        }
    }

    // Detect trends (simple trend detection example)
    const trend = salesData[salesData.length - 1] > salesData[0] ? 'Increasing' : 'Decreasing';

    // Forecast future sales (simple linear forecast)
    const lastSales = salesData[salesData.length - 1];
    const forecast = lastSales + (lastSales - salesData[salesData.length - 2]);

    return {
        totalSales,
        averageSales,
        peakSalesPeriod,
        trend,
        forecast
    };
}

const editProduct = async () => {
    try {
        const response = await fetch('productDB.json');
        const productsData = await response.json();
        const product = productsData[0]; // Assuming you're editing the first product for now

        // Prompt for editing
        const newName = prompt('Enter new name:', product.name);
        const newColor = prompt('Enter new color:', product.color);
        const newSize = prompt('Enter new size:', product.size);
        const newPrice = prompt('Enter new price:', product.price);
        const newBarcode = prompt('Enter new barcode:', product.barcode);
        // You can add more prompts for other properties as needed

        // Update product data
        product.name = newName;
        product.color = newColor;
        product.size = newSize;
        product.price = newPrice;
        product.barcode = newBarcode;
        // Update other properties as needed

        // Save updated data back to JSON file
        const updatedData = JSON.stringify(productsData, null, 2);
        // Assuming you're using POST method to update the file
        await fetch('http://localhost:3000/update', {
            method: 'POST',
            body: updatedData,
            headers: {
                'Content-Type': 'application/json'
            }
        });        
        
        // Refresh product display
        refreshProducts();
        alert('Product information updated successfully.');
    } catch (error) {
        console.error('Error editing product:', error);
        alert('Error editing product. Please try again.');
    }
};
