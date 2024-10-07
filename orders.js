// Sample JSON data (this would typically come from a server)
const jsonData = {
    "mvPurchaseOrders": [
        {
            "PurchaseOrderId": 90,
            "PurchaseOrderTypeId": 4,
            "PurchaseOrderTypeAbbreviation": "PO",
            "PurchaseOrderTypeDescription": "Purchase Order",
            "PurchaseOrderNo": "3",
            "PurchaseOrderReferenceNo": "",
            "PurchaseOrderReferenceApplication": "",
            "PurchaseOrderDate": "/Date(1606431600000-0000)/",
            "PurchaseOrderCustomOrderDate1": "/Date(-62135596800000-0000)/",
            "PurchaseOrderCustomOrderDate2": "/Date(-62135596800000-0000)/",
            "PurchaseOrderCurrencyCode": "ZAR",
            "PurchaseOrderSupplierID": 2,
            "PurchaseOrderAddress": "One Microsoft Way, Redmond, WA 98052-7329, United States",
            "PurchaseOrderPickupAddress": "221b Baker St. Marylebone, London, W1 221B, United Kingdom",
            "PurchaseOrderContactPerson": "Puneet Dhal",
            "PurchaseOrderInventoryLocationID": 2,
            "PurchaseOrderCustomFlag1": false,
            "PurchaseOrderCustomFlag2": false,
            "PurchaseOrderCustomFlag3": false,
            "PurchaseOrderCustomFlag4": false,
            "PurchaseOrderCustomFlag5": false,
            "PurchaseOrderCustomFlag6": false,
            "PurchaseOrderCustomFlag7": false,
            "PurchaseOrderCustomFlag8": false,
            "PurchaseOrderCustomFlag9": false,
            "PurchaseOrderCustomFlag10": false,
            "PurchaseOrderComments": "",
            "PurchaseOrderTags": "",
            "PurchaseOrderPaymentTermsEnumeration": "None",
            "PurchaseOrderTotalQuantity": 35,
            "PurchaseOrderAmountSubtotalWithoutTaxAndDiscount": 4192,
            "PurchaseOrderAmountTotalDiscount": 0,
            "PurchaseOrderAmountTotalTax": 0,
            "PurchaseOrderAmountGrandTotal": 4192,
            "PurchaseOrderDetails": [
                {
                    "PurchaseOrderRowDetailID": 163,
                    "PurchaseOrderRowProductID": 6,
                    "PurchaseOrderRowProductSKU": "PRODUCT_6",
                    "PurchaseOrderRowProductDescription": "This is the description of Product 6. Product description appears in order forms and invoices. ",
                    "PurchaseOrderRowQuantity": 12,
                    "PurchaseOrderRowReceivedQuantity": 0,
                    "PurchaseOrderRowInvoicedQuantity": 0,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 35,
                    "PurchaseOrderRowTaxID": 0,
                    "PurchaseOrderTotalTaxAmount": 0,
                    "PurchaseOrderRowDiscountID": 0,
                    "PurchaseOrderRowTotalDiscountAmount": 0,
                    "PurchaseOrderRowTotalAmount": 420,
                    "PurchaseOrderRowSerialNumbers": [],
                    "PurchaseOrderRowBatchNumbers": [],
                    "PurchaseOrderRowRemarks": "",
                    "PurchaseOrderRowExpectedReceivingDateEarliest": "/Date(-62135596800000-0000)/",
                    "PurchaseOrderRowExpectedReceivingDateLatest": "/Date(-62135596800000-0000)/"
                },
                {
                    "PurchaseOrderRowDetailID": 164,
                    "PurchaseOrderRowProductID": 8,
                    "PurchaseOrderRowProductSKU": "PRODUCT_8",
                    "PurchaseOrderRowProductDescription": "This is the description of Product 8. Product description appears in order forms and invoices. ",
                    "PurchaseOrderRowQuantity": 8,
                    "PurchaseOrderRowReceivedQuantity": 0,
                    "PurchaseOrderRowInvoicedQuantity": 0,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 164,
                    "PurchaseOrderRowTaxID": 0,
                    "PurchaseOrderTotalTaxAmount": 0,
                    "PurchaseOrderRowDiscountID": 0,
                    "PurchaseOrderRowTotalDiscountAmount": 0,
                    "PurchaseOrderRowTotalAmount": 1312,
                    "PurchaseOrderRowSerialNumbers": [],
                    "PurchaseOrderRowBatchNumbers": [],
                    "PurchaseOrderRowRemarks": "",
                    "PurchaseOrderRowExpectedReceivingDateEarliest": "/Date(-62135596800000-0000)/",
                    "PurchaseOrderRowExpectedReceivingDateLatest": "/Date(-62135596800000-0000)/"
                },
                {
                    "PurchaseOrderRowDetailID": 165,
                    "PurchaseOrderRowProductID": 9,
                    "PurchaseOrderRowProductSKU": "PRODUCT_9_VERSION_A",
                    "PurchaseOrderRowProductDescription": "This is the description of Product 9. Product description appears in order forms and invoices. Version A",
                    "PurchaseOrderRowQuantity": 15,
                    "PurchaseOrderRowReceivedQuantity": 0,
                    "PurchaseOrderRowInvoicedQuantity": 0,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 164,
                    "PurchaseOrderRowTaxID": 0,
                    "PurchaseOrderTotalTaxAmount": 0,
                    "PurchaseOrderRowDiscountID": 0,
                    "PurchaseOrderRowTotalDiscountAmount": 0,
                    "PurchaseOrderRowTotalAmount": 2460,
                    "PurchaseOrderRowSerialNumbers": [],
                    "PurchaseOrderRowBatchNumbers": [],
                    "PurchaseOrderRowRemarks": "",
                    "PurchaseOrderRowExpectedReceivingDateEarliest": "/Date(-62135596800000-0000)/",
                    "PurchaseOrderRowExpectedReceivingDateLatest": "/Date(-62135596800000-0000)/"
                }
            ],
            "PurchaseOrderStatus": "Verified",
            "chkReOpenOrCloseRelatedDocs": false,
            "PurchaseOrderCreationDate": "/Date(1606491656437-0000)/",
            "PurchaseOrderLastUpdatedDate": "/Date(1606491656547-0000)/",
            "PurchaseOrderExpectedReceivingDateEarliest": "/Date(-62135596800000-0000)/",
            "PurchaseOrderExpectedReceivingDateLatest": "/Date(-62135596800000-0000)/"
        },
        {
            "PurchaseOrderId": 89,
            "PurchaseOrderTypeId": 4,
            "PurchaseOrderTypeAbbreviation": "PO",
            "PurchaseOrderTypeDescription": "Purchase Order",
            "PurchaseOrderNo": "2",
            "PurchaseOrderReferenceNo": "",
            "PurchaseOrderReferenceApplication": "",
            "PurchaseOrderDate": "/Date(1606431600000-0000)/",
            "PurchaseOrderCustomOrderDate1": "/Date(-62135596800000-0000)/",
            "PurchaseOrderCustomOrderDate2": "/Date(-62135596800000-0000)/",
            "PurchaseOrderCurrencyCode": "EUR",
            "PurchaseOrderSupplierID": 1,
            "PurchaseOrderAddress": "410 Terry Ave. North Seattle, WA, 98109-5210, United States",
            "PurchaseOrderPickupAddress": "1 New Orchard Road, Armonk, New York 10504-1722, United States",
            "PurchaseOrderContactPerson": "Chris A.",
            "PurchaseOrderInventoryLocationID": 1,
            "PurchaseOrderCustomFlag1": false,
            "PurchaseOrderCustomFlag2": false,
            "PurchaseOrderCustomFlag3": false,
            "PurchaseOrderCustomFlag4": false,
            "PurchaseOrderCustomFlag5": false,
            "PurchaseOrderCustomFlag6": false,
            "PurchaseOrderCustomFlag7": false,
            "PurchaseOrderCustomFlag8": false,
            "PurchaseOrderCustomFlag9": false,
            "PurchaseOrderCustomFlag10": false,
            "PurchaseOrderComments": "",
            "PurchaseOrderTags": "",
            "PurchaseOrderPaymentTermsEnumeration": "None",
            "PurchaseOrderTotalQuantity": 16,
            "PurchaseOrderAmountSubtotalWithoutTaxAndDiscount": 2240,
            "PurchaseOrderAmountTotalDiscount": 0,
            "PurchaseOrderAmountTotalTax": 0,
            "PurchaseOrderAmountGrandTotal": 2240,
            "PurchaseOrderDetails": [
                {
                    "PurchaseOrderRowDetailID": 161,
                    "PurchaseOrderRowProductID": 2,
                    "PurchaseOrderRowProductSKU": "PRODUCT_2",
                    "PurchaseOrderRowProductDescription": "This is the description of Product 2. Product description appears in order forms and invoices. ",
                    "PurchaseOrderRowQuantity": 12,
                    "PurchaseOrderRowReceivedQuantity": 0,
                    "PurchaseOrderRowInvoicedQuantity": 0,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 170,
                    "PurchaseOrderRowTaxID": 0,
                    "PurchaseOrderTotalTaxAmount": 0,
                    "PurchaseOrderRowDiscountID": 0,
                    "PurchaseOrderRowTotalDiscountAmount": 0,
                    "PurchaseOrderRowTotalAmount": 2040,
                    "PurchaseOrderRowSerialNumbers": [],
                    "PurchaseOrderRowBatchNumbers": [],
                    "PurchaseOrderRowRemarks": "",
                    "PurchaseOrderRowExpectedReceivingDateEarliest": "/Date(-62135596800000-0000)/",
                    "PurchaseOrderRowExpectedReceivingDateLatest": "/Date(-62135596800000-0000)/"
                },
                {
                    "PurchaseOrderRowDetailID": 162,
                    "PurchaseOrderRowProductID": 6,
                    "PurchaseOrderRowProductSKU": "PRODUCT_6",
                    "PurchaseOrderRowProductDescription": "This is the description of Product 6. Product description appears in order forms and invoices. ",
                    "PurchaseOrderRowQuantity": 4,
                    "PurchaseOrderRowReceivedQuantity": 0,
                    "PurchaseOrderRowInvoicedQuantity": 0,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 50,
                    "PurchaseOrderRowTaxID": 0,
                    "PurchaseOrderTotalTaxAmount": 0,
                    "PurchaseOrderRowDiscountID": 0,
                    "PurchaseOrderRowTotalDiscountAmount": 0,
                    "PurchaseOrderRowTotalAmount": 200,
                    "PurchaseOrderRowSerialNumbers": [],
                    "PurchaseOrderRowBatchNumbers": [],
                    "PurchaseOrderRowRemarks": "",
                    "PurchaseOrderRowExpectedReceivingDateEarliest": "/Date(-62135596800000-0000)/",
                    "PurchaseOrderRowExpectedReceivingDateLatest": "/Date(-62135596800000-0000)/"
                }
            ],
            "PurchaseOrderStatus": "Verified",
            "chkReOpenOrCloseRelatedDocs": false,
            "PurchaseOrderCreationDate": "/Date(1606491478850-0000)/",
            "PurchaseOrderLastUpdatedDate": "/Date(1606491523467-0000)/",
            "PurchaseOrderExpectedReceivingDateEarliest": "/Date(-62135596800000-0000)/",
            "PurchaseOrderExpectedReceivingDateLatest": "/Date(-62135596800000-0000)/"
        },
        {
            "PurchaseOrderId": 88,
            "PurchaseOrderTypeId": 4,
            "PurchaseOrderTypeAbbreviation": "PO",
            "PurchaseOrderTypeDescription": "Purchase Order",
            "PurchaseOrderNo": "1",
            "PurchaseOrderReferenceNo": "",
            "PurchaseOrderReferenceApplication": "",
            "PurchaseOrderDate": "/Date(1606431600000-0000)/",
            "PurchaseOrderCustomOrderDate1": "/Date(-62135596800000-0000)/",
            "PurchaseOrderCustomOrderDate2": "/Date(-62135596800000-0000)/",
            "PurchaseOrderCurrencyCode": "EUR",
            "PurchaseOrderSupplierID": 1,
            "PurchaseOrderAddress": "410 Terry Ave. North Seattle, WA, 98109-5210, United States",
            "PurchaseOrderPickupAddress": "1 New Orchard Road, Armonk, New York 10504-1722, United States",
            "PurchaseOrderContactPerson": "Babis",
            "PurchaseOrderInventoryLocationID": 0,
            "PurchaseOrderCustomFlag1": false,
            "PurchaseOrderCustomFlag2": false,
            "PurchaseOrderCustomFlag3": false,
            "PurchaseOrderCustomFlag4": false,
            "PurchaseOrderCustomFlag5": false,
            "PurchaseOrderCustomFlag6": false,
            "PurchaseOrderCustomFlag7": false,
            "PurchaseOrderCustomFlag8": false,
            "PurchaseOrderCustomFlag9": false,
            "PurchaseOrderCustomFlag10": false,
            "PurchaseOrderComments": "",
            "PurchaseOrderTags": "",
            "PurchaseOrderPaymentTermsEnumeration": "None",
            "PurchaseOrderTotalQuantity": 45,
            "PurchaseOrderAmountSubtotalWithoutTaxAndDiscount": 1310,
            "PurchaseOrderAmountTotalDiscount": 0,
            "PurchaseOrderAmountTotalTax": 0,
            "PurchaseOrderAmountGrandTotal": 1310,
            "PurchaseOrderDetails": [
                {
                    "PurchaseOrderRowDetailID": 157,
                    "PurchaseOrderRowProductID": 1,
                    "PurchaseOrderRowProductSKU": "PRODUCT_1",
                    "PurchaseOrderRowProductDescription": "This is the description of Product 1. Product description appears in order forms and invoices. ",
                    "PurchaseOrderRowQuantity": 10,
                    "PurchaseOrderRowReceivedQuantity": 0,
                    "PurchaseOrderRowInvoicedQuantity": 0,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 100,
                    "PurchaseOrderRowTaxID": 0,
                    "PurchaseOrderTotalTaxAmount": 0,
                    "PurchaseOrderRowDiscountID": 0,
                    "PurchaseOrderRowTotalDiscountAmount": 0,
                    "PurchaseOrderRowTotalAmount": 1000,
                    "PurchaseOrderRowSerialNumbers": [],
                    "PurchaseOrderRowBatchNumbers": [],
                    "PurchaseOrderRowRemarks": "",
                    "PurchaseOrderRowExpectedReceivingDateEarliest": "/Date(-62135596800000-0000)/",
                    "PurchaseOrderRowExpectedReceivingDateLatest": "/Date(-62135596800000-0000)/"
                },
                {
                    "PurchaseOrderRowDetailID": 158,
                    "PurchaseOrderRowProductID": 2,
                    "PurchaseOrderRowProductSKU": "PRODUCT_2",
                    "PurchaseOrderRowProductDescription": "This is the description of Product 2. Product description appears in order forms and invoices. ",
                    "PurchaseOrderRowQuantity": 5,
                    "PurchaseOrderRowReceivedQuantity": 0,
                    "PurchaseOrderRowInvoicedQuantity": 0,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 50,
                    "PurchaseOrderRowTaxID": 0,
                    "PurchaseOrderTotalTaxAmount": 0,
                    "PurchaseOrderRowDiscountID": 0,
                    "PurchaseOrderRowTotalDiscountAmount": 0,
                    "PurchaseOrderRowTotalAmount": 250,
                    "PurchaseOrderRowSerialNumbers": [],
                    "PurchaseOrderRowBatchNumbers": [],
                    "PurchaseOrderRowRemarks": "",
                    "PurchaseOrderRowExpectedReceivingDateEarliest": "/Date(-62135596800000-0000)/",
                    "PurchaseOrderRowExpectedReceivingDateLatest": "/Date(-62135596800000-0000)/"
                },
                {
                    "PurchaseOrderRowDetailID": 159,
                    "PurchaseOrderRowProductID": 3,
                    "PurchaseOrderRowProductSKU": "PRODUCT_3",
                    "PurchaseOrderRowProductDescription": "This is the description of Product 3. Product description appears in order forms and invoices. ",
                    "PurchaseOrderRowQuantity": 30,
                    "PurchaseOrderRowReceivedQuantity": 0,
                    "PurchaseOrderRowInvoicedQuantity": 0,
                    "PurchaseOrderRowUnitPriceWithoutTaxOrDiscount": 2,
                    "PurchaseOrderRowTaxID": 0,
                    "PurchaseOrderTotalTaxAmount": 0,
                    "PurchaseOrderRowDiscountID": 0,
                    "PurchaseOrderRowTotalDiscountAmount": 0,
                    "PurchaseOrderRowTotalAmount": 60,
                    "PurchaseOrderRowSerialNumbers": [],
                    "PurchaseOrderRowBatchNumbers": [],
                    "PurchaseOrderRowRemarks": "",
                    "PurchaseOrderRowExpectedReceivingDateEarliest": "/Date(-62135596800000-0000)/",
                    "PurchaseOrderRowExpectedReceivingDateLatest": "/Date(-62135596800000-0000)/"
                }
            ],
            "PurchaseOrderStatus": "Pending",
            "chkReOpenOrCloseRelatedDocs": false,
            "PurchaseOrderCreationDate": "/Date(1606491468083-0000)/",
            "PurchaseOrderLastUpdatedDate": "/Date(1606491468083-0000)/",
            "PurchaseOrderExpectedReceivingDateEarliest": "/Date(-62135596800000-0000)/",
            "PurchaseOrderExpectedReceivingDateLatest": "/Date(-62135596800000-0000)/"
        }
    ],
    "ResponseStatus": {
        "ErrorCode": "0"
    }
}


