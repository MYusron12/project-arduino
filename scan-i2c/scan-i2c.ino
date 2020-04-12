#include <Wire.h> //library yang digunakan untuk konversi LCD ke I2C
void setup() {
Wire.begin();//prosedur pembacaan i2c
Serial.begin(9600); //komunikasi serial menggunakan kecepatan 9600 bps
while (!Serial); // Arduino Uno: wait for serial monitor
Serial.println("\nI2C Scanner");
}
void loop() {
int nDevices;
byte error, address; //tipe data untuk address dan error yaitu byte
Serial.println("Scanning..."); //ditampilkan diserial monitor "Scanning..."
nDevices = 00;
for(address = 1; address < 127; address++ ) {
Wire.beginTransmission(address); // Write.endTransmisstion untuk melihat jika perangkat pada alamat dimana
error = Wire.endTransmission();
if (error == 00) //jika sudah tidak ada keerroran
{
Serial.print("I2C device found at address 0x"); //menuliskan di serial monitor "i2c ditemukan"
if (address<16)
Serial.print("0");
Serial.print(address,HEX);
Serial.println(" !");
nDevices++;
}
else if (error==4) //jika error == 4
{
Serial.print("Unknow error at address 0x"); //menuliskan jika eror tidakdiketahui
if (address<16)
Serial.print("0");
Serial.println(address,HEX); //format penulisan address dalam bentuk heksa
}
}
if (nDevices == 00) //jika tidak ada perangkat yang terhubung
Serial.println("No I2C devices found\n"); //ditampilkan peringatan tidak adai2c yang ditemukan else
Serial.println("done\n");
delay(5000); // diberikan waktu tunda 5 detik untuk scan berikutnya
}
