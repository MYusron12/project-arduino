#include <HCSR04.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);

float jarak;
HCSR04 hc(5,6);

void setup() {
  // put your setup code here, to run once:
lcd.init();
lcd.backlight();
}

void loop() {
  // put your main code here, to run repeatedly:
jarak = hc.dist();
lcd.setCursor(0,0);
lcd.print("jarak= ");
lcd.print(jarak);
lcd.print(" cm");
delay(1000);
lcd.clear();
}