function formatDate(jsonDate) {
    const timestamp = parseInt(jsonDate.replace("/Date(", "").replace(")/", ""));
    return new Date(timestamp).toLocaleDateString();
}


function displayOrders(orders) {
    const orderList = document.getElementById('order-list');

    orders.forEach(order => {
        // Create a clickable order item using oder.
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        orderItem.textContent = `Order ${order.PurchaseOrderTypeAbbreviation} - ${order.PurchaseOrderNo}`;
        orderItem.addEventListener('click', () => showOrderDetails(order));
        orderList.appendChild(orderItem);
    });
}



function showOrderDetails(order) {
    const popup = document.getElementById('order-popup');
    const overlay = document.getElementById('overlay');
    const orderDetails = document.getElementById('order-details');

    // Clear previous details
    orderDetails.innerHTML = '';

    // Populate the order details
    const detailsHtml = `
        <br><br>
        <p><strong>Address:</strong> ${order.PurchaseOrderAddress}</p
       
        <p><strong>Contact Person:</strong> ${order.PurchaseOrderContactPerson}</p>
       
         <p><strong>Status:</strong> ${order.PurchaseOrderStatus}</p>
         <p> <strong>Purchase Order Details : </strong></p>
         <div class="table-container">
        <table>
        
        <thead>
            <tr>
                <th>Product SKU</th>
                <th>Quantity Ordered</th>
                <th>Unit Price</th>
                <th>Total Amount</th>
            </tr>
        </thead>
        <tbody>
            ${order.PurchaseOrderDetails.map(product => `
                <tr>
                    <td>${product.PurchaseOrderRowProductSKU}</td>
                    <td>${product.PurchaseOrderRowQuantity}</td>
                    <td>${product.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</td>
                    <td>${product.PurchaseOrderRowTotalAmount}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>
    </div>
    `;


    
    orderDetails.innerHTML = detailsHtml;

    // Show the pop-up and overlay
    popup.style.display = 'block';
    overlay.style.display = 'block';
}



function closePopup() {
    document.getElementById('order-popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}



document.getElementById('popup-close').addEventListener('click', closePopup);

// Add event listener to overlay to close the popup when clicked outside
document.getElementById('overlay').addEventListener('click', closePopup);

// Display the orders on page load
displayOrders(jsonData.mvPurchaseOrders);
