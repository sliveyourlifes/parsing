function BarcodeDto() {
    let barcodeType;
    let serialNumber;
    let batchNumber;
    let productId;
    let expiryDate;
    let linkString;

    this.barcodeDto = function (type) {
        return this.barcodeType = type;
    };

    // *
    // Get barcode type.
    // *

    this.getBarcodeType = function () {
        return this.barcodeType;
    }

    this.setBarcodeType = (barcodeType) => {
        this.barcodeType = barcodeType;
    }

    // *
    // Get serial number.
    // *

    this.getSerialNumber = () => {
        return this.serialNumber;
    }

    this.setSerialNumber = (serialNumber) => {
        this.serialNumber = serialNumber;
    }

    // *
    // Get batch number.
    // *


    this.getBatchNumber = () => {
        return this.batchNumber;
    }

    this.setBatchNumber = (batchNumber) => {
        this.batchNumber = batchNumber;
    }

    // *
    // Get product ID.
    // *

    this.getProductId = () => {
        return this.productId;
    }

    this.setProductId = (productId) => {
        this.productId = productId;
    }

    // *
    // Get expiry date.
    // *

    this.getExpiryDate = () => {
        return this.expiryDate;
    }

    this.setExpiryDate = (expiryDate) => {
        this.expiryDate = expiryDate;
    }
    // *
    // Get link string.
    // *

    this.getLinkString = () => {
        return this.linkString;
    }

    this.setLinkString = (linkString) => {
        this.linkString = linkString;
    }
}

export default BarcodeDto;