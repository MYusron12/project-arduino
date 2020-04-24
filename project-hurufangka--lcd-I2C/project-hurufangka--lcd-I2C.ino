#include <Wire.h> //library untuk memulai komunikasi I2C
#include <LiquidCrystal_I2C.h> //library untuk LCD
LiquidCrystal_I2C lcd(0x27, 16, 2); //mengatur alamat untuk LCD 16x2
void setup() {
lcd.init(); //memulai LCD
lcd.backlight(); //menyalakan atau mematikan lampu backlight padaLCD
lcd.print("Muhammad Yusron"); //menampilkan data/value ke dalam lcd
}
void loop() {
}
