
let browser = 'chrome';

switch (browser) {
    case 'chrome':
        console.log('launch chrome');
        break;
    case 'edge':
        console.log('launch edge');
        break;
    case 'safari':
        console.log('launch safari');
        break;

    case 'brave':
        console.log('launch brave');
        break;
    case 'opera':
        console.log('launch opera');
        break;

    default:
        console.log('invalid browser...plz pass the right browser..');
        break;

}

// //switch case use cases:
// //1. cross browser
// //2. multi env: QA, DEV, STAGE, UAT, PROD
// //3. multi user (RBAC): user, admin, customer, vendor, partner
// //4. Localization: eng, spanish, arabic, chinese
// //5. uber: booking: mini, sedna, suv, luxury, 
// //6. payment: upi, cc, db, paypal, stripe, wire
// //7. api status code: 200, 400, 500, 300
// //8. OS: mac, windows, linux, cloud, server
// //9. laon type: home, car, edu
