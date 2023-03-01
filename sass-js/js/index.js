const userPassword = 1234;
let userBalance = 1000;
let secim;
let cixarishMeblegi;
let depositMeblegi;
alert("Salam Hormetli Mushteri!");



do {
    const userName = prompt("Zehmet Olmasa Adinizi Daxil Edin:");
    const userSureName = prompt("Zehmet Olmasa Soyadinizi Daxil Edin:");
    let inputPassword = Number(prompt("Zehmet Olmasa Shifreni Daxil Edin:"));

    if (userName.length >= 3 && userSureName.length > 5 && inputPassword === userPassword) {

        alert("Hormetli! " + userName + " " + userSureName + " Zehmet olmasa bir emeliyyat secin!");
        secim = Number(prompt("Balansi gormek ucun: 1  Cixarish ucun: 2  Balansi artirmaq ucun: 3  Chixis ucun: 0 "));

        switch (secim) {
            case 1:
                alert("Balansiniz:" + userBalance + " Azn");
                break;
            case 2:
                cixarishMeblegi = Number(prompt("Cixarmaq Istediyiniz Meblegi Daxil Edin:"));
                if (cixarishMeblegi <= userBalance) {

                    alert("Cixarish ugurla basha catdi" + " Balansda qalan vesait " + withdrawal(userBalance, cixarishMeblegi) + " Azn")
                }
                else {
                    alert("Balansda Kifayet Qeder Vesait Yoxdur")
                }
                break;

            case 3:
                depositMeblegi = Number(prompt("Depozit Etdiyiniz Meblegi Daxil Edin:"))
                alert("Balans Ugurla Artirildi! " + "Balans: " + deposit(userBalance, depositMeblegi) + " Azn")
                break;

            case 0:
                alert("Emeliyyat Basha Catdi! Bizi Secdiyiniz Ucun Teshekkur Edirik!")
                break;
            default:
                alert("Duzgun Secim Edin!!!")
                break;
        }
    }
    else {
        alert("Duzgun melumat daxil edin!!!");
    }


}
while (secim !== 0);



function withdrawal(a, b) {
    return a - b;
};

function deposit(a, b) {
    return a + b;
}