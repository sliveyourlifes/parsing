import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { isBlank, isNumeric } from './stringUtils/Utils'
import BarcodeDto from './BarcodeDto'

const barcodeTypes = {
    GS1: 'GS1',
    EAN: 'EAN',
    HIBC: 'HIBC',
    INTERNAL: 'INTERNAL',
    PROCEDURE_LIST: 'PROCEDURE_LIST',
    PZN: 'PZN'
}

function calculateCheckDigit(str) {
   
    let reversed = str.split('').reverse();
    let sumEven = reversed.filter((item, i) => i % 2 === 0).map(item => item * 3).reduce((sum, current) => sum + current, 0);
    let sumOdd = reversed.filter((item, i) => i % 2 === 1).map(item => item * 1).reduce((sum, current) => sum + current, 0);
    let checksum = sumEven + sumOdd;

    return (checksum % 10 === 0) ? 0 : 10 - checksum % 10;
}




//     **
//     *
//     Constructorfor common describing barcodes       
//     *
//     **


function EANBarcodeParser() {

    this.getAcceptedBarcodeType = function () {
        return barcodeTypes.EAN;
    }

    this.acceptsBarcode = (barcode) => {
        if (isBlank(barcode) || !isNumeric(barcode) || !checkEANLength(barcode)) {
            return false;
        }

        const expectedCheckDigit = parseInt(barcode[barcode.length - 1]);
        const actualCheckDigit = calculateCheckDigit(barcode.substring(0, barcode.length - 1));

        return expectedCheckDigit === actualCheckDigit;
    }

    this.parse = (barcode) => {
        const barcodeDto = new BarcodeDto();
        barcodeDto.barcodeDto(this.getAcceptedBarcodeType())
        barcodeDto.setProductId(barcode);
        return barcodeDto;
    }

    function checkEANLength(barcode) {
        let barcodeLengtn = barcode.length;
        return barcodeLengtn === 8 || barcodeLengtn >= 12 && barcodeLengtn <= 14;
    }



}

var c = new EANBarcodeParser();
console.log(c.acceptsBarcode('9780471117094'))
var result = c.parse('9780471117094');
console.log(result)


ReactDOM.render( < App / > , document.getElementById('root'));

